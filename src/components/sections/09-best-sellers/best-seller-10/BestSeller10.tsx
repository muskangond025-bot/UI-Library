import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

interface BestSeller10Props {
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

export function BestSeller10({ section }: BestSeller10Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.products.length);
    }, 6000);
    return () => clearInterval(timer);
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={activeProduct.image} 
              alt={activeProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-between pointer-events-none">
        
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
            {content.title}
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={`details-${activeProduct.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pointer-events-auto"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl text-black" style={{ backgroundColor: style.accentColor }}>
                  #{activeIndex + 1}
                </div>
                {activeProduct.badge && (
                  <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                    {activeProduct.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">{activeProduct.name}</h3>
              <p className="text-lg text-white/70 font-mono uppercase tracking-widest mb-8">{activeProduct.category}</p>
              
              <div className="flex items-center gap-8 mb-8">
                <p className="text-4xl font-light">{activeProduct.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <span className="font-bold text-xl">{activeProduct.rating}</span>
                  <span className="text-white/50 text-sm">({activeProduct.reviews})</span>
                </div>
              </div>

              <button 
                className="px-10 py-4 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                style={{ backgroundColor: style.accentColor, color: '#000' }}
              >
                Shop Collection
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full md:w-auto flex flex-row md:flex-col gap-4 pointer-events-auto">
          {content.products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden transition-all duration-500 ${index === activeIndex ? 'w-24 md:w-32 aspect-video md:aspect-[4/3] rounded-xl border-2 ring-4 ring-offset-4 ring-offset-black' : 'w-16 md:w-24 aspect-video md:aspect-[4/3] rounded-lg opacity-50 hover:opacity-100'}`}
              style={{ 
                borderColor: index === activeIndex ? style.accentColor : '', 
                '--tw-ring-color': index === activeIndex ? style.accentColor : undefined 
              } as React.CSSProperties}
            >
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center font-black text-white text-lg drop-shadow-md">
                {index + 1}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
