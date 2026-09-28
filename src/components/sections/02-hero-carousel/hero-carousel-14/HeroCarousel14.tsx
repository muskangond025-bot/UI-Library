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

export function HeroCarousel14({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#E5E5E5';
  const textCol = styles?.textColor || '#000000';
  const accent = styles?.accentColor || '#FF0000';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];
  const autoplayDuration = 5000;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(handleNext, autoplayDuration);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // 1. Crossfade with blur transition (PDF: Transition Animations)
  const blurTransition = {
    enter: { opacity: 0, filter: "blur(20px)", scale: 1.05 },
    center: { 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      filter: "blur(20px)",
      scale: 0.95,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // 2. Glitch effect on Text (PDF: Hover Animations / Brand Animations)
  const glitchText = {
    initial: { x: 0, y: 0, skew: 0 },
    hover: {
      x: [0, -4, 4, -2, 2, 0],
      y: [0, 2, -2, 4, -4, 0],
      skew: [0, -5, 5, -2, 2, 0],
      transition: { duration: 0.3, repeat: Infinity, repeatType: "mirror" }
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-black selection:text-white flex flex-col"
      style={{ backgroundColor: bg, color: textCol }}
    >
      

      {/* 3. Continuous Scrolling Text / Marquee (PDF: Hero / Brand Animations) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-5 z-0 flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex font-black uppercase text-[20vw] leading-none tracking-tighter"
        >
          {/* Duplicate text to create seamless loop */}
          <span className="px-8">{slides[activeIndex]?.title}</span>
          <span className="px-8">{slides[activeIndex]?.title}</span>
          <span className="px-8">{slides[activeIndex]?.title}</span>
          <span className="px-8">{slides[activeIndex]?.title}</span>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-24 pb-12 z-10 relative">
        
        {/* Left Side: Typography and Controls */}
        <div className="w-full lg:w-5/12 flex flex-col h-full justify-center order-2 lg:order-1 mt-12 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-start">
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "2rem" }}
                exit={{ opacity: 0, width: 0 }}
                className="h-1 mb-6"
                style={{ backgroundColor: accent }}
              />
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-70"
              >
                {slides[activeIndex]?.subtitle}
              </motion.span>
              
              <motion.div
                initial="initial"
                whileHover="hover"
                className="cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.h1 
                  variants={glitchText as any}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] break-words"
                >
                  {slides[activeIndex]?.title}
                </motion.h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-base md:text-lg opacity-80 max-w-sm font-medium leading-relaxed"
              >
                {slides[activeIndex]?.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation & Progress */}
          <div className="mt-16 flex items-center gap-8">
            <div className="flex gap-4">
              <button onClick={handlePrev} className="p-3 border border-current rounded-full hover:bg-black hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={handleNext} className="p-3 border border-current rounded-full hover:bg-black hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
            
            {/* Simple Dash Progress */}
            <div className="flex gap-2">
              {slides.map((_: any, i: number) => (
                <div key={i} className="h-1 w-8 bg-black/10 rounded-full overflow-hidden">
                  {activeIndex === i && (
                    <motion.div 
                      className="h-full bg-black rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
                    />
                  )}
                  {activeIndex > i && (
                    <div className="h-full w-full bg-black/40 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Masked Image */}
        <div className="w-full lg:w-6/12 h-[50vh] lg:h-[75vh] relative order-1 lg:order-2 flex items-center justify-center">
          {/* 4. Hexagonal / Custom Clip Path Reveal (PDF: Data Visualization / Masks) */}
          <div 
            className="w-full h-full relative"
            style={{ 
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              // Fallback for older browsers
              WebkitClipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={blurTransition as any}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Inner border effect */}
            <div className="absolute inset-0 border-[12px] border-black/5 pointer-events-none" />
          </div>

          {/* Decorative floating element */}
          <motion.div 
            className="absolute -bottom-8 -left-8 w-32 h-32 border border-current rounded-full flex items-center justify-center font-mono text-xs uppercase tracking-widest hidden lg:flex bg-[#E5E5E5]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            Edition {String(activeIndex + 1).padStart(2, '0')}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
