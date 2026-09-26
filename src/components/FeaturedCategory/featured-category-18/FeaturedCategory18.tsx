"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory18({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#e4e4e7';
  const textCol = styles?.textColor || '#000000';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preset scatter positions to look perfectly messy
  const scatterPositions = [
    { top: '5%', left: '5%', rotate: -8 },
    { top: '15%', left: '60%', rotate: 6 },
    { top: '50%', left: '10%', rotate: 12 },
    { top: '40%', left: '40%', rotate: -4 },
    { top: '55%', left: '70%', rotate: -10 },
  ];

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      
      {/* Title */}
      <AnimatePresence>
        {activeIndex === null && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-12 left-1/2 -translate-x-1/2 z-0 pointer-events-none text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter opacity-10">
              {settings.title}
            </h2>
            <p className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 mt-4">
              Interactive Drag Scatter
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        ref={containerRef}
        className="w-full max-w-7xl mx-auto h-[80vh] relative rounded-[2rem] overflow-hidden"
      >
        
        {/* The Scattered Deck */}
        <AnimatePresence>
          {activeIndex === null && categories.map((cat: any, index: number) => {
            const pos = scatterPositions[index % scatterPositions.length];
            
            return (
              <motion.div
                key={`scatter-${cat.id}`}
                layoutId={`card-${cat.id}`}
                drag
                dragConstraints={containerRef}
                whileDrag={{ scale: 1.05, zIndex: 100, cursor: 'grabbing' }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: pos.rotate,
                  top: pos.top,
                  left: pos.left,
                  zIndex: index + 10
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                onClick={() => setActiveIndex(index)}
                className="absolute w-[200px] md:w-[280px] lg:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-grab"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* The Active View (Strict Separation) */}
        <AnimatePresence>
          {activeIndex !== null && (
            <div className="absolute inset-0 flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
              
              {/* Left: Active Image */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center p-4 md:p-8">
                <motion.div
                  layoutId={`card-${categories[activeIndex].id}`}
                  className="w-full max-w-[450px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative"
                >
                  <img 
                    src={categories[activeIndex].image} 
                    alt={categories[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Close button inside image for better UX */}
                  <button 
                    onClick={() => setActiveIndex(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>

              {/* Right: Text Block (Never overlaps image) */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-full flex flex-col justify-center p-4 md:p-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6 opacity-50">
                    <div className="w-12 h-[2px] bg-black" />
                    <span className="font-bold tracking-widest text-xl">0{activeIndex + 1}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                    {categories[activeIndex].name}
                  </h3>
                  
                  <p className="text-black/60 text-lg md:text-xl font-medium max-w-md leading-relaxed mb-12">
                    {categories[activeIndex].description}
                  </p>

                  <a 
                    href={categories[activeIndex].link}
                    className="inline-flex items-center gap-4 group/btn w-fit"
                  >
                    <div className="w-14 h-14 rounded-full border border-black/20 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-colors">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest group-hover/btn:tracking-[0.3em] transition-all">
                      Explore Detail
                    </span>
                  </a>
                </motion.div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
