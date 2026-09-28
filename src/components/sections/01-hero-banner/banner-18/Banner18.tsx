"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';


export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner18({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#F4F3EF';
  const textCol = styles?.textColor || '#1A1A1A';

  const containerRef = useRef<HTMLElement>(null);
  
  // Spotlight Cursor Tracking
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);
  const maskSize = useMotionValue(0); // Starts at 0 for entrance animation
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const smoothMaskSize = useSpring(maskSize, { stiffness: 40, damping: 15 });

  const clipPath = useMotionTemplate`circle(${smoothMaskSize}px at ${smoothX}px ${smoothY}px)`;

  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    // Entrance Animation: Grow the spotlight circle on load
    setTimeout(() => {
      maskSize.set(typeof window !== 'undefined' && window.innerWidth > 768 ? 350 : 200);
    }, 500);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    
    return () => {};
  }, [mouseX, mouseY, maskSize]);

  // When hovering the huge text, expand the mask massively
  useEffect(() => {
    if (isHoveringText) {
      maskSize.set(typeof window !== 'undefined' && window.innerWidth > 768 ? 600 : 350);
    } else {
      maskSize.set(typeof window !== 'undefined' && window.innerWidth > 768 ? 350 : 200);
    }
  }, [isHoveringText, maskSize]);

  // Huge Typography Component to render twice (base and masked)
  const renderTypography = (isOutline: boolean) => (
    <div 
      className="flex flex-col justify-center h-full pl-8 md:pl-24 pt-20"
      onMouseEnter={() => !isOutline && setIsHoveringText(true)}
      onMouseLeave={() => !isOutline && setIsHoveringText(false)}
    >
      {[settings?.titleLine1, settings?.titleLine2, settings?.titleLine3].map((line, idx) => (
        <motion.h1
          key={idx}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 * idx, ease: [0.76, 0, 0.24, 1] as any }}
          className={`text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase ${
            isOutline 
              ? 'text-transparent' 
              : 'text-white'
          }`}
          style={{
            WebkitTextStroke: isOutline ? `1px ${textCol}` : 'none',
          }}
        >
          {line}
        </motion.h1>
      ))}
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] overflow-hidden cursor-crosshair selection:bg-black selection:text-white"
      style={{ backgroundColor: bg }}
    >
      
      
      {/* LAYER 1: BASE (Monochrome / Outline) */}
      <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-between pb-8">
        {/* Top Nav/Metadata */}
        <div className="w-full flex justify-between px-8 py-8 text-xs font-mono tracking-widest uppercase" style={{ color: textCol }}>
          <span>{settings?.metadata?.[0]}</span>
          <div className="flex gap-12">
            <span>{settings?.metadata?.[1]}</span>
            <span>{settings?.metadata?.[2]}</span>
          </div>
        </div>

        {/* Base Typography (Outline) */}
        <div className="flex-1 w-full pointer-events-none">
          {renderTypography(true)}
        </div>

        {/* Bottom Details */}
        <div className="w-full flex justify-between items-end px-8" style={{ color: textCol }}>
          <p className="max-w-[200px] md:max-w-xs text-xs font-light leading-relaxed">
            {settings?.description}
          </p>
          <button className="border border-current rounded-full px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors pointer-events-auto">
            {settings?.cta}
          </button>
        </div>
      </div>

      {/* LAYER 2: SPOTLIGHT REVEAL (Vibrant Image & Solid Text) */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{ clipPath }}
      >
        {/* Vibrant Background Image inside mask */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${settings?.image?.src})` }}
        />
        
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top Nav/Metadata (Inverted color) */}
        <div className="absolute top-0 left-0 w-full flex justify-between px-8 py-8 text-xs font-mono tracking-widest uppercase text-white">
          <span>{settings?.metadata?.[0]}</span>
          <div className="flex gap-12">
            <span>{settings?.metadata?.[1]}</span>
            <span>{settings?.metadata?.[2]}</span>
          </div>
        </div>

        {/* Solid Typography inside mask */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pb-8">
          <div className="flex-1 w-full pointer-events-auto">
            {renderTypography(false)}
          </div>
          
          <div className="w-full flex justify-between items-end px-8 text-white">
            <p className="max-w-[200px] md:max-w-xs text-xs font-light leading-relaxed">
              {settings?.description}
            </p>
            <button className="border border-white rounded-full px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase bg-white text-black transition-colors pointer-events-none">
              {settings?.cta}
            </button>
          </div>
        </div>
        
      </motion.div>

    </section>
  );
}
