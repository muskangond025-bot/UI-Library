import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival6Props {
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

export function NewArrival6({ section }: NewArrival6Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="w-full flex flex-col items-center">
          {content.products.map((product, index) => (
            <div 
              key={product.id}
              className="relative w-full border-b border-white/10 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full py-8 md:py-12 flex flex-col md:flex-row items-center md:justify-between mix-blend-difference z-20 relative px-4">
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter transition-transform duration-500 group-hover:translate-x-4">
                  {product.name}
                </h3>
                <p className="text-2xl md:text-3xl font-light opacity-0 group-hover:opacity-100 transition-all duration-500 md:-translate-x-4 group-hover:translate-x-0 mt-2 md:mt-0">
                  {product.price}
                </p>
              </div>

              {/* Floating Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] aspect-[3/4] md:w-[400px] md:aspect-[4/5] pointer-events-none z-10 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
