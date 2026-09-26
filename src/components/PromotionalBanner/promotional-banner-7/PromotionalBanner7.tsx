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

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.Box className={className} />;
  return <Icon className={className} />;
};

const TiltGlassIcon = ({ card, accentColor }: { card: any; accentColor: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

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
      className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-3xl cursor-pointer group relative"
    >
      <div 
        className="absolute inset-0 rounded-3xl border border-white/20 transition-all duration-500 overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${accentColor}55 0%, transparent 70%)` }}
        />
        <div 
          className="w-full h-full flex flex-col items-center justify-center p-4"
          style={{ transform: 'translateZ(40px)' }}
        >
          <IconComponent name={card.icon} className="w-10 h-10 text-white mb-2" />
          <span className="text-xs md:text-sm font-semibold text-white tracking-wider">{card.title}</span>
        </div>
      </div>
    </motion.div>
  );
};

export function PromotionalBanner7({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#020617';
  const textCol = styles?.textColor || '#f8fafc';
  const accent = styles?.accentColor || '#8b5cf6';
  const cards = settings?.cards || [];
  
  // Create enough items for a seamless infinite loop
  const infiniteCards = [...cards, ...cards, ...cards];

  return (
    <section 
      className="relative w-full py-16 px-4 md:px-8 overflow-hidden flex justify-center items-center"
      style={{ backgroundColor: bg, color: textCol, perspective: 1000 }}
    >
      {/* Banner Container */}
      <div 
        className="relative w-full max-w-6xl rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-2xl"
        style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)' }}
      >
        {/* Animated Background Gradients within the Banner for Glass Effect */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] rounded-full opacity-20 filter blur-[80px] mix-blend-screen pointer-events-none"
          style={{ backgroundColor: accent }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[150%] rounded-full opacity-10 filter blur-[80px] mix-blend-screen pointer-events-none"
          style={{ backgroundColor: '#22d3ee' }}
        />

        {/* Content Side (Left) */}
        <div className="relative z-10 w-full lg:w-5/12 p-10 md:p-14 lg:p-16 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              New Features
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              {settings.title}
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-md font-medium">
              {settings.description}
            </p>
            <motion.a
              href={settings.buttonLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white shadow-lg overflow-hidden relative group w-max"
              style={{ backgroundColor: accent }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative z-10">{settings.buttonText}</span>
              <LucideIcons.ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Infinite Menu Side (Right) */}
        <div 
          className="relative z-10 w-full lg:w-7/12 overflow-hidden flex items-center py-12 lg:py-0 min-h-[300px]"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* Scrolling Track */}
          <motion.div 
            className="flex gap-6 px-6 whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {infiniteCards.map((card: any, idx: number) => (
              <TiltGlassIcon key={`${card.title}-${idx}`} card={card} accentColor={accent} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
