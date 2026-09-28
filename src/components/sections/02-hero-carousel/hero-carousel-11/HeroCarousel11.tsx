"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
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

export function HeroCarousel11({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#18181A';
  const textCol = styles?.textColor || '#F0F0F0';
  const accent = styles?.accentColor || '#FF3366';

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

  // 1. Zoom-out transitions (PDF: Transition Animations)
  const zoomVariants: any = {
    enter: { scale: 1.1, opacity: 0, filter: "brightness(2)" },
    center: { 
      scale: 1, 
      opacity: 1, 
      filter: "brightness(1)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      scale: 0.9, 
      opacity: 0, 
      filter: "brightness(0)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  // 2. Word-by-word text reveal (PDF: Load Animations)
  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
  };

  // 3. Card tilt / parallax tilt setup (PDF: Hover Animations)
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  // Map mouse position to rotation (-10deg to +10deg)
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
  // Add a slight glow moving with the mouse (PDF: Pulse / highlight animations)
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Normalize coordinates from 0 to 1
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Animate back to center
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section 
      className="relative w-full min-h-[700px] h-screen overflow-hidden selection:bg-white selection:text-black flex flex-col pt-16 md:pt-0"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="floating" />
      
      {/* 4. Horizontal progress bar (top) (PDF: Data Visualization) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div 
          key={activeIndex + (isHovering ? '-paused' : '-playing')}
          className="h-full bg-white origin-left"
          style={{ backgroundColor: accent }}
          initial={{ scaleX: isHovering ? undefined : 0 }}
          animate={{ scaleX: isHovering ? undefined : 1 }}
          transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
        />
      </div>

      <div className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 pb-12 md:pb-0">
        
        {/* Left Content (Text) */}
        <div className="w-full md:w-5/12 flex flex-col justify-center relative z-20">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="flex flex-col items-start gap-4 md:gap-6">
              
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
                className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase opacity-70"
                style={{ color: accent }}
              >
                {slides[activeIndex]?.subtitle}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-black uppercase tracking-tighter leading-none break-words w-full"
              >
                {slides[activeIndex]?.title}
              </motion.h1>

              <motion.div 
                variants={wordContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden" // Hides text instantly on exit
                className="text-base md:text-xl font-light opacity-80 leading-relaxed mt-2 max-w-sm flex flex-wrap gap-x-2"
              >
                {slides[activeIndex]?.description.split(" ").map((word: string, i: number) => (
                  <motion.span key={i} variants={wordVariants as any} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.div>

            </motion.div>
          </AnimatePresence>

          {/* Dots Pagination */}
          <div className="mt-10 flex gap-4">
            {slides.map((_: any, i: number) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className="w-8 h-8 flex items-center justify-center group"
              >
                <motion.div 
                  className="h-1 rounded-full bg-white transition-all duration-300"
                  animate={{ 
                    width: activeIndex === i ? 32 : 8,
                    opacity: activeIndex === i ? 1 : 0.2
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Content (3D Tilt Image) */}
        <div className="w-full md:w-7/12 aspect-[4/3] md:aspect-auto md:h-[75vh] flex items-center justify-center relative z-10 perspective-[1200px]">
          
          <motion.div 
            ref={cardRef}
            className="relative w-full h-full cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={zoomVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={slides[activeIndex]?.image}
                alt={slides[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </AnimatePresence>
            
            {/* Dynamic Glow Overlay for Parallax Effect */}
            <motion.div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
              style={{
                background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.8) 0%, transparent 50%)`
              }}
            />
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
