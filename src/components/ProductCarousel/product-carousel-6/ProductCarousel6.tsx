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

interface ProductCarousel6Props {
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

export function ProductCarousel6({ section }: ProductCarousel6Props) {
  const { content, style } = section;
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="relative min-h-screen w-full py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full text-center mb-24 px-4">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-4">
          {content.title}
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest" style={{ color: style.accentColor }}>
          [{content.subtitle}]
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar px-[5vw] md:px-[25vw] pb-24 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product, index) => (
          <div 
            key={product.id}
            className="w-[85vw] md:w-[50vw] shrink-0 snap-center px-4 flex flex-col items-center"
          >
            <div className="relative w-full aspect-square border border-gray-200 p-4 md:p-8 hover:bg-gray-50 transition-colors duration-500 group">
              <span className="absolute top-4 left-4 text-xs font-mono text-gray-400 font-bold">
                No. {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="w-full h-full relative overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {product.badge && (
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest" style={{ color: style.accentColor }}>
                  {product.badge}
                </span>
              )}
            </div>

            <div className="w-full flex justify-between items-end mt-8 border-b border-gray-200 pb-4">
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">{product.name}</h3>
              </div>
              <p className="text-lg font-serif italic">{product.price}</p>
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
