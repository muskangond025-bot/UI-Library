"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export interface SectionProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function Banner10({ section }: SectionProps) {
  const { settings, styles } = section;
  
  // Safe fallbacks
  const bg = styles?.backgroundColor || '#E9E3D9';
  const textCol = styles?.textColor || '#121212';
  const accent = styles?.accentColor || '#6F4E37';
  const mutedCol = styles?.mutedColor || '#77716A';
  const frameCol = styles?.frameColor || '#C5BBB0';
  const backFaceCol = styles?.backFaceColor || '#171717';
  
  const titleLines = settings?.title?.split('\n') || [settings?.title || 'TWO SIDES OF FORM'];

  const [isFlipped, setIsFlipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || typeof window === 'undefined' || window.innerWidth < 768) return;
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;
    
    // max Y rotation = 10deg, max X rotation = 4deg
    const rotateY = normX * 10;
    const rotateX = normY * -4; 

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.setProperty('--tilt-x', `${rotateX}deg`);
    cardRef.current.style.setProperty('--tilt-y', `${rotateY}deg`);
  };

  const handlePointerLeave = () => {
    if (!cardRef.current || prefersReducedMotion) return;
    cardRef.current.style.setProperty('--mouse-x', `-1000px`);
    cardRef.current.style.setProperty('--mouse-y', `-1000px`);
    cardRef.current.style.setProperty('--tilt-x', `0deg`);
    cardRef.current.style.setProperty('--tilt-y', `0deg`);
  };

  // High-end easing
  const awwwardsEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section 
      className="relative w-full min-h-[900px] sm:min-h-screen overflow-hidden flex items-center selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1 pt-12 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: awwwardsEase }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: mutedCol }}>
              {settings?.eyebrow}
            </span>
          </motion.div>

          <div className="mb-8 space-y-2 pr-4">
            {titleLines.map((line: string, index: number) => (
              <div key={index} className="overflow-hidden pb-4 -mb-4">
                <motion.h1 
                  initial={{ y: "100%", opacity: 0, rotateZ: 2 }}
                  animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + (index * 0.15), ease: awwwardsEase }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-serif leading-[0.9] tracking-tighter uppercase break-words hyphens-auto"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: awwwardsEase }}
            className="mb-12 max-w-md"
          >
            <p className="text-[15px] font-light leading-relaxed opacity-90">
              {settings?.description}
            </p>
          </motion.div>

          {/* CTA & Flip Control Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: awwwardsEase }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            {settings?.cta && (
              <a 
                href={settings.cta.href}
                className="group/btn relative inline-flex items-center gap-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-transform duration-300 ease-out"
              >
                <span className="relative z-10 block transition-colors duration-300">
                  {settings.cta.label}
                </span>
                <span className="relative z-10 text-lg transition-all duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
                <div className="absolute bottom-1 left-0 right-8 h-[1px] bg-current opacity-20 group-hover/btn:opacity-100 group-hover/btn:right-0 transition-all duration-300" />
              </a>
            )}

            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsFlipped(!isFlipped);
              }}
              role="button"
              tabIndex={0}
              aria-label={isFlipped ? settings?.flipBackLabel : settings?.flipLabel}
              className="group flex items-center gap-3 text-[10px] font-mono tracking-widest text-current uppercase hover:opacity-70 transition-opacity cursor-pointer select-none"
            >
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                ⟳
              </span>
              {isFlipped ? settings?.flipBackLabel : settings?.flipLabel}
            </div>
          </motion.div>
          
        </div>

        {/* Right Side: 3D Interactive Object */}
        <div 
          className="w-full lg:w-[55%] relative flex justify-center items-center min-h-[550px] lg:min-h-[750px] order-1 lg:order-2"
          style={{ perspective: '1200px' }}
        >
          {/* Card Container capturing pointers */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.9, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1, z: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: awwwardsEase }}
            ref={cardRef}
            className="relative w-full aspect-[4/5] max-w-[650px] cursor-crosshair group/card"
            style={{ 
              ['--mouse-x' as any]: '-1000px', 
              ['--mouse-y' as any]: '-1000px',
              ['--tilt-x' as any]: '0deg',
              ['--tilt-y' as any]: '0deg',
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            
            {/* The 3D Object */}
            <div 
              className="absolute inset-0 w-full h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: prefersReducedMotion 
                  ? `rotateY(${isFlipped ? 180 : 0}deg)`
                  : `rotateY(calc(${isFlipped ? 180 : 0}deg + var(--tilt-y, 0deg))) rotateX(calc(var(--tilt-x, 0deg)))` 
              }}
            >
              
              {/* Front Face */}
              <div 
                className="absolute inset-0 w-full h-full bg-black overflow-hidden flex flex-col"
                style={{ backfaceVisibility: prefersReducedMotion ? 'visible' : 'hidden', opacity: prefersReducedMotion && isFlipped ? 0 : 1, transition: prefersReducedMotion ? 'opacity 0.5s' : 'none' }}
              >
                {/* Spotlight Overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-0 lg:group-hover/card:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle 350px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.15), transparent 80%)`,
                    mixBlendMode: 'soft-light'
                  }}
                />
                
                {/* Border trace animation */}
                <div 
                  className="absolute inset-0 border border-white/20 z-20 pointer-events-none lg:group-hover/card:border-white/50 transition-colors duration-700" 
                  style={{ borderColor: frameCol }} 
                />

                {settings?.image?.src ? (
                  <img 
                    src={settings.image.src} 
                    alt={settings.image.alt || ""} 
                    className="w-full h-full object-cover opacity-90"
                  />
                ) : (
                  <div className="w-full h-full bg-current opacity-10" />
                )}

                {/* Optional Corner Metadata */}
                <div className="absolute top-6 left-6 text-[9px] font-mono text-white/70 uppercase tracking-widest z-20">
                  {settings?.campaignLabel}
                </div>
                <div className="absolute bottom-6 right-6 text-[9px] font-mono text-white/70 uppercase tracking-widest z-20">
                  NO. {settings?.index}
                </div>
              </div>

              {/* Back Face */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden flex flex-col items-center justify-center p-12 text-center"
                style={{ 
                  backgroundColor: backFaceCol, 
                  backfaceVisibility: prefersReducedMotion ? 'visible' : 'hidden', 
                  transform: 'rotateY(180deg)',
                  opacity: prefersReducedMotion && !isFlipped ? 0 : 1, 
                  transition: prefersReducedMotion ? 'opacity 0.5s' : 'none'
                }}
              >
                {/* Spotlight Overlay (Back) */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-0 lg:group-hover/card:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle 350px at calc(100% - var(--mouse-x)) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 80%)`,
                    mixBlendMode: 'soft-light'
                  }}
                />

                <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none" />

                {settings?.backImage?.src && (
                  <img 
                    src={settings.backImage.src} 
                    alt={settings.backImage.alt || ""} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                )}
                
                <div className="relative z-30 max-w-sm">
                  {settings?.backTitle && (
                    <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-widest mb-6">
                      {settings.backTitle}
                    </h3>
                  )}
                  {settings?.backDescription && (
                    <p className="text-sm font-light text-white/70 leading-relaxed mb-10">
                      {settings.backDescription}
                    </p>
                  )}
                  <div 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    role="button"
                    tabIndex={0}
                    className="text-[10px] font-mono tracking-widest text-white/50 hover:text-white uppercase transition-colors cursor-pointer select-none"
                  >
                    RETURN
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
