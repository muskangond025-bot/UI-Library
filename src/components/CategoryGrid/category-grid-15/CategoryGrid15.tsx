"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid15({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({ container: containerRef });
  
  return (
    <section className="w-full py-24 pl-4 md:pl-8 lg:pl-16 overflow-hidden" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      
      <div className="mb-12 md:mb-24 flex items-end justify-between pr-4 md:pr-8 lg:pr-16">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <span className="hidden md:block text-sm font-bold tracking-[0.2em] opacity-40 uppercase">
          Asymmetric Carousel
        </span>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar pr-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((cat: any, index: number) => {
          // Asymmetric widths
          const isWide = index % 2 !== 0;
          const widthClass = isWide ? 'w-[85vw] md:w-[60vw]' : 'w-[85vw] md:w-[40vw]';

          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`shrink-0 flex flex-col md:flex-row snap-center bg-[#222] rounded-3xl overflow-hidden ${widthClass}`}
            >
              
              {/* Image Block - Fixed on left/top */}
              <div className="w-full md:w-3/5 h-[40vh] md:h-[60vh] bg-black relative overflow-hidden group">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Text Block - Strictly on the right/bottom */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest opacity-50 uppercase text-white">
                    INDEX // 0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-4 text-white">
                    {cat.name}
                  </h3>
                </div>
                
                <div className="mt-8">
                  <p className="text-sm font-medium opacity-60 uppercase tracking-widest mb-6 text-white">
                    {cat.description}
                  </p>
                  <button className="h-12 px-6 rounded-full border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                    Explore
                  </button>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-white/10 mt-8 mr-16 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          style={{ width: scrollXProgress, scaleX: scrollXProgress, transformOrigin: "left" }}
        />
      </div>

    </section>
  );
}
