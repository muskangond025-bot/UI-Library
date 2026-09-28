import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

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

interface BestSeller6Props {
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

export function BestSeller6({ section }: BestSeller6Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % content.products.length);
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">
          {content.title}
        </h2>

        <div className="max-w-md w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative"
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12" style={{ backgroundColor: style.accentColor, color: '#fff' }}>
                <span className="text-[10px] font-bold uppercase leading-none mt-1">Rank</span>
                <span className="text-2xl font-black leading-none">#{activeIndex + 1}</span>
              </div>

              {content.products[activeIndex].badge && (
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 border border-white/10">
                  {content.products[activeIndex].badge}
                </span>
              )}
              
              <h3 className="text-3xl font-bold mb-2">{content.products[activeIndex].name}</h3>
              <p className="text-sm text-gray-400 font-mono uppercase tracking-widest mb-6">{content.products[activeIndex].category}</p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(content.products[activeIndex].rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="font-bold">{content.products[activeIndex].rating}</span>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-3xl font-light">{content.products[activeIndex].price}</p>
                <button 
                  className="px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                  style={{ backgroundColor: style.accentColor, color: '#fff' }}
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative flex items-center justify-center perspective-1000 p-8 md:p-16">
        <AnimatePresence>
          {content.products.map((product, index) => {
            let offset = index - activeIndex;
            if (offset < 0) offset += content.products.length;

            const isFading = index === (activeIndex - 1 + content.products.length) % content.products.length;

            if (offset > 2 && !isFading) return null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8, y: -100, rotateX: 20 }}
                animate={{
                  opacity: isFading ? 0 : 1 - (offset * 0.2),
                  scale: isFading ? 1.1 : 1 - (offset * 0.05),
                  y: isFading ? -200 : offset * 30,
                  rotateX: isFading ? -20 : 0,
                  zIndex: 10 - offset
                }}
                exit={{ opacity: 0, y: -200, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute w-full max-w-[320px] md:max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 cursor-pointer"
                onClick={handleNext}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {offset === 0 && (
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center animate-bounce shadow-lg">
                      <ArrowRight size={20} />
                    </div>
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
