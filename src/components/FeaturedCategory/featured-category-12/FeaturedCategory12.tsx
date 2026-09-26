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

export function FeaturedCategory12({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  // Start with the first item expanded
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-50 hidden md:block pb-2">
          Vertical Pillar Expansion
        </span>
      </div>

      <div className="w-full max-w-7xl mx-auto h-[60vh] md:h-[70vh] flex flex-row gap-2 md:gap-4">
        {categories.map((cat: any, index: number) => {
          const isActive = hoveredIndex === index;

          return (
            <motion.div
              key={cat.id}
              onClick={() => setHoveredIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              initial={false}
              animate={{ 
                flex: isActive ? 6 : 1,
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.19, 1, 0.22, 1] 
              }}
              className="relative h-full flex flex-col overflow-hidden rounded-3xl cursor-pointer group"
            >
              {/* Top Area: Image Gallery */}
              <div className="relative flex-grow bg-[#111] overflow-hidden">
                <motion.img 
                  src={cat.image}
                  alt={cat.name}
                  animate={{ 
                    scale: isActive ? 1 : 1.2,
                    filter: isActive ? 'blur(0px)' : 'blur(2px) grayscale(50%)'
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle dark overlay when not active */}
                <motion.div 
                  animate={{ opacity: isActive ? 0 : 0.5 }}
                  className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-700"
                />
              </div>

              {/* Bottom Area: Strict Solid Text Block */}
              <motion.div 
                animate={{ 
                  height: isActive ? '180px' : '100px',
                  backgroundColor: isActive ? '#ffffff' : '#1a1a1a'
                }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="w-full relative flex flex-col justify-end p-6 border-t border-black/10"
              >
                {/* Unexpanded View: Rotated Text */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <span className="text-white/50 font-black text-xl -rotate-90 whitespace-nowrap tracking-widest">
                        0{index + 1}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded View: Full Content */}
                <div className={`w-full flex-col justify-between h-full transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black truncate pr-4">
                      {cat.name}
                    </h3>
                    <a 
                      href={cat.link}
                      className="w-10 h-10 shrink-0 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-black/60 text-sm md:text-base font-medium max-w-md line-clamp-2 mt-4">
                    {cat.description}
                  </p>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
