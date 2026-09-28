import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

interface BestSeller8Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function BestSeller8({ section }: BestSeller8Props) {
  const { content, style } = section;
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-center py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="px-4 md:px-12 lg:px-24 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>
        
        {/* Progress Bar mapped to scroll */}
        <div className="w-full md:w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full origin-left"
            style={{ backgroundColor: style.accentColor, scaleX: scrollXProgress }}
          />
        </div>
      </div>

      <div className="relative w-full">
        {/* Horizontal Line connecting items */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 hidden md:block" />

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory px-[5vw] md:px-[10vw] hide-scrollbar gap-12 md:gap-24 items-center min-h-[500px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {content.products.map((product, index) => (
            <div 
              key={product.id}
              className="shrink-0 snap-center relative w-[80vw] md:w-[400px] flex flex-col group cursor-pointer"
            >
              {/* Timeline Node */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center font-black bg-[#111827] z-10 hidden md:flex transition-transform group-hover:scale-125"
                style={{ borderColor: style.accentColor, color: style.accentColor }}
              >
                {index + 1}
              </div>

              {/* Product Card - alternates top and bottom on desktop */}
              <div className={`relative w-full bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 ${index % 2 === 0 ? 'md:mb-[200px]' : 'md:mt-[200px]'}`}>
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="md:hidden w-10 h-10 rounded-full border-2 flex items-center justify-center font-black mb-4" style={{ borderColor: style.accentColor, color: style.accentColor }}>
                  {index + 1}
                </div>

                <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">{product.category}</p>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                
                <div className="flex justify-between items-center">
                  <p className="text-xl font-light">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="font-bold text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
