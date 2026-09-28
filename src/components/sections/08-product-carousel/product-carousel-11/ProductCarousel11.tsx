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

interface ProductCarousel11Props {
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

export function ProductCarousel11({ section }: ProductCarousel11Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const paginate = (newDirection: number) => {
    let newIndex = activeIndex + newDirection;
    if (newIndex < 0) newIndex = content.products.length - 1;
    if (newIndex >= content.products.length) newIndex = 0;
    setActiveIndex(newIndex);
  };

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={activeProduct.image} 
            alt={activeProduct.name}
            className="w-full h-full object-cover"
          />
          {/* Heavy gradient for dramatic cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-16 lg:p-24 pointer-events-none">
        
        {/* Top Header */}
        <div className="flex justify-between items-start w-full">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
              {content.subtitle}
            </h2>
            <p className="text-2xl font-serif italic">{content.title}</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-4xl font-light">
              <span className="font-bold">{String(activeIndex + 1).padStart(2, '0')}</span> 
              <span className="text-gray-500 text-2xl"> / {String(content.products.length).padStart(2, '0')}</span>
            </p>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeProduct.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {activeProduct.badge && (
                  <span className="inline-block px-4 py-1 border border-white/30 text-xs font-bold uppercase tracking-widest mb-6">
                    {activeProduct.badge}
                  </span>
                )}
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                  {activeProduct.name}
                </h3>
                <p className="text-3xl font-light text-gray-300">
                  {activeProduct.price}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={() => paginate(-1)}
              className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
