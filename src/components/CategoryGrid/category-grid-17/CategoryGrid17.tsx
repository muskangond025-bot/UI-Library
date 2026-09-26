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

export function CategoryGrid17({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];
  
  if (categories.length < 2) return null;
  const cat1 = categories[0];
  const cat2 = categories[1];

  return (
    <section className="w-full h-screen relative overflow-hidden" style={{ backgroundColor: styles.backgroundColor, color: styles.textColor }}>
      
      {/* Top Left Diagonal Panel */}
      <motion.div 
        initial={{ clipPath: "polygon(0 0, 0 0, 0 0)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0 z-10 group"
      >
        <div className="absolute inset-0 w-full h-full bg-black">
          <img 
            src={cat1.image} 
            alt={cat1.name} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
          />
        </div>
        
        {/* Safe Corner Text Block - Absolutely positioned where the polygon is widest */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 max-w-sm">
          <span className="text-xs font-bold tracking-widest opacity-60 uppercase mb-2 block">
            01 // {cat1.description}
          </span>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
            {cat1.name}
          </h3>
        </div>
      </motion.div>

      {/* Bottom Right Diagonal Panel */}
      <motion.div 
        initial={{ clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" }}
        whileInView={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-20 group pointer-events-none" 
      >
        {/* Enable pointer events on the actual clipped area using a trick, or just let it overlay. 
            We can add pointer-events-auto to the container to make it hoverable. */}
        <div className="absolute inset-0 w-full h-full bg-gray-900 pointer-events-auto">
          <img 
            src={cat2.image} 
            alt={cat2.name} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
          />
        </div>
        
        {/* Safe Corner Text Block - Absolutely positioned bottom right */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 text-right max-w-sm pointer-events-auto">
          <span className="text-xs font-bold tracking-widest opacity-60 uppercase mb-2 block text-white">
            02 // {cat2.description}
          </span>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
            {cat2.name}
          </h3>
        </div>
      </motion.div>

      {/* Center Dividing Line (Optional decorative element) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-0 z-30 pointer-events-none"
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
        </svg>
      </motion.div>
      
      {/* Title Overlay in Center */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-widest text-white mix-blend-overlay opacity-30">
          {settings.title}
        </h2>
      </div>

    </section>
  );
}
