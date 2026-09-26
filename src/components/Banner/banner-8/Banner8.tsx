"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../shared/Navbar';

export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner8({ section }: SectionProps) {
  const { settings, styles } = section;
  
  // Safe fallbacks
  const bg = styles?.backgroundColor || '#F4F1ED';
  const textCol = styles?.textColor || '#1A1A1A';
  const mutedCol = styles?.mutedColor || '#8C8984';
  const lineCol = styles?.lineColor || '#D6D1CA';
  
  const titleLines = settings?.title?.split('\n') || ['THE ART OF', 'MOVEMENT'];

  // Extremely subtle continuous depth movement on mouse move.
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only apply hover depth effects on desktop
    if (typeof window !== 'undefined' && window.innerWidth > 1024) {
      // Normalize from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      className="relative w-full min-h-[950px] sm:min-h-screen overflow-hidden flex items-center selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Navbar variant="glass" />
      {/* Background Phase 1: Soft Reveal */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: bg }}
      />

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-20 sm:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Text Area */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0 relative z-20">
          
          {/* Metadata Top */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="hidden sm:flex items-center gap-4 mb-12 lg:mb-20"
          >
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: mutedCol }}>
              {settings?.campaignLabel}
            </span>
            <span className="w-8 h-[1px]" style={{ backgroundColor: lineCol }} />
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: mutedCol }}>
              {settings?.collectionLabel}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-6"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: mutedCol }}>
              {settings?.eyebrow}
            </span>
          </motion.div>

          {/* Masked Title Reveal */}
          <div className="mb-8 sm:mb-10 space-y-1 sm:space-y-2">
            {titleLines.map((line: string, index: number) => (
              <div key={index} className="overflow-hidden pb-4 -mb-4">
                <motion.h1 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.4 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-serif leading-[0.9] tracking-tighter uppercase break-words hyphens-auto"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-14 max-w-sm"
          >
            <p className="text-sm font-light leading-relaxed opacity-85">
              {settings?.description}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            {settings?.cta && (
              <a 
                href={settings.cta.href}
                className="group relative inline-flex items-center gap-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
              >
                <span className="border-b border-current pb-1">
                  {settings.cta.label}
                </span>
                <div className="flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2">
                  <span className="text-lg">→</span>
                </div>
              </a>
            )}
          </motion.div>

        </div>

        {/* Right Side: Layered Photographic Gallery */}
        <div className="w-full lg:w-[55%] relative flex justify-center items-center min-h-[450px] lg:min-h-[700px] order-1 lg:order-2">
          
          {/* Layer 1: Background/Secondary Image 1 (Offset Top Left) */}
          {settings?.secondaryImages?.[0]?.src && (
            <motion.div 
              initial={{ opacity: 0, scale: 1.08, x: -20, y: -20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: isHovering ? mousePos.x * -8 - 20 : -20, 
                y: isHovering ? mousePos.y * -8 - 20 : -20 
              }}
              transition={{ 
                opacity: { duration: 1.2, delay: 0.3, ease: 'easeOut' },
                scale: { duration: 1.2, delay: 0.3, ease: 'easeOut' },
                x: { type: "spring", stiffness: 50, damping: 20 },
                y: { type: "spring", stiffness: 50, damping: 20 }
              }}
              className="absolute top-0 left-0 lg:top-4 lg:left-12 w-[45%] lg:w-[40%] aspect-[3/4] z-0 shadow-lg"
            >
              <img 
                src={settings.secondaryImages[0].src} 
                alt={settings.secondaryImages[0].alt || ""} 
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </motion.div>
          )}

          {/* Layer 2: Main Image (Dominant Center/Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.06, y: 25, clipPath: 'inset(20% 0% 0% 0%)' }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: isHovering ? mousePos.y * -15 : 0,
              x: isHovering ? mousePos.x * -15 : 0,
              clipPath: 'inset(0% 0% 0% 0%)' 
            }}
            transition={{ 
              clipPath: { duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.2, delay: 0.5, ease: 'easeOut' },
              scale: { duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 }
            }}
            className="relative z-10 w-[65%] lg:w-[60%] aspect-[4/5] shadow-2xl ml-auto mr-0 lg:mr-12 group overflow-hidden"
          >
            {settings?.image?.src && (
              <motion.img 
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={settings.image.src} 
                alt={settings.image.alt || ""} 
                className="w-full h-full object-cover filter contrast-[1.05] grayscale-[5%]"
              />
            )}
            <div className="absolute inset-0 bg-black/5 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
          </motion.div>

          {/* Layer 3: Foreground Detail Image (Offset Bottom Left) */}
          {settings?.secondaryImages?.[1]?.src && (
            <motion.div 
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ 
                opacity: 1, 
                y: isHovering ? mousePos.y * -25 + 20 : 20, 
                x: isHovering ? mousePos.x * -25 - 10 : -10 
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.9, ease: 'easeOut' },
                x: { type: "spring", stiffness: 50, damping: 20 },
                y: { type: "spring", stiffness: 50, damping: 20 }
              }}
              className="absolute -bottom-8 left-4 lg:-bottom-16 lg:left-8 w-[35%] lg:w-[30%] aspect-square z-20 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              <img 
                src={settings.secondaryImages[1].src} 
                alt={settings.secondaryImages[1].alt || ""} 
                className="w-full h-full object-cover border-[4px]"
                style={{ borderColor: bg }}
              />
            </motion.div>
          )}
          
          {/* Tiny Floating Index (Right edge) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="hidden sm:block absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 text-[10px] font-mono italic opacity-50 z-30"
          >
            NO. {settings?.index}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
