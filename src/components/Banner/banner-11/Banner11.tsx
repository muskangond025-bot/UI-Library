"use client";
import React, { useRef, useEffect, useState } from 'react';
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

export function Banner11({ section }: SectionProps) {
  const { settings, styles } = section;
  
  // Safe fallbacks
  const bg = styles?.backgroundColor || '#EAE5DC';
  const textCol = styles?.textColor || '#151515';
  const accent = styles?.accentColor || '#6F4E37';
  const mutedCol = styles?.mutedColor || '#77716A';
  const frameCol = styles?.frameColor || '#C7BEB2';
  
  const titleLines = settings?.title?.split('\n') || [settings?.title || 'DESIGNED TO BE FELT'];

  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Use state to track reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (prefersReducedMotion || typeof window === 'undefined' || window.innerWidth < 1024) return;
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize -1 to 1
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    // Apply CSS variables for performant micro-interactions
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Manually apply transforms to avoid React state re-renders
    if (imageRef.current) {
      // Very subtle shift, max 6px horizontal, 4px vertical
      imageRef.current.style.transform = `translate(${normX * 6}px, ${normY * 4}px) scale(1.015)`;
    }
  };

  const handlePointerLeave = () => {
    if (!sectionRef.current || prefersReducedMotion) return;
    sectionRef.current.style.setProperty('--mouse-x', `-1000px`);
    sectionRef.current.style.setProperty('--mouse-y', `-1000px`);
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(0px, 0px) scale(1)`;
    }
  };

  // Magnetic CTA
  const handleCtaMove = (e: React.PointerEvent) => {
    if (prefersReducedMotion || typeof window === 'undefined' || window.innerWidth < 1024) return;
    if (!ctaRef.current || !arrowRef.current) return;
    
    const rect = ctaRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Max 8px movement
    const pullX = Math.max(-8, Math.min(8, x * 0.15));
    const pullY = Math.max(-8, Math.min(8, y * 0.15));
    
    ctaRef.current.style.transform = `translate(${pullX}px, ${pullY}px)`;
    arrowRef.current.style.transform = `translate(${pullX * 0.5}px, ${pullY * 0.5}px)`;
  };

  const handleCtaLeave = () => {
    if (!ctaRef.current || !arrowRef.current || prefersReducedMotion) return;
    ctaRef.current.style.transform = `translate(0px, 0px)`;
    arrowRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[900px] sm:min-h-screen overflow-hidden flex items-center group selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol, ['--mouse-x' as any]: '-1000px', ['--mouse-y' as any]: '-1000px' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Navbar variant="floating" />
      {/* 
        Signature Cursor-Reactive Spotlight 
        Uses radial gradient tracking --mouse-x and --mouse-y
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 80%)`,
          mixBlendMode: 'soft-light'
        }}
      />

      {/* Decorative Index Number */}
      <div 
        className="pointer-events-none absolute -bottom-10 right-4 lg:bottom-12 lg:-right-4 text-[12rem] lg:text-[20rem] font-serif italic leading-none opacity-[0.03] select-none z-0"
        aria-hidden="true"
      >
        {settings?.index}
      </div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center order-2 lg:order-1 relative z-20">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: mutedCol }}>
              {settings?.microcopy}
            </span>
          </div>

          <div className="mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: mutedCol }}>
              {settings?.eyebrow}
            </span>
          </div>

          <div className="mb-8 space-y-1">
            {titleLines.map((line: string, index: number) => (
              <h1 
                key={index}
                className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] font-serif leading-[0.9] tracking-tighter uppercase break-words"
              >
                {line}
              </h1>
            ))}
          </div>

          <div className="mb-12 max-w-sm">
            <p className="text-sm font-light leading-relaxed" style={{ color: mutedCol }}>
              {settings?.description}
            </p>
          </div>

          {/* Magnetic CTA */}
          <div>
            {settings?.cta && (
              <div 
                className="inline-block p-4 -m-4" 
                onPointerMove={handleCtaMove}
                onPointerLeave={handleCtaLeave}
              >
                <a 
                  ref={ctaRef}
                  href={settings.cta.href}
                  className="group/btn relative inline-flex items-center gap-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-transform duration-300 ease-out"
                >
                  <span className="relative z-10 block transition-colors duration-300 group-hover/btn:text-white">
                    {settings.cta.label}
                  </span>
                  <span 
                    ref={arrowRef}
                    className="relative z-10 text-lg transition-all duration-300 group-hover/btn:text-white group-hover/btn:translate-x-1"
                  >
                    →
                  </span>

                  {/* Uiverse-style expanding hover background layer */}
                  <div className="absolute inset-0 -mx-4 -my-2 bg-black scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:scale-x-100 z-0" />
                  
                  {/* Thin underline (static state) */}
                  <div className="absolute bottom-1 left-0 right-10 h-[1px] bg-black/20 group-hover/btn:opacity-0 transition-opacity duration-300" />
                </a>
              </div>
            )}
          </div>
          
        </div>

        {/* Right Side: Interactive Product Canvas */}
        <div className="w-full lg:w-[60%] relative flex justify-center items-center min-h-[500px] lg:min-h-[750px] order-1 lg:order-2">
          
          {/* Subtle cursor-reactive decorative line */}
          <div 
            className="absolute -left-8 top-1/4 bottom-1/4 w-[1px] hidden lg:block transition-transform duration-300 ease-out z-10"
            style={{ 
              backgroundColor: frameCol,
              transform: `translateY(calc(var(--mouse-y, 0) * 0.05))` 
            }}
          />

          {/* Metadata labels around the frame */}
          <div className="absolute -top-6 right-0 text-[9px] font-mono tracking-widest uppercase hidden lg:block" style={{ color: mutedCol }}>
            {settings?.campaignLabel}
          </div>
          <div className="absolute bottom-8 -right-8 text-[9px] font-mono tracking-widest uppercase hidden lg:block transform rotate-90 origin-bottom" style={{ color: mutedCol }}>
            {settings?.collectionLabel}
          </div>

          {/* Interactive Image Frame */}
          <div className="relative w-full aspect-[4/5] max-w-[650px] p-[1px] overflow-hidden group/frame">
            {/* 
              Cursor-reactive frame border 
              Uses a conic gradient centered on the mouse position for a premium highlight
            */}
            <div 
              className="absolute inset-0 opacity-0 lg:group-hover/frame:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle 300px at calc(var(--mouse-x) - 40%) calc(var(--mouse-y) - 10%), ${styles?.highlightColor || '#D8C7B2'}, transparent)`,
              }}
            />
            {/* Fallback static border */}
            <div className="absolute inset-0 border border-current opacity-20 pointer-events-none" style={{ borderColor: frameCol }} />

            <div className="absolute inset-[1px] bg-current overflow-hidden" style={{ backgroundColor: bg }}>
              {settings?.image?.src && (
                <div 
                  ref={imageRef}
                  className="w-full h-full transition-transform duration-700 ease-out"
                >
                  <img 
                    src={settings.image.src} 
                    alt={settings.image.alt || ""} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
