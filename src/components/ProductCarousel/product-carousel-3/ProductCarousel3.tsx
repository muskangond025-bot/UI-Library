import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel3Props {
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

export function ProductCarousel3({ section }: ProductCarousel3Props) {
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
      className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Left side: Fixed Details */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen flex flex-col justify-center px-8 md:px-24 pt-24 md:pt-0 relative z-10">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
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
              <div className="flex items-center gap-4 mb-2">
                <p className="text-gray-500 font-mono uppercase tracking-widest text-sm">
                  {activeProduct.category}
                </p>
                {activeProduct.badge && (
                  <span className="px-2 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">
                    {activeProduct.badge}
                  </span>
                )}
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">{activeProduct.name}</h3>
              <p className="text-2xl md:text-4xl font-light mb-8">{activeProduct.price}</p>
              <button 
                className="px-8 py-4 text-white font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity"
                style={{ backgroundColor: style.accentColor }}
              >
                Add to Cart
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Progress Indicators */}
        <div className="absolute left-8 md:left-24 bottom-12 flex flex-col gap-2">
          {content.products.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1 transition-all duration-300 ${idx === activeIndex ? 'h-8 bg-current' : 'h-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Right side: Vertical Scrolling Images */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full md:w-1/2 h-[60vh] md:h-screen overflow-y-auto snap-y snap-mandatory hide-scrollbar relative z-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {content.products.map((product) => (
          <div key={product.id} className="w-full h-[60vh] md:h-screen snap-center shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
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
