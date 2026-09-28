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

// 1. Typing effect for subtitle (PDF: Load Animations)
function TypewriterText({ text, isActive }: { text: string, isActive: boolean }) {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    if (!isActive) {
      setDisplayed("");
      return;
    }
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isActive, text]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

export function HeroCarousel19({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#F5F5F5';
  const accent = styles?.accentColor || '#FF4500';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  useEffect(() => {
    if (!slides.length) return;
    const intervalId = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, autoplayDuration);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section 
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-white selection:text-black flex flex-col items-center justify-center"
      style={{ backgroundColor: bg, color: textCol }}
    >
      

      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 z-10 pointer-events-none">
        
        {/* Subtitle with typing effect */}
        <div className="absolute top-1/4 transform -translate-y-1/2 flex flex-col items-center">
          <div className="h-12 flex items-center justify-center">
            <span className="text-sm md:text-base font-mono uppercase tracking-[0.4em] font-bold" style={{ color: accent }}>
              <TypewriterText text={slides[activeIndex]?.subtitle || ""} isActive={true} />
            </span>
          </div>
        </div>

        {/* 2. Typography Mask Effect (PDF: Hero / Brand Animations) */}
        <div 
          className="relative w-full flex items-center justify-center cursor-pointer pointer-events-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setActiveIndex(prev => (prev + 1) % slides.length)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full text-center"
            >
              {/* Background Clip Text */}
              <h1 
                className="text-[15vw] md:text-[18vw] font-black uppercase tracking-tighter leading-none m-0 p-0 transition-all duration-700"
                style={{
                  backgroundImage: `url(${slides[activeIndex]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  // 3. Liquid distortion/zoom hover effect
                  filter: isHovering ? 'brightness(1.5) contrast(1.2)' : 'brightness(1) contrast(1)'
                }}
              >
                {slides[activeIndex]?.title}
              </h1>
              
              {/* Stroke outline fallback to maintain shape when image is dark */}
              <h1 
                className="absolute inset-0 text-[15vw] md:text-[18vw] font-black uppercase tracking-tighter leading-none m-0 p-0 pointer-events-none"
                style={{
                  WebkitTextStroke: `1px rgba(255,255,255,0.1)`,
                  color: 'transparent'
                }}
              >
                {slides[activeIndex]?.title}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <div className="absolute bottom-1/4 transform translate-y-1/2 max-w-lg text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl font-light opacity-80"
            >
              {slides[activeIndex]?.description}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

      {/* 4. Minimal Line Tracker Pagination (PDF: Data Visualization) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div className="flex w-full h-full">
          {slides.map((_: any, idx: number) => {
            const isActive = activeIndex === idx;
            return (
              <div key={idx} className="flex-1 relative h-full">
                {isActive && (
                  <motion.div 
                    className="absolute top-0 left-0 h-full w-full"
                    style={{ backgroundColor: accent }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
                  />
                )}
                {activeIndex > idx && (
                  <div className="absolute top-0 left-0 h-full w-full opacity-30" style={{ backgroundColor: accent }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
