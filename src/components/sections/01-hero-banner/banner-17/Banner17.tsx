"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';


export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner17({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#E5E5E5';
  const textCol = styles?.textColor || '#121212';

  const containerRef = useRef<HTMLElement>(null);
  
  // Advanced Mouse Parallax (Multi-layer)
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  
  const springConfig = { stiffness: 40, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    return () => {};
  }, [mouseX, mouseY]);

  // Derive transformations based on screen center
  const windowHalfX = typeof window !== 'undefined' ? window.innerWidth / 2 : 1000;
  const windowHalfY = typeof window !== 'undefined' ? window.innerHeight / 2 : 500;

  // Floating Image 1 (Top Left) - Moves significantly against mouse
  const img1X = useTransform(smoothX, [0, windowHalfX * 2], [60, -60]);
  const img1Y = useTransform(smoothY, [0, windowHalfY * 2], [80, -80]);

  // Floating Image 2 (Bottom Right) - Moves with mouse but slower
  const img2X = useTransform(smoothX, [0, windowHalfX * 2], [-40, 40]);
  const img2Y = useTransform(smoothY, [0, windowHalfY * 2], [-50, 50]);

  // Floating Image 3 (Center Right) - Wildcard movement
  const img3X = useTransform(smoothX, [0, windowHalfX * 2], [30, -30]);
  const img3Y = useTransform(smoothY, [0, windowHalfY * 2], [-70, 70]);

  const [hoveredImg, setHoveredImg] = useState<number | null>(null);

  // Entrance Animations
  const loadVariant = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    visible: (custom: number) => ({
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1.5, delay: custom, ease: [0.16, 1, 0.3, 1] as any }
    })
  };

  const textVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: (custom: number) => ({
      y: "0%", 
      opacity: 1,
      transition: { duration: 1.2, delay: custom, ease: [0.85, 0, 0.15, 1] as any }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[900px] overflow-hidden selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      
      {/* 1. Infinite Slanted Kinetic Marquee (Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] rotate-[-15deg] opacity-[0.03] pointer-events-none flex flex-col gap-4 z-0">
        <motion.div 
          className="whitespace-nowrap text-[15vw] font-black uppercase tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {settings?.marquee?.repeat(5) || "FASHION • COUTURE • DIGITAL • "}
        </motion.div>
        <motion.div 
          className="whitespace-nowrap text-[15vw] font-black uppercase tracking-tighter"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {settings?.marquee?.repeat(5) || "FASHION • COUTURE • DIGITAL • "}
        </motion.div>
      </div>

      {/* 2. Floating Images (Multi-layer Parallax) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        
        {settings?.images?.[0] && (
          <motion.div 
            custom={0.2} variants={loadVariant} initial="hidden" animate="visible"
            className="absolute top-[10%] left-[10%] md:top-[15%] md:left-[20%] w-[40vw] md:w-[22vw] max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
            style={{ x: img1X, y: img1Y, zIndex: hoveredImg === 0 ? 50 : 10 }}
            onHoverStart={() => setHoveredImg(0)}
            onHoverEnd={() => setHoveredImg(null)}
            whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
          >
            <img src={settings.images[0].src} alt={settings.images[0].alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        )}

        {settings?.images?.[1] && (
          <motion.div 
            custom={0.4} variants={loadVariant} initial="hidden" animate="visible"
            className="absolute bottom-[10%] right-[10%] md:bottom-[15%] md:right-[15%] w-[45vw] md:w-[25vw] max-w-[350px] aspect-square rounded-full overflow-hidden shadow-2xl pointer-events-auto"
            style={{ x: img2X, y: img2Y, zIndex: hoveredImg === 1 ? 50 : 10 }}
            onHoverStart={() => setHoveredImg(1)}
            onHoverEnd={() => setHoveredImg(null)}
            whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
          >
            <img src={settings.images[1].src} alt={settings.images[1].alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        )}

        {settings?.images?.[2] && (
          <motion.div 
            custom={0.6} variants={loadVariant} initial="hidden" animate="visible"
            className="absolute top-[40%] right-[5%] md:top-[30%] md:right-[35%] w-[35vw] md:w-[18vw] max-w-[250px] aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl pointer-events-auto"
            style={{ x: img3X, y: img3Y, zIndex: hoveredImg === 2 ? 50 : 10 }}
            onHoverStart={() => setHoveredImg(2)}
            onHoverEnd={() => setHoveredImg(null)}
            whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
          >
            <img src={settings.images[2].src} alt={settings.images[2].alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        )}
      </div>

      {/* 3. Central Glass/Typography Lockup */}
      <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center">
          
          <div className="overflow-hidden mix-blend-exclusion text-white">
            <motion.h1 
              custom={1} variants={textVariant} initial="hidden" animate="visible"
              className="text-[15vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase"
            >
              {settings?.titleLine1}
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mix-blend-exclusion text-white">
            <motion.h1 
              custom={1.2} variants={textVariant} initial="hidden" animate="visible"
              className="text-[15vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic ml-12 md:ml-32"
            >
              {settings?.titleLine2}
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl max-w-sm text-center pointer-events-auto shadow-2xl"
          >
            <p className="text-xs md:text-sm font-medium leading-relaxed mb-6" style={{ color: textCol }}>
              {settings?.description}
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors border border-black">
              {settings?.cta}
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
