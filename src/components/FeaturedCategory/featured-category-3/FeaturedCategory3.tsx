"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

export function FeaturedCategory3({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#09090b';
  const textCol = styles?.textColor || '#ffffff';
  
  const categories = settings?.categories || [];
  
  // Set first panel active by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-12 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter max-w-3xl">
          {settings.title}
        </h2>
      </div>

      <div 
        className="w-full max-w-[95vw] md:max-w-7xl mx-auto h-[70vh] flex flex-col md:flex-row gap-2 md:gap-4"
        onMouseLeave={() => setActiveIndex(0)} // Reset to first when mouse leaves section
      >
        {categories.map((cat: any, i: number) => {
          const isActive = activeIndex === i;
          
          return (
            <div
              key={cat.id}
              onMouseEnter={() => setActiveIndex(i)}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{
                flex: isActive ? '6' : '1',
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#222]">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'scale-100 opacity-100' : 'scale-110 opacity-60 grayscale-[30%]'}`}
                />
              </div>

              {/* Dark Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-80' : 'opacity-40'}`} />

              {/* Inactive Vertical Title (Desktop) */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 hidden md:flex ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <h3 
                  className="text-2xl lg:text-3xl font-black uppercase tracking-widest whitespace-nowrap text-white/80 transform -rotate-90 origin-center"
                >
                  {cat.name}
                </h3>
              </div>
              
              {/* Inactive Horizontal Title (Mobile) */}
              <div className={`absolute inset-0 flex items-center justify-center md:hidden transition-opacity duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <h3 className="text-xl font-black uppercase tracking-widest text-white/90">
                  {cat.name}
                </h3>
              </div>

              {/* Active Content */}
              <div 
                className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-end transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
              >
                {/* Fixed width container to prevent text reflow during flex transition */}
                <div className="w-[80vw] md:w-[60vw] lg:w-[40vw]">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-3 drop-shadow-xl truncate">
                    {cat.name}
                  </h3>
                  
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-full">
                    <p className="text-white/90 text-sm md:text-lg font-medium max-w-sm line-clamp-2 drop-shadow-md">
                      {cat.description}
                    </p>
                    
                    <a 
                      href={cat.link}
                      className="inline-flex shrink-0 items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors group/btn"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
