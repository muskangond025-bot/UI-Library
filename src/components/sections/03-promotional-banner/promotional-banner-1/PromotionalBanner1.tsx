"use client";
import React from 'react';
import { motion } from 'framer-motion';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function PromotionalBanner1({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  const gradStart = styles?.gradientStart || '#f43f5e';
  const gradEnd = styles?.gradientEnd || '#8b5cf6';
  
  // Create an array for continuous ticker effect
  const tickerItems = Array.from({ length: 6 }).fill(settings.tickerText || "FLASH SALE • 50% OFF • ");

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col justify-center items-center py-16 md:py-24"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Background ambient gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] opacity-20 blur-[100px] rounded-full mix-blend-screen"
          style={{ backgroundImage: `radial-gradient(circle, ${gradStart}, transparent 70%)` }}
        />
        <div 
          className="absolute -bottom-[50%] -right-[10%] w-[50%] h-[150%] opacity-20 blur-[100px] rounded-full mix-blend-screen"
          style={{ backgroundImage: `radial-gradient(circle, ${gradEnd}, transparent 70%)` }}
        />
      </div>

      {/* Marquee Ticker Tape (Top) */}
      <div 
        className="absolute top-0 w-full h-10 overflow-hidden flex items-center border-b border-white/5"
        style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
      >
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {tickerItems.map((text: any, i: number) => (
            <span key={i} className="mx-4 text-xs font-mono font-bold tracking-[0.2em] opacity-60">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)',
            boxShadow: `0 0 20px ${gradStart}40`
          }}
        >
          {settings.badge}
        </motion.div>
        
        {/* Title with Gradient */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight"
        >
          <span 
            className="text-transparent bg-clip-text"
            style={{ 
              backgroundImage: `linear-gradient(to right, ${gradStart}, ${gradEnd})` 
            }}
          >
            {settings.title}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl font-medium opacity-80 max-w-2xl mb-10"
        >
          {settings.description}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href={settings.buttonLink}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="group relative px-8 py-4 rounded-full font-bold tracking-wide overflow-hidden"
        >
          {/* Button Background */}
          <div 
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
            style={{ backgroundImage: `linear-gradient(to right, ${gradStart}, ${gradEnd})` }}
          />
          {/* Button content */}
          <span className="relative z-10 text-white flex items-center gap-2">
            {settings.buttonText}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>

      </div>

      {/* Marquee Ticker Tape (Bottom) */}
      <div 
        className="absolute bottom-0 w-full h-10 overflow-hidden flex items-center border-t border-white/5"
        style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
      >
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {tickerItems.map((text: any, i: number) => (
            <span key={i} className="mx-4 text-xs font-mono font-bold tracking-[0.2em] opacity-60">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
