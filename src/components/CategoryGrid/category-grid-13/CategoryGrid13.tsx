"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid13({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <ArrowDown className="w-12 h-12 mt-12 opacity-50 animate-bounce" />
        </div>

        <div className="w-full relative flex flex-col gap-24 md:gap-32 pb-24">
          
          {/* Center Timeline Rule */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/10 hidden md:block" />

          {categories.map((cat: any, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={cat.id} 
                className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                
                {/* Image Block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2 p-4 md:p-12 h-[50vh] flex flex-col"
                >
                  <div className="flex-1 w-full bg-gray-900 relative overflow-hidden group">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </motion.div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

                {/* Text Block - Strictly separated physically into the other flex half */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className={`w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center`}
                >
                  <span className="text-xl font-mono opacity-50 mb-4 text-white">
                    0{index + 1} //
                  </span>
                  <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
                    {cat.name}
                  </h3>
                  <p className="text-lg opacity-60 max-w-sm text-white">
                    {cat.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
