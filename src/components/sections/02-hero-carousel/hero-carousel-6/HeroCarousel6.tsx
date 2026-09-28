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

export function HeroCarousel6({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#020202';
  const textCol = styles?.textColor || '#FFFFFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay - 5 seconds
  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  const clipVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      zIndex: 2,
    },
    center: {
      opacity: 1,
      scale: 1,
      zIndex: 2,
    },
    exit: {
      opacity: 0,
      scale: 1,
      zIndex: 1,
    }
  };

  // 2. Image blur-to-clear & Typography blur (PDF: Load/Entrance Animations)
  const blurTextVariants: any = {
    hidden: { filter: "blur(20px)", opacity: 0, y: 40 },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      filter: "blur(20px)", 
      opacity: 0, 
      y: -40,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Navbar variant="glass" />
      
      {/* Background Images with Clip-Path Reveal */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            variants={clipVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image fade in */}
            <motion.img 
              src={slides[activeIndex]?.image} 
              alt={slides[activeIndex]?.title}
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Center Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            className="flex flex-col items-center text-center max-w-4xl px-6"
          >
            <motion.span 
              variants={blurTextVariants} initial="hidden" animate="visible" exit="exit"
              className="text-sm font-mono tracking-[0.5em] uppercase text-white/70 mb-6"
            >
              {slides[activeIndex]?.subtitle}
            </motion.span>
            
            <motion.h1 
              variants={blurTextVariants} initial="hidden" animate="visible" exit="exit"
              className="text-7xl md:text-9xl lg:text-[12vw] font-black uppercase tracking-tighter leading-[0.85] mix-blend-overlay text-white"
            >
              {slides[activeIndex]?.title}
            </motion.h1>

            <motion.p 
              variants={blurTextVariants} initial="hidden" animate="visible" exit="exit"
              className="mt-8 text-base md:text-lg font-light text-white/80 max-w-lg leading-relaxed"
            >
              {slides[activeIndex]?.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation & Controls */}
      <div className="absolute bottom-10 left-0 w-full px-10 flex justify-between items-center z-30">
        
        {/* Previous Button (Icon Bounce on Hover) */}
        <motion.button 
          onClick={handlePrev}
          whileHover="hover"
          className="text-xs font-mono uppercase tracking-widest flex items-center gap-4 hover:opacity-70 transition-opacity"
        >
          <motion.span 
            variants={{ hover: { x: -5, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.4 } } } as any}
          >
            ←
          </motion.span>
          Prev
        </motion.button>

        {/* 3. Dots loader (bouncing dots) as Pagination (PDF) */}
        <div className="flex gap-4">
          {slides.map((_: any, i: number) => {
            const isActive = activeIndex === i;
            return (
              <div key={i} className="relative flex items-center justify-center w-6 h-6">
                <motion.div 
                  className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-white/20'}`}
                  animate={isActive ? { y: [0, -6, 0], scale: [1, 1.2, 1] } : { y: 0, scale: 1 }}
                  transition={isActive ? { duration: 1, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                />
              </div>
            );
          })}
        </div>

        {/* Next Button (Icon Bounce on Hover) */}
        <motion.button 
          onClick={handleNext}
          whileHover="hover"
          className="text-xs font-mono uppercase tracking-widest flex items-center gap-4 hover:opacity-70 transition-opacity"
        >
          Next
          <motion.span 
            variants={{ hover: { x: 5, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.4 } } } as any}
          >
            →
          </motion.span>
        </motion.button>

      </div>

    </section>
  );
}
