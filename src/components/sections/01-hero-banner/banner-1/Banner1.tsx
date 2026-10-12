"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner1({ section }: SectionProps) {
  const { settings, styles } = section;
  const containerRef = React.useRef(null);
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] overflow-hidden flex items-center justify-center selection:bg-black selection:text-white"
      style={{ backgroundColor: styles.backgroundColor || '#F7F5F0', color: styles.textColor || '#1A1A1A' }}
    >
      
      {/* Background massive typography (Behind Image, fades out) */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: textY1 }} className="flex justify-center w-full pt-2 sm:pt-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: [0, 0.85, 0], y: [30, 0, -15], scale: [0.95, 1, 1.03] }}
            transition={{ duration: 2.5, times: [0, 0.4, 1], ease: [0.16, 1, 0.3, 1] }}
            className="text-[9.5vw] sm:text-[8.5vw] leading-[0.75] font-serif tracking-tighter uppercase text-black select-none"
          >
            {settings.titleLine1 || "CINEMATIC"}
          </motion.h1>
        </motion.div>
        
        <motion.div style={{ y: textY2 }} className="flex justify-center w-full pb-6 sm:pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: [0, 0.85, 0], y: [-30, 0, 15], scale: [0.95, 1, 1.03] }}
            transition={{ duration: 2.5, times: [0, 0.4, 1], ease: [0.16, 1, 0.3, 1] }}
            className="text-[9.5vw] sm:text-[8.5vw] leading-[0.75] font-serif tracking-tighter uppercase text-black select-none"
          >
            {settings.titleLine2 || "EDITORIAL"}
          </motion.h1>
        </motion.div>
      </div>

      {/* Central Portrait Image */}
      <motion.div 
        initial={{ scale: 0.85, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        animate={{ scale: 1, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[75vw] sm:w-[42vw] md:w-[300px] lg:w-[340px] h-[58%] sm:h-[62%] max-h-[380px] aspect-[3/4] shadow-2xl overflow-hidden rounded-sm"
      >
        <motion.div style={{ y: imageY }} className="w-full h-full scale-105 origin-top">
          <img 
            src={settings.imagePortrait || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"} 
            alt="Editorial"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
        </motion.div>
      </motion.div>

      {/* Overlay Typography (Full Screen, mix-blend-difference) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20 mix-blend-difference text-white/95 overflow-hidden">
         <motion.h2 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 1.5 }}
           className="text-[11vw] sm:text-[10vw] md:text-[9vw] font-serif italic tracking-tighter uppercase text-center leading-[0.8] whitespace-nowrap select-none"
         >
           {settings.titleLine1}<br/>{settings.titleLine2}
         </motion.h2>
      </div>

      {/* Foreground UI Elements (Header / Footer) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        {/* Top Header Area */}
        <header className="flex justify-between items-start w-full pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.25em] font-medium"
          >
            {settings.eyebrow}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.25em] font-medium text-right"
          >
            {settings.footerText}
          </motion.div>
        </header>

        {/* Bottom Footer Area */}
        <footer className="flex flex-col sm:flex-row justify-between items-end w-full gap-4 sm:gap-6 pointer-events-auto mt-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="max-w-xs bg-[#F7F5F0]/75 backdrop-blur-md p-2.5 sm:p-0 rounded-lg sm:bg-transparent sm:backdrop-blur-none"
          >
            <p className="text-[11px] sm:text-xs leading-relaxed font-medium opacity-85 mix-blend-multiply">
              {settings.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-row sm:flex-col gap-4 sm:gap-3 bg-[#F7F5F0]/75 backdrop-blur-md p-2 sm:p-0 rounded-lg sm:bg-transparent sm:backdrop-blur-none shrink-0"
          >
            {settings.primaryAction && (
              <a href={settings.primaryAction.url} className="group flex items-center gap-3 hover:opacity-60 transition-opacity">
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">{settings.primaryAction.label}</span>
                <span className="w-6 sm:w-10 h-[1.5px] bg-current group-hover:w-14 transition-all duration-300 ease-out" />
              </a>
            )}
            {settings.secondaryAction && (
              <a href={settings.secondaryAction.url} className="group flex items-center gap-3 hover:opacity-60 transition-opacity">
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">{settings.secondaryAction.label}</span>
                <span className="w-6 sm:w-10 h-[1.5px] bg-current group-hover:w-14 transition-all duration-300 ease-out" />
              </a>
            )}
          </motion.div>
        </footer>
      </div>
    </section>
  );
}
