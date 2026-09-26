"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function PromotionalBanner5({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#F4F4F5';
  const textCol = styles?.textColor || '#18181B';
  const accent = styles?.accentColor || '#EF4444';

  const containerRef = useRef(null);

  // Parallax calculations for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  // Rotating text badge calculation
  const rotateVal = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[90vh] overflow-hidden flex flex-col md:flex-row selection:bg-red-500 selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* 
        1. Split Screen Layout 
        PDF Specification: Distinct sections for text and media to ensure no overlap and maximum readability.
      */}

      {/* LEFT SIDE: Typography */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-[2px]" style={{ backgroundColor: accent }} />
          <span className="font-mono text-sm tracking-widest font-bold uppercase" style={{ color: accent }}>
            {settings.subtitle}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-8"
        >
          {settings.title.split(' ').map((word: string, i: number) => (
            <span key={i} className="block">{word}</span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-light opacity-70 max-w-md mb-12 leading-relaxed"
        >
          {settings.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={settings.buttonLink}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-8 font-bold text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: textCol }}
          >
            <span className="absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0" style={{ backgroundColor: accent }} />
            <span className="relative z-10 flex items-center gap-3">
              {settings.buttonText}
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </a>
        </motion.div>

      </div>

      {/* RIGHT SIDE: Parallax Image */}
      <div className="w-full md:w-[45%] h-[60vh] md:h-auto relative overflow-hidden">
        
        {/* Decorative solid block to break the rectangle */}
        <div 
          className="absolute top-0 left-0 w-32 h-full z-10 hidden md:block" 
          style={{ background: `linear-gradient(to right, ${bg}, transparent)` }} 
        />

        <motion.div 
          className="absolute w-full h-[140%] -top-[20%] left-0 will-change-transform"
          style={{ y: imageY }}
        >
          <img 
            src={settings.image} 
            alt="Promotional Fashion"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to enhance contrast if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        
      </div>

      {/* 2. Circular Rotating Badge (Moved to section level to avoid clipping) */}
      <motion.div 
        className="absolute bottom-10 left-10 md:left-[55%] md:-ml-20 md:top-1/2 md:-translate-y-1/2 w-40 h-40 z-30 flex items-center justify-center rounded-full border border-white/20 shadow-2xl mix-blend-difference text-white pointer-events-none"
        style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div 
          style={{ rotate: rotateVal }} 
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* SVG text along path */}
          <svg viewBox="0 0 100 100" className="w-full h-full origin-center animate-[spin_10s_linear_infinite]">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text fontSize="11" fontWeight="bold" letterSpacing="2" fill="currentColor">
              <textPath href="#circlePath" startOffset="0%">
                ELEVATE YOUR VISION • COLLECTION 2026 • 
              </textPath>
            </text>
          </svg>
        </motion.div>
        {/* Inner static star */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
