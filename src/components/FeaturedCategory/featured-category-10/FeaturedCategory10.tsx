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

export function FeaturedCategory10({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#111111';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(2); // Start in middle

  return (
    <section 
      className="w-full relative flex flex-col md:flex-row justify-center py-20 px-4 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      {/* Title Header (Mobile only) */}
      <div className="w-full mb-12 md:hidden text-center z-10">
        <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-50 block mb-2">
          {settings.title}
        </span>
      </div>

      {/* Left: Radial Wheel Navigation */}
      <div className="w-full md:w-[45%] h-[40vh] md:h-[70vh] flex flex-col justify-center relative z-20 pointer-events-none">
        
        {/* Title Header (Desktop) */}
        <div className="absolute top-0 left-0 hidden md:block">
          <span className="text-sm font-bold tracking-[0.4em] uppercase opacity-50">
            {settings.title}
          </span>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-start pointer-events-auto">
          {categories.map((cat: any, index: number) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            
            // Math for the curved list
            const rotate = offset * 15; 
            const x = -(absOffset * absOffset * 15); // Exponential curve leftwards
            const y = offset * 80;
            const scale = Math.max(1 - (absOffset * 0.15), 0.6);
            const opacity = Math.max(1 - (absOffset * 0.3), 0);
            const isActive = offset === 0;

            return (
              <motion.div
                key={cat.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  rotate,
                  x,
                  y,
                  scale,
                  opacity,
                  zIndex: 10 - absOffset
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25
                }}
                className={`absolute left-10 md:left-20 flex items-center origin-left ${isActive ? 'cursor-default' : 'cursor-pointer hover:opacity-100'}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-6">
                  {/* Indicator Line */}
                  <motion.div 
                    animate={{ width: isActive ? 60 : 0, opacity: isActive ? 1 : 0 }}
                    className="h-[2px] bg-white hidden md:block"
                  />
                  
                  <h3 className={`font-black uppercase tracking-tighter whitespace-nowrap transition-colors duration-500
                    ${isActive ? 'text-4xl md:text-5xl lg:text-7xl text-white' : 'text-3xl md:text-4xl text-white/40'}
                  `}>
                    {cat.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right: Radial Mask Image Reveal */}
      <div className="w-full md:w-[55%] h-[50vh] md:h-[75vh] flex flex-col justify-end relative z-10 mt-8 md:mt-0">
        
        {/* Strict separation: Image Container */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#222]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ clipPath: 'circle(0% at 50% 50%)', scale: 1.2, filter: 'blur(10px)' }}
              animate={{ clipPath: 'circle(150% at 50% 50%)', scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={categories[activeIndex].image} 
                alt={categories[activeIndex].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Strict separation: Text Container overlapping slightly inside the image frame but distinctly boxed */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-end justify-between gap-6"
              >
                <div className="flex flex-col max-w-sm">
                  <h4 className="text-xl font-bold uppercase tracking-widest text-white mb-2">
                    {categories[activeIndex].name}
                  </h4>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    {categories[activeIndex].description}
                  </p>
                </div>
                
                <a 
                  href={categories[activeIndex].link}
                  className="w-12 h-12 shrink-0 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
