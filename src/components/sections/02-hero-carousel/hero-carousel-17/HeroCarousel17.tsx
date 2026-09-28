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

export function HeroCarousel17({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#121212';
  const textCol = styles?.textColor || '#FFFFFF';
  const accent = styles?.accentColor || '#FFD700';

  const [activeIndex, setActiveIndex] = useState(0);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  useEffect(() => {
    if (!slides.length) return;
    const intervalId = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, autoplayDuration);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  // 1. Flip 3D (Page Turn) transition (PDF: Transition Animations)
  const flipVariants: any = {
    enter: { 
      rotateY: 90, 
      opacity: 0,
      scale: 0.8,
      transformPerspective: 1000
    },
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
      scale: 0.8,
      transformPerspective: 1000,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Grid reveal elements
  const gridCells = Array.from({ length: 9 });

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#FFD700] selection:text-black flex"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Dynamic Shared Navbar */}
      

      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row relative">
          
          {/* Main 3D Card Area */}
          <div className="w-full md:w-[70%] h-[60%] md:h-full relative flex items-center justify-center perspective-[2000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-[90%] md:h-[80%] rounded-xl overflow-hidden shadow-2xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img 
                  src={slides[activeIndex]?.image} 
                  alt={slides[activeIndex]?.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Inner Card Text */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="text-sm font-mono tracking-[0.2em] uppercase mb-4 block" style={{ color: accent }}>
                      {slides[activeIndex]?.subtitle}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-xl">
                      {slides[activeIndex]?.title}
                    </h1>
                    <p className="text-lg opacity-80 max-w-md drop-shadow-md">
                      {slides[activeIndex]?.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side Pagination / Info */}
          <div className="w-full md:w-[30%] h-[40%] md:h-full flex flex-col justify-end md:justify-center p-8 z-10 relative">
            <div className="flex flex-col items-start gap-12">
              
              {/* 2. Grid Reveal Pagination Indicator (PDF: Data Visualization) */}
              <div className="flex flex-col gap-6 w-full">
                {slides.map((_: any, idx: number) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="group cursor-pointer flex items-center gap-4"
                      onClick={() => setActiveIndex(idx)}
                    >
                      <div className="w-8 h-8 grid grid-cols-3 grid-rows-3 gap-[1px]">
                        {gridCells.map((_, i) => (
                          <motion.div 
                            key={i}
                            className="bg-current rounded-[1px] opacity-20"
                            animate={{
                              opacity: isActive ? 1 : 0.2,
                              scale: isActive ? 1 : 0.8
                            }}
                            transition={{
                              duration: 0.5,
                              delay: isActive ? i * 0.05 : 0 // Sequential reveal for the grid
                            }}
                            style={{ color: isActive ? accent : textCol }}
                          />
                        ))}
                      </div>
                      <span className={`text-sm font-bold uppercase tracking-widest transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                        0{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Parallax Text */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 origin-center pointer-events-none hidden md:block">
                <span className="text-[120px] font-black uppercase opacity-[0.03] whitespace-nowrap">
                  3D Flip Dimension
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
