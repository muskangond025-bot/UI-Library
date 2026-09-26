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

export function HeroCarousel3({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#FFFFFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  // Autoplay functionality - 4 seconds
  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      {/* 1. Shared-Element / Matched-Motion & Fade-in Animations (PDF) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={slides[activeIndex]?.image} 
            alt={slides[activeIndex]?.title} 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-8 md:px-16 flex flex-col justify-end pb-32">
        
        {/* 2. Word-by-word Text Reveal Animation (PDF) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-4xl"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base font-mono tracking-[0.4em] text-white/70 uppercase mb-4"
            >
              [ {slides[activeIndex]?.subtitle} ]
            </motion.p>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-black uppercase tracking-tighter leading-[0.9] flex flex-wrap gap-x-6 overflow-hidden">
              {slides[activeIndex]?.title?.split("").map((char: string, i: number) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: "0%", opacity: 1 }
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.3 + (i * 0.05) 
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-sm md:text-lg text-white/80 max-w-md leading-relaxed font-light"
            >
              {slides[activeIndex]?.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails Navigation */}
      <div 
        className="absolute bottom-10 right-8 md:right-16 z-20 flex gap-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {slides.map((slide: any, idx: number) => {
          const isActive = activeIndex === idx;
          
          return (
            <div key={slide.id} className="relative group">
              {/* 3. Progress bar animation -> Fills as steps are completed (PDF) */}
              <div className="absolute -top-3 left-0 w-full h-[2px] bg-white/20 rounded overflow-hidden">
                {isActive && !isHovering && (
                  <motion.div 
                    className="h-full bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
                {isActive && isHovering && (
                  <div className="h-full w-full bg-white" />
                )}
              </div>

              {/* 4. Click/Tap Feedback: Scale/Press-in effect & Hover: Zoom/Tilt (PDF) */}
              <motion.button
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer ${isActive ? 'w-24 md:w-32 aspect-video border-white/50' : 'w-16 md:w-20 aspect-video border-white/10 grayscale hover:grayscale-0'}`}
              >
                <motion.img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
