"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid7({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      className="w-full h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="p-8 shrink-0 flex justify-between items-end border-b border-black/10">
        <h2 className="text-4xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40">
          Accordion Slat Grid
        </span>
      </div>

      {/* Accordion Flex Container */}
      <div className="flex-1 w-full flex flex-col md:flex-row p-4 gap-4 bg-[#ececec]">
        {categories.slice(0, 4).map((cat: any, index: number) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div 
              key={cat.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-full flex flex-col bg-white rounded-xl overflow-hidden cursor-pointer"
              animate={{ 
                flex: hoveredIndex === null ? 1 : isHovered ? 3 : 0.5 
              }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              
              {/* Image Block */}
              <div className="flex-1 relative overflow-hidden bg-gray-200">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Block - Strictly Separated */}
              <motion.div 
                className="h-24 md:h-32 bg-white flex flex-col justify-center px-6 shrink-0 whitespace-nowrap overflow-hidden"
              >
                <span className="text-xs font-bold tracking-[0.2em] opacity-40 mb-1">
                  0{index + 1}
                </span>
                
                <motion.h3 
                  className="font-black uppercase tracking-tight"
                  animate={{ 
                    fontSize: isHovered ? "2rem" : "1.2rem",
                    opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.4
                  }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  {cat.name}
                </motion.h3>
              </motion.div>

            </motion.div>
          );
        })}
      </div>

      {/* Infinite Marquee Footer */}
      <div className="h-16 border-t border-black/10 flex items-center overflow-hidden whitespace-nowrap bg-white shrink-0">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm font-black uppercase tracking-widest whitespace-nowrap opacity-20">
              {hoveredIndex !== null ? categories[hoveredIndex].name : 'SELECT CATEGORY'} • 
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
