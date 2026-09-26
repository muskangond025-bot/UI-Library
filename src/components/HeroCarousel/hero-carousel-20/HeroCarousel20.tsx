"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// 1. Magnetic Hover Button Component (PDF: Hover Animations)
function MagneticButton({ children, onClick, isActive, accent, textCol }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.5; // Strength of magnetic pull (x)
    const y = (clientY - (top + height / 2)) * 0.5; // Strength of magnetic pull (y)
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative w-12 h-12 flex items-center justify-center rounded-full border transition-colors duration-300 z-20"
      style={{ 
        borderColor: isActive ? accent : 'rgba(255,255,255,0.2)',
        backgroundColor: isActive ? accent : 'transparent'
      }}
    >
      <span style={{ color: isActive ? '#000' : textCol }} className="font-bold text-sm">
        {children}
      </span>
    </motion.button>
  );
}

export function HeroCarousel20({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0A0A0A';
  const textCol = styles?.textColor || '#FFFFFF';
  const accent = styles?.accentColor || '#00E5FF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  useEffect(() => {
    if (!slides.length) return;
    
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / autoplayDuration) * 100, 100);
      setProgress(pct);
      
      if (elapsed >= autoplayDuration) {
        setActiveIndex(prev => (prev + 1) % slides.length);
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [activeIndex, slides.length]);

  // 2. Parallax Swipe Transition (PDF: Transition Animations)
  // The entering slide comes from right slowly, exiting goes left fast.
  const parallaxVariants: any = {
    enter: { 
      x: "50%", 
      opacity: 0,
      scale: 1.1
    },
    center: { 
      x: "0%", 
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      x: "-20%", 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#00E5FF] selection:text-black flex"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="glass" textColor={textCol} accentColor={accent} />

      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={parallaxVariants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={slides[activeIndex]?.image} 
              alt={slides[activeIndex]?.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24">
        
        {/* Left Side: Text Details */}
        <div className="w-full md:w-2/3 h-1/2 md:h-full flex flex-col justify-center pt-24 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-start">
              
              {/* Sequential Fade-in (PDF: Load Animations) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="text-sm md:text-base font-mono uppercase tracking-[0.3em] font-bold" style={{ color: accent }}>
                  {slides[activeIndex]?.subtitle}
                </span>
                <div className="w-16 h-px bg-current opacity-50" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none mb-8"
              >
                {slides[activeIndex]?.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl opacity-80 max-w-md font-light leading-relaxed border-l-2 pl-6"
                style={{ borderColor: accent }}
              >
                {slides[activeIndex]?.description}
              </motion.p>
              
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Magnetic Pagination & Vertical Tracker */}
        <div className="w-full md:w-1/3 h-1/2 md:h-full flex flex-row md:flex-col items-center justify-end md:justify-center gap-12 pb-12 md:pb-0">
          
          <div className="flex flex-row md:flex-col gap-6 mr-12 md:mr-0 z-20">
            {slides.map((_: any, idx: number) => (
              <MagneticButton 
                key={idx} 
                onClick={() => setActiveIndex(idx)} 
                isActive={activeIndex === idx}
                accent={accent}
                textCol={textCol}
              >
                0{idx + 1}
              </MagneticButton>
            ))}
          </div>

          {/* 3. Vertical Scroll Tracker (PDF: Data Visualization) */}
          <div className="absolute right-8 md:right-16 top-1/4 md:top-1/3 bottom-1/4 md:bottom-1/3 w-[2px] bg-white/10 overflow-hidden hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 w-full"
              style={{ backgroundColor: accent }}
              initial={{ height: "0%" }}
              animate={{ height: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
