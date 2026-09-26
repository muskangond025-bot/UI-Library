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
    // If we're on mobile, layout is usually stacked, but we will force side-by-side flex or stacked.
    // For this premium banner, let's keep it side-by-side but with a smaller minimum width.
    if (!hovered) return '50%';
    if (hovered === side) return '65%';
    return '35%';
  };

  return (
    <section className="relative w-full h-[800px] sm:h-screen min-h-[700px] flex overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      
      {/* Central Title (Absolute overlay spanning both) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center mix-blend-difference">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter uppercase text-center whitespace-nowrap text-white"
        >
          {settings.title}
        </motion.h1>
        {settings.description && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-[10px] sm:text-sm md:text-base font-mono uppercase tracking-[0.3em] font-medium text-white/90"
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
          x: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          width: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="relative h-full overflow-hidden block group cursor-pointer"
      >
        <motion.div 
          animate={{ scale: hovered === 'left' ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={settings.splitA?.image} 
            alt={settings.splitA?.label} 
            className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-12 left-6 sm:left-12 z-10 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
            {settings.splitA?.sublabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-widest text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {settings.splitA?.label}
          </h2>
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
          x: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          width: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="relative h-full overflow-hidden block group cursor-pointer border-l border-white/10"
      >
        <motion.div 
          animate={{ scale: hovered === 'right' ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={settings.splitB?.image} 
            alt={settings.splitB?.label} 
            className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-12 right-6 sm:right-12 z-10 flex flex-col items-end gap-2 text-right">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
            {settings.splitB?.sublabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase tracking-widest text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {settings.splitB?.label}
          </h2>
        </div>
      </motion.a>
    </section>
  );
}
