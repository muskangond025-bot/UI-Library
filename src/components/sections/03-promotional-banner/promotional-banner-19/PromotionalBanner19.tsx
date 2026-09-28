"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function PromotionalBanner19({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#f4f4f5';
  const textCol = styles?.textColor || '#09090b';

  // Refs and motion values for magnetic pulse
  const promoRef = useRef<HTMLDivElement>(null);
  
  // Mouse coordinates relative to the center of the promo container for translation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Hover state (0 to 1) for interpolating animations
  const hoverActive = useMotionValue(0); 

  // Smooth springs for premium, weighted feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothHover = useSpring(hoverActive, { damping: 20, stiffness: 100 });

  // Map mouse coordinates to subtle transforms for the massive discount number
  // Max movement is ~6px as requested
  const numX = useTransform(smoothX, [-300, 300], [-6, 6]);
  const numY = useTransform(smoothY, [-300, 300], [-6, 6]);
  
  // Scale max 1.025 on hover
  const numScale = useTransform(smoothHover, [0, 1], [1, 1.025]);
  // Subtle letter spacing adjustment on hover
  const numSpacing = useTransform(smoothHover, [0, 1], [0, 3]);

  // For the radial highlight, we need absolute mouse position relative to the container top-left
  const highlightX = useMotionValue(0);
  const highlightY = useMotionValue(0);
  const smoothHighlightX = useSpring(highlightX, springConfig);
  const smoothHighlightY = useSpring(highlightY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!promoRef.current) return;
    const rect = promoRef.current.getBoundingClientRect();
    
    // Relative to center (for magnetic translate)
    const x = (e.clientX - rect.left) - rect.width / 2;
    const y = (e.clientY - rect.top) - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
    
    // Relative to top-left (for background radial gradient)
    highlightX.set(e.clientX - rect.left);
    highlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => hoverActive.set(1);
  const handleMouseLeave = () => {
    hoverActive.set(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Magnetic CTA
  const btnX = useTransform(smoothX, [-300, 300], [-10, 10]);
  const btnY = useTransform(smoothY, [-300, 300], [-10, 10]);

  return (
    <section 
      className="w-full min-h-screen lg:min-h-[85vh] flex flex-col justify-center font-sans overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 h-full relative">
        
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] opacity-10" style={{ backgroundColor: textCol }} />

        {/* LEFT: Promotion Block */}
        <div 
          ref={promoRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full lg:w-[55%] flex flex-col justify-center relative py-12 z-10"
        >
          {/* Subtle Radial Pulse Background */}
          <motion.div 
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background: useMotionTemplate`radial-gradient(500px circle at ${smoothHighlightX}px ${smoothHighlightY}px, ${textCol}08, transparent 60%)`,
              opacity: smoothHover
            }}
          />

          {/* Editorial Metadata Top */}
          <div className="flex justify-between items-center mb-12 w-full border-b pb-6 opacity-30 border-current">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">{settings.campaignNumber}</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">{settings.label}</span>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-sm font-bold tracking-[0.3em] uppercase mb-8 opacity-60"
          >
            {settings.eyebrow}
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-2 opacity-90"
          >
            {settings.prefix}
          </motion.h2>
          
          {/* Magnetic Offer Number */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            style={{ 
              x: numX, 
              y: numY, 
              scale: numScale,
              letterSpacing: useMotionTemplate`${numSpacing}px`
            }}
            className="font-black leading-[0.85] tracking-tighter mb-4 origin-left mix-blend-exclusion"
          >
            <span 
              className="block text-white" 
              style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}
            >
              {settings.discount}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl font-light uppercase tracking-widest mb-12 opacity-80"
          >
            {settings.suffix}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-md opacity-60 mb-16"
          >
            {settings.description}
          </motion.p>
          
          {/* Magnetic CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ x: btnX, y: btnY }} 
            className="inline-block mt-auto origin-left"
          >
            <a 
              href={settings.ctaLink}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] transition-all overflow-hidden border"
              style={{ 
                borderColor: textCol,
                color: textCol 
              }}
            >
              {/* Premium Sweep Background */}
              <div 
                className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                style={{ backgroundColor: textCol }}
              />
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-[#f4f4f5]">
                {settings.ctaText}
                <svg 
                  className="w-4 h-4 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Editorial Image */}
        <div className="w-full lg:w-[45%] flex items-center justify-center relative z-0 h-[40vh] md:h-[60vh] lg:h-auto">
          {/* Subtle offset frame */}
          <div 
            className="absolute -inset-4 md:-inset-8 border pointer-events-none z-10 translate-x-3 translate-y-3 opacity-10"
            style={{ borderColor: textCol }} 
          />
          
          <div className="w-full h-full relative overflow-hidden bg-[#e0e0e0]">
            <motion.img 
              src={settings.image}
              alt={settings.eyebrow}
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
