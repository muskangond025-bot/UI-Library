"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid19({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section className="w-full" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      
      <div className="py-24 px-4 text-center border-b border-black/10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
      </div>

      <div className="flex flex-col w-full">
        {categories.map((cat: any, index: number) => {
          const isEven = index % 2 === 0;
          const containerRef = useRef<HTMLDivElement>(null);
          const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start end", "end start"]
          });

          // Parallax transform for the image
          const yPos = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

          return (
            <div 
              key={cat.id} 
              ref={containerRef}
              className={`flex flex-col md:flex-row w-full h-[60vh] md:h-[80vh] border-b border-black/10 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              
              {/* Image Block with Parallax (Clipped to prevent overflow) */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative bg-black">
                <motion.div 
                  style={{ y: yPos }}
                  className="absolute inset-[-30%] w-[160%] h-[160%]"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
              </div>

              {/* Text Block - Physically separated flex block */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center items-center text-center bg-white group hover:bg-black transition-colors duration-700">
                <span className="text-sm font-bold tracking-[0.3em] opacity-40 uppercase mb-4 group-hover:text-white transition-colors">
                  SECTION / 0{index + 1}
                </span>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-6 text-sm font-medium opacity-60 max-w-sm group-hover:text-white/70 transition-colors uppercase tracking-widest">
                  {cat.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
