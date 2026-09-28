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

export function Banner5({ section }: SectionProps) {
  const { settings, styles } = section;

  return (
    <section 
      className="relative w-full min-h-[900px] flex items-center justify-center p-4 sm:p-6 md:p-8 selection:bg-black selection:text-white"
      style={{ backgroundColor: styles.backgroundColor || '#E5E3DB', color: styles.textColor || '#1A1A1A' }}
    >
      
      <div className="w-full h-full max-w-screen-2xl border border-current flex flex-col shadow-2xl">
        
        {/* Top Header / Metadata */}
        <header className="flex justify-between items-center px-4 py-3 border-b border-current text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em]">
          <span>{settings.issueNumber}</span>
          <span>{settings.date}</span>
        </header>

        {/* Masthead */}
        <div className="w-full border-b border-current flex items-center justify-center py-6 sm:py-8 lg:py-10 bg-current overflow-hidden">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[10vw] font-serif leading-[0.8] tracking-tighter uppercase text-center"
            style={{ color: styles.backgroundColor || '#E5E3DB' }}
          >
            {settings.magazineTitle}
          </motion.h1>
        </div>

        {/* Main Body Grid */}
        <div className="flex-1 flex flex-col md:flex-row">
          
          {/* Left: Editorial Index */}
          <div className="w-full md:w-1/4 lg:w-1/5 border-b md:border-b-0 md:border-r border-current flex flex-col">
            {settings.editorialIndex?.map((item: any, i: number) => (
              <motion.a 
                key={i} 
                href={item.url} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                className="group flex-1 flex flex-col justify-center min-h-[120px] md:min-h-0 border-b border-current p-6 hover:bg-current transition-colors duration-300 last:border-b-0"
              >
                <span className="text-[10px] font-mono mb-3 opacity-60 group-hover:opacity-100 group-hover:text-white transition-colors duration-300">
                  {item.number}
                </span>
                <span className="text-sm sm:text-base font-serif uppercase leading-snug tracking-wide group-hover:text-white transition-colors duration-300">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Center: Main Cover Image */}
          <div className="w-full md:w-1/2 lg:w-3/5 relative min-h-[500px] md:min-h-0 overflow-hidden group">
            <motion.div 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={settings.image}
                alt="Magazine Cover"
                className="w-full h-full object-cover grayscale-[20%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right: High-Contrast Typography & CTA */}
          <div className="w-full md:w-1/4 lg:w-1/5 border-t md:border-t-0 md:border-l border-current flex flex-col bg-current overflow-hidden">
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif italic uppercase leading-[0.9] tracking-tight mb-8 break-words hyphens-auto"
                style={{ color: styles.backgroundColor || '#E5E3DB' }}
              >
                {settings.headline}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-light opacity-80 leading-relaxed mb-16"
                style={{ color: styles.backgroundColor || '#E5E3DB' }}
              >
                {settings.subheadline}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-auto"
              >
                <a href={settings.primaryAction?.url} className="group flex items-center justify-between border-t pt-6 transition-colors duration-300" style={{ borderColor: styles.backgroundColor || '#E5E3DB' }}>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest" style={{ color: styles.backgroundColor || '#E5E3DB' }}>
                    {settings.primaryAction?.label}
                  </span>
                  <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300" style={{ color: styles.backgroundColor || '#E5E3DB' }}>
                    →
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
