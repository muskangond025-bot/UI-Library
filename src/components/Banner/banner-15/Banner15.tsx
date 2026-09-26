"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '../../shared/Navbar';

export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner15({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#F4F1EA';
  const textCol = styles?.textColor || '#2A2825';
  const accentCol = styles?.accentColor || '#A39382';

  const containerRef = useRef<HTMLElement>(null);
  
  // Refined Parallax setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Elegant slow entrance variants
  const maskVariant = {
    hidden: { height: "100%" },
    visible: { 
      height: "0%", 
      transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] as any, delay: 0.2 } 
    }
  };

  const imageScaleVariant = {
    hidden: { scale: 1.15 },
    visible: { 
      scale: 1, 
      transition: { duration: 2.5, ease: [0.33, 1, 0.68, 1] as any } 
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, delay: custom, ease: [0.16, 1, 0.3, 1] as any }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[900px] h-screen overflow-hidden flex items-center justify-center selection:bg-[#2A2825] selection:text-[#F4F1EA]"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="minimal" />
      
      <div className="absolute inset-0 w-full h-full max-w-[1600px] mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between relative z-10">
        
        {/* Left Column: Soft Typography & Secondary Image */}
        <div className="w-full md:w-5/12 h-full flex flex-col justify-between pt-12 md:pt-24 z-20">
          
          <motion.div style={{ y: yText, opacity }} className="max-w-md">
            <motion.p 
              custom={0.5} variants={fadeUpVariant} initial="hidden" animate="visible"
              className="text-[10px] md:text-xs font-serif uppercase tracking-[0.3em] mb-12"
              style={{ color: accentCol }}
            >
              {settings?.eyebrow}
            </motion.p>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                custom={0.7} variants={fadeUpVariant} initial="hidden" animate="visible"
                className="text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] font-serif font-light tracking-tight capitalize"
              >
                {settings?.title?.split(' ')[0]}
              </motion.h1>
              <motion.h1 
                custom={0.8} variants={fadeUpVariant} initial="hidden" animate="visible"
                className="text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] font-serif font-light tracking-tight capitalize italic"
                style={{ color: accentCol }}
              >
                {settings?.title?.split(' ').slice(1).join(' ')}
              </motion.h1>
            </div>

            <motion.p 
              custom={1} variants={fadeUpVariant} initial="hidden" animate="visible"
              className="text-sm md:text-base font-light leading-relaxed max-w-sm text-black/60 mb-12"
            >
              {settings?.description}
            </motion.p>

            <motion.div custom={1.2} variants={fadeUpVariant} initial="hidden" animate="visible">
              <a href="#" className="group inline-flex items-center gap-4 text-xs font-serif uppercase tracking-widest relative overflow-hidden">
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-full">{settings?.cta}</span>
                <span className="absolute inset-0 z-10 transition-transform duration-300 translate-y-full group-hover:translate-y-0">{settings?.cta}</span>
                <div className="w-8 h-[1px] bg-current transition-all duration-300 group-hover:w-12 group-hover:bg-[#A39382]" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Secondary Image Bottom Left */}
          {settings?.images?.[1] && (
            <motion.div 
              style={{ y: yImage2 }}
              className="hidden md:block w-48 lg:w-64 aspect-[3/4] overflow-hidden relative"
            >
              <motion.div variants={maskVariant} initial="hidden" animate="visible" className="absolute inset-0 bg-[#F4F1EA] z-10 origin-bottom" />
              <motion.img 
                variants={imageScaleVariant} initial="hidden" animate="visible"
                src={settings.images[1].src} alt={settings.images[1].alt} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full md:w-7/12 h-[60vh] md:h-full flex items-center justify-end relative z-10 mt-12 md:mt-0">
          
          <motion.div 
            style={{ y: yImage1 }}
            className="w-full md:w-[90%] h-full max-h-[800px] overflow-hidden relative"
          >
            {/* Elegant Curtain Reveal */}
            <motion.div 
              variants={maskVariant} initial="hidden" animate="visible" 
              className="absolute inset-0 bg-[#F4F1EA] z-10 origin-top" 
            />
            
            {settings?.images?.[0] && (
              <motion.img 
                variants={imageScaleVariant} initial="hidden" animate="visible"
                src={settings.images[0].src} alt={settings.images[0].alt} 
                className="w-full h-full object-cover origin-center"
              />
            )}
          </motion.div>

        </div>

      </div>

      {/* Elegant Nav Links */}
      <motion.div 
        custom={1.5} variants={fadeUpVariant} initial="hidden" animate="visible"
        className="absolute right-12 bottom-12 hidden lg:flex flex-col gap-6 text-[10px] font-serif uppercase tracking-[0.2em]"
        style={{ color: accentCol }}
      >
        {settings?.links?.map((link: string, i: number) => (
          <a key={i} href="#" className="hover:text-[#2A2825] transition-colors relative group">
            <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity">-</span>
            {link}
          </a>
        ))}
      </motion.div>

    </section>
  );
}
