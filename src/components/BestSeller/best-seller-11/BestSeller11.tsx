import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

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

interface BestSeller11Props {
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

export function BestSeller11({ section }: BestSeller11Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row p-4 md:p-12 lg:p-24 gap-12 items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/2 flex flex-col h-full justify-between">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-none">
            {content.title}
          </h2>

          <div className="flex flex-col gap-6">
            {content.products.map((product, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group text-left flex items-start gap-6 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <div className="text-2xl font-light font-mono mt-1" style={{ color: isActive ? style.accentColor : '' }}>
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">{product.name}</h3>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 flex flex-col gap-4"
                      >
                        <p className="text-gray-500 font-mono uppercase tracking-widest text-xs">{product.category}</p>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={14} fill="currentColor" />
                          <span className="font-bold text-sm text-black">{product.rating}</span>
                        </div>
                        <p className="text-2xl font-light">{product.price}</p>
                        
                        <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest cursor-pointer hover:gap-4 transition-all" style={{ color: style.accentColor }}>
                          Explore <ArrowRight size={16} />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-full min-h-[500px]">
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProduct.id}
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
              exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              src={activeProduct.image}
              alt={activeProduct.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {activeProduct.badge && (
            <span className="absolute top-6 right-6 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full">
              {activeProduct.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
