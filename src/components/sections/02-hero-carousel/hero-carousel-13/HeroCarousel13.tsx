"use client";
import React, { useState, useEffect, useRef } from 'react';
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

export function HeroCarousel13({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#D6D1C4';
  const textCol = styles?.textColor || '#1A1A1A';
  const accent = styles?.accentColor || '#FF5722';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(handleNext, autoplayDuration);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // Handle custom cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // 1. Slide-in (left) transition (PDF: Transition Animations)
  const slideVariants: any = {
    enter: { x: "100%", opacity: 0, scale: 1.1 },
    center: { 
      x: "0%", 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      x: "-50%", 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#FF5722] selection:text-white flex items-center justify-center cursor-none"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      {/* Dynamic Shared Navbar */}
      <Navbar variant="minimal" textColor={textCol} accentColor={accent} />

      {/* 2. Cursor replacement (PDF: Hero / Brand Animations) */}
      <motion.div 
        className="absolute w-12 h-12 rounded-full border border-current pointer-events-none z-50 flex items-center justify-center mix-blend-difference hidden md:flex"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        style={{ color: textCol }}
      >
        <motion.div 
          className="w-1.5 h-1.5 rounded-full bg-current"
          animate={{ scale: isHovering ? 0 : 1 }}
        />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center pt-24 md:pt-0 pb-12 md:pb-0 relative z-10">
        
        {/* Left Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start h-1/2 md:h-full z-20">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-start">
              
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "3rem" }}
                exit={{ opacity: 0, width: 0 }}
                className="h-px mb-4"
                style={{ backgroundColor: textCol }}
              />
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-mono tracking-widest uppercase mb-2"
                style={{ color: accent }}
              >
                {slides[activeIndex]?.subtitle}
              </motion.span>
              
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="text-6xl sm:text-7xl md:text-[7vw] font-black uppercase tracking-tighter leading-none break-words w-full"
                >
                  {slides[activeIndex]?.title}
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-base md:text-xl opacity-70 mt-6 max-w-sm font-light leading-relaxed"
              >
                {slides[activeIndex]?.description}
              </motion.p>

            </motion.div>
          </AnimatePresence>

          {/* 3. Line chart drawing Pagination (PDF: Data Visualization) */}
          <div className="mt-12 flex gap-4 pointer-events-auto">
            {slides.map((_: any, i: number) => {
              const isActive = activeIndex === i;
              return (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative w-10 h-10 flex items-center justify-center group cursor-none"
                >
                  {/* Background Track */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                      cx="20" cy="20" r="16" 
                      fill="transparent" 
                      stroke={textCol} 
                      strokeWidth="1" 
                      className="opacity-20"
                    />
                    {/* Animated Stroke */}
                    {isActive && !isHovering && (
                      <motion.circle 
                        cx="20" cy="20" r="16" 
                        fill="transparent" 
                        stroke={accent} 
                        strokeWidth="2"
                        strokeDasharray="100"
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
                      />
                    )}
                  </svg>
                  {/* Inner Dot */}
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full transition-colors"
                    style={{ backgroundColor: isActive ? accent : textCol }}
                  />
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center p-4 md:p-8">
          <div 
            className="w-full h-full overflow-hidden relative pointer-events-auto cursor-none group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleNext}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover origin-center"
              />
            </AnimatePresence>
          </div>
        </div>

      </div>

    </section>
  );
}
