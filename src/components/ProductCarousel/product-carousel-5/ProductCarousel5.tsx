import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel5Props {
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

export function ProductCarousel5({ section }: ProductCarousel5Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to first open

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          {content.title}
        </h2>
        <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div className="w-full max-w-7xl h-[60vh] flex flex-col md:flex-row gap-4">
        {content.products.map((product, index) => {
          const isActive = hoveredIndex === index;

          return (
            <motion.div
              key={product.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)} // Reset to 0 when leaving container
              initial={false}
              animate={{ 
                flex: isActive ? 4 : 1, // Expand the active one, shrink others
                opacity: 1
              }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
              className="relative h-full rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" style={{ opacity: isActive ? 0.9 : 0.4 }} />

              <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {product.badge && (
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 border border-white/30">
                          {product.badge}
                        </span>
                      )}
                      <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-3xl font-bold text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h3>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-2xl font-light text-white">{product.price}</p>
                        <button 
                          className="px-6 py-2 rounded-lg font-bold uppercase tracking-widest text-xs pointer-events-auto hover:opacity-80"
                          style={{ backgroundColor: style.accentColor, color: style.backgroundColor }}
                        >
                          View
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {!isActive && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-6 whitespace-nowrap origin-bottom-left md:-rotate-90">
                    <p className="text-white font-bold tracking-widest uppercase text-sm">{product.name}</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
