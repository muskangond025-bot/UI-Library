"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory19({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#111111';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCat = categories[activeIndex];

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      
      <div className="w-full max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <span className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 pb-2">
          Interactive Bento Swap
        </span>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 md:gap-8 h-auto lg:h-[70vh]">
        
        {/* LEFT COMPONENT: The Massive Active Layout (Strict Separation) */}
        <div className="w-full lg:w-[65%] h-[60vh] lg:h-full flex flex-col sm:flex-row bg-[#1a1a1a] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Active Text Block */}
          <div className="w-full sm:w-[45%] h-full p-8 md:p-12 flex flex-col justify-between relative z-20 bg-[#1a1a1a]">
            <div className="flex items-center gap-4 opacity-40">
              <span className="font-bold tracking-widest text-lg">0{activeIndex + 1}</span>
              <div className="w-8 h-[2px] bg-white" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                  {activeCat.name}
                </h3>
                
                <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-[90%]">
                  {activeCat.description}
                </p>

                <a 
                  href={activeCat.link}
                  className="mt-4 inline-flex items-center gap-4 group/btn w-fit"
                >
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover/btn:tracking-[0.3em] transition-all">
                    Explore
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Active Image Block */}
          <div className="w-full sm:w-[55%] h-full relative p-2 md:p-4">
            <motion.div
              layoutId={`bento-image-${activeCat.id}`}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#222]"
            >
              <img 
                src={activeCat.image} 
                alt={activeCat.name} 
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
            </motion.div>
          </div>
          
        </div>

        {/* RIGHT COMPONENT: The 2x2 Bento Thumbnails */}
        <div className="w-full lg:w-[35%] h-[40vh] lg:h-full grid grid-cols-2 grid-rows-2 gap-4 md:gap-8">
          {categories.map((cat: any, index: number) => {
            // Do not render the active image in the grid
            if (index === activeIndex) return null;

            return (
              <div 
                key={cat.id}
                onClick={() => setActiveIndex(index)}
                className="relative w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer group"
              >
                <motion.div
                  layoutId={`bento-image-${cat.id}`}
                  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute inset-0 w-full h-full bg-[#222]"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Subtle Label */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-white text-xs font-bold tracking-widest uppercase truncate max-w-[70%]">
                      {cat.name}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
