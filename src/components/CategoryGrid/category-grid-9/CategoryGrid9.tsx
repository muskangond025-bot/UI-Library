"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid9({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end pb-8 border-b-4 border-black">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <span className="text-sm font-bold tracking-[0.2em] opacity-40 uppercase pb-3">
            Alternating Split Panorama
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {categories.slice(0, 4).map((cat: any, index: number) => {
            // Alternating split spans (8-4, 4-8)
            const colSpan = 
              index === 0 ? 'md:col-span-8' :
              index === 1 ? 'md:col-span-4' :
              index === 2 ? 'md:col-span-4' :
              'md:col-span-8';
              
            const isWide = index === 0 || index === 3;

            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group flex flex-col h-[50vh] md:h-[60vh] ${colSpan}`}
              >
                {/* Image Block */}
                <div className="flex-1 w-full bg-gray-200 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white flex items-start justify-end p-4 z-10 transition-transform duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
                    <span className="font-bold text-black text-xl">0{index + 1}</span>
                  </div>
                </div>

                {/* Text Block - Strictly separated below image */}
                <div className="pt-6 shrink-0 flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className={`${isWide ? 'text-4xl lg:text-6xl' : 'text-3xl lg:text-4xl'} font-black uppercase tracking-tight`}>
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm opacity-60 uppercase font-medium tracking-widest">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
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
