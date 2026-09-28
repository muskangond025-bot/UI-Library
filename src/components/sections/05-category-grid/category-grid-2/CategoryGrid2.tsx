"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid2({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section 
      className="w-full py-24 px-4 md:px-8 lg:px-16" 
      style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex justify-between items-end border-b border-white/20 pb-8">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <span className="hidden md:block text-sm font-bold tracking-[0.2em] opacity-40 uppercase">
            Brutalist Wireframe
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/20">
          {categories.slice(0, 3).map((cat: any, index: number) => (
            <motion.div 
              key={cat.id}
              initial="hidden"
              whileHover="hover"
              className={`group flex flex-col relative h-[60vh] lg:h-[70vh] border-b lg:border-b-0 border-white/20
                ${index === 0 ? 'sm:border-r lg:border-r' : ''}
                ${index === 1 ? 'sm:border-b lg:border-b-0 lg:border-r' : ''}
                ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Text Block - Top */}
              <div className="p-6 md:p-8 flex flex-col shrink-0 border-b border-white/20 z-10 bg-[#09090b]">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xs font-mono opacity-50">
                    // 0{index + 1}
                  </span>
                  <ArrowDownRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter truncate">
                  {cat.name}
                </h3>
              </div>

              {/* Image Block - Bottom */}
              <div className="flex-1 relative overflow-hidden bg-black min-h-[200px]">
                {/* Base Image (Blurred / B&W) */}
                <div className="absolute inset-0 grayscale opacity-30 blur-sm scale-110">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover Reveal Image (Curtain Reveal) */}
                <motion.div 
                  variants={{
                    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
                    hover: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                  }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 z-10"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay to ensure the tag text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
                
                {/* Animated Tagline on Hover */}
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end pointer-events-none"
                >
                  <span className="text-sm font-medium opacity-90 truncate pr-4 text-white">
                    {cat.description}
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase shrink-0 text-white">
                    Explore
                  </span>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
