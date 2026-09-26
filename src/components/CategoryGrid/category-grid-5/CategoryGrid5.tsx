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

export function CategoryGrid5({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 overflow-hidden" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      
      <div className="px-4 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center md:text-left">
          {settings.title}
        </h2>
        <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-50 max-w-sm text-center md:text-right">
          Experimental skewed layout with strict structural separation.
        </p>
      </div>

      {/* Skewed Container */}
      <div className="w-[110%] -ml-[5%] flex flex-col md:flex-row h-auto md:h-[70vh] -skew-x-[8deg] md:-skew-x-[12deg] bg-black">
        {categories.slice(0, 3).map((cat: any, index: number) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex-1 group relative overflow-hidden flex flex-col border-r border-white/20 last:border-r-0 cursor-pointer"
          >
            
            {/* The Image (Anti-skewed to appear normal inside the skewed box) */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-[-20%] skew-x-[8deg] md:skew-x-[12deg]">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* The Text Block (Anti-skewed text, but skewed container) */}
            <div className="h-32 bg-[#e5e5e5] flex items-center justify-between px-8 md:px-12 transition-colors duration-500 group-hover:bg-[#d5d5d5]">
              <div className="flex flex-col skew-x-[8deg] md:skew-x-[12deg]">
                <span className="text-xs font-bold tracking-widest opacity-50 mb-1">
                  0{index + 1} / {cat.description}
                </span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                  {cat.name}
                </h3>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
