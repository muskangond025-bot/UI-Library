"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

const SLICES = 4;

export function FeaturedCategory9({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [categories.length]);

  return (
    <section 
      className="w-full relative flex flex-col md:flex-row justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row h-[70vh] md:h-[80vh] border border-white/10 rounded-[2rem] overflow-hidden">
        
        {/* Left Side: Text and Controls (Strict Separation) */}
        <div className="w-full md:w-[40%] flex flex-col justify-between p-8 md:p-12 lg:p-16 relative z-10 bg-black/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
          <div>
            <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-50 mb-8 block">
              {settings.title}
            </span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                  {categories[activeIndex].name}
                </h2>
                <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-sm mb-8">
                  {categories[activeIndex].description}
                </p>
                
                <a 
                  href={categories[activeIndex].link}
                  className="inline-flex items-center gap-4 group/btn w-fit"
                >
                  <span className="text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover/btn:border-white transition-colors">
                    Explore Collection
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transform group-hover/btn:translate-x-2 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination & Progress */}
          <div className="w-full mt-12 md:mt-0 flex flex-col gap-4">
            <div className="flex justify-between items-end text-sm font-bold tracking-widest">
              <span>0{activeIndex + 1}</span>
              <span className="opacity-40">0{categories.length}</span>
            </div>
            {/* Progress Bar Track */}
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div 
                key={activeIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-white"
              />
            </div>
            
            {/* Manual Controls */}
            <div className="flex gap-2 mt-2">
              {categories.map((_: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-1 h-2 transition-colors ${idx === activeIndex ? 'bg-transparent' : 'bg-transparent hover:bg-white/5'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Sliced Image Reveal */}
        <div className="w-full h-full md:w-[60%] absolute md:relative inset-0 md:inset-auto -z-10 md:z-0 overflow-hidden bg-[#111]">
          <AnimatePresence>
            {/* Render 4 distinct image slices that animate independently */}
            {Array.from({ length: SLICES }).map((_, sliceIndex) => {
              const top = sliceIndex * (100 / SLICES);
              const bottom = (sliceIndex + 1) * (100 / SLICES);
              
              // Alternate entry direction: Left-to-Right then Right-to-Left
              const isEven = sliceIndex % 2 === 0;
              
              const initialClip = isEven 
                ? `polygon(0 ${top}%, 0 ${top}%, 0 ${bottom}%, 0 ${bottom}%)`
                : `polygon(100% ${top}%, 100% ${top}%, 100% ${bottom}%, 100% ${bottom}%)`;
                
              const finalClip = `polygon(0 ${top}%, 100% ${top}%, 100% ${bottom}%, 0 ${bottom}%)`;
              
              // Exit moves in the same direction it was going
              const exitClip = isEven
                ? `polygon(100% ${top}%, 100% ${top}%, 100% ${bottom}%, 100% ${bottom}%)`
                : `polygon(0 ${top}%, 0 ${top}%, 0 ${bottom}%, 0 ${bottom}%)`;

              return (
                <motion.div
                  key={`${activeIndex}-${sliceIndex}`}
                  initial={{ clipPath: initialClip, scale: 1.1 }}
                  animate={{ clipPath: finalClip, scale: 1 }}
                  exit={{ clipPath: exitClip, scale: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.19, 1, 0.22, 1],
                    delay: sliceIndex * 0.1 // Staggered reveal
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={categories[activeIndex].image}
                    alt={categories[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle darkening for readability on mobile where it overlaps */}
                  <div className="absolute inset-0 bg-black/20 md:bg-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
