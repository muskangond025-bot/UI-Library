"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid4({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      
      <div className="w-full px-4 md:px-12 py-12 flex justify-between items-center border-b border-white/10">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-50">
          Spotlight Reveal Grid
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
        {categories.slice(0, 4).map((cat: any, index: number) => {
          
          const cardRef = useRef<HTMLDivElement>(null);
          const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseMove = (e: React.MouseEvent) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          };

          return (
            <div 
              key={cat.id}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`group relative h-[50vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden border-white/10 cursor-pointer
                ${index % 2 === 0 ? 'md:border-r' : ''}
                ${index < 2 ? 'border-b' : ''}
              `}
              style={{ backgroundColor: styles.backgroundColor }}
            >
              
              {/* Foreground Typography Block (Always strictly visible) */}
              <div className="z-20 flex flex-col items-center pointer-events-none mix-blend-difference text-white">
                <span className="text-sm font-mono opacity-60 mb-4">
                  0{index + 1} // {cat.description}
                </span>
                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-center px-4">
                  {cat.name}
                </h3>
              </div>

              {/* The Spotlight Image Reveal */}
              <motion.div 
                className="absolute inset-0 z-10 bg-[#222]"
                animate={{
                  clipPath: isHovered 
                    ? `circle(35% at ${mousePos.x}px ${mousePos.y}px)` 
                    : `circle(0% at ${mousePos.x}px ${mousePos.y}px)`
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
              >
                <img 
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>

              {/* Corner Icon */}
              <div className="absolute bottom-8 right-8 z-30 opacity-40 group-hover:opacity-100 transition-opacity">
                <Plus className="w-8 h-8 text-white mix-blend-difference" />
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
