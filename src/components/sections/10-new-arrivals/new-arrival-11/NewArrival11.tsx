import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival11Props {
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

export function NewArrival11({ section }: NewArrival11Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredIndex !== null && content.products[hoveredIndex] && (
            <motion.img
              key={hoveredIndex}
              src={content.products[hoveredIndex].image}
              alt="Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mix-blend-difference">
            {content.title}
          </h2>
        </div>

        <div className="w-full flex flex-col w-full gap-2 md:gap-4">
          {content.products.map((product, index) => (
            <div 
              key={product.id}
              className="group flex flex-col md:flex-row items-center justify-between border-b border-white/20 pb-4 md:pb-8 cursor-pointer relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mix-blend-difference z-20 group-hover:pl-8 transition-all duration-500">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-8 mix-blend-difference z-20">
                <span className="text-xl md:text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.price}
                </span>
                <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-500">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
