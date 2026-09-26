"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory8({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(2); // Start in middle if 5 items

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh', perspective: '1200px' }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 mb-12 text-center z-20">
        <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-50 mb-4 block">
          {settings.subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
      </div>

      <div className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center mt-10">
        {categories.map((cat: any, index: number) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          
          // Math for 3D layout
          // Center item: offset 0
          // Right items: offset 1, 2
          // Left items: offset -1, -2
          
          // To wrap around perfectly in a cover flow, we should ideally handle array wrapping, 
          // but for 5 items, we can just use the index offset directly or calculate shortest path.
          // Let's calculate the shortest wrapped offset.
          let wrappedOffset = offset;
          if (offset > 2) wrappedOffset -= categories.length;
          if (offset < -2) wrappedOffset += categories.length;
          
          const absWrappedOffset = Math.abs(wrappedOffset);
          
          const isActive = wrappedOffset === 0;

          return (
            <motion.div
              key={cat.id}
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={{
                x: wrappedOffset * 220, // Horizontal spread
                z: -absWrappedOffset * 150, // Push back in 3D
                rotateY: wrappedOffset * -25, // Rotate towards center
                scale: isActive ? 1 : 0.85,
                opacity: absWrappedOffset > 2 ? 0 : 1 - (absWrappedOffset * 0.3),
                filter: `blur(${absWrappedOffset * 4}px)`,
                zIndex: 10 - absWrappedOffset
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1
              }}
              className={`absolute w-[280px] md:w-[320px] h-full flex flex-col rounded-[2rem] overflow-hidden ${isActive ? 'cursor-default shadow-2xl' : 'cursor-pointer shadow-lg hover:shadow-xl'}`}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Image Area (Top) */}
              <div className="relative w-full h-[65%] bg-[#222] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-110'}`}
                />
                {!isActive && <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />}
              </div>

              {/* Text Area (Bottom) */}
              <div className="w-full h-[35%] bg-white p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-2">
                    {cat.name}
                  </h3>
                  {isActive && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-black/60 text-sm font-medium line-clamp-2"
                    >
                      {cat.description}
                    </motion.p>
                  )}
                </div>

                <div className="w-full flex justify-end mt-auto">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-black/50'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="w-full flex justify-center gap-6 mt-12 z-20">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
