"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export function FeaturedCategory11({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#f8f9fa';
  const textCol = styles?.textColor || '#1a1a1a';
  
  const categories = settings?.categories || [];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [rippleOrigin, setRippleOrigin] = useState({ x: 50, y: 50, isPercent: true });
  
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (index: number, e: React.MouseEvent) => {
    if (index === activeIndex) return;

    // Calculate click position relative to the image container
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRippleOrigin({ x, y, isPercent: false });
    } else {
      setRippleOrigin({ x: 50, y: 50, isPercent: true });
    }
    
    setActiveIndex(index);
  };

  const getClipPathOrigin = () => {
    if (rippleOrigin.isPercent) {
      return `${rippleOrigin.x}% ${rippleOrigin.y}%`;
    }
    return `${rippleOrigin.x}px ${rippleOrigin.y}px`;
  };

  return (
    <section 
      className="w-full relative flex flex-col md:flex-row justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
        
        {/* Left Side: Interactive List */}
        <div className="w-full md:w-[40%] flex flex-col justify-center z-10">
          <span className="text-xs font-bold tracking-[0.4em] uppercase opacity-40 mb-12 block">
            {settings.title}
          </span>

          <div className="flex flex-col gap-2">
            {categories.map((cat: any, index: number) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={cat.id}
                  onClick={(e) => handleCategoryClick(index, e)}
                  className={`group relative p-6 md:p-8 rounded-2xl cursor-pointer transition-colors duration-500 overflow-hidden
                    ${isActive ? 'bg-white shadow-xl' : 'hover:bg-black/5'}
                  `}
                >
                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter transition-all duration-500
                        ${isActive ? 'text-black translate-x-2' : 'text-black/40 group-hover:text-black/70'}
                      `}>
                        {cat.name}
                      </h3>
                      
                      <div className={`transition-transform duration-500 ${isActive ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'}`}>
                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Expandable Description */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm md:text-base font-medium opacity-60 pt-4 max-w-[90%]">
                            {cat.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Ripple Reveal Image Gallery */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-[80vh] relative z-0 rounded-[2rem] overflow-hidden bg-gray-200 shadow-2xl">
          <div ref={imageContainerRef} className="absolute inset-0 w-full h-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ 
                  clipPath: `circle(0px at ${getClipPathOrigin()})`,
                  filter: 'brightness(2) blur(10px)',
                  scale: 1.1
                }}
                animate={{ 
                  clipPath: `circle(150% at ${getClipPathOrigin()})`,
                  filter: 'brightness(1) blur(0px)',
                  scale: 1
                }}
                exit={{ opacity: 0 }} // Let the old image just fade out underneath
                transition={{ 
                  duration: 1.2, 
                  ease: [0.19, 1, 0.22, 1] 
                }}
                className="absolute inset-0 w-full h-full z-10"
              >
                <img 
                  src={categories[activeIndex].image}
                  alt={categories[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* The previous image stays underneath until the new one covers it */}
            <div className="absolute inset-0 w-full h-full z-0">
               {/* We don't strictly need to manually render the previous image because AnimatePresence handles the exit node, 
                   but popLayout helps with z-indexing during transition */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
