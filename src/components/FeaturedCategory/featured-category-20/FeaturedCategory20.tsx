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

const NUM_SLICES = 8; // Number of vertical blind slices

// Custom component to render the sliced image transition
const ImageSlicer = ({ imageSrc, direction, alt }: { imageSrc: string, direction: number, alt: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {Array.from({ length: NUM_SLICES }).map((_, i) => {
        const width = 100 / NUM_SLICES;
        const leftInset = i * width;
        const rightInset = 100 - ((i + 1) * width);
        
        // Add a tiny overlap (-0.1%) to prevent micro-gaps between rendering slices
        const clipPath = `inset(0% ${Math.max(0, rightInset - 0.1)}% 0% ${Math.max(0, leftInset - 0.1)}%)`;
        const yOffset = 100;

        return (
          <motion.div
            key={i}
            initial={{ y: direction > 0 ? `${yOffset}%` : `-${yOffset}%` }}
            animate={{ y: "0%" }}
            exit={{ y: direction > 0 ? `-${yOffset}%` : `${yOffset}%` }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1], // Cinematic cubic-bezier for extreme smoothness
              delay: i * 0.05 // Stagger effect from left to right
            }}
            className="absolute inset-0 w-full h-full"
            style={{ clipPath }}
          >
            <img 
              src={imageSrc} 
              alt={alt} 
              className="w-full h-full object-cover scale-[1.02]" 
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export function FeaturedCategory20({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSetIndex = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const activeCat = categories[activeIndex];

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row h-auto md:h-[75vh] border border-white/10 rounded-[2rem] overflow-hidden bg-black/40 shadow-2xl backdrop-blur-md">
        
        {/* Left Column: Interactive Menu List (Strictly Text) */}
        <div className="w-full md:w-[40%] flex flex-col h-full bg-black/60 relative z-20">
          
          <div className="p-8 md:p-12 border-b border-white/10">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase opacity-40">
              {settings.title}
            </h2>
            <p className="text-white/60 text-sm mt-4 max-w-xs">
              Hover over the categories below to trigger the staggered Venetian blind transition.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-8 gap-6 overflow-y-auto">
            {categories.map((cat: any, index: number) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={cat.id}
                  onMouseEnter={() => handleSetIndex(index)}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-bold transition-all duration-500 ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                        0{index + 1}
                      </span>
                      <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 transform ${isActive ? 'text-white translate-x-4' : 'text-white/30 group-hover:text-white/60 group-hover:translate-x-2'}`}>
                        {cat.name}
                      </h3>
                    </div>

                    <ArrowUpRight 
                      className={`w-6 h-6 transition-all duration-500 ${isActive ? 'opacity-100 text-white translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                    />
                  </div>
                  
                  {/* Expandable description only for active item */}
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50 text-sm md:text-base font-medium max-w-sm pt-4 pl-12 leading-relaxed pb-2">
                      {cat.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: The Cinematic Slice Transition (Strictly Image) */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-full relative bg-[#111] overflow-hidden">
          
          {/* Static extremely blurred background fallback */}
          <img 
            src={activeCat.image}
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-110"
            alt="bg"
          />

          <AnimatePresence initial={false} custom={direction}>
            <ImageSlicer 
              key={activeIndex} 
              imageSrc={activeCat.image} 
              direction={direction}
              alt={activeCat.name}
            />
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
}
