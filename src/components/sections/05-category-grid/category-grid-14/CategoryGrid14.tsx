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

export function CategoryGrid14({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-32 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-6xl mx-auto flex flex-col">
        
        <div className="mb-20 pb-8 border-b-4 border-black">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
        </div>

        <div className="flex flex-col w-full border-t border-black/20">
          {categories.map((cat: any, index: number) => (
            <motion.div 
              key={cat.id}
              initial="idle"
              whileHover="hover"
              className="group flex flex-col border-b border-black/20 overflow-hidden cursor-pointer"
            >
              
              {/* Text Header Row */}
              <div className="flex justify-between items-center py-8 px-4 transition-colors duration-500 group-hover:bg-black group-hover:text-white">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  {cat.name}
                </h3>
                <span className="hidden md:block text-sm font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                  Open Category +
                </span>
              </div>

              {/* Expanding Image Section - Structurally completely below text */}
              <motion.div 
                variants={{
                  idle: { height: 0, opacity: 0 },
                  hover: { height: "50vh", opacity: 1 }
                }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="w-full bg-black flex flex-col md:flex-row relative"
              >
                {/* Actual layout split inside the expanded drawer */}
                <div className="flex-1 h-full p-8 md:p-16 flex items-center justify-center">
                  <p className="text-white/60 text-2xl md:text-4xl font-black tracking-tight max-w-lg leading-tight uppercase">
                    {cat.description}
                  </p>
                </div>
                
                <div className="flex-1 h-full relative overflow-hidden">
                  <motion.img 
                    variants={{
                      idle: { scale: 1.2 },
                      hover: { scale: 1 }
                    }}
                    transition={{ duration: 1 }}
                    src={cat.image} 
                    alt={cat.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
