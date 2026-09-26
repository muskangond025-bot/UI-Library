"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid18({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full relative pb-48" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      
      {/* Intro Space to allow scrolling into the deck */}
      <div className="h-[50vh] flex flex-col items-center justify-center text-center p-8 sticky top-0 -z-10">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <p className="mt-8 text-sm font-bold tracking-[0.4em] opacity-50 uppercase flex flex-col items-center gap-4">
          Scroll Down <ChevronDown className="animate-bounce" />
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 pt-[40vh]">
        {categories.map((cat: any, index: number) => {
          // Calculate the sticky top offset so they stack neatly
          const topOffset = 80 + (index * 40);

          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky flex flex-col md:flex-row w-full h-[60vh] md:h-[70vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-black/10 mb-24"
              style={{ top: `${topOffset}px` }}
            >
              
              {/* Image Half */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black relative overflow-hidden group">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Half - Strictly separated block */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#111] p-8 md:p-16 flex flex-col justify-center relative">
                <span className="absolute top-8 right-8 text-6xl md:text-8xl font-black text-white/5 tracking-tighter">
                  0{index + 1}
                </span>
                
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                  {cat.name}
                </h3>
                <p className="text-lg md:text-xl font-medium opacity-60 text-white max-w-sm">
                  {cat.description}
                </p>

                <div className="mt-12">
                  <button className="h-14 px-8 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
