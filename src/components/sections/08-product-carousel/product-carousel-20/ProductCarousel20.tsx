import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel20Props {
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

export function ProductCarousel20({ section }: ProductCarousel20Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.products.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [content.products.length]);

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 0.4, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={activeProduct.image} 
              alt={activeProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pointer-events-none">
        
        <motion.div 
          className="text-center mb-8 mix-blend-difference"
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>
            {content.title}
          </h2>
        </motion.div>

        <div className="w-full max-w-5xl aspect-video relative rounded-3xl overflow-hidden shadow-2xl pointer-events-auto group">
          <AnimatePresence mode="wait">
            <motion.img
              key={`img-${activeProduct.id}`}
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
              exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              src={activeProduct.image}
              alt={activeProduct.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent flex flex-col md:flex-row justify-between items-end">
            <div className="mb-4 md:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`details-${activeProduct.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {activeProduct.badge && (
                    <span className="inline-block px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                      {activeProduct.badge}
                    </span>
                  )}
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-2">{activeProduct.name}</h3>
                  <p className="text-lg text-gray-400 font-mono uppercase tracking-widest">{activeProduct.category}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`price-${activeProduct.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-end"
              >
                <p className="text-3xl md:text-4xl font-light text-white mb-4">{activeProduct.price}</p>
                <button 
                  className="px-8 py-4 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-transform shadow-lg"
                  style={{ backgroundColor: style.accentColor }}
                >
                  Explore Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-12 flex gap-3 pointer-events-auto">
          {content.products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="w-16 h-1 rounded-full overflow-hidden bg-white/20"
            >
              <div 
                className="h-full transition-all duration-300"
                style={{ 
                  backgroundColor: style.accentColor,
                  width: idx === activeIndex ? '100%' : '0%' 
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
