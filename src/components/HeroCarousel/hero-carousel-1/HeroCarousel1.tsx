"use client";
import React, { useRef, useState, useEffect } from 'react';
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

export function HeroCarousel1({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#FFFFFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const slides = settings?.slides || [];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Motion variants for Coverflow Effect
  const slideVariants = {
    active: {
      x: "0%",
      scale: 1,
      zIndex: 10,
      opacity: 1,
      filter: "blur(0px) brightness(1)",
    },
    prev: {
      x: "-60%",
      scale: 0.8,
      zIndex: 5,
      opacity: 0.6,
      filter: "blur(5px) brightness(0.5)",
    },
    next: {
      x: "60%",
      scale: 0.8,
      zIndex: 5,
      opacity: 0.6,
      filter: "blur(5px) brightness(0.5)",
    },
    hiddenLeft: {
      x: "-100%",
      scale: 0.6,
      zIndex: 1,
      opacity: 0,
      filter: "blur(10px) brightness(0.2)",
    },
    hiddenRight: {
      x: "100%",
      scale: 0.6,
      zIndex: 1,
      opacity: 0,
      filter: "blur(10px) brightness(0.2)",
    }
  };

  const getVariant = (idx: number) => {
    if (idx === activeIndex) return "active";
    if (idx === (activeIndex - 1 + slides.length) % slides.length) return "prev";
    if (idx === (activeIndex + 1) % slides.length) return "next";
    
    // Determine which side to hide it on to ensure smooth infinite rotation
    const diff = (idx - activeIndex + slides.length) % slides.length;
    return diff > slides.length / 2 ? "hiddenLeft" : "hiddenRight";
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      {/* Background Overlay (Optional ambient noise or dark gradient) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0 pointer-events-none" />

      {/* Slider Track */}
      <div className="relative w-full max-w-[1200px] h-[60vh] flex items-center justify-center perspective-[1000px] z-10">
        
        {slides.map((slide: any, idx: number) => {
          const variant = getVariant(idx);
          const isActive = variant === "active";

          return (
            <motion.div
              key={slide.id}
              variants={slideVariants}
              initial={false}
              animate={variant}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className={`absolute w-[70vw] md:w-[45vw] lg:w-[35vw] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer ${isActive ? 'cursor-default' : ''}`}
              onClick={() => {
                if (variant === "next") handleNext();
                if (variant === "prev") handlePrev();
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover pointer-events-none"
              />
              {/* Overlay for inactive states managed by filter, but we add a subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          );
        })}
      </div>

      {/* Typography Overlay (Fixed center, morphs data based on active index) */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-end pb-20 items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex flex-col items-center px-4"
          >
            <span className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-white/60 mb-4">
              {slides[activeIndex]?.subtitle}
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              {slides[activeIndex]?.title}
            </h1>
            <p className="text-xs md:text-sm max-w-md font-light leading-relaxed text-white/70">
              {slides[activeIndex]?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Controls (Arrows & Progress) */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-30 pointer-events-auto mix-blend-difference">
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono">0{activeIndex + 1}</span>
          <div className="w-32 h-[1px] bg-white/20 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              animate={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-mono">0{slides.length}</span>
        </div>
      </div>

    </section>
  );
}
