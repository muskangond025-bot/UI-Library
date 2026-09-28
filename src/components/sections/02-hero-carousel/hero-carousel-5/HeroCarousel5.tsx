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

export function HeroCarousel5({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#E8E8E8';
  const textCol = styles?.textColor || '#1A1A1A';

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  // 1. Percentage counter indicator (PDF: Autoplay driven by frame-loop for precision)
  useEffect(() => {
    if (isHovering || !slides.length) return;
    
    let animationFrameId: number;
    let startTime = Date.now() - (progress / 100) * 6000; // Account for current progress if resumed
    const duration = 6000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        handleNext();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex, isHovering, slides.length]);

  // 2. 3D rotation (Y axis) / Content Swap Transitions (PDF)
  const flipVariants = {
    enter: {
      rotateY: -90,
      opacity: 0,
      scale: 0.8,
      transformPerspective: 1200
    },
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformPerspective: 1200
    },
    exit: {
      rotateY: 90,
      opacity: 0,
      scale: 0.8,
      transformPerspective: 1200
    }
  };

  // 3. Line-by-line text reveal (PDF)
  const lineVariants: any = {
    hidden: { y: "120%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    exit: { y: "-120%", opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="split" />
      
      {/* 4. Ambient motion layers (PDF) */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`ambient-${activeIndex}`}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 6, ease: "linear" }}
          className="absolute inset-0 w-full h-full pointer-events-none grayscale"
        >
          <img src={slides[activeIndex]?.image} className="w-full h-full object-cover blur-3xl" alt="" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
        
        {/* Left: Typography & Lines Reveal */}
        <div className="w-full md:w-1/2 flex flex-col justify-center relative z-20 h-1/2 md:h-full">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-start gap-4">
              
              <div className="overflow-hidden">
                <motion.span 
                  custom={0} variants={lineVariants} initial="hidden" animate="visible" exit="exit"
                  className="inline-block text-xs md:text-sm font-mono tracking-[0.3em] uppercase opacity-50"
                >
                  {slides[activeIndex]?.subtitle}
                </motion.span>
              </div>

              <div className="overflow-hidden py-2">
                <motion.h1 
                  custom={1} variants={lineVariants} initial="hidden" animate="visible" exit="exit"
                  className="inline-block text-5xl md:text-7xl lg:text-[6vw] font-black uppercase tracking-tighter leading-[0.9]"
                >
                  {slides[activeIndex]?.title}
                </motion.h1>
              </div>

              <div className="overflow-hidden mt-4 max-w-sm">
                <motion.p 
                  custom={2} variants={lineVariants} initial="hidden" animate="visible" exit="exit"
                  className="inline-block text-sm md:text-lg font-light leading-relaxed opacity-70"
                >
                  {slides[activeIndex]?.description}
                </motion.p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: 3D Flip Card Interaction */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-end">
          <div 
            className="relative w-[70vw] md:w-[30vw] aspect-[3/4] cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => handleNext()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={flipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm"
              />
            </AnimatePresence>

            {/* Hover Distortion/Lift overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/10 mix-blend-overlay transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </div>
        </div>

      </div>

      {/* Massive Background Percentage Loader */}
      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none opacity-5 mix-blend-difference"
        >
          {Math.floor(progress).toString().padStart(2, '0')}%
        </motion.div>
      </div>
      
      {/* Small UI indicator */}
      <div className="absolute bottom-12 right-12 text-xs font-mono tracking-widest opacity-40 uppercase">
        AUTO_SEQ: {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

    </section>
  );
}
