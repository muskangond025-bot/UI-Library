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

export function CategoryGrid1({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter break-words">
            {settings.title}
          </h2>
          <a href="#" className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:underline underline-offset-4">
            View All <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat: any, index: number) => {
            // Make the first item take up 2x2, others 1x1
            const isFeatured = index === 0;
            
            return (
              <motion.div 
                key={cat.id}
                variants={itemVariants}
                className={`group cursor-pointer rounded-2xl overflow-hidden flex flex-col p-4 shadow-sm hover:shadow-xl transition-shadow duration-500
                  ${isFeatured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[50vh] lg:min-h-[80vh]' : 'sm:col-span-1 lg:col-span-1 min-h-[40vh] lg:min-h-[35vh]'}
                `}
                style={{ backgroundColor: styles.cardBackgroundColor }}
              >
                {/* Image Block */}
                <div className="w-full flex-1 rounded-xl overflow-hidden relative mb-4 bg-gray-100 min-h-[200px]">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Text Block (Strictly separated) */}
                <div className="shrink-0 flex items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold tracking-[0.2em] opacity-40 mb-1 uppercase shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className={`${isFeatured ? 'text-xl sm:text-2xl lg:text-4xl' : 'text-lg sm:text-xl'} font-black uppercase tracking-tight truncate`}>
                      {cat.name}
                    </h3>
                  </div>
                  
                  <div className="shrink-0 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
