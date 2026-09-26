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

export function CategoryGrid8({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex justify-between items-end">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter max-w-2xl">
            {settings.title}
          </h2>
          <span className="hidden md:block text-sm font-bold tracking-[0.2em] opacity-40 uppercase">
            Modular Bento Architecture
          </span>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {categories.slice(0, 5).map((cat: any, index: number) => {
            // Determine column spans for the asymmetric bento look
            const colSpan = 
              index === 0 ? 'md:col-span-7 md:row-span-2' : 
              index === 1 ? 'md:col-span-5 md:row-span-1' : 
              index === 2 ? 'md:col-span-5 md:row-span-1' : 
              index === 3 ? 'md:col-span-4 md:row-span-1' : 
              'md:col-span-8 md:row-span-1';

            const isLarge = index === 0;

            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`group flex flex-col bg-[#222] rounded-[2rem] overflow-hidden cursor-pointer min-h-[300px] ${colSpan}`}
              >
                {/* Image Container - Flexes to fill available space */}
                <div className="flex-1 relative overflow-hidden bg-gray-900">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
                </div>

                {/* Text Container - Strictly separated at the bottom */}
                <div className="bg-[#111] shrink-0 p-6 md:p-8 flex flex-col justify-between min-h-[120px]">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-bold tracking-widest opacity-50 uppercase text-white">
                      0{index + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors" />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className={`${isLarge ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl'} font-black uppercase tracking-tight text-white`}>
                      {cat.name}
                    </h3>
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
