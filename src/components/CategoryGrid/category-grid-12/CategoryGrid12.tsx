"use client";
import React from 'react';
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

export function CategoryGrid12({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex justify-between items-end border-b border-black/10 pb-4">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <span className="hidden md:block text-sm font-bold tracking-[0.2em] opacity-40 uppercase">
            Editorial Magazine Spread
          </span>
        </div>

        {/* Custom Magazine Layout using explicit CSS Grid areas/spans */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 lg:gap-8 min-h-[100vh]">
          {categories.slice(0, 5).map((cat: any, index: number) => {
            // Highly specific bento-like magazine spans
            const colSpan = 
              index === 0 ? 'md:col-span-7 md:row-span-2' : 
              index === 1 ? 'md:col-span-5 md:row-span-1' : 
              index === 2 ? 'md:col-span-2 md:row-span-1' : 
              index === 3 ? 'md:col-span-3 md:row-span-1' : 
              'md:col-span-12 md:row-span-1 hidden'; // We'll just show 4 items to keep the grid perfectly clean, or 5 if we want a full width footer. Let's make index 4 full width.
              
            const isHero = index === 0;

            if (index > 4) return null;

            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group flex flex-col min-h-[40vh] bg-white p-4 lg:p-6 shadow-sm border border-black/5 hover:shadow-xl hover:border-black/20 transition-all duration-500 ${colSpan}`}
              >
                {/* Text Block - Strictly at the top for magazine feel */}
                <div className="shrink-0 flex flex-col mb-6">
                  <div className="flex justify-between items-start w-full">
                    <h3 className={`${isHero ? 'text-4xl lg:text-6xl max-w-sm' : 'text-2xl lg:text-3xl'} font-black uppercase tracking-tighter leading-none`}>
                      {cat.name}
                    </h3>
                    <span className="text-xs font-bold tracking-widest opacity-30 mt-1">
                      NO.0{index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-medium opacity-60 uppercase tracking-widest max-w-xs">
                    {cat.description}
                  </p>
                </div>

                {/* Image Block - Fills remaining space below text */}
                <div className="flex-1 w-full bg-gray-100 relative overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
