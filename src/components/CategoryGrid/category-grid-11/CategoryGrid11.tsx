"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid11({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section 
      className="w-full py-24 px-4 md:px-8 lg:px-16 min-h-[80vh] flex flex-col justify-center" 
      style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-24 flex justify-between items-end border-b-2 border-white/30 pb-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <span className="text-xs font-bold tracking-[0.2em] opacity-60 uppercase">
            Typography Pop Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {categories.slice(0, 3).map((cat: any, index: number) => (
            <motion.div 
              key={cat.id}
              initial="hidden"
              whileHover="hover"
              className="group relative flex flex-col justify-end h-[50vh] md:h-[60vh] border-l-2 border-white/20 pl-8 cursor-pointer"
            >
              
              {/* Image Block - Hidden initially, pops up strictly ABOVE text on hover */}
              <motion.div 
                variants={{
                  hidden: { height: 0, opacity: 0, marginBottom: 0 },
                  hover: { height: "100%", opacity: 1, marginBottom: 24 }
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="w-full relative overflow-hidden bg-black/10 origin-bottom"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text Block - Never overlaps image. It gets pushed down visually as image expands, but is structurally separated. */}
              <div className="flex flex-col shrink-0 transition-transform duration-500 group-hover:translate-x-2">
                <span className="text-xs font-mono opacity-50 mb-2">
                  [ 0{index + 1} / {cat.description} ]
                </span>
                
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none break-all">
                  {cat.name}
                </h3>

                <motion.div 
                  variants={{
                    hidden: { width: 0, opacity: 0, marginTop: 0, height: 0 },
                    hover: { width: "100%", opacity: 1, marginTop: 16, height: "auto" }
                  }}
                  className="flex items-center gap-4 overflow-hidden whitespace-nowrap"
                >
                  <span className="text-sm font-bold tracking-widest uppercase">
                    View Gallery
                  </span>
                  <MoveRight className="w-5 h-5" />
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
