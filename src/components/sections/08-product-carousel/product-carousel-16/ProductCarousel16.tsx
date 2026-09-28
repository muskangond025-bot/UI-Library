import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel16Props {
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

export function ProductCarousel16({ section }: ProductCarousel16Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let newIndex = activeIndex + newDirection;
    if (newIndex < 0) newIndex = content.products.length - 1;
    if (newIndex >= content.products.length) newIndex = 0;
    setActiveIndex(newIndex);
  };

  const activeProduct = content.products[activeIndex];

  // Clip-path variants for the curtain effect
  const variants = {
    enter: (direction: number) => ({
      clipPath: direction > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
    }),
    center: {
      clipPath: 'inset(0 0 0 0)',
    },
    exit: (direction: number) => ({
      clipPath: direction > 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
    })
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={activeProduct.image} 
              alt={activeProduct.name}
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full p-8 md:p-12 flex justify-between items-start pointer-events-none">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter">{content.title}</h2>
          <p className="text-xs font-mono uppercase tracking-widest mt-1" style={{ color: style.accentColor }}>{content.subtitle}</p>
        </div>
      </div>

      <div className="relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-end pointer-events-none gap-8">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`details-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeProduct.badge && (
                <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider mb-4">
                  {activeProduct.badge}
                </span>
              )}
              <h3 className="text-5xl md:text-7xl font-bold mb-2 uppercase tracking-tighter leading-none">{activeProduct.name}</h3>
              <div className="flex gap-4 items-center">
                <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">{activeProduct.category}</p>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <p className="text-3xl font-light">{activeProduct.price}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => paginate(-1)}
            className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
