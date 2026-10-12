"use client";
import React, { useState } from 'react';
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

export function Banner2({ section }: SectionProps) {
  const { settings } = section;
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);

  const getWidth = (side: 'left' | 'right') => {
    if (!hovered) return '50%';
    if (hovered === side) return '62%';
    return '38%';
  };

  return (
    <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] flex overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      
      {/* Central Title (Absolute overlay spanning both) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center mix-blend-difference px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic tracking-tighter uppercase text-center whitespace-nowrap text-white select-none"
        >
          {settings.title}
        </motion.h1>
        {settings.description && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-3 sm:mt-4 text-[9px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.25em] font-medium text-white/90 select-none text-center"
          >
            {settings.description}
          </motion.p>
        )}
      </div>

      {/* Left Split */}
      <motion.a
        href={settings.splitA?.url}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        initial={{ x: '-100%' }}
        animate={{ x: 0, width: getWidth('left') }}
        transition={{ 
          x: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          width: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }}
        className="relative h-full overflow-hidden block group cursor-pointer"
      >
        <motion.div 
          animate={{ scale: hovered === 'left' ? 1.05 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={settings.splitA?.image} 
            alt={settings.splitA?.label} 
            className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-80 group-hover:opacity-45 transition-opacity duration-700" />
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-8 z-10 flex flex-col gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
            {settings.splitA?.sublabel}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-widest text-white transform translate-y-3 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
            {settings.splitA?.label}
          </h2>
          <span className="text-[9px] font-mono tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 mt-0.5">
            Discover <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.a>

      {/* Right Split */}
      <motion.a
        href={settings.splitB?.url}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        initial={{ x: '100%' }}
        animate={{ x: 0, width: getWidth('right') }}
        transition={{ 
          x: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          width: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }}
        className="relative h-full overflow-hidden block group cursor-pointer border-l border-white/10"
      >
        <motion.div 
          animate={{ scale: hovered === 'right' ? 1.05 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={settings.splitB?.image} 
            alt={settings.splitB?.label} 
            className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 opacity-80 group-hover:opacity-45 transition-opacity duration-700" />
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-5 sm:bottom-7 right-5 sm:right-8 z-10 flex flex-col items-end gap-1.5 text-right">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
            {settings.splitB?.sublabel}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-widest text-white transform translate-y-3 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
            {settings.splitB?.label}
          </h2>
          <span className="text-[9px] font-mono tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 mt-0.5">
            Discover <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.a>
    </section>
  );
}
