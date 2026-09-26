"use client";
import React, { useState } from 'react';
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

export function FeaturedCategory4({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#ffffff';
  const textCol = styles?.textColor || '#000000';
  
  const categories = settings?.categories || [];
  
  // Set first category active by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 md:py-32"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 lg:gap-24 relative">
        
        {/* Left Side: Text List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase opacity-50 mb-12 lg:mb-20">
            {settings.title}
          </h2>

          <div className="flex flex-col w-full">
            {categories.map((cat: any, i: number) => {
              const isActive = activeIndex === i;

              return (
                <div 
                  key={cat.id}
                  className="group relative border-b border-black/10 py-8 lg:py-12 cursor-pointer"
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="flex flex-col relative z-10">
                    <div className="flex items-start gap-4 lg:gap-8">
                      {/* Outline Number */}
                      <span 
                        className={`text-2xl lg:text-4xl font-black transition-all duration-500 ease-out ${isActive ? 'text-black' : 'text-transparent'}`}
                        style={{ WebkitTextStroke: isActive ? '0px transparent' : '1px rgba(0,0,0,0.3)' }}
                      >
                        {cat.number}
                      </span>
                      
                      <div className="flex flex-col w-full">
                        {/* Title */}
                        <h3 
                          className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-all duration-500 ease-out flex items-center justify-between w-full
                            ${isActive ? 'translate-x-2 text-black' : 'text-black/40 group-hover:text-black/70'}
                          `}
                        >
                          {cat.name}
                          
                          {/* Arrow that fades in on active */}
                          <div className={`transition-all duration-500 transform ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45 -translate-x-4'}`}>
                            <ArrowUpRight className="w-8 h-8" />
                          </div>
                        </h3>
                        
                        {/* Expanding Accordion Description */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm md:text-base font-medium opacity-70 max-w-sm pl-0">
                                {cat.description}
                              </p>
                              <a href={cat.link} className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                                Shop Collection
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Background highlight on active */}
                  <div className={`absolute inset-0 bg-black/5 -translate-x-4 w-[calc(100%+2rem)] rounded-xl transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Sticky Image Reveal Container */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto hidden md:block">
          <div className="sticky top-32 w-full h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ 
                  clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                  scale: 1.1
                }}
                animate={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  scale: 1
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.95
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.19, 1, 0.22, 1] 
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={categories[activeIndex]?.image} 
                  alt={categories[activeIndex]?.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
