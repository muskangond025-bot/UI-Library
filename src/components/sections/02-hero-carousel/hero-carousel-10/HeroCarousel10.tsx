"use client";
import React, { useState, useEffect, useMemo } from 'react';
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

export function HeroCarousel10({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0D0D15';
  const textCol = styles?.textColor || '#E2E2FF';
  const accent = styles?.accentColor || '#6E5BFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // Generate random particles (PDF: Particle systems)
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
  }, []);

  // 1. Rotate-in & Spin-in transition (PDF: Transition Animations)
  const spinVariants: any = {
    enter: { rotate: 10, scale: 1.2, opacity: 0 },
    center: { 
      rotate: 0, 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      rotate: -10, 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#6E5BFF] selection:text-white flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-12"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      
      {/* Background Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{ 
              width: p.size, height: p.size, 
              backgroundColor: accent,
              left: `${p.x}%`, top: `${p.y}%`,
              filter: 'blur(2px)'
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center relative z-10 pt-10 md:pt-0">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} className="flex flex-col items-start gap-4">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono tracking-widest uppercase origin-left"
              style={{ color: accent, backgroundColor: `${accent}15` }}
            >
              {slides[activeIndex]?.subtitle}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-black uppercase tracking-tighter leading-none break-words w-full"
            >
              {slides[activeIndex]?.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-sm md:text-lg max-w-sm opacity-70 font-light leading-relaxed mt-2 md:mt-4"
            >
              {slides[activeIndex]?.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* 3. Bar chart growth pagination (PDF: Data Visualization) */}
        <div className="mt-16 flex items-end gap-3 h-12">
          {slides.map((_: any, i: number) => {
            const isActive = activeIndex === i;
            return (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className="relative flex items-end justify-center w-6 h-full group"
              >
                <motion.div 
                  className={`w-1 rounded-t-full transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-white/20 group-hover:bg-white/50'}`}
                  animate={{ height: isActive ? "100%" : "20%" }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Image Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative z-10 p-4 md:p-8">
        <div 
          className="relative w-full h-[90%] md:w-[90%] aspect-square md:aspect-auto md:h-[90%] cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleNext}
        >
          {/* 4. Hover distortion effects (PDF: Hover Animations) */}
          <motion.div 
            className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl"
            whileHover={{ 
              skewX: -2, 
              skewY: 1, 
              scale: 0.96,
              borderRadius: "40px"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={spinVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Color & Light Sweep Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay" />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
