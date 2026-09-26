"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useVelocity, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory6({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the maximum drag distance (scroll width minus client width)
      setCarouselWidth(containerRef.current.scrollWidth - containerRef.current.clientWidth);
    }
  }, [categories]);

  // Framer Motion physics for dragging
  const x = useMotionValue(0);
  const xVelocity = useVelocity(x);
  
  // Smooth out the velocity so the skew doesn't jump abruptly
  const smoothVelocity = useSpring(xVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Map the smoothed velocity to a skew transform (-5deg to 5deg)
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [5, -5], { clamp: true });
  // Map the velocity to a scale effect for extra kinetic feel
  const scale = useTransform(smoothVelocity, [-1000, 0, 1000], [0.95, 1, 0.95], { clamp: true });

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 mb-12 lg:mb-20 flex flex-col items-center text-center z-10">
        <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase opacity-50 mb-4">
          {settings.subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
          {settings.title}
        </h2>
      </div>

      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -carouselWidth - 100, right: 100 }}
          style={{ x }}
          className="flex gap-6 md:gap-10 px-6 md:px-12 lg:px-24 cursor-grab active:cursor-grabbing pb-12 pt-4"
        >
          {categories.map((cat: any, index: number) => (
            <motion.a
              key={cat.id}
              href={cat.link}
              draggable="false"
              style={{ skewX, scale }}
              className="relative flex flex-col w-[280px] md:w-[350px] lg:w-[420px] shrink-0 group origin-bottom"
            >
              {/* Image Section (Top) */}
              <div className="relative w-full aspect-[4/5] rounded-t-3xl overflow-hidden bg-[#222]">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                
                {/* Item Count Badge */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest pointer-events-none">
                  {cat.itemCount} ITEMS
                </div>
              </div>

              {/* Text Section (Bottom) */}
              <div 
                className="relative w-full p-8 md:p-10 rounded-b-3xl flex flex-col justify-between transition-colors duration-500"
                style={{ backgroundColor: cat.color || '#1e293b' }}
              >
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2">
                  {cat.name}
                </h3>
                
                <div className="flex items-center gap-3 mt-4 text-white/80 group-hover:text-white transition-colors duration-300">
                  <span className="text-xs font-bold uppercase tracking-widest">Explore</span>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Drop Shadow mimicking physical lift during drag */}
              <motion.div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/40 blur-2xl rounded-[100%] pointer-events-none"
                style={{ 
                  scale: useTransform(smoothVelocity, [-1000, 0, 1000], [1.2, 1, 1.2]),
                  opacity: useTransform(smoothVelocity, [-1000, 0, 1000], [0.8, 0.4, 0.8])
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      <div className="w-full flex justify-center mt-4">
        <p className="text-xs font-medium tracking-[0.2em] uppercase opacity-40">Drag horizontally to navigate</p>
      </div>
    </section>
  );
}
