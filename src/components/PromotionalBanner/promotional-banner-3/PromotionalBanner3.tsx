"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Sparkles, Layers, Activity } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

// Magnetic Button Component (PDF: Hover Animations)
function MagneticGlassButton({ children, onClick, accent }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm border border-white/20 overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: accent, mixBlendMode: 'overlay' }} 
      />
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <motion.span
          className="inline-block"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </span>
    </motion.button>
  );
}

// Glass Card Component
function GlassCard({ icon: Icon, title, desc, delay, top, right }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="absolute z-20 p-5 rounded-2xl border border-white/10 hidden lg:flex flex-col gap-3 shadow-2xl"
      style={{
        top: `${top}%`,
        right: `${right}%`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(20px)',
        width: '240px'
      }}
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{title}</h4>
        <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function PromotionalBanner3({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#FFFFFF';
  const accent = styles?.accentColor || '#10B981';

  // Create infinite text string for the orbit ring
  const orbitText = settings.orbitText.repeat(4);
  const chars = orbitText.split('');
  const radius = 300;

  return (
    <section 
      className="relative w-full h-screen min-h-[800px] overflow-hidden flex items-center selection:bg-emerald-500 selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-1/4 -right-1/4 w-full h-full opacity-20 blur-[150px] rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}, transparent 60%)` }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left Side: Typography and CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start pt-20 md:pt-0 z-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12" style={{ backgroundColor: accent }} />
            <span className="text-sm font-mono tracking-[0.3em] font-bold uppercase" style={{ color: accent }}>
              {settings.subtitle}
            </span>
          </motion.div>

          {/* Splitting Screen Reveal approximation */}
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
            >
              {settings.title.split(' ')[0]}<br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: `2px ${textCol}` }}>
                {settings.title.split(' ')[1] || 'REVOLUTION'}
              </span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-white/70 max-w-md font-light leading-relaxed mb-10"
          >
            {settings.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticGlassButton accent={accent}>
              {settings.buttonText}
            </MagneticGlassButton>
          </motion.div>

        </div>

        {/* Right Side: Visuals (Orbit & Glass Cards) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center mt-12 md:mt-0">
          
          {/* Central Subject Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/5 z-10"
            style={{ boxShadow: `0 0 100px ${accent}40` }}
          >
            <img 
              src={settings.image} 
              alt="Central Visual"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Infinite Orbit Menu (ReactBits inspiration) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
          >
            {chars.map((char: string, i: number) => {
              const angle = (i / chars.length) * 360;
              return (
                <span
                  key={i}
                  className="absolute top-1/2 left-1/2 text-sm font-mono font-bold text-white/40 origin-left"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </motion.div>

          {/* Floating Glass Cards (ReactBits Glass Icons + Awwwards aesthetics) */}
          <GlassCard 
            icon={Layers} 
            title="Modular Design" 
            desc="Seamless integration with component architecture." 
            delay={0.5} 
            top={15} 
            right={5} 
          />
          <GlassCard 
            icon={Activity} 
            title="Fluid Motion" 
            desc="Silky smooth animations powered by physics." 
            delay={0.8} 
            top={75} 
            right={15} 
          />
          <GlassCard 
            icon={Sparkles} 
            title="Glassmorphism" 
            desc="Stunning depth effects with background blur." 
            delay={1.1} 
            top={45} 
            right={-10} 
          />

        </div>

      </div>
    </section>
  );
}
