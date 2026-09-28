"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

const IconComponent = ({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.Box className={className} style={style} />;
  return <Icon className={className} style={style} />;
};

const TiltGlassCard = ({ card, accent }: { card: any; accent: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="flex-shrink-0 w-48 h-56 md:w-56 md:h-64 rounded-[2rem] cursor-pointer group relative"
    >
      {/* Outer Glass Container */}
      <div 
        className="absolute inset-0 rounded-[2rem] border border-white/10 transition-all duration-500 overflow-hidden shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        {/* Glow behind icon */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${accent}44 0%, transparent 70%)` }}
        />
        
        {/* Shine Sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />

        <div 
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 shadow-inner"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)'
            }}
          >
            <IconComponent name={card.icon} className="w-10 h-10 text-white" />
          </div>
          <span className="text-sm font-bold text-white tracking-[0.15em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">{card.title}</span>
        </div>
      </div>
    </motion.div>
  );
};

export function PromotionalBanner10({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#020202';
  const textCol = styles?.textColor || '#ffffff';
  const accent1 = styles?.accentColor || '#6366f1';
  const accent2 = styles?.secondaryAccent || '#ec4899';
  
  const row1 = settings?.cardsRow1 || [];
  const row2 = settings?.cardsRow2 || [];
  
  // Quadruple the array for seamless infinite scrolling
  const infiniteRow1 = [...row1, ...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section 
      className="relative w-full min-h-[800px] overflow-hidden flex flex-col justify-center items-center py-20 font-sans"
      style={{ backgroundColor: bg, color: textCol, perspective: 1200 }}
    >
      {/* CSS for custom animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%); }
        }
      `}} />

      {/* Background Aurora / Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full opacity-20 filter blur-[150px] mix-blend-screen"
          style={{ backgroundColor: accent1 }}
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[60vw] h-[60vw] rounded-full opacity-20 filter blur-[150px] mix-blend-screen"
          style={{ backgroundColor: accent2 }}
        />
      </div>

      {/* Massive Background Ghost Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.03] z-0 select-none overflow-hidden">
        <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap" style={{ WebkitTextStroke: `2px ${textCol}`, color: 'transparent' }}>
          {settings.title}
        </h1>
      </div>

      {/* Infinite Scrolling Glass Rows (Z-10) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 lg:gap-12 py-10 z-10 pointer-events-auto" style={{ transform: 'rotate(-4deg) scale(1.1)' }}>
        
        {/* Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 z-20 pointer-events-none" style={{ background: `linear-gradient(to right, ${bg}, transparent)` }} />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 z-20 pointer-events-none" style={{ background: `linear-gradient(to left, ${bg}, transparent)` }} />

        {/* Row 1 (Moving Left) */}
        <motion.div 
          className="flex gap-8 lg:gap-12 px-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {infiniteRow1.map((card: any, idx: number) => (
            <TiltGlassCard key={`r1-${idx}`} card={card} accent={accent1} />
          ))}
        </motion.div>

        {/* Row 2 (Moving Right) */}
        <motion.div 
          className="flex gap-8 lg:gap-12 px-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {infiniteRow2.map((card: any, idx: number) => (
            <TiltGlassCard key={`r2-${idx}`} card={card} accent={accent2} />
          ))}
        </motion.div>
      </div>

      {/* Foreground Hero Lockup (Z-20) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pointer-events-none flex flex-col items-center justify-center">
        {/* Glass backdrop for the text container so it reads well over the moving cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-white/10 flex flex-col items-center shadow-2xl backdrop-blur-xl pointer-events-auto w-full max-w-3xl mx-auto"
          style={{ background: 'rgba(0,0,0,0.6)' }}
        >
          <div className="inline-block px-5 py-2 rounded-full border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8" style={{ color: accent1 }}>
            {settings.subtitle}
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6 leading-[1.1]">
            Next Generation <br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${accent1}, ${accent2})` }}>
              Experiences
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl font-medium opacity-70 mb-8 md:mb-10 max-w-2xl leading-relaxed">
            {settings.description}
          </p>

          <a
            href={settings.ctaLink}
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-white overflow-hidden transition-transform hover:scale-105"
            style={{ backgroundColor: textCol, color: bg, boxShadow: `0 0 40px -10px ${accent1}80` }}
          >
            {/* Cinematic Light Sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
            <span className="relative z-10">{settings.ctaText}</span>
            <LucideIcons.ArrowUpRight className="w-5 h-5 ml-2 relative z-10" />
          </a>
        </motion.div>
      </div>

    </section>
  );
}
