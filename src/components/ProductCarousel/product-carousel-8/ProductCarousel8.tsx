import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel8Props {
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

export function ProductCarousel8({ section }: ProductCarousel8Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  // Parallax translation based on global scroll position of container
  const parallaxTransform = useTransform(scrollXProgress, [0, 1], ["0%", "50%"]);

  return (
    <div 
      className="relative min-h-screen w-full py-24 flex flex-col justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full px-4 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-[5vw] md:px-[15vw] py-12 gap-12 md:gap-24"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product) => (
          <div 
            key={product.id}
            className="w-[85vw] md:w-[60vw] shrink-0 snap-center relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* The image itself is wider than the container to allow parallax movement */}
            <motion.div 
              className="absolute inset-y-0 left-[-25%] w-[150%] h-full"
              style={{ x: parallaxTransform }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm mb-4 shadow-lg">
                  {product.badge || product.category}
                </span>
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                  <h3 className="text-3xl md:text-5xl font-bold text-white">{product.name}</h3>
                  <div className="flex items-center gap-6">
                    <p className="text-2xl font-light text-white">{product.price}</p>
                    <button 
                      className="px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-transform"
                      style={{ backgroundColor: style.accentColor, color: style.textColor === '#FFFFFF' ? '#000000' : '#FFFFFF' }}
                    >
                      Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
