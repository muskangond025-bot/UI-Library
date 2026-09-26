"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Navbar } from '../../shared/Navbar';

export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner14({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#D6D3CD';
  const textCol = styles?.textColor || '#1A1A1A';
  const accentCol = styles?.accentColor || '#FF3B00';

  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects for multiple layers
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Magnetic custom cursor effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Framer motion variants
  const revealVariants = {
    hidden: { opacity: 0, y: 100, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 1.2, delay: i * 0.15, ease: [0.76, 0, 0.24, 1] as any }
    })
  };

  const imageRevealVariants = {
    hidden: { scale: 1.2, clipPath: 'inset(100% 0 0 0)' },
    visible: (i: number) => ({
      scale: 1,
      clipPath: 'inset(0% 0 0 0)',
      transition: { duration: 1.5, delay: 0.5 + i * 0.2, ease: [0.76, 0, 0.24, 1] as any }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden cursor-none selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="glass" />
      {/* 1. Custom Interactive Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-current pointer-events-none z-[100] flex items-center justify-center mix-blend-difference text-white"
        style={{ x: useTransform(springX, x => x - 16), y: useTransform(springY, y => y - 16) }}
        animate={{ scale: isHoveringImage ? 3 : 1, backgroundColor: isHoveringImage ? 'white' : 'transparent' }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {isHoveringImage && <span className="text-[4px] text-black font-bold tracking-widest uppercase">VIEW</span>}
      </motion.div>

      {/* 2. Abstract Geometric Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '10vw 10vw' }} />
      </div>

      <div className="relative z-10 w-full h-screen max-w-[1800px] mx-auto px-6 sm:px-12 py-8 flex flex-col justify-between">
        
        {/* Top Header Layer */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-between items-start z-30 mix-blend-difference text-white"
        >
          <div className="font-mono text-xs tracking-[0.3em] uppercase">{settings?.label}</div>
          <div className="flex gap-12 text-xs font-bold tracking-widest uppercase">
            <span className="hover:line-through cursor-none">MEN</span>
            <span className="hover:line-through cursor-none">WOMEN</span>
            <span className="hover:line-through cursor-none">OBJECTS</span>
          </div>
        </motion.div>

        {/* Massive Middle Content Layer */}
        <div className="relative flex-1 w-full flex items-center justify-center pointer-events-none">
          
          {/* Parallax Images (Above Text) */}
          <div className="absolute inset-0 w-full h-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 z-20">
            {settings?.images?.[0] && (
              <motion.div 
                custom={0}
                variants={imageRevealVariants}
                initial="hidden"
                animate="visible"
                style={{ y: yImage1 }}
                className="relative w-[60vw] lg:w-[40vw] max-w-[400px] aspect-[3/4] overflow-hidden pointer-events-auto"
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}
              >
                <img src={settings.images[0].src} alt={settings.images[0].alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </motion.div>
            )}

            {settings?.images?.[1] && (
              <motion.div 
                custom={1}
                variants={imageRevealVariants}
                initial="hidden"
                animate="visible"
                style={{ y: yImage2 }}
                className="relative w-[50vw] lg:w-[30vw] max-w-[300px] aspect-[4/5] overflow-hidden mt-0 lg:mt-[20vh] pointer-events-auto"
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}
              >
                <img src={settings.images[1].src} alt={settings.images[1].alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
              </motion.div>
            )}
          </div>

          {/* Huge Text Overlay (Above Images) */}
          <motion.div 
            style={{ y: yText }}
            className="absolute z-40 flex flex-col items-center justify-center pointer-events-none mix-blend-exclusion text-white"
          >
            {[settings?.titleLine1, settings?.titleLine2, settings?.titleLine3].map((line, idx) => (
              <div key={idx} className="overflow-hidden leading-[0.8] -my-[2vh]">
                <motion.h1 
                  custom={idx}
                  variants={revealVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-[18vw] lg:text-[12vw] font-black uppercase tracking-tighter whitespace-nowrap"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Metadata Layer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-between items-end pb-8 z-50 pointer-events-none"
        >
          <div className="max-w-[250px] md:max-w-[350px] pointer-events-auto bg-[#D6D3CD]/60 backdrop-blur-md p-4 -ml-4 rounded-xl">
            <p className="text-xs md:text-sm font-medium leading-relaxed" style={{ color: textCol }}>
              {settings?.description}
            </p>
            <div className="mt-6 flex items-center gap-4 cursor-none group">
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center transition-colors group-hover:bg-current group-hover:text-[#D6D3CD]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">{settings?.cta}</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 text-[10px] font-mono tracking-widest uppercase text-right">
            <span>DIR: {settings?.metadata?.director}</span>
            <span>STD: {settings?.metadata?.studio}</span>
            <span>Y/N: {settings?.metadata?.year}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
