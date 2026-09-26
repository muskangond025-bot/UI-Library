"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Zap, Droplet, Wind } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

// 1. Glass Icon Component (PDF: Floating depth & ReactBits inspiration)
function GlassIcon({ icon: Icon, delay, x, y }: { icon: any, delay: number, x: number, y: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y + 50 }}
      animate={{ opacity: 1, y: [y, y - 20, y] }}
      transition={{ 
        opacity: { duration: 1, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } 
      }}
      className="absolute p-4 rounded-2xl border border-white/20 backdrop-blur-xl z-20 pointer-events-none hidden md:flex"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
      }}
    >
      <Icon className="w-8 h-8 text-white opacity-80" strokeWidth={1.5} />
    </motion.div>
  );
}

export function PromotionalBanner2({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#000000';
  const textCol = styles?.textColor || '#F3F4F6';
  const accent = styles?.accentColor || '#60A5FA';
  
  const menuItems = settings.menuItems || ["ITEM 1", "ITEM 2", "ITEM 3"];
  // Duplicate for infinite scrolling effect
  const infiniteItems = [...menuItems, ...menuItems, ...menuItems];

  // Parallax effect on the whole section
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col items-center justify-center selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Dynamic Grain/Noise Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }}
      />
      
      {/* Background Glow */}
      <motion.div 
        style={{ y }}
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{ background: `radial-gradient(circle, ${accent}, transparent)` }} />
      </motion.div>

      {/* Floating Glass Icons */}
      <GlassIcon icon={Star} delay={0.2} x={15} y={25} />
      <GlassIcon icon={Zap} delay={0.8} x={80} y={30} />
      <GlassIcon icon={Droplet} delay={1.4} x={20} y={70} />
      <GlassIcon icon={Wind} delay={2.0} x={75} y={75} />

      {/* 2. Infinite Menu Marquee (ReactBits inspiration & PDF: Continuous Scrolling) */}
      <div className="absolute w-[150vw] h-full flex flex-col justify-between py-12 pointer-events-none z-10 rotate-[-4deg] opacity-10">
        {[1, -1].map((direction, idx) => (
          <div key={idx} className="w-full overflow-hidden flex whitespace-nowrap">
            <motion.div
              animate={{ x: direction === 1 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              className="flex items-center gap-16"
            >
              {infiniteItems.map((item, i) => (
                <span key={i} className="text-[12vw] font-black uppercase tracking-tighter text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Main Foreground Content (Awwwards Style) */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
          <span className="text-xs font-mono tracking-[0.2em] uppercase opacity-80">{settings.subtitle}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 drop-shadow-2xl"
        >
          {settings.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light opacity-70 max-w-xl mx-auto mb-12"
        >
          {settings.description}
        </motion.p>

        {/* 3. Glassmorphic Interactive Button */}
        <motion.a
          href={settings.buttonLink}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm overflow-hidden border border-white/20 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            {settings.buttonText}
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </span>
        </motion.a>

      </div>

    </section>
  );
}
