import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge: string;
}

interface Trending7Props {
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

export function Trending7({ section }: Trending7Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="text-center mb-16 z-20">
        <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-full max-w-[1200px] h-[400px] md:h-[600px] flex items-center justify-center perspective-1000">
        <AnimatePresence>
          {content.products.map((product, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + content.products.length) % content.products.length;
            const isNext = index === (activeIndex + 1) % content.products.length;
            
            let x = 0;
            let z = -200;
            let rotateY = 0;
            let opacity = 0;

            if (isActive) {
              x = 0;
              z = 0;
              rotateY = 0;
              opacity = 1;
            } else if (isPrev) {
              x = -150;
              z = -100;
              rotateY = 25;
              opacity = 0.6;
            } else if (isNext) {
              x = 150;
              z = -100;
              rotateY = -25;
              opacity = 0.6;
            }

            // Only render active, prev, and next
            if (!isActive && !isPrev && !isNext && content.products.length > 3) return null;

            return (
              <motion.div
                key={product.id}
                initial={false}
                animate={{ x, z, rotateY, opacity }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[260px] md:w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${isActive ? 'z-30' : 'z-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? 'opacity-20' : 'opacity-60'}`} />

                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white bg-gradient-to-t from-black/80 to-transparent"
                  >
                    <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                      {product.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                    <p className="text-xl font-light">{product.price}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-16 z-20">
        {content.products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-current scale-150' : 'bg-current opacity-20'}`}
          />
        ))}
      </div>
    </div>
  );
}
