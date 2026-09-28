"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

const FloatingImage = ({ 
  src, 
  mouseX, 
  mouseY, 
  xOffset, 
  yOffset, 
  depth, 
  width, 
  height, 
  rotateInit, 
  delay 
}: any) => {
  // depth controls how much the image moves relative to the mouse
  const x = useTransform(mouseX, [-0.5, 0.5], [-depth * 100, depth * 100]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-depth * 100, depth * 100]);
  
  // Smooth the movement
  const smoothX = useSpring(x, { damping: 20, stiffness: 50 + depth * 10 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 50 + depth * 10 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotateInit }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, type: "spring", bounce: 0.3 }}
      className={`absolute shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden border border-white/10`}
      style={{
        left: xOffset,
        top: yOffset,
        width,
        height,
        x: smoothX,
        y: smoothY,
        // Fallback gradient in case image fails to load
        background: 'linear-gradient(135deg, #1f2937, #111827)'
      }}
    >
      {/* The image itself */}
      <img src={src} alt="Gallery item" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-700 pointer-events-auto cursor-pointer" />
      {/* Overlay to blend the images softly into the dark background */}
      <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-700 pointer-events-none" />
    </motion.div>
  );
};

export function PromotionalBanner11({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#0a0a0a';
  const textCol = styles?.textColor || '#ffffff';
  const accent = styles?.accentColor || '#c084fc';
  const cardBg = styles?.cardBg || 'rgba(255, 255, 255, 0.03)';
  
  const images = settings?.images || [];

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Normalized mouse coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center justify-center font-sans"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(${textCol} 1px, transparent 1px), linear-gradient(90deg, ${textCol} 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
      />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ backgroundColor: accent }} />

      {/* Floating Image Gallery (Parallax Layers) */}
      {images.length >= 5 && (
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          {/* Top Left */}
          <FloatingImage src={images[0]} mouseX={mouseX} mouseY={mouseY} depth={1.2} xOffset="8%" yOffset="12%" width="18vw" height="24vw" rotateInit={-8} delay={0.1} />
          {/* Bottom Left */}
          <FloatingImage src={images[1]} mouseX={mouseX} mouseY={mouseY} depth={0.7} xOffset="12%" yOffset="60%" width="15vw" height="20vw" rotateInit={5} delay={0.3} />
          {/* Top Right */}
          <FloatingImage src={images[2]} mouseX={mouseX} mouseY={mouseY} depth={1.6} xOffset="72%" yOffset="10%" width="20vw" height="26vw" rotateInit={12} delay={0.2} />
          {/* Bottom Right */}
          <FloatingImage src={images[3]} mouseX={mouseX} mouseY={mouseY} depth={0.9} xOffset="68%" yOffset="62%" width="16vw" height="22vw" rotateInit={-6} delay={0.4} />
          {/* Far Right Small */}
          <FloatingImage src={images[4]} mouseX={mouseX} mouseY={mouseY} depth={2.2} xOffset="88%" yOffset="45%" width="10vw" height="14vw" rotateInit={20} delay={0.5} />
        </div>
      )}

      {/* Central Glass Card (Foreground) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="relative z-20 max-w-xl w-full mx-4 p-10 md:p-14 rounded-[3rem] flex flex-col items-center text-center shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-2xl pointer-events-auto"
        style={{ backgroundColor: cardBg }}
      >
        <motion.div 
          initial={{ rotate: 180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
          className="w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white/10"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          <Sparkles className="w-8 h-8" style={{ color: accent }} />
        </motion.div>

        <h4 className="text-sm font-black uppercase tracking-[0.4em] mb-4" style={{ color: accent }}>
          {settings.subtitle}
        </h4>
        
        <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1]">
          {settings.title}
        </h2>
        
        <p className="text-lg md:text-xl opacity-70 mb-10 leading-relaxed font-medium max-w-md">
          {settings.description}
        </p>
        
        <motion.a
          href={settings.ctaLink}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold overflow-hidden shadow-2xl"
          style={{ backgroundColor: textCol, color: bg }}
        >
          {/* Hover highlight */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-black" />
          <span className="relative z-10 text-sm uppercase tracking-widest">{settings.ctaText}</span>
          <ArrowRight className="w-5 h-5 ml-4 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
        </motion.a>
      </motion.div>
    </section>
  );
}
