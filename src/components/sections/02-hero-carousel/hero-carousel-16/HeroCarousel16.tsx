"use client";
import React, { useState, useEffect, useRef } from 'react';
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

// 1. Text Scramble / Decode effect component (PDF: Load Animations)
function ScrambleText({ text, isActive, color }: { text: string, isActive: boolean, color: string }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    if (!isActive) return;
    
    let frame = 0;
    const maxFrames = 20;
    
    const tick = () => {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        // As frames progress, reveal actual letters from left to right
        if (frame > i * 2) {
          result += text[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayText(result);
      
      if (frame < text.length * 2) {
        frame++;
        requestAnimationFrame(tick);
      } else {
        setDisplayText(text);
      }
    };
    
    tick();
  }, [isActive, text]);

  return <span style={{ color }}>{displayText}</span>;
}

export function HeroCarousel16({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0D0D11';
  const textCol = styles?.textColor || '#00FF9D'; // Cyber green
  const accent = styles?.accentColor || '#FFFFFF';

  const [activeIndex, setActiveIndex] = useState(0);
  const slides = settings?.slides || [];
  const autoplayDuration = 6000;

  // 2. Cursor Trailing (PDF: Hover Animations)
  const [mouseTrail, setMouseTrail] = useState<{x: number, y: number, id: number}[]>([]);
  const trailIdRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    trailIdRef.current += 1;
    const newPoint = { x: e.clientX, y: e.clientY, id: trailIdRef.current };
    
    setMouseTrail(prev => {
      const trail = [...prev, newPoint];
      if (trail.length > 20) return trail.slice(trail.length - 20); // Keep last 20
      return trail;
    });
    
    // Remove point after animation
    setTimeout(() => {
      setMouseTrail(prev => prev.filter(p => p.id !== newPoint.id));
    }, 500);
  };

  useEffect(() => {
    if (!slides.length) return;
    const intervalId = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, autoplayDuration);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  // 3. Slide-in (down) transition (PDF: Transition Animations)
  const slideVariants: any = {
    enter: { y: "-100%", opacity: 0 },
    center: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      y: "100%", 
      opacity: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] overflow-hidden selection:bg-[#00FF9D] selection:text-black flex"
      style={{ backgroundColor: bg }}
    >
      <Navbar variant="glass" textColor={accent} accentColor={textCol} />

      {/* Cursor Trail Rendering */}
      {mouseTrail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-50"
          style={{ backgroundColor: textCol, left: point.x - 4, top: point.y - 4 }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Split Layout: Left Image, Right Details */}
      <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">
        
        {/* Left Side: Images */}
        <div className="w-full md:w-[60%] h-1/2 md:h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full origin-top"
            >
              <img 
                src={slides[activeIndex]?.image} 
                alt={slides[activeIndex]?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D11]/80 md:to-[#0D0D11]" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Text & Data */}
        <div className="w-full md:w-[40%] h-1/2 md:h-full relative z-10 flex flex-col justify-center px-8 md:px-16 pt-12 md:pt-0 pb-12">
          
          {/* Cyber grid background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col relative z-10">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-12" style={{ backgroundColor: textCol }} />
                <span className="text-xs font-mono uppercase tracking-[0.3em] font-bold" style={{ color: textCol }}>
                  {slides[activeIndex]?.subtitle}
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                <ScrambleText text={slides[activeIndex]?.title || ""} isActive={true} color={accent} />
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg font-mono opacity-70 max-w-sm leading-relaxed"
                style={{ color: accent }}
              >
                {slides[activeIndex]?.description}
              </motion.p>
              
              {/* Pagination Dots */}
              <div className="mt-16 flex gap-3">
                {slides.map((_: any, i: number) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveIndex(i)}
                    className="relative w-8 h-8 flex items-center justify-center border transition-colors hover:bg-white/10"
                    style={{ borderColor: activeIndex === i ? textCol : 'rgba(255,255,255,0.1)' }}
                  >
                    {activeIndex === i && (
                      <motion.div 
                        layoutId="activeDot"
                        className="w-2 h-2 rounded-none"
                        style={{ backgroundColor: textCol }}
                      />
                    )}
                  </button>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
