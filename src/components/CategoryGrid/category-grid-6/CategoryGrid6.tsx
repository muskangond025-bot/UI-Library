"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid6({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section 
      className="w-full py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <p className="mt-4 text-sm font-medium opacity-60 uppercase tracking-widest">
            The Staggered Staircase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-24 md:pb-48 pt-12">
          {categories.slice(0, 3).map((cat: any, index: number) => {
            // Calculate the staggering offset for the staircase effect
            const mtClass = index === 1 ? 'md:mt-24' : index === 2 ? 'md:mt-48' : 'mt-0';

            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group flex flex-col ${mtClass}`}
              >
                {/* Image Block */}
                <div className="w-full h-[50vh] bg-[#222] relative overflow-hidden">
                  <motion.div
                    className="absolute inset-[-10%]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </motion.div>
                </div>

                {/* Text Block - Strictly separated below image */}
                <div className="pt-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-bold tracking-[0.2em] opacity-50 uppercase">
                      0{index + 1}
                    </span>
                    <div className="h-[1px] bg-white/20 flex-1 transition-all duration-500 group-hover:bg-white/60" />
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="mt-4 text-sm font-medium opacity-70">
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
