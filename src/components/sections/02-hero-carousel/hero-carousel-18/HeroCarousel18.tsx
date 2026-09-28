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

export function HeroCarousel18({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#FAF9F6';
  const textCol = styles?.textColor || '#0F0F0F';
  const accent = styles?.accentColor || '#FF3366';

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slides = settings?.slides || [];
  const autoplayDuration = 7000;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (!slides.length) return;
    
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / autoplayDuration) * 100, 100);
      setProgress(pct);
      
      if (elapsed >= autoplayDuration) {
        handleNext();
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [activeIndex, slides.length]);

  // 1. Morphing Shape Transition (PDF: Transition Animations)
  // We use a circular clipPath that expands from the center
  const morphVariants: any = {
    enter: { 
      clipPath: "circle(0% at 50% 50%)", 
      filter: "brightness(0.5)",
      scale: 1.1 
    },
    center: { 
      clipPath: "circle(150% at 50% 50%)", 
      filter: "brightness(1)",
      scale: 1,
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      clipPath: "circle(0% at 50% 50%)",
      filter: "brightness(0.5)",
      scale: 0.9,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#FF3366] selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="split" textColor={textCol} accentColor={accent} />

      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center">
        
        {/* Left Side: Typography */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full z-10 flex flex-col justify-center px-8 md:px-16 pt-24 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-start">
              
              {/* Splitting Screen Reveal approximation for text */}
              <motion.div className="overflow-hidden mb-4">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  className="block text-sm font-bold tracking-[0.2em] uppercase"
                  style={{ color: accent }}
                >
                  {slides[activeIndex]?.subtitle}
                </motion.span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-[6vw] font-black uppercase tracking-tighter leading-none mb-6"
              >
                {slides[activeIndex]?.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg opacity-75 max-w-sm font-medium leading-relaxed"
              >
                {slides[activeIndex]?.description}
              </motion.p>
              
              {/* 2. Radial Progress Pagination (PDF: Data Visualization) */}
              <div className="mt-16 flex gap-6 pointer-events-auto">
                {slides.map((_: any, idx: number) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button 
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="relative w-12 h-12 flex items-center justify-center group"
                    >
                      {/* Background circle */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle 
                          cx="24" cy="24" r="20" 
                          fill="none" 
                          stroke={textCol} 
                          strokeWidth="2" 
                          className="opacity-10 transition-opacity group-hover:opacity-30"
                        />
                        {/* Animated fill circle */}
                        {isActive && (
                          <motion.circle 
                            cx="24" cy="24" r="20" 
                            fill="none" 
                            stroke={accent} 
                            strokeWidth="2"
                            strokeDasharray="125.6" /* 2 * pi * r */
                            strokeDashoffset={125.6 - (125.6 * progress) / 100}
                          />
                        )}
                      </svg>
                      {/* Center dot */}
                      <div 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'scale-100' : 'scale-50 opacity-50'}`}
                        style={{ backgroundColor: isActive ? accent : textCol }}
                      />
                    </button>
                  );
                })}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Morphing Image Mask */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center p-8">
          <div className="w-full h-[90%] relative rounded-[2rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={morphVariants as any}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={slides[activeIndex]?.image} 
                  alt={slides[activeIndex]?.title}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
