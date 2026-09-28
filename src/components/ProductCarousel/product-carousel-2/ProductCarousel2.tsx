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

interface ProductCarousel2Props {
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

export function ProductCarousel2({ section }: ProductCarousel2Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      className="relative w-full min-h-screen py-24 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full text-center mb-16 z-10 px-4">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar items-center py-12 px-[10vw] md:px-[30vw] gap-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="snap-center shrink-0 w-[80vw] md:w-[40vw] h-[50vh] md:h-[60vh] relative group cursor-pointer perspective-1000"
          >
            <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-y-12">
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {product.badge && (
                  <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {product.badge}
                  </span>
                )}
                <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{product.name}</h3>
                <div className="flex justify-between items-center w-full">
                  <p className="text-2xl font-light text-white">{product.price}</p>
                  <button className="px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
}
