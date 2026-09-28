"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../../shared/Navbar';

export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner7({ section }: SectionProps) {
  const { settings, styles } = section;
  
  // Safe fallbacks
  const bg = styles?.backgroundColor || '#EEEAE3';
  const textCol = styles?.textColor || '#111111';
  const mutedCol = styles?.mutedColor || '#77736D';
  const orbitCol = styles?.orbitColor || '#B9B1A5';
  
  const titleLines = settings?.title?.split('\n') || ['FORM /', 'IN MOTION'];
  
  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 lg:px-20 selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="glass" />
      {/* Background Phase 1: Soft Reveal */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
          style={{ backgroundColor: bg }}
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-16 lg:gap-8">
        
        {/* Left Side: Vertical Edge Metadata + Main Text Block */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between">
          
          {/* Vertical Far Edge Label (Hidden on Mobile) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="hidden lg:flex flex-col items-center justify-between py-12 border-l border-current/20 pl-6 w-12"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] transform -rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
              {settings?.collectionLabel}
            </span>
            <span className="text-[10px] font-mono tracking-widest mt-auto">
              {settings?.collectionYear}
            </span>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center lg:pr-12 xl:pr-24 lg:pl-16">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 sm:mb-8"
            >
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: mutedCol }}>
                {settings?.eyebrow}
              </span>
            </motion.div>

            {/* Masked Title Reveal */}
            <div className="mb-8 sm:mb-10 space-y-2">
              {titleLines.map((line: string, index: number) => (
                <div key={index} className="overflow-hidden">
                  <motion.h1 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-serif leading-[0.9] tracking-tighter"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 sm:mb-14 max-w-[280px] sm:max-w-sm"
            >
              <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: mutedCol }}>
                {settings?.description}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {settings?.cta && (
                <a 
                  href={settings.cta.href}
                  className="group relative inline-flex items-center gap-4 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                >
                  <span className="border-b border-current pb-1">
                    {settings.cta.label}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <span className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-sm">→</span>
                  </div>
                </a>
              )}
            </motion.div>

          </div>
        </div>

        {/* Right Side: Orbital Image Composition */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative min-h-[400px] sm:min-h-[500px]">
          
          {/* Phase 2: Orbit Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-12 pointer-events-none"
          >
            {/* Primary Orbit */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 160, ease: "linear" }}
              className="absolute w-[120%] sm:w-[90%] md:w-[70%] lg:w-[110%] aspect-[4/5] rounded-[50%] border-[0.5px]"
              style={{ borderColor: orbitCol }}
            >
              {/* Phase 4: Editorial Marker */}
              <motion.div 
                className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full border"
                style={{ borderColor: textCol }}
              />
              <motion.div 
                className="absolute bottom-[15%] right-[15%] w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: textCol }}
              />
            </motion.div>
            
            {/* Secondary Orbit */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 220, ease: "linear" }}
              className="absolute w-[105%] sm:w-[75%] md:w-[60%] lg:w-[95%] aspect-[5/6] rounded-[50%] border-[0.5px] border-dashed opacity-50"
              style={{ borderColor: orbitCol }}
            />
          </motion.div>

          {/* Phase 3: Main Image Mask Reveal */}
          <div className="relative z-10 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[75%] aspect-[3/4] max-w-[460px] overflow-hidden lg:mr-8 shadow-2xl">
            <motion.div
              initial={{ clipPath: 'inset(15% 10% 15% 10%)', opacity: 0, y: 30 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              {settings?.image?.src && (
                <motion.img 
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={settings.image.src}
                  alt={settings.image.alt || "Campaign Image"}
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
              )}
            </motion.div>
          </div>
          
          {/* Phase 8: Floating Index / Label Metadata */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute top-4 right-0 lg:-right-4 text-[9px] font-mono uppercase tracking-[0.3em] flex items-center gap-2"
          >
            <span className="w-6 h-[1px] opacity-40" style={{ backgroundColor: textCol }}></span>
            {settings?.orbitLabel}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="absolute bottom-4 left-0 lg:-left-12 text-sm font-serif italic"
          >
            No. {settings?.index}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
