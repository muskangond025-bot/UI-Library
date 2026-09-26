"use client";
import React, { useRef, useEffect } from 'react';
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

export function Banner13({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#0a0a0a';
  const textCol = styles?.textColor || '#ffffff';
  const glassBg = styles?.glassBackground || 'rgba(255, 255, 255, 0.05)';
  const glassBorder = styles?.glassBorder || 'rgba(255, 255, 255, 0.15)';

  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Awwwards Style Clip Path reveal for the main image
  const imageRevealVariants = {
    hidden: { clipPath: 'polygon(50% 100%, 50% 100%, 50% 100%, 50% 100%)', scale: 1.2 },
    visible: { 
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
      scale: 1,
      transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] as any } 
    }
  };

  // Splitting text into letters for individual 3D animation
  const title = (settings?.title || "AETHEREAL") as string;
  const letters = Array.from(title);

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.8 }
    }
  };

  const letterVariants = {
    hidden: { y: "100%", rotateX: -90, opacity: 0 },
    visible: { 
      y: "0%", 
      rotateX: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const glassVariants = {
    hidden: { opacity: 0, y: 100, backdropFilter: 'blur(0px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      backdropFilter: 'blur(24px)',
      transition: { duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] overflow-hidden selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol, perspective: '1000px' }}
    >
      {/* 1. Base Image with Clip-Path Reveal */}
      <motion.div 
        variants={imageRevealVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src={settings?.image?.src || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2840&auto=format&fit=crop"} 
          alt={settings?.image?.alt || "Fashion Model"} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* 2. Custom Cursor / Spotlight (mix-blend-overlay for cool interaction) */}
      <motion.div 
        className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full pointer-events-none z-10 mix-blend-overlay hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
          x: useTransform(springX, x => x - window.innerWidth * 0.2),
          y: useTransform(springY, y => y - window.innerWidth * 0.2),
        }}
      />

      {/* 3. Kinetic Marquee Background Text (Behind Glass) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] flex z-10 opacity-30 mix-blend-overlay pointer-events-none">
        <motion.div 
          className="flex whitespace-nowrap text-[15vw] font-black tracking-tighter uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <span>{settings?.marqueeText?.repeat(4) || "FASHION • AVANT-GARDE • EDITORIAL • "}</span>
        </motion.div>
      </div>

      {/* 4. Main Glassmorphism Interface */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center p-6 md:p-12">
        <motion.div 
          variants={glassVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1200px] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-end border overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)',
            borderColor: glassBorder,
            WebkitBackdropFilter: 'blur(24px)', // For Safari support
          }}
        >
          
          {/* Glass Glare Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Left Content */}
          <div className="w-full md:w-2/3 flex flex-col z-10 relative">
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="text-sm font-mono tracking-[0.3em] uppercase text-white/70 mb-6"
            >
              {settings?.eyebrow}
            </motion.p>
            
            {/* 3D Staggered Letter Title */}
            <motion.div 
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap overflow-visible mb-2 perspective-1000"
            >
              {letters.map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className="text-6xl sm:text-8xl md:text-[7rem] lg:text-[8rem] font-serif leading-[0.85] tracking-tighter inline-block"
                  style={{ transformOrigin: "bottom center" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
              className="text-xl md:text-3xl font-light italic text-white/90 mb-10"
            >
              {settings?.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="max-w-md text-sm md:text-base font-light leading-relaxed text-white/70 mb-12"
            >
              {settings?.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
            >
              <a 
                href={settings?.cta?.href}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">{settings?.cta?.label}</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              </a>
            </motion.div>
          </div>

          {/* Right Content / Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
            className="w-full md:w-auto mt-12 md:mt-0 flex flex-row md:flex-col gap-8 md:gap-12 z-10 justify-between md:justify-end border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-12"
          >
            {settings?.stats?.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase mb-1">{stat.label}</span>
                <span className="text-2xl font-light">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 5. Minimalist Bottom Navigation Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.6 }}
        className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-white/50 z-20 mix-blend-difference"
      >
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">FB</span>
          <span className="hover:text-white cursor-pointer transition-colors">IG</span>
          <span className="hover:text-white cursor-pointer transition-colors">X</span>
        </div>
        <div className="flex items-center gap-4">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-12 h-[1px] bg-white/30 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-white"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
