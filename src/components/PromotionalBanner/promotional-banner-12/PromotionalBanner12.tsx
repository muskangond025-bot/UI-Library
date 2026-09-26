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

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.Box className={className} />;
  return <Icon className={className} />;
};

const FloatingIcon = ({ name, delay, left, top, size = "w-16 h-16" }: any) => {
  return (
    <motion.div
      className={`absolute ${size} rounded-[2rem] flex items-center justify-center border border-white/40 shadow-2xl backdrop-blur-2xl z-20`}
      style={{
        left,
        top,
        background: 'rgba(255, 255, 255, 0.25)',
        boxShadow: 'inset 0 0 30px rgba(255,255,255,0.4), 0 20px 40px rgba(0,0,0,0.15)'
      }}
      initial={{ y: 0, x: 0, rotate: 0 }}
      animate={{ 
        y: [0, -40, 0],
        x: [0, 20, 0],
        rotate: [0, 15, -10, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      }}
    >
      <IconComponent name={name} className="w-1/2 h-1/2 text-white drop-shadow-xl" />
    </motion.div>
  );
};

export function PromotionalBanner12({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg1 = styles?.backgroundColor || '#FF416C';
  const bg2 = styles?.secondaryColor || '#FF4B2B';
  const textCol = styles?.textColor || '#ffffff';
  const cardBg = styles?.cardBg || 'rgba(255, 255, 255, 0.2)';
  const accent = styles?.accentColor || '#FFD700';
  
  const floatingIcons = settings?.floatingIcons || [];
  const tickerItems = Array.from({ length: 12 }).fill(settings.tickerText || "FLASH SALE");

  return (
    <section 
      className="relative w-full overflow-hidden flex justify-center items-center py-24 md:py-32 font-sans min-h-[800px]"
      style={{ backgroundImage: `linear-gradient(135deg, ${bg1}, ${bg2})`, color: textCol }}
    >
      {/* Dynamic Vector Shapes in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 border-[40px] border-white/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] border-[60px] border-white/20 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/60 rounded-full rotate-45 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white/50 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Diagonal Infinite Marquees (Background) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 overflow-hidden opacity-30 gap-64">
        <motion.div 
          className="flex whitespace-nowrap bg-black/20 backdrop-blur-md py-4 md:py-6 border-y border-white/20 w-[200vw]"
          style={{ transform: 'rotate(-10deg)' }}
          animate={{ x: ["-10%", "-60%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {tickerItems.map((text: any, i: number) => (
            <span key={i} className="mx-8 text-5xl md:text-8xl font-black italic tracking-wider text-white">
              {text}
            </span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex whitespace-nowrap bg-black/20 backdrop-blur-md py-4 md:py-6 border-y border-white/20 w-[200vw]"
          style={{ transform: 'rotate(-10deg)' }}
          animate={{ x: ["-60%", "-10%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {tickerItems.map((text: any, i: number) => (
            <span key={i} className="mx-8 text-5xl md:text-8xl font-black italic tracking-wider text-transparent" style={{ WebkitTextStroke: '2px white' }}>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating Glass Icons */}
      {floatingIcons.length >= 6 && (
        <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
          <FloatingIcon name={floatingIcons[0]} delay={0} left="12%" top="15%" size="w-28 h-28" />
          <FloatingIcon name={floatingIcons[1]} delay={1} left="80%" top="20%" size="w-24 h-24" />
          <FloatingIcon name={floatingIcons[2]} delay={2} left="15%" top="70%" size="w-32 h-32" />
          <FloatingIcon name={floatingIcons[3]} delay={3} left="75%" top="65%" size="w-28 h-28" />
          <FloatingIcon name={floatingIcons[4]} delay={1.5} left="65%" top="8%" size="w-16 h-16" />
          <FloatingIcon name={floatingIcons[5]} delay={2.5} left="25%" top="85%" size="w-20 h-20" />
        </div>
      )}

      {/* Central Floating Glass Card (Foreground) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-30 max-w-3xl w-full mx-4"
      >
        <div 
          className="rounded-[4rem] p-12 md:p-20 text-center border-2 border-white/40 shadow-2xl overflow-hidden relative group backdrop-blur-3xl"
          style={{ 
            backgroundColor: cardBg,
            boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(255,255,255,0.4)'
          }}
        >
          {/* Glass Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest mb-8 border-2 shadow-xl"
            style={{ borderColor: accent, color: accent, backgroundColor: 'rgba(0,0,0,0.3)' }}
          >
            {settings.subtitle}
          </motion.div>
          
          <h2 className="text-6xl md:text-[5.5rem] font-black mb-8 tracking-tighter leading-[1.05]" style={{ textShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
            {settings.title}
          </h2>
          
          <p className="text-xl md:text-2xl font-bold mb-12 text-white leading-relaxed max-w-lg mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            {settings.description}
          </p>
          
          <motion.a
            href={settings.ctaLink}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-12 py-6 rounded-3xl font-black text-xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-shadow hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] text-gray-900"
            style={{ backgroundColor: accent }}
          >
            {settings.ctaText}
            <LucideIcons.ArrowRight className="w-7 h-7 ml-3" />
          </motion.a>
        </div>
      </motion.div>

    </section>
  );
}
