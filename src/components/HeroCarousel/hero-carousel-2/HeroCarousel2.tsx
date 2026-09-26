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

export function HeroCarousel2({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#EBE9E4';
  const textCol = styles?.textColor || '#121212';
  const accentCol = styles?.accentColor || '#FF4400';

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay every 2 seconds
  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Motion variants for Stacked Deck Effect
  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "50%" : "-50%",
      y: "10%",
      rotateZ: dir > 0 ? 10 : -10,
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: "0%",
      y: "0%",
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "50%" : "-150%",
      y: "-20%",
      rotateZ: dir < 0 ? 10 : -20,
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    })
  };

  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      {/* Background ambient text (optional structural element) */}
      <div className="absolute top-10 left-10 pointer-events-none font-mono text-xs uppercase tracking-widest opacity-40">
        VOL. {String(activeIndex + 1).padStart(2, '0')} <br/>
        [ {slides[activeIndex]?.subtitle} ]
      </div>

      {/* Main Content Layout: Split Text & Images */}
      <div 
        className="relative w-full h-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-20 z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* Left Side: Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-1/2 md:h-full relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="flex flex-col max-w-full"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.9] break-words whitespace-normal">
                {slides[activeIndex]?.title}
                <br />
                <span style={{ color: accentCol }}>
                  {slides[activeIndex]?.titleHighlight}
                </span>
              </h1>
              
              <div className="mt-8 flex items-start gap-6 max-w-sm">
                <div className="w-8 h-[2px] mt-2 bg-current" />
                <p className="text-sm md:text-base font-medium leading-relaxed opacity-80">
                  {slides[activeIndex]?.description}
                </p>
              </div>

              <motion.button 
                className="mt-10 self-start border border-current rounded-full px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Stacked Deck Images */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-end relative perspective-[1200px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute w-[70vw] md:w-[35vw] aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-2xl origin-bottom-left cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50 || velocity.x < -500) {
                  handleNext();
                } else if (swipe > 50 || velocity.x > 500) {
                  handlePrev();
                }
              }}
            >
              <img 
                src={slides[activeIndex]?.image} 
                alt={slides[activeIndex]?.title} 
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Modern Circular Controls (Bottom Left) */}
      <div className="absolute bottom-10 left-10 md:left-20 flex items-center gap-6 z-30">
        <div className="flex gap-2">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            ←
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            →
          </button>
        </div>
        
        {/* Dash Indicators with animated progress */}
        <div className="flex gap-2">
          {slides.map((_: any, i: number) => (
            <div 
              key={i} 
              className={`h-[4px] rounded-full overflow-hidden transition-all duration-500 bg-black/20 ${activeIndex === i ? 'w-12' : 'w-4'}`}
            >
              {activeIndex === i && !isHovering && (
                <motion.div 
                  className="h-full bg-black"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              )}
              {activeIndex === i && isHovering && (
                <div className="h-full w-full bg-black" />
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
