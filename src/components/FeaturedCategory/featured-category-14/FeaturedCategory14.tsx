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

export function FeaturedCategory14({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#fafafa';
  const textCol = styles?.textColor || '#000000';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle expanded

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-24 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-40 hidden md:block pb-2">
          Horizon Split Accordion
        </span>
      </div>

      <div className="w-full max-w-7xl mx-auto h-[70vh] flex flex-col gap-2 md:gap-4 overflow-hidden rounded-[2rem]">
        
        {/* TOP ROW: Images */}
        <div className="w-full flex-1 flex flex-row gap-2 md:gap-4">
          {categories.map((cat: any, index: number) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={`img-${cat.id}`}
                onMouseEnter={() => setActiveIndex(index)}
                initial={false}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="h-full relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
              >
                <motion.img 
                  src={cat.image}
                  alt={cat.name}
                  animate={{ 
                    scale: isActive ? 1 : 1.15,
                    filter: isActive ? 'blur(0px) grayscale(0%)' : 'blur(4px) grayscale(80%)'
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Subtle dark overlay for inactive images */}
                <motion.div 
                  animate={{ opacity: isActive ? 0 : 0.4 }}
                  className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-700"
                />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ROW: Text Blocks */}
        <div className="w-full h-[180px] md:h-[220px] shrink-0 flex flex-row gap-2 md:gap-4">
          {categories.map((cat: any, index: number) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={`text-${cat.id}`}
                onMouseEnter={() => setActiveIndex(index)}
                initial={false}
                animate={{ 
                  flex: isActive ? 5 : 1,
                  backgroundColor: isActive ? '#000000' : '#e5e7eb'
                }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="h-full relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer flex flex-col justify-end p-6 md:p-8"
              >
                {/* Unexpanded View: Rotated Number */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <span className="text-black/30 font-black text-2xl -rotate-90 whitespace-nowrap tracking-widest">
                        0{index + 1}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded View: Full Description */}
                <div className={`w-full flex-col justify-between h-full transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-white/50 text-sm font-bold tracking-[0.3em]">
                      0{index + 1}
                    </span>
                    
                    <a 
                      href={cat.link}
                      className="w-10 h-10 shrink-0 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="flex flex-col gap-2 min-w-0 pr-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white truncate">
                      {cat.name}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base font-medium max-w-sm truncate">
                      {cat.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
