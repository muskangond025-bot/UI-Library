"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function FeaturedCategory13({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#f4f4f5';
  const textCol = styles?.textColor || '#000000';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced mouse tracking for the image portal
  const mouseY = useMotionValue(0);
  // Smooth the mouse value for a buttery parallax effect
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  
  // Transform the Y value into a gentle offset (-80px to +80px)
  const yOffset = useTransform(smoothMouseY, [-500, 500], [-120, 120]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate Y relative to the center of the container
      const centerRelativeY = (e.clientY - rect.top) - (rect.height / 2);
      mouseY.set(centerRelativeY);
    }
  };

  const handleMouseLeave = () => {
    mouseY.set(0); // Return to center when mouse leaves
  };

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 px-4 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Massive Typography List */}
        <div className="w-full md:w-[50%] flex flex-col z-20">
          <span className="text-sm font-bold tracking-[0.4em] uppercase opacity-40 mb-12 block">
            {settings.title}
          </span>

          <div className="flex flex-col w-full border-t border-black/10">
            {categories.map((cat: any, index: number) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={cat.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group relative py-8 md:py-10 border-b border-black/10 cursor-pointer flex items-center justify-between overflow-hidden"
                >
                  {/* Hover background slide effect */}
                  <div className={`absolute inset-0 bg-black/5 origin-left transition-transform duration-500 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                  
                  <div className="relative z-10 flex items-center gap-4 md:gap-8 pl-4 min-w-0 flex-1">
                    <span className={`shrink-0 text-sm md:text-xl font-bold transition-all duration-500 ${isActive ? 'opacity-100 translate-x-2' : 'opacity-30'}`}>
                      0{index + 1}
                    </span>
                    
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter truncate transition-all duration-500
                      ${isActive ? 'text-black translate-x-4' : 'text-black/30 group-hover:text-black/50'}
                    `}>
                      {cat.name}
                    </h3>
                  </div>

                  <div className={`shrink-0 relative z-10 pr-4 transition-all duration-500 transform ${isActive ? 'rotate-0 opacity-100 translate-x-0' : '-rotate-45 opacity-0 -translate-x-8'}`}>
                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Magnetic Y-Axis Portal */}
        <div className="w-full md:w-[50%] h-[60vh] md:h-[80vh] flex items-center justify-center relative pointer-events-none">
          
          {/* Strictly separated image bounding box */}
          <motion.div 
            style={{ y: yOffset }}
            className="w-full max-w-[450px] aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 w-full h-full bg-[#111]"
              >
                <img 
                  src={categories[activeIndex].image}
                  alt={categories[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Description overlay strictly inside the image frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-white text-sm md:text-base font-medium leading-relaxed"
                  >
                    {categories[activeIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
