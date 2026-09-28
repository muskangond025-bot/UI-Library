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

interface ProductCarousel10Props {
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

export function ProductCarousel10({ section }: ProductCarousel10Props) {
  const { content, style } = section;
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Transform standard vertical scroll into diagonal movement
  const { scrollYProgress } = useScroll({ container: scrollRef });
  
  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20 pointer-events-none">
        <h2 className="text-4xl md:text-7xl font-serif italic mb-2">
          {content.title}
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="w-full h-full overflow-y-auto hide-scrollbar relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="w-full h-[300vh] relative">
          <div className="sticky top-0 w-full h-screen overflow-hidden">
            <motion.div 
              className="absolute top-[20vh] left-[10vw] flex gap-12 md:gap-24"
              style={{
                // Move heavily on X axis and slightly on Y axis based on vertical scroll
                x: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]),
                y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]),
                rotate: -5
              }}
            >
              {content.products.map((product) => (
                <div 
                  key={product.id}
                  className="w-[70vw] md:w-[35vw] shrink-0 aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer border border-gray-200"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  <div className="absolute bottom-6 right-6 text-right">
                    <p className="text-xs font-mono uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100" style={{ color: style.accentColor }}>
                      {product.category}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
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
