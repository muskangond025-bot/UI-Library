import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SplitImage20Props {
  data: {
    content: {
      leftPanel: {
        heading: string;
        description: string;
        image: { url: string; alt: string };
        url: string;
      };
      rightPanel: {
        heading: string;
        description: string;
        image: { url: string; alt: string };
        url: string;
      };
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function SplitImage20({ data }: SplitImage20Props) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  // Generate some random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div 
      className="w-full h-screen flex flex-col md:flex-row font-sans bg-black overflow-hidden relative cursor-crosshair"
      style={{ color: data.style.textColor }}
    >
      
      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <motion.div
            key={p.id}
            animate={{
              y: [p.y + '%', (p.y - 50) + '%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute rounded-full bg-white blur-[1px]"
            style={{
              left: p.x + '%',
              width: p.size,
              height: p.size
            }}
          />
        ))}
      </div>

      {/* Center Divider / Glow */}
      <motion.div 
        className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20 z-40 -translate-x-1/2 pointer-events-none hidden md:block"
        animate={{ 
          boxShadow: hoveredSide === 'left' ? '-20px 0 50px rgba(255,255,255,0.2)' : hoveredSide === 'right' ? '20px 0 50px rgba(255,255,255,0.2)' : '0 0 0 rgba(255,255,255,0)'
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[500px] bg-white rounded-full blur-[100px] opacity-10 mix-blend-screen" />
      </motion.div>

      {/* Left Panel */}
      <motion.div
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ width: hoveredSide === 'left' ? '60%' : hoveredSide === 'right' ? '40%' : '50%' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen w-full flex items-center justify-center overflow-hidden group"
      >
        <motion.img 
          animate={{ scale: hoveredSide === 'left' ? 1.05 : 1.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={data.content.leftPanel.image.url} 
          alt={data.content.leftPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-80" />
        
        <div className="relative z-10 p-12 text-center md:text-left flex flex-col items-center md:items-start w-full max-w-lg">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-white/50 mb-6 block"
          >
            Phase 01
          </motion.span>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter mb-4 leading-none"
          >
            {data.content.leftPanel.heading}
          </motion.h2>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hoveredSide === 'left' ? 'auto' : 0, 
              opacity: hoveredSide === 'left' ? 1 : 0 
            }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <p className="text-lg opacity-80 font-light mt-6 border-l border-white/30 pl-4 max-w-sm">
              {data.content.leftPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        animate={{ width: hoveredSide === 'right' ? '60%' : hoveredSide === 'left' ? '40%' : '50%' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[50vh] md:h-screen w-full flex items-center justify-center overflow-hidden group"
      >
        <motion.img 
          animate={{ scale: hoveredSide === 'right' ? 1.05 : 1.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={data.content.rightPanel.image.url} 
          alt={data.content.rightPanel.image.alt}
          className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent opacity-80" />
        
        <div className="relative z-10 p-12 text-center md:text-right flex flex-col items-center md:items-end w-full max-w-lg">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-white/50 mb-6 block"
          >
            Phase 02
          </motion.span>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter mb-4 leading-none"
          >
            {data.content.rightPanel.heading}
          </motion.h2>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hoveredSide === 'right' ? 'auto' : 0, 
              opacity: hoveredSide === 'right' ? 1 : 0 
            }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <p className="text-lg opacity-80 font-light mt-6 border-r border-white/30 pr-4 max-w-sm text-right">
              {data.content.rightPanel.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
