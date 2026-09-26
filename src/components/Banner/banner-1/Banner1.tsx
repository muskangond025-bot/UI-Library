"use client";
import React from 'react';
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

export function Banner1({ section }: SectionProps) {
  const { settings, styles } = section;
  const containerRef = React.useRef(null);
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[800px] sm:h-screen min-h-[700px] overflow-hidden flex items-center justify-center selection:bg-black selection:text-white"
      style={{ backgroundColor: styles.backgroundColor || '#F7F5F0', color: styles.textColor || '#1A1A1A' }}
    >
      <Navbar variant="glass" />
      {/* Background massive typography (Behind Image, fades out) */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: textY1 }} className="flex justify-center w-full pt-10 sm:pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: [0, 1, 0], y: [50, 0, -20], scale: [0.95, 1, 1.05] }}
            transition={{ duration: 2.5, times: [0, 0.4, 1], ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] leading-[0.75] font-serif tracking-tighter uppercase text-black"
          >
            {settings.titleLine1 || "CINEMATIC"}
          </motion.h1>
        </motion.div>
        
        <motion.div style={{ y: textY2 }} className="flex justify-center w-full pb-32 sm:pb-40">
          <motion.h1 
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: [0, 1, 0], y: [-50, 0, 20], scale: [0.95, 1, 1.05] }}
            transition={{ duration: 2.5, times: [0, 0.4, 1], ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] leading-[0.75] font-serif tracking-tighter uppercase text-black"
          >
            {settings.titleLine2 || "EDITORIAL"}
          </motion.h1>
        </motion.div>
      </div>

      {/* Central Portrait Image */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        animate={{ scale: 1, opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[85vw] sm:w-[50vw] md:w-[350px] aspect-[3/4] shadow-2xl overflow-hidden"
      >
        <motion.div style={{ y: imageY }} className="w-full h-full scale-110 origin-top">
          <img 
            src={settings.imagePortrait || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"} 
            alt="Editorial"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
        </motion.div>
      </motion.div>

      {/* Overlay Typography (Full Screen, mix-blend-difference) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20 mix-blend-difference text-white/90 overflow-hidden">
         <motion.h2 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 1.8 }}
           className="text-[20vw] sm:text-[18vw] md:text-[22vw] font-serif italic tracking-tighter uppercase text-center leading-[0.75] whitespace-nowrap"
         >
           {settings.titleLine1}<br/>{settings.titleLine2}
         </motion.h2>
      </div>

      {/* Foreground UI Elements (Header / Footer) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 sm:p-12">
        {/* Top Header Area */}
        <header className="flex justify-between items-start w-full pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] font-medium"
          >
            {settings.eyebrow}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] font-medium text-right"
          >
            {settings.footerText}
          </motion.div>
        </header>

        {/* Bottom Footer Area */}
        <footer className="flex flex-col sm:flex-row justify-between items-end w-full gap-8 pointer-events-auto mt-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-xs bg-[#F7F5F0]/60 backdrop-blur-md p-4 rounded-lg sm:bg-transparent sm:backdrop-blur-none sm:p-0"
          >
            <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-90 mix-blend-multiply">
              {settings.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col gap-5 sm:gap-6 bg-[#F7F5F0]/60 backdrop-blur-md p-4 rounded-lg sm:bg-transparent sm:backdrop-blur-none sm:p-0"
          >
            {settings.primaryAction && (
              <a href={settings.primaryAction.url} className="group flex items-center gap-4 hover:opacity-60 transition-opacity">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{settings.primaryAction.label}</span>
                <span className="w-8 sm:w-12 h-[2px] bg-current group-hover:w-16 transition-all duration-500 ease-out" />
              </a>
            )}
            {settings.secondaryAction && (
              <a href={settings.secondaryAction.url} className="group flex items-center gap-4 hover:opacity-60 transition-opacity">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{settings.secondaryAction.label}</span>
                <span className="w-8 sm:w-12 h-[2px] bg-current group-hover:w-16 transition-all duration-500 ease-out" />
              </a>
            )}
          </motion.div>
        </footer>
      </div>
    </section>
  );
}
