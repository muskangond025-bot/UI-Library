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

// Scrambled Text Component for brutalist/cyberpunk aesthetic
const ScrambledText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [display, setDisplay] = useState(text.replace(/[a-zA-Z]/g, '-'));
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    
    timeout = setTimeout(() => {
      let iter = 0;
      interval = setInterval(() => {
        setDisplay(current => 
          text.split("").map((letter, i) => {
            if (letter === " ") return " ";
            if (i < iter) return text[i];
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        
        if (iter >= text.length) clearInterval(interval);
        iter += 1/4; // speed
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <>{display}</>;
};

export function Banner20({ section }: SectionProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#060606';
  const textCol = styles?.textColor || '#EFEFEF';
  const accentCol = styles?.accentColor || '#4ADE80';

  const containerRef = useRef<HTMLElement>(null);
  const [isHoveringCenter, setIsHoveringCenter] = useState(false);

  // Determine radius based on viewport
  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 350;
  const imageCount = settings?.images?.length || 6;
  const angleStep = 360 / imageCount;

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] overflow-hidden selection:bg-[#4ADE80] selection:text-black flex items-center justify-center"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <Navbar variant="minimal" />
      
      {/* Background Noise/Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
      />

      {/* Orbital Gallery */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none z-10"
        animate={{ rotate: isHoveringCenter ? 360 : 360 }} // Keeping constant logic, but altering speed via transition
        initial={{ rotate: 0 }}
        transition={{ 
          duration: isHoveringCenter ? 60 : 40, // Slows down when hovering center
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {settings?.images?.map((img: any, i: number) => {
          const angle = i * angleStep;
          // Calculate X and Y on the circle
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div 
              key={i}
              className="absolute w-[140px] md:w-[220px] aspect-[3/4] -ml-[70px] -mt-[100px] md:-ml-[110px] md:-mt-[150px] overflow-hidden rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/5 pointer-events-auto cursor-pointer"
              style={{ x, y }}
              // Counter-rotate so images stay perfectly upright
              animate={{ rotate: isHoveringCenter ? -360 : -360 }}
              initial={{ rotate: 0 }}
              transition={{ 
                duration: isHoveringCenter ? 60 : 40, 
                ease: "linear", 
                repeat: Infinity 
              }}
              whileHover={{ scale: 1.1, zIndex: 50, transition: { duration: 0.3 } }}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Central Interactive Lockup */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center p-12 md:p-24 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] cursor-crosshair"
        onHoverStart={() => setIsHoveringCenter(true)}
        onHoverEnd={() => setIsHoveringCenter(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-[10px] font-mono tracking-[0.4em] mb-4 text-[#4ADE80]">
          <ScrambledText text={settings?.subtitle} delay={500} />
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center max-w-[400px] leading-[0.9]">
          <ScrambledText text={settings?.title} delay={1000} />
        </h1>
        
        <p className="mt-6 text-xs text-center max-w-[250px] text-white/60 font-mono leading-relaxed">
          <ScrambledText text={settings?.description} delay={2000} />
        </p>

        <motion.button 
          className="mt-8 border border-[#4ADE80]/50 text-[#4ADE80] px-8 py-3 text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#4ADE80] hover:text-black transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {settings?.cta}
        </motion.button>
      </motion.div>

      {/* Edge Metadata */}
      <div className="absolute top-8 left-8 text-[9px] font-mono tracking-widest text-white/40 uppercase">
        LAT: 34.0522<br/>LONG: -118.2437
      </div>
      <div className="absolute bottom-8 right-8 text-[9px] font-mono tracking-widest text-white/40 uppercase text-right">
        [ SYSTEM ONLINE ]<br/>ORBITAL VELOCITY: STABLE
      </div>

    </section>
  );
}
