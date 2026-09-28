"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export function HeroCarousel8({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const accent = styles?.accentColor || '#00FF66';
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = settings?.slides || [];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (!isPlaying || !slides.length) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // 1. 3D scaling (grow/shrink in 3D space) (PDF: Hero Animations)
  const scale3DVariants: any = {
    enter: { scale: 2, opacity: 0, filter: "blur(20px)", zIndex: 1 },
    center: { 
      scale: 1, 
      opacity: 0.6, 
      filter: "blur(0px)",
      zIndex: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      scale: 0.5, 
      opacity: 0, 
      filter: "blur(20px)",
      zIndex: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  // 2. Typewriter effect (PDF: Load Animations)
  // Splits text into characters and staggers them
  const typewriterVariants: any = {
    hidden: { opacity: 0, display: "none" },
    visible: (i: number) => ({
      opacity: 1,
      display: "inline-block",
      transition: { delay: i * 0.03, duration: 0 } // Instant appearance per character
    })
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center font-mono selection:bg-[#00FF66] selection:text-black"
      style={{ backgroundColor: bg, color: '#FFFFFF' }}
    >
      <Navbar variant="glass" />
      
      {/* 3. Grid / line animations (PDF: Decorative Background Animations) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-[200vw] h-[200vh] -ml-[50vw] -mt-[50vh]"
          style={{
            backgroundImage: `linear-gradient(to right, ${accent} 1px, transparent 1px), linear-gradient(to bottom, ${accent} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
          animate={{ y: [0, 40], x: [0, 40] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>

      {/* Main Image with 3D Scale */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeIndex}
            src={slides[activeIndex]?.image}
            alt={slides[activeIndex]?.title}
            variants={scale3DVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full object-cover mix-blend-luminosity grayscale"
          />
        </AnimatePresence>
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} className="flex flex-col items-start gap-2">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="px-3 py-1 text-xs tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md border border-white/20 text-white"
              style={{ color: accent, borderColor: accent }}
            >
              {slides[activeIndex]?.subtitle}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-none"
            >
              {slides[activeIndex]?.title}
            </motion.h1>

            <div className="mt-6 text-sm md:text-lg max-w-md h-16 opacity-80 leading-relaxed">
              {slides[activeIndex]?.description.split("").map((char: string, index: number) => (
                <motion.span 
                  key={`${activeIndex}-${index}`}
                  custom={index}
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 ml-1 bg-white align-middle"
                style={{ backgroundColor: accent }}
              />
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-10 left-10 md:left-auto md:right-10 z-30 flex items-center gap-8">
        
        {/* Text Pagination */}
        <div className="text-xs tracking-[0.4em]">
          {String(activeIndex + 1).padStart(2, '0')} <span className="opacity-30">/ {String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* 4. Toggle/Switch + Radial Progress Indicator (PDF) */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative w-12 h-12 flex items-center justify-center group"
        >
          {/* Background Track */}
          <svg width="48" height="48" viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
            <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            
            {/* Animated Progress Ring */}
            <motion.circle 
              key={`${activeIndex}-${isPlaying ? 'play' : 'pause'}`}
              cx="24" 
              cy="24" 
              r="22" 
              stroke={accent}
              strokeWidth="2" 
              fill="none"
              strokeDasharray="138"
              initial={{ strokeDashoffset: isPlaying ? 138 : (138 - (138 * 0.5)) }} // simplified pause state visual
              animate={{ strokeDashoffset: isPlaying ? 0 : undefined }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </svg>
          
          {/* Play/Pause Icon Toggle */}
          <div className="text-[10px] tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
            {isPlaying ? '||' : '▶'}
          </div>
        </button>

      </div>

    </section>
  );
}
