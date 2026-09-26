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

export function CategoryGrid3({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16 min-h-screen" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 md:mb-16 lg:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <p className="mt-2 md:mt-4 text-xs sm:text-sm font-bold tracking-[0.2em] opacity-40 uppercase">
            Staggered Masonry Archive
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:gap-y-12 block">
          {categories.map((cat: any, index: number) => {
            // Assign varying aspect ratios for the true masonry feel
            const heights = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-[2/3]', 'aspect-[3/5]'];
            const aspect = heights[index % heights.length];

            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative flex flex-col break-inside-avoid mb-10"
              >
                {/* Image Block */}
                <div className={`w-full overflow-hidden bg-gray-200 relative ${aspect}`}>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {/* Floating Date/Index tag */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white text-black flex items-center justify-center text-xs font-black tracking-tighter shadow-lg">
                    0{index + 1}
                  </div>
                </div>

                {/* Text Block - Strictly Separated below image */}
                <div className="pt-4 sm:pt-6 flex flex-col items-start border-b border-black/10 pb-4 sm:pb-6 group-hover:border-black/50 transition-colors duration-500">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight">
                    {cat.name}
                  </h3>
                  <div className="flex justify-between items-end w-full mt-2">
                    <span className="text-xs sm:text-sm opacity-60 uppercase tracking-widest font-medium">
                      {cat.description}
                    </span>
                    <span className="hidden sm:block text-xs font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore
                    </span>
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
