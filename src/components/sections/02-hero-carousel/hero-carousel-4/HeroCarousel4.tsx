"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
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

export function HeroCarousel4({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0A0A0A';
  const textCol = styles?.textColor || '#FFFFFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringDrag, setIsHoveringDrag] = useState(false);
  const slides = settings?.slides || [];

  // Custom Cursor state (PDF: Cursor follower / Cursor scaling states)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay functionality - 5 seconds
  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // Framer motion variants for Swipe interactions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    })
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black selection:bg-white selection:text-black cursor-none"
      style={{ backgroundColor: bg, color: textCol }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Navbar variant="floating" />
      
      {/* 1. Cursor follower / Cursor scaling states (PDF) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference bg-white"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: '-50%', translateY: '-50%' }}
        animate={{ 
          scale: isHoveringDrag ? 3 : isHovering ? 1.5 : 1,
          opacity: 1
        }}
        transition={{ duration: 0.3 }}
      >
        {isHoveringDrag && (
          <span className="text-[4px] font-bold text-black uppercase tracking-widest">DRAG</span>
        )}
      </motion.div>

      {/* Main Draggable Carousel (PDF: Swipe interactions) */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        onMouseEnter={() => setIsHoveringDrag(true)}
        onMouseLeave={() => setIsHoveringDrag(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute w-[80vw] h-[70vh] md:w-[60vw] md:h-[80vh] overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -100 || velocity.x < -500) {
                handleNext();
              } else if (swipe > 100 || velocity.x > 500) {
                handlePrev();
              }
            }}
          >
            <img 
              src={slides[activeIndex]?.image} 
              alt={slides[activeIndex]?.title}
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground UI Elements */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-8 md:p-16">
        
        {/* Header */}
        <div className="flex justify-between items-center w-full uppercase tracking-[0.3em] text-xs font-mono opacity-60">
          <span>{slides[activeIndex]?.subtitle}</span>
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* 2. Text swap / text slide (PDF) */}
        <div className="flex flex-col items-center justify-center text-center mt-auto mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeIndex}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.9]"
            >
              {slides[activeIndex]?.title}
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-md text-sm md:text-base font-light text-white/70"
            >
              {slides[activeIndex]?.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 3. Circular progress indicator (PDF) */}
        <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex items-center gap-6 pointer-events-auto">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" className="transform -rotate-90">
              {/* Background track */}
              <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              {/* Animated fill (circumference = 2 * pi * 22 = ~138) */}
              {/* Resetting the key forces the animation to restart on slide change */}
              <motion.circle 
                key={activeIndex + (isHovering ? '-hover' : '-play')}
                cx="24" 
                cy="24" 
                r="22" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="138"
                initial={{ strokeDashoffset: 138 }}
                animate={{ strokeDashoffset: isHovering ? 138 : 0 }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </svg>
            <div className="absolute text-[10px] font-mono tracking-widest opacity-50">
              {String(activeIndex + 1).padStart(2, '0')}
            </div>
          </div>
          
          <div className="flex gap-4">
            <button onClick={handlePrev} className="text-xs font-mono tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">Prev</button>
            <button onClick={handleNext} className="text-xs font-mono tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">Next</button>
          </div>
        </div>

      </div>

    </section>
  );
}
