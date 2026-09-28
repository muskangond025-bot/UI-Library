"use client";
import React from 'react';
import { motion } from 'framer-motion';


export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner3({ section }: SectionProps) {
  const { settings, styles } = section;

  return (
    <section 
      className="relative w-full h-[900px] sm:h-screen min-h-[800px] flex items-center justify-center overflow-hidden selection:bg-black selection:text-white"
      style={{ backgroundColor: styles.backgroundColor || '#F4F4F5', color: styles.textColor || '#09090B' }}
    >
      
      {/* 
        The Architectural Frame 
        An oversized, absolute positioned container with a thin 1px border. 
      */}
      <div className="absolute inset-6 sm:inset-12 md:inset-16 lg:inset-24 flex items-center justify-center pointer-events-none z-0">
        
        {/* Frame Border Lines Animated */}
        {/* Top Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-[1px] origin-left"
          style={{ backgroundColor: styles.frameColor || '#D4D4D8' }}
        />
        {/* Bottom Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[1px] origin-right"
          style={{ backgroundColor: styles.frameColor || '#D4D4D8' }}
        />
        {/* Left Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 bottom-0 left-0 w-[1px] origin-bottom"
          style={{ backgroundColor: styles.frameColor || '#D4D4D8' }}
        />
        {/* Right Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 bottom-0 right-0 w-[1px] origin-top"
          style={{ backgroundColor: styles.frameColor || '#D4D4D8' }}
        />

        {/* Small architectural details (crosshairs at corners) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute -top-1 -left-1 w-2 h-2 border border-current" style={{ borderColor: styles.frameColor }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute -top-1 -right-1 w-2 h-2 border border-current" style={{ borderColor: styles.frameColor }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute -bottom-1 -left-1 w-2 h-2 border border-current" style={{ borderColor: styles.frameColor }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute -bottom-1 -right-1 w-2 h-2 border border-current" style={{ borderColor: styles.frameColor }} />

        {/* Inner Editorial Image (Smaller than the frame, creating matting) */}
        <motion.div 
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[85%] h-[85%] sm:w-[65%] sm:h-[80%] overflow-hidden pointer-events-auto shadow-xl"
        >
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            src={settings.image}
            alt="Editorial"
            className="w-full h-full object-cover filter contrast-[1.05] grayscale-[15%]"
          />
        </motion.div>

        {/* Floating Typography Interacting with Frame */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between p-4 sm:p-6">
          <div className="flex justify-between items-start w-full">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60"
            >
              {settings.frameTextLeft}
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60"
            >
              {settings.frameTextRight}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Massive Foreground Typography (Overlapping the frame and image) */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="transform -translate-y-16 sm:-translate-y-24 w-full flex justify-center"
        >
          <h1 className="text-[14vw] sm:text-[10vw] font-serif tracking-tighter uppercase text-center leading-[0.8] text-black whitespace-nowrap">
            {settings.titleLine1}
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="transform translate-y-16 sm:translate-y-24 sm:ml-48 w-full flex justify-center sm:justify-start"
        >
          <h1 className="text-[14vw] sm:text-[10vw] font-serif italic tracking-tighter uppercase text-center leading-[0.8] text-black whitespace-nowrap">
            {settings.titleLine2}
          </h1>
        </motion.div>
      </div>

      {/* Footer / CTA Area (Pinned to bottom of the viewport outside the frame) */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 z-20 pointer-events-none flex flex-col sm:flex-row justify-between items-end gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="max-w-[280px]"
        >
          <p className="text-[10px] sm:text-xs leading-relaxed font-medium opacity-70">
            {settings.description}
          </p>
        </motion.div>

        {settings.primaryAction && (
          <motion.a 
            href={settings.primaryAction.url}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="group pointer-events-auto flex items-center gap-4 hover:opacity-70 transition-opacity"
          >
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              {settings.primaryAction.label}
            </span>
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-current group-hover:scale-110 transition-transform duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-current group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
            </div>
          </motion.a>
        )}
      </div>

    </section>
  );
}
