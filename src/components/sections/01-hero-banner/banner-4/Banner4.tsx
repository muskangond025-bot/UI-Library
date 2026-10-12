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

export function Banner4({ section }: SectionProps) {
  const { settings, styles } = section;
  const isDark = styles.theme !== 'light';

  return (
    <section className={`relative w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] flex items-center overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Background Image & Effects */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={settings.image}
          alt="Product Editorial"
          className="w-full h-full object-cover object-center filter contrast-110"
        />

        {/* Readability Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-black/90 via-black/55 to-transparent' : 'from-white/95 via-white/60 to-transparent'}`} />

        {/* The Light Sweep Effect */}
        <motion.div 
          animate={{ 
            x: ['-150%', '350%']
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut"
          }}
          className="absolute top-0 bottom-0 w-[60%] sm:w-[40%] bg-gradient-to-r from-transparent via-white/20 to-transparent mix-blend-overlay transform -skew-x-12 pointer-events-none"
        />
      </motion.div>

      {/* Content Area */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col justify-center pointer-events-none">
        
        <div className="max-w-xl pointer-events-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.25em] font-medium ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              {settings.eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-4"
          >
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.05] uppercase ${isDark ? 'text-white' : 'text-black'}`}>
              {settings.title}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 pr-4 max-w-lg"
          >
            <p className={`text-xs sm:text-sm leading-relaxed font-light ${isDark ? 'text-white/80' : 'text-black/80'}`}>
              {settings.description}
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {settings.primaryAction && (
              <a href={settings.primaryAction.url} className={`group relative flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 overflow-hidden border ${isDark ? 'border-white text-white' : 'border-black text-black'} transition-colors duration-300`}>
                <span className={`relative z-10 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isDark ? 'group-hover:text-black' : 'group-hover:text-white'}`}>
                  {settings.primaryAction.label}
                </span>
                <div className={`absolute inset-0 ${isDark ? 'bg-white' : 'bg-black'} transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-400 ease-[0.16,1,0.3,1]`} />
              </a>
            )}
            
            {settings.secondaryAction && (
              <a href={settings.secondaryAction.url} className={`group flex items-center justify-center px-3 py-2 transition-opacity duration-300 ${isDark ? 'text-white hover:text-white/70' : 'text-black hover:text-black/70'}`}>
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] border-b border-transparent group-hover:border-current pb-0.5 transition-all duration-300">
                  {settings.secondaryAction.label}
                </span>
              </a>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
