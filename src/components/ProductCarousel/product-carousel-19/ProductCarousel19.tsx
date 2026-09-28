import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel19Props {
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

export function ProductCarousel19({ section }: ProductCarousel19Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div 
      className="relative min-h-screen w-full py-24 flex flex-col justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full text-center px-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          {content.title}
        </h2>
        <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div 
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-[10vw] md:px-[25vw] pb-24 gap-8 md:gap-16 items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product, index) => (
          <div 
            key={product.id}
            className="w-[80vw] md:w-[50vw] shrink-0 snap-center relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {product.badge}
                </span>
              )}
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{product.name}</h3>
              <div className="flex justify-between items-center w-full">
                <p className="text-lg text-white/70 font-mono uppercase tracking-widest">{product.category}</p>
                <p className="text-2xl font-bold text-white">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Progress Bar */}
      <div className="absolute bottom-12 left-[10vw] right-[10vw] md:left-[25vw] md:right-[25vw] h-1 bg-white/20 rounded-full">
        <motion.div 
          className="h-full rounded-full origin-left"
          style={{ backgroundColor: style.accentColor, scaleX }}
        />
        <motion.div 
          className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-white shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center"
          style={{ 
            left: useTransform(scaleX, [0, 1], ["0%", "100%"]),
            x: "-50%"
          }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: style.accentColor }} />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
