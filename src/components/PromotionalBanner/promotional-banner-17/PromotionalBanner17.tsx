"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

// 3D Abstract Sculpture component built with pure CSS and Framer Motion
const GoldSculpture = ({ accent }: { accent: string }) => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center" style={{ perspective: '1000px' }}>
      
      {/* Outer Glow */}
      <div 
        className="absolute inset-0 rounded-full blur-[100px] opacity-20 mix-blend-screen" 
        style={{ backgroundColor: accent }} 
      />

      {/* Outer Ring */}
      <motion.div 
        className="absolute w-full h-full rounded-full border-[1px] opacity-30"
        style={{ borderColor: accent }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Middle Ring */}
      <motion.div 
        className="absolute w-[75%] h-[75%] rounded-full border-[2px] opacity-50"
        style={{ borderColor: accent }}
        animate={{ rotateX: [360, 0], rotateY: [0, 360], rotateZ: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner Ring with Dashes */}
      <motion.div 
        className="absolute w-[55%] h-[55%] rounded-full border-[3px] border-dashed opacity-80"
        style={{ borderColor: accent }}
        animate={{ rotateX: [0, 360], rotateY: [360, 0], rotateZ: [360, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner Solid Metallic Orb */}
      <motion.div 
        className="absolute w-[30%] h-[30%] rounded-full"
        style={{ 
          background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${accent} 40%, #2a220b 100%)`,
          boxShadow: `0 0 40px ${accent}80, inset 0 0 20px rgba(0,0,0,0.8)`
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />
    </div>
  );
};

export function PromotionalBanner17({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  // Parent background is whatever the page is, but we force a neutral or dark bg here
  const pageBg = '#000000'; 
  const bg = styles?.backgroundColor || '#0a0a0a';
  const textCol = styles?.textColor || '#ffffff';
  const accent = styles?.accentColor || '#d4af37';
  const secCol = styles?.secondaryColor || '#1a1a1a';

  return (
    <section 
      className="w-full flex items-center justify-center font-sans py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: pageBg }}
    >
      {/* The Banner Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden p-[1px] md:p-[2px]"
      >
        {/* Animated Gold Gradient Border (Background Layer) */}
        <div className="absolute inset-0 z-0">
           <motion.div 
             className="w-[200%] h-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
             style={{
               background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, ${accent} 50%, transparent 60%, transparent 100%)`
             }}
             animate={{ rotate: 360 }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           />
        </div>

        {/* Inner Banner Content Layer */}
        <div 
          className="relative z-10 w-full h-full rounded-[calc(1.5rem-1px)] md:rounded-[calc(1.5rem-2px)] flex flex-col lg:flex-row items-center overflow-hidden"
          style={{ backgroundColor: bg }}
        >
          {/* Subtle noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          />
          
          {/* Subtle gold glow behind text */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />

          {/* LEFT: Text Content */}
          <div className="w-full lg:w-3/5 p-10 md:p-16 lg:p-20 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <Crown className="w-5 h-5" style={{ color: accent }} />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em]" style={{ color: accent }}>
                {settings.subtitle}
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ color: textCol, fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}
            >
              {settings.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base md:text-lg opacity-70 mb-10 max-w-lg leading-relaxed font-light"
              style={{ color: textCol }}
            >
              {settings.description}
            </motion.p>
            
            <motion.a
              href={settings.ctaLink}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300 border border-transparent hover:border-white"
              style={{ backgroundColor: accent, color: secCol }}
            >
              {settings.ctaText}
              <ArrowRight className="w-4 h-4 ml-3" />
            </motion.a>
          </div>

          {/* RIGHT: Abstract 3D Sculpture */}
          <div className="w-full lg:w-2/5 h-[300px] lg:h-full min-h-[400px] relative z-20 flex items-center justify-center overflow-hidden bg-gradient-to-l from-black/40 to-transparent">
             <GoldSculpture accent={accent} />
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
