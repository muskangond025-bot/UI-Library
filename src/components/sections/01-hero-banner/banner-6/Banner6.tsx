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

export function Banner6({ section }: SectionProps) {
  const { settings, styles } = section;
  
  // Generating repeated strings for the endless marquee
  const topText = Array(15).fill(settings.kineticTextTop || 'KINETIC').join(" — ");
  const bottomText = Array(15).fill(settings.kineticTextBottom || 'ENERGY').join(" — ");

  return (
    <section 
      className="relative w-full h-[900px] sm:h-screen min-h-[750px] overflow-hidden flex flex-col justify-between selection:bg-white selection:text-black"
      style={{ backgroundColor: styles.backgroundColor || '#0A0A0A', color: styles.textColor || '#FFFFFF' }}
    >
      <Navbar variant="floating" />
      {/* Background Kinetic Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.08] z-0 overflow-hidden">
        
        {/* Top Marquee (Solid, moving left) */}
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="whitespace-nowrap font-serif uppercase tracking-tighter leading-none"
          style={{ fontSize: 'min(28vw, 400px)' }}
        >
          {topText}
        </motion.div>

        {/* Bottom Marquee (Outlined, moving right) */}
        <motion.div 
          animate={{ x: [-2000, 0] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          className="whitespace-nowrap font-serif uppercase tracking-tighter leading-none text-transparent mt-2 sm:mt-6"
          style={{ 
            fontSize: 'min(28vw, 400px)', 
            WebkitTextStroke: `2px ${styles.textColor || '#FFFFFF'}` 
          }}
        >
          {bottomText}
        </motion.div>
        
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto flex flex-col justify-between p-6 sm:p-12 lg:p-20">
        
        {/* Top Region: Eyebrow & Asymmetrical Image */}
        <div className="w-full flex justify-between items-start pt-4 sm:pt-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-1/2"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] opacity-80">
              {settings.eyebrow}
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-[50%] sm:w-[35%] md:w-[25%] lg:w-[20%] max-w-[300px] aspect-[3/4] relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={settings.image}
              alt="Campaign"
              className="w-full h-full object-cover filter contrast-125 grayscale-[10%]"
            />
            {/* Subtle highlight overlay */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500 pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Region: Headline & Description */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12 mt-auto pb-4 sm:pb-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-3/5"
          >
            <h1 className="text-[12vw] md:text-8xl lg:text-9xl font-serif uppercase tracking-tighter leading-[0.85] break-words hyphens-auto">
              {settings.headline}
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-2/5 flex flex-col items-start md:items-end text-left md:text-right"
          >
            <p className="text-xs sm:text-sm font-light leading-relaxed opacity-70 max-w-[280px] mb-8">
              {settings.description}
            </p>
            
            <a href={settings.primaryAction?.url} className="group flex items-center gap-4 hover:opacity-70 transition-opacity">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                {settings.primaryAction?.label}
              </span>
              <div 
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-current group-hover:bg-white group-hover:text-black transition-all duration-500"
                style={{ borderColor: styles.textColor || '#FFFFFF' }}
              >
                <span className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-lg">
                  →
                </span>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
