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

export function FeaturedCategory7({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#fafafa';
  const textCol = styles?.textColor || '#09090b';
  
  const categories = settings?.categories || [];
  
  // Track hovered state, default to first item
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto mb-16 flex flex-col items-center text-center">
        <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase opacity-50 mb-4">
          {settings.subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
      </div>

      <div 
        className="w-full max-w-7xl mx-auto flex flex-col border-t border-black/10"
      >
        {categories.map((cat: any, i: number) => {
          const isActive = hoveredIndex === i;

          return (
            <div 
              key={cat.id}
              className="group border-b border-black/10 overflow-hidden cursor-pointer"
              onClick={() => setHoveredIndex(isActive ? null : i)}
            >
              {/* Header Strip (Always visible) */}
              <div className="flex items-center justify-between py-6 md:py-8 lg:py-10 transition-colors duration-300 group-hover:text-black/70">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter flex items-center gap-6 md:gap-12">
                  <span className={`text-sm md:text-xl lg:text-2xl font-bold opacity-30 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-4' : ''}`}>
                    0{i + 1}
                  </span>
                  <span className={`transition-all duration-500 ${isActive ? 'translate-x-4' : ''}`}>
                    {cat.name}
                  </span>
                </h3>
                
                <div className={`transition-all duration-500 transform ${isActive ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`}>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Expandable Content Body (Visible on hover) */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row pb-12 gap-8 lg:gap-16 items-center">
                      
                      {/* Left: Text & CTA */}
                      <div className="w-full lg:w-1/3 flex flex-col justify-center px-4 lg:pl-28 lg:pr-8">
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-base md:text-lg lg:text-xl font-medium leading-relaxed opacity-70 mb-8"
                        >
                          {cat.description}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <a 
                            href={cat.link}
                            className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-black/50 hover:border-black/50 transition-colors"
                          >
                            Explore Collection
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </motion.div>
                      </div>

                      {/* Right: Massive Image Panorama */}
                      <div className="w-full lg:w-2/3 pr-4 lg:pr-8">
                        <motion.div 
                          initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1.05 }}
                          animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1 }}
                          exit={{ clipPath: 'inset(0 0 0 100%)', scale: 1.05 }}
                          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                          className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-3xl"
                        >
                          <img 
                            src={cat.image} 
                            alt={cat.name} 
                            className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
                          />
                        </motion.div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
