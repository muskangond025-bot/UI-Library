"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid16({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      <div className="max-w-7xl mx-auto border-2 border-dashed border-white/30 p-4 md:p-12 relative">
        
        {/* Blueprint decorative corners */}
        <Crosshair className="absolute -top-3 -left-3 w-6 h-6 text-white/50" />
        <Crosshair className="absolute -top-3 -right-3 w-6 h-6 text-white/50" />
        <Crosshair className="absolute -bottom-3 -left-3 w-6 h-6 text-white/50" />
        <Crosshair className="absolute -bottom-3 -right-3 w-6 h-6 text-white/50" />

        <div className="mb-16 text-center border-b-2 border-dashed border-white/30 pb-12">
          <h2 className="text-5xl md:text-8xl font-mono font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
          <p className="mt-4 text-xs font-mono tracking-[0.3em] opacity-60 uppercase">
            STRUCTURAL BLUEPRINT GRID v1.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, 4).map((cat: any, index: number) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col border-2 border-dashed border-white/30 hover:border-white transition-colors duration-300 p-4"
            >
              
              {/* Image Block */}
              <div className="w-full aspect-square bg-blue-900/50 border border-white/20 relative overflow-hidden blend-luminosity mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjUgMEwxOS41IDIwTTAgMTkuNUwyMCAxOS41IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] pointer-events-none" />
              </div>

              <div className="w-full h-px border-b-2 border-dashed border-white/30 my-4" />

              {/* Text Block - Strictly separated */}
              <div className="flex flex-col font-mono text-center">
                <span className="text-[10px] opacity-50 mb-2">
                  SEC // 0{index + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs opacity-70 uppercase">
                  {cat.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
