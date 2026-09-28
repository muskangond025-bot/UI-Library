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

export function HeroCarousel15({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#F4F4F4';
  const textCol = styles?.textColor || '#1A1A1A';
  const accent = styles?.accentColor || '#A4907C';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    if (isHovering || !slides.length) return;
    
    // Progress counter for the visual number counter
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / autoplayDuration) * 100, 100);
      setProgress(Math.round(pct));
      
      if (elapsed >= autoplayDuration) {
        handleNext();
        setProgress(0);
      }
    }, 50); // 50ms updates for smooth counting

    return () => clearInterval(intervalId);
  }, [activeIndex, isHovering, slides.length]);

  // 1. Scale down and fade (PDF: Transition Animations)
  const scaleDownVariants = {
    enter: { scale: 1.2, opacity: 0 },
    center: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // 2. Text Outline Drawing (PDF: Hero / Brand Animations)
  // We use SVG text to animate the stroke Dash offset.
  const title = slides[activeIndex]?.title || "";

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#1A1A1A] selection:text-[#F4F4F4] flex flex-col items-center justify-center"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="minimal" textColor={textCol} accentColor={accent} />

      {/* Main Centered Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        
        {/* Background Scaled Images */}
        <div className="absolute inset-0 w-full h-full p-8 md:p-24 overflow-hidden pointer-events-none">
          <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="sync">
              <motion.img
                key={activeIndex}
                variants={scaleDownVariants as any}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Foreground Typography */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-center">
              
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-sm font-mono tracking-widest uppercase mb-4 text-white drop-shadow-md"
              >
                {slides[activeIndex]?.subtitle}
              </motion.span>
              
              <div className="relative mb-6">
                {/* SVG Outline Text Animation */}
                <svg className="w-full max-w-[90vw]" height="150" viewBox="0 0 800 150">
                  <motion.text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    className="text-7xl md:text-9xl font-black uppercase tracking-tighter"
                    fill="transparent"
                    stroke="#FFFFFF"
                    strokeWidth="2px"
                    initial={{ strokeDasharray: 1000, strokeDashoffset: 1000, fill: "transparent" }}
                    animate={{ strokeDashoffset: 0, fill: "#FFFFFF" }}
                    transition={{ 
                      strokeDashoffset: { duration: 1.5, ease: "easeInOut" },
                      fill: { duration: 0.5, delay: 1.2, ease: "easeIn" }
                    }}
                  >
                    {title}
                  </motion.text>
                </svg>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-white/90 font-medium max-w-md drop-shadow-lg"
              >
                {slides[activeIndex]?.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Number Counter & Progress Indicator (PDF: Data Visualization) */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6 pointer-events-auto">
        <div className="flex flex-col items-end">
          <div className="text-3xl font-mono font-light tracking-tighter" style={{ color: accent }}>
            {progress}%
          </div>
          <div className="text-[9px] uppercase tracking-widest font-bold opacity-60">
            Slide {activeIndex + 1} of {slides.length}
          </div>
        </div>
        
        {/* Progress Line */}
        <div className="w-px h-16 bg-black/10 relative overflow-hidden">
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-current"
            style={{ color: accent }}
            animate={{ height: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>

    </section>
  );
}
