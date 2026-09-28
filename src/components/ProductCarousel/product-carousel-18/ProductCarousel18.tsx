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

interface ProductCarousel18Props {
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

export function ProductCarousel18({ section }: ProductCarousel18Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/4 flex flex-col justify-between">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
          {content.products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`relative shrink-0 w-24 md:w-full aspect-square md:aspect-video rounded-xl overflow-hidden transition-all duration-300 ${index === activeIndex ? 'ring-2 ring-offset-2 ring-black opacity-100 scale-105' : 'opacity-50 hover:opacity-100'}`}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {index === activeIndex && (
                <div className="absolute inset-0 bg-black/10" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-3/4 flex flex-col justify-center">
        <div className="relative w-full aspect-[4/3] md:aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl mb-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProduct.id}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              src={activeProduct.image}
              alt={activeProduct.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {activeProduct.badge && (
            <span className="absolute top-6 left-6 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
              {activeProduct.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeProduct.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-1">{activeProduct.category}</p>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{activeProduct.name}</h3>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`price-${activeProduct.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-6"
            >
              <p className="text-3xl font-light">{activeProduct.price}</p>
              <button 
                className="px-8 py-4 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: style.accentColor }}
              >
                Add to Cart
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
