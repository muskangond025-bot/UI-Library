"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function HeroCarousel7({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#121212';
  const textCol = styles?.textColor || '#FFFFFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  // Autoplay - 4 seconds
  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // 1. Mask reveal (PDF: Transition Animations - inset clip-path vertical split)
  const maskVariants: any = {
    enter: { clipPath: "inset(50% 0 50% 0)", opacity: 0.5, scale: 1.1 },
    center: { 
      clipPath: "inset(0% 0 0% 0)", 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      clipPath: "inset(50% 0 50% 0)", 
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  // 2. Flip-in (X axis) (PDF: Load Animations for Text)
  const flipTextVariants = {
    hidden: { rotateX: 90, opacity: 0, y: 20 },
    visible: (i: number) => ({
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99] // Bouncy flip ease
      }
    }),
    exit: { rotateX: -90, opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      
      {/* Background Mask Reveal Images */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeIndex}
            src={slides[activeIndex]?.image}
            alt={slides[activeIndex]?.title}
            variants={maskVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full object-cover origin-center"
          />
        </AnimatePresence>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} className="flex flex-col items-center" style={{ perspective: 1000 }}>
            
            <motion.span 
              custom={0} variants={flipTextVariants as any} initial="hidden" animate="visible" exit="exit"
              className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-white/60 mb-6 block"
            >
              {slides[activeIndex]?.subtitle}
            </motion.span>
            
            {/* 3. Color & light sweep animations on Hover (PDF: Hover Animations) */}
            <motion.div 
              custom={1} variants={flipTextVariants as any} initial="hidden" animate="visible" exit="exit"
              className="pointer-events-auto cursor-default"
            >
              <motion.h1
                className="relative text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #ffffff, #ffffff, #888888, #ffffff)',
                  backgroundSize: '200% auto',
                }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                {slides[activeIndex]?.title}
              </motion.h1>
            </motion.div>

            <motion.p 
              custom={2} variants={flipTextVariants as any} initial="hidden" animate="visible" exit="exit"
              className="mt-8 text-sm md:text-lg font-light text-white/80 max-w-md leading-relaxed"
            >
              {slides[activeIndex]?.description}
            </motion.p>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Timeline-style progress indicator (PDF: Data Visualization) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-8 z-20">
        <div className="relative w-full h-[2px] bg-white/10 flex items-center justify-between">
          
          {/* Active Progress Line */}
          <motion.div 
            className="absolute left-0 top-0 h-full bg-white origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (activeIndex + 1) / slides.length }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Timeline Nodes */}
          {slides.map((_: any, i: number) => {
            const isActive = i <= activeIndex;
            return (
              <div 
                key={i} 
                className="relative cursor-pointer group"
                onClick={() => setActiveIndex(i)}
              >
                {/* Node dot */}
                <motion.div 
                  className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${isActive ? 'bg-white border-white' : 'bg-transparent border-white/30 group-hover:border-white/60'}`}
                  animate={i === activeIndex ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ repeat: i === activeIndex ? Infinity : 0, duration: 2 }}
                />
                
                {/* Node label tooltip */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 text-[10px] font-mono tracking-widest transition-opacity duration-300 ${i === activeIndex ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-50 text-white/50'}`}>
                  VOL.{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
