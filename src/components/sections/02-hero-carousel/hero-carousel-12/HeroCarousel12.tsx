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

export function HeroCarousel12({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0A0A0B';
  const textCol = styles?.textColor || '#FFFFFF';
  const accent = styles?.accentColor || '#00F0FF';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (isHovering || !slides.length) return;
    const interval = setInterval(handleNext, autoplayDuration);
    return () => clearInterval(interval);
  }, [isHovering, slides.length]);

  // 1. Slide-in (up) transition (PDF: Transition Animations)
  const elevatorVariants: any = {
    enter: { y: "100%", opacity: 0 },
    center: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      y: "-100%", 
      opacity: 0, 
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  // 2. Line-by-line text reveal (PDF: Load Animations)
  const lineVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#00F0FF] selection:text-black flex items-center justify-center p-6 md:p-12"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="floating" />
      
      {/* Dark Ambient Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={slides[activeIndex]?.image} 
            alt="background" 
            className="w-full h-full object-cover filter blur-3xl saturate-200"
          />
        </motion.div>
      </AnimatePresence>

      {/* 3. Vertical side progress bar (PDF: Data Visualization) */}
      <div className="absolute right-0 top-0 w-1 md:w-2 h-full bg-white/5 z-50">
        <motion.div 
          key={activeIndex + (isHovering ? '-paused' : '-playing')}
          className="w-full bg-white origin-top"
          style={{ backgroundColor: accent }}
          initial={{ scaleY: isHovering ? undefined : 0 }}
          animate={{ scaleY: isHovering ? undefined : 1 }}
          transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
        />
      </div>

      {/* Main Content Floating Card */}
      <div 
        className="w-full max-w-5xl h-[85vh] md:h-[75vh] relative z-20 flex flex-col md:flex-row items-center rounded-3xl group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* 4. Outline glow (PDF: Hover Animations) */}
        {/* Glow Layer */}
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ 
            boxShadow: `0 0 40px 10px ${accent}40`,
            border: `1px solid ${accent}80` 
          }}
        />

        {/* Clip wrapper for elevator transition */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 flex flex-col-reverse md:flex-row shadow-2xl">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} className="flex flex-col gap-4">
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-px bg-white/40" />
                  <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase opacity-70">
                    {slides[activeIndex]?.subtitle}
                  </span>
                </motion.div>

                <div className="overflow-hidden py-2">
                  <motion.h1 
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] break-words"
                    style={{ color: accent }}
                  >
                    {slides[activeIndex]?.title}
                  </motion.h1>
                </div>

                <div className="mt-4">
                  {/* Fake Line split - assuming 2 lines for short description */}
                  <div className="overflow-hidden">
                    <motion.p custom={0} variants={lineVariants} initial="hidden" animate="visible" exit="hidden" className="text-base md:text-xl font-light opacity-80 leading-relaxed max-w-sm">
                      {slides[activeIndex]?.description}
                    </motion.p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-6">
              <div className="text-xs font-mono tracking-widest opacity-50">
                0{activeIndex + 1} / 0{slides.length}
              </div>
              
              {/* 5. Ripple effect (PDF: Click / Tap feedback) */}
              <motion.button 
                onClick={handleNext}
                whileTap={{ scale: 0.9 }}
                className="relative overflow-hidden w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group/btn"
              >
                {/* Ripple */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active/btn:scale-150 transition-transform duration-500 opacity-0 group-active/btn:opacity-100"
                />
                <span className="text-lg relative z-10">→</span>
              </motion.button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={elevatorVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Inner vignette for blending */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80" />
          </div>

        </div>
      </div>

    </section>
  );
}
