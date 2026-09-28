"use client";
import React, { useState } from 'react';
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

export function FeaturedCategory16({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#f8f9fa';
  const textCol = styles?.textColor || '#1a1a1a';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const activeCat = categories[activeIndex];

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto h-[70vh] md:h-[60vh] flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Strictly Text & Controls */}
        <div className="w-full md:w-[40%] h-full flex flex-col justify-center z-20">
          <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-40 mb-12 block">
            {settings.title}
          </span>

          <div className="relative h-[200px] md:h-[250px] w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4 opacity-40">
                  <span className="font-bold tracking-widest text-lg">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-[2px] bg-black" />
                  <span className="font-medium tracking-widest text-sm">
                    {String(categories.length).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                  {activeCat.name}
                </h3>
                
                <p className="text-black/60 text-sm md:text-base font-medium max-w-md leading-relaxed">
                  {activeCat.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: The Image Deck (Strictly no text) */}
        <div 
          className="w-full md:w-[60%] h-full relative perspective-[1000px] cursor-pointer"
          onClick={handleNext}
        >
          {categories.map((cat: any, index: number) => {
            // Calculate distance from active index (0 is front)
            const n = categories.length;
            const pos = (index - activeIndex + n) % n;

            // Only render front 4 cards to save performance
            if (pos > 3) return null;

            // Determine animations based on position in stack
            const isActive = pos === 0;
            const xOffset = pos * 40; // Shift right
            const scale = 1 - (pos * 0.08); // Scale down as it goes back
            const opacity = 1 - (pos * 0.2); // Fade as it goes back
            const zIndex = 100 - pos;

            return (
              <motion.div
                key={cat.id}
                initial={false}
                animate={{
                  x: xOffset,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: `blur(${pos * 2}px)`
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.19, 1, 0.22, 1]
                }}
                className="absolute top-1/2 left-0 md:left-12 -translate-y-1/2 w-[85%] md:w-[75%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl origin-left"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Darken cards as they go back */}
                <div 
                  className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-700" 
                  style={{ opacity: pos * 0.15 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
