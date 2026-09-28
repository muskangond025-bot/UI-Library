"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function PromotionalBanner18({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#020617';
  const textCol = styles?.textColor || '#f8fafc';
  const g1 = styles?.gradient1 || '#6366f1';
  const g2 = styles?.gradient2 || '#ec4899';
  const g3 = styles?.gradient3 || '#8b5cf6';
  
  const bgText = Array.from({ length: 12 }).fill(settings.backgroundText).join('');
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the spotlight movement
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      className="relative w-full min-h-[700px] h-screen md:h-[80vh] flex items-center justify-center overflow-hidden font-sans"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-10"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      {/* Animated Liquid Mesh Gradients */}
      <div className="absolute inset-0 opacity-40 blur-[100px] pointer-events-none z-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-screen"
          style={{ backgroundColor: g1 }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-screen"
          style={{ backgroundColor: g2 }}
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full mix-blend-screen"
          style={{ backgroundColor: g3 }}
          animate={{ rotate: [0, 360], scale: [1, 0.8, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Kinetic Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.04] pointer-events-none overflow-hidden gap-8 z-0">
        <motion.div 
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter leading-none"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {bgText}
        </motion.div>
        <motion.div 
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter leading-none text-transparent"
          style={{ WebkitTextStroke: `2px ${textCol}` }}
          animate={{ x: ["-50%", 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {bgText}
        </motion.div>
        <motion.div 
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter leading-none"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {bgText}
        </motion.div>
      </div>

      {/* Main Glass Card with Cursor Spotlight */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="relative z-30 w-full max-w-2xl mx-4 p-[1px] rounded-3xl overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
      >
        {/* Spotlight Glow Border Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-0"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.4), transparent 40%)`
          }}
        />

        {/* Inner Card Content */}
        <div className="relative z-10 p-10 md:p-16 rounded-[calc(1.5rem-1px)] bg-black/50 backdrop-blur-3xl flex flex-col items-center text-center border border-white/10 h-full">
           <motion.div 
             initial={{ scale: 0, rotate: -45 }}
             whileInView={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", delay: 0.3 }}
             className="w-20 h-20 rounded-full flex items-center justify-center mb-8 border border-white/20 bg-gradient-to-br from-white/10 to-transparent shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"
           >
             <Sparkles className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
           </motion.div>
           
           <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-4 text-white/60">
             {settings.subtitle}
           </h4>
           
           <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 pb-2 drop-shadow-sm">
             {settings.title}
           </h2>
           
           <p className="text-lg md:text-xl text-white/70 font-medium max-w-md leading-relaxed mb-12">
             {settings.description}
           </p>
           
           <motion.a
             href={settings.ctaLink}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="relative inline-flex items-center justify-center px-12 py-5 rounded-full font-black uppercase tracking-widest overflow-hidden group/btn shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] transition-all duration-300"
           >
             {/* Button Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#ec4899] transition-transform duration-500 group-hover/btn:scale-110" />
             <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-white/20 mix-blend-overlay" />
             
             {/* Button Content */}
             <span className="relative z-10 text-white flex items-center text-sm md:text-base">
               {settings.ctaText}
               <ArrowRight className="w-5 h-5 ml-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
             </span>
           </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
