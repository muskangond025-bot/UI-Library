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

export function HeroCarousel9({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#F4F4F0';
  const textCol = styles?.textColor || '#1A1A1A';
  const accent = styles?.accentColor || '#FF5533';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // 1. Flip-in (Y axis) (PDF: Transition Animations)
  const flipYVariants: any = {
    enter: { rotateY: 90, opacity: 0, scale: 0.9, transformPerspective: 1000 },
    center: { 
      rotateY: 0, 
      opacity: 1, 
      scale: 1, 
      transformPerspective: 1000,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      rotateY: -90, 
      opacity: 0, 
      scale: 0.9,
      transformPerspective: 1000,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="floating" />
      
      {/* 2. Shape morphing backgrounds (PDF: Hover/Brand Animations) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          className="absolute top-1/4 -right-1/4 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full mix-blend-multiply filter blur-[100px]"
          style={{ backgroundColor: accent }}
          animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            x: [0, 100, -50, 50, 0],
            y: [0, -100, 50, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] rounded-full mix-blend-multiply filter blur-[80px]"
          style={{ backgroundColor: '#000000' }}
          animate={{
            scale: [1, 0.8, 1.2, 0.9, 1],
            x: [0, -50, 100, -100, 0],
            y: [0, 50, -100, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 md:px-16 flex flex-col md:flex-row h-full items-center justify-between">
        
        {/* Left Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 h-1/2 md:h-full pr-0 md:pr-12">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col gap-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
                className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase opacity-60"
              >
                {slides[activeIndex]?.subtitle}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-[9vw] font-black uppercase tracking-tighter leading-[0.9]"
              >
                {slides[activeIndex]?.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-base md:text-xl font-light opacity-80 max-w-md leading-relaxed"
              >
                {slides[activeIndex]?.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* 3. Pie chart reveal (PDF: Data Visualization - Progress Indicator) */}
          <div className="mt-12 flex items-center gap-6">
            <div className="relative w-10 h-10 -rotate-90">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="32" />
                <motion.circle
                  key={activeIndex + (isHovering ? '-hover' : '')}
                  cx="20" cy="20" r="8" 
                  fill="transparent" 
                  stroke={textCol} 
                  strokeWidth="16"
                  strokeDasharray="50.24" // 2 * pi * r (8)
                  initial={{ strokeDashoffset: 50.24 }}
                  animate={{ strokeDashoffset: isHovering ? 50.24 : 0 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </svg>
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
              Autoplay {isHovering ? 'Paused' : 'Active'}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-[80vh] flex items-center justify-center p-4 md:p-10 relative">
          
          <div 
            className="w-full h-full relative group cursor-pointer overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleNext}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={flipYVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* 4. Image overlay reveal & Button press (PDF: Hover Animations) */}
            <motion.div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
            >
              <motion.button 
                whileTap={{ scale: 0.9, backgroundColor: accent }}
                className="px-8 py-3 bg-white text-black text-xs font-mono uppercase tracking-widest rounded-full transition-colors"
              >
                View Collection
              </motion.button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
