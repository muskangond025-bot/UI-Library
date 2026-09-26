"use client";
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

// Helper to render lucide icon dynamically
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.Box className={className} />;
  return <Icon className={className} />;
};

export function PromotionalBanner6({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#ffffff';
  const glassBg = styles?.glassBackground || 'rgba(255, 255, 255, 0.03)';
  const glassBorder = styles?.glassBorder || 'rgba(255, 255, 255, 0.08)';
  const accent = styles?.accentColor || '#6366f1';
  
  const cards = settings?.cards || [];

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col justify-center items-center py-20 md:py-32"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Colorful Animated Background Blobs for Glassmorphism Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[120px] opacity-30"
          style={{ backgroundColor: accent }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full mix-blend-screen filter blur-[100px] opacity-20"
          style={{ backgroundColor: '#ec4899' }}
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[20vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
          style={{ backgroundColor: '#8b5cf6' }}
        />
      </div>

      <div className="relative z-10 w-full text-center px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-4"
        >
          {settings.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto"
        >
          {settings.description}
        </motion.p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative z-10 w-full overflow-hidden py-10 flex">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, ${bg}, transparent)` }} />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(to left, ${bg}, transparent)` }} />
        
        <motion.div 
          className="flex gap-6 pl-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Render twice for seamless loop */}
          {[...cards, ...cards].map((card: any, idx: number) => (
            <motion.div
              key={`${card.title}-${idx}`}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex-shrink-0 w-64 h-72 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group border backdrop-blur-xl transition-all duration-300"
              style={{
                backgroundColor: glassBg,
                borderColor: glassBorder,
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Card Inner Hover Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                style={{ background: `radial-gradient(circle at center, ${accent} 0%, transparent 70%)` }}
              />
              
              {/* Glass Icon Container */}
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 10px 20px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                <IconComponent name={card.icon} className="w-10 h-10 relative z-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 tracking-wide">{card.title}</h3>
              <p className="text-sm font-medium opacity-60 tracking-wider uppercase">{card.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
