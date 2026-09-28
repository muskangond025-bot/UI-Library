"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../../shared/Navbar';

export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner9({ section }: SectionProps) {
  const { settings, styles } = section;
  
  // Safe fallbacks
  const bg = styles?.backgroundColor || '#151515';
  const textCol = styles?.textColor || '#F4F0E8';
  const mutedCol = styles?.mutedColor || '#A9A39A';
  
  const titleLines = settings?.title?.split('\n') || ['MOVE WITH', 'INTENT'];

  // Subtle continuous depth movement on mouse move.
  const [mousePos, setMousePos] = useState({ x: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth > 1024) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      setMousePos({ x });
    }
  };

  // Hover state for kinetic accordion
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  const panels = [
    { initX: '-100%', duration: 1.0 },
    { initX: '60%', duration: 1.15 },
    { initX: '-35%', duration: 0.95 },
    { initX: '45%', duration: 1.25 },
    { initX: '-80%', duration: 1.05 }
  ];

  return (
    <section 
      className="relative w-full min-h-[850px] sm:min-h-screen overflow-hidden selection:bg-white selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMousePos({ x: 0 });
        setHoveredPanel(null);
      }}
    >
      <Navbar variant="split" />
      {/* BACKGROUND STAGE */}
      <div className="absolute inset-0 bg-current pointer-events-none" style={{ backgroundColor: bg }} />

      {/* KINETIC CURTAIN PANELS */}
      <div className="absolute inset-0 flex z-0">
        {panels.map((panel, i) => {
          const isHovered = hoveredPanel === i;
          const isAnyHovered = hoveredPanel !== null;
          const flexGrow = isHovered ? 2.5 : isAnyHovered ? 0.75 : 1;

          return (
            <motion.div
              key={i}
              initial={{ x: panel.initX }}
              animate={{ x: "0%" }}
              transition={{ duration: panel.duration, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredPanel(i)}
              className={`relative h-full overflow-hidden border-r border-white/5 transition-all duration-700 ease-out ${
                i < 3 ? 'block' : 'hidden md:block'
              }`}
              style={{ flexGrow }}
            >
              <div className="absolute inset-0 w-full h-full">
                <CameraPanImage 
                  src={settings?.image?.src} 
                  alt={settings?.image?.alt} 
                  mousePos={mousePos} 
                  objPos={`${(i / 4) * 100}% 50%`}
                />
              </div>

              {/* Vertical Panel Label */}
              {settings?.panelLabels?.[i] && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-widest text-white/40 whitespace-nowrap transform -rotate-90 origin-bottom mix-blend-overlay pointer-events-none">
                  0{i + 1} — {settings.panelLabels[i]}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* GRADIENT OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-full md:w-[75%] lg:w-[55%] pointer-events-none" />

      {/* STATIC FOREGROUND CONTENT */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-20 w-full md:w-[80%] lg:w-[65%] pointer-events-none">
        
        <div className="pointer-events-auto">
          {/* Metadata Top */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-4 mb-16 lg:mb-24"
          >
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: mutedCol }}>
              {settings?.campaignLabel}
            </span>
            <span className="w-6 h-[1px] bg-white/20" />
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: mutedCol }}>
              {settings?.collectionLabel}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: mutedCol }}>
              {settings?.eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <div className="mb-10 space-y-2 pr-4">
            {titleLines.map((line: string, index: number) => (
              <div key={index} className="overflow-hidden pb-4 -mb-4">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-serif leading-[0.9] tracking-tighter uppercase text-white break-words hyphens-auto"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-sm"
          >
            <p className="text-sm font-light leading-relaxed text-white/80">
              {settings?.description}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {settings?.cta && (
              <a 
                href={settings.cta.href}
                className="group relative inline-flex items-center gap-6 px-8 py-4 border border-white/30 hover:border-white transition-colors duration-500 bg-black/20 backdrop-blur-sm"
              >
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {settings.cta.label}
                </span>
                <span className="text-white transform group-hover:translate-x-2 transition-transform duration-500">→</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

// Subcomponent for the cinematic pan effect
function CameraPanImage({ src, alt, mousePos, objPos }: { src?: string, alt?: string, mousePos: { x: number }, objPos: string }) {
  if (!src) return null;
  return (
    <motion.div
      animate={{ x: mousePos.x * -6 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="w-full h-full"
    >
      <motion.div
        animate={{ x: ["-1%", "1%"] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 25, ease: "linear" }}
        className="w-full h-full"
      >
        <img 
          src={src} 
          alt={alt || "Campaign"} 
          className="w-full h-full object-cover scale-[1.05]" 
          style={{ objectPosition: objPos }}
        />
      </motion.div>
    </motion.div>
  );
}
