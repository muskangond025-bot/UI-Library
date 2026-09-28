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

interface ProductCarousel9Props {
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

export function ProductCarousel9({ section }: ProductCarousel9Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % content.products.length);
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/3 px-8 md:px-16 mb-12 md:mb-0 z-20">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-sm font-bold tracking-widest uppercase mb-4" 
          style={{ color: style.accentColor }}
        >
          {content.subtitle}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
        >
          {content.title}
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8"
          >
            <p className="text-gray-400 font-mono uppercase tracking-widest text-sm mb-2">
              {content.products[activeIndex].category}
            </p>
            <h3 className="text-3xl font-bold mb-2">{content.products[activeIndex].name}</h3>
            <p className="text-2xl font-light">{content.products[activeIndex].price}</p>
          </motion.div>
        </AnimatePresence>

        <button 
          onClick={nextCard}
          className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity"
          style={{ backgroundColor: style.accentColor, color: style.backgroundColor }}
        >
          Next Product
        </button>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative flex items-center justify-center perspective-1000 z-10 px-4">
        <AnimatePresence>
          {content.products.map((product, index) => {
            // Calculate relative position based on active index
            let diff = index - activeIndex;
            // Handle wrapping
            if (diff < 0) diff += content.products.length;

            // Only show up to 3 cards in the stack to save performance
            if (diff > 2 && diff !== content.products.length - 1) return null;

            // If it's the one that just flew away (previous active)
            const isFlipping = index === (activeIndex - 1 + content.products.length) % content.products.length;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{
                  opacity: isFlipping ? 0 : 1 - (diff * 0.2),
                  scale: isFlipping ? 1.1 : 1 - (diff * 0.1),
                  y: isFlipping ? -300 : diff * 40,
                  rotateZ: isFlipping ? -10 : diff * -2,
                  zIndex: 10 - diff,
                }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="absolute w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white border border-white/10"
                style={{ cursor: diff === 0 ? 'pointer' : 'default' }}
                onClick={diff === 0 ? nextCard : undefined}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {product.badge && (
                  <div className="absolute top-6 right-6 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
