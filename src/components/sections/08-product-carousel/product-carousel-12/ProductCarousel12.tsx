import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel12Props {
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

export function ProductCarousel12({ section }: ProductCarousel12Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, clientHeight } = scrollRef.current;
    const index = Math.round(scrollTop / clientHeight);
    if (index !== activeIndex && index >= 0 && index < content.products.length) {
      setActiveIndex(index);
    }
  };

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Sticky Left Content */}
      <div className="w-full md:w-1/3 h-[40vh] md:h-screen p-8 md:p-16 flex flex-col justify-center sticky top-0 z-20">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
          {content.title}
        </h2>

        <div className="relative h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {activeProduct.badge && (
                <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider mb-2">
                  {activeProduct.badge}
                </span>
              )}
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{activeProduct.name}</h3>
              <p className="text-gray-500 font-mono uppercase tracking-widest text-sm mb-4">
                {activeProduct.category}
              </p>
              <p className="text-2xl font-light mb-6">{activeProduct.price}</p>
              
              <button 
                className="w-full py-4 text-white font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity"
                style={{ backgroundColor: style.accentColor }}
              >
                Add to Cart
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Vertical Snap Scrolling Images */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full md:w-2/3 h-[60vh] md:h-screen overflow-y-auto snap-y snap-mandatory hide-scrollbar relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product) => (
          <div key={product.id} className="w-full h-full md:h-screen snap-center shrink-0 relative flex items-center justify-center p-4 md:p-12">
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
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
