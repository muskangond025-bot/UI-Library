"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
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

export function Banner16({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#EAEAEA';
  const accentCol = styles?.accentColor || '#FF3366';

  const containerRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Cursor Trail setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Sliced Image Data
  const slices = 5;
  const sliceWidth = 100 / slices;

  // Animation variants
  const sliceVariant = {
    hidden: (i: number) => ({
      y: i % 2 === 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.2
    }),
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        delay: i * 0.15,
        ease: [0.76, 0, 0.24, 1] as any
      }
    }),
    hover: (i: number) => ({
      y: i % 2 === 0 ? "-10%" : "10%",
      scale: 1.05,
      transition: { duration: 0.8, ease: "easeOut" as any }
    })
  };

  const textVariant = {
    hidden: { clipPath: "inset(50% 0 50% 0)" },
    visible: { 
      clipPath: "inset(0% 0 0% 0)",
      transition: { duration: 1.5, delay: 1, ease: [0.85, 0, 0.15, 1] as any }
    }
  };

  const svgDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 2.5, ease: "easeInOut" as any, delay: 0.5 } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden selection:bg-[#FF3366] selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="glass" />
      
      {/* Dynamic Cursor Trail */}
      {Array.from({ length: 4 }).map((_, i) => {
        const springX = useSpring(mouseX, { stiffness: 400 - i * 80, damping: 25 + i * 5 });
        const springY = useSpring(mouseY, { stiffness: 400 - i * 80, damping: 25 + i * 5 });
        return (
          <motion.div
            key={i}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] mix-blend-exclusion"
            style={{ 
              x: useTransform(springX, x => x - (8 - i)), 
              y: useTransform(springY, y => y - (8 - i)),
              width: 16 - i * 2,
              height: 16 - i * 2,
              backgroundColor: i === 0 ? accentCol : 'white',
              opacity: 1 - i * 0.2
            }}
          />
        );
      })}

      {/* SVG Line Draw Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
        <motion.path
          d="M 0,200 C 300,100 600,800 1000,500 S 1500,200 2000,600"
          fill="transparent"
          stroke={textCol}
          strokeWidth="1"
          variants={svgDraw}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="50%" cy="50%" r="40%"
          fill="transparent"
          stroke={accentCol}
          strokeWidth="0.5"
          variants={svgDraw}
          initial="hidden"
          animate="visible"
          className="opacity-10"
        />
      </svg>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        
        {/* Sliced Image Container */}
        <motion.div 
          className="absolute inset-0 w-full h-full flex"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          {Array.from({ length: slices }).map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={sliceVariant}
              initial="hidden"
              animate={isHovering ? "hover" : "visible"}
              className="h-full relative overflow-hidden origin-center"
              style={{ width: `${sliceWidth}%` }}
            >
              <div 
                className="absolute top-0 h-full w-full filter grayscale contrast-125"
                style={{ 
                  left: `-${i * 100}%`,
                  backgroundImage: `url(${settings?.images?.[0]?.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          ))}
        </motion.div>

        {/* Center Typographic Lockup */}
        <div className="relative z-20 pointer-events-none flex flex-col items-center">
          <motion.div 
            variants={textVariant} 
            initial="hidden" 
            animate="visible"
            className="text-center"
          >
            <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-difference text-white">
              {settings?.title}
            </h1>
            <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-difference text-white ml-[10vw] italic" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
              {settings?.subtitle}
            </h1>
          </motion.div>
        </div>

      </div>

      {/* Avant-Garde Overlay Metadata */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 p-8 flex flex-col justify-between"
      >
        <div className="flex justify-between items-start w-full font-mono text-[10px] tracking-widest uppercase">
          <div className="flex flex-col gap-1">
            <span>[ SYSTEM // ACTIVE ]</span>
            <span>{new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-col gap-4 items-end">
            {settings?.stats?.map((stat: any, idx: number) => (
              <div key={idx} className="flex flex-col items-end">
                <span className="text-white/50">{stat.label}</span>
                <span className="text-lg font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-end w-full">
          <p className="max-w-xs text-xs font-light leading-relaxed text-white/70">
            {settings?.description}
          </p>
          <button className="pointer-events-auto border border-white/20 rounded-full px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors backdrop-blur-md bg-black/20">
            {settings?.cta}
          </button>
        </div>
      </motion.div>

    </section>
  );
}
