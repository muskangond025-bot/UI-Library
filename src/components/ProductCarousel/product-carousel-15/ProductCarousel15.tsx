import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel15Props {
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

export function ProductCarousel15({ section }: ProductCarousel15Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((prev) => (prev === 0 ? content.products.length - 1 : prev - 1));
  const next = () => setActiveIndex((prev) => (prev === content.products.length - 1 ? 0 : prev + 1));

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-16"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/3 z-20 md:text-right">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          {content.title}
        </h2>
        <p className="text-sm font-bold tracking-widest uppercase mb-12" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>

        <div className="flex md:flex-col gap-4 md:items-end justify-center">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowUp size={20} className="hidden md:block" />
            <ArrowDown size={20} className="md:hidden" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowDown size={20} className="hidden md:block" />
            <ArrowUp size={20} className="md:hidden" />
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] relative z-10 flex flex-col items-center justify-center perspective-1000">
        <AnimatePresence>
          {content.products.map((product, index) => {
            let diff = index - activeIndex;
            if (diff < 0) diff += content.products.length;

            if (diff > 2 && diff !== content.products.length - 1) return null;

            const isFading = index === (activeIndex - 1 + content.products.length) % content.products.length;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: -100, scale: 0.8 }}
                animate={{
                  opacity: isFading ? 0 : 1 - (diff * 0.15),
                  y: isFading ? -200 : diff * 80,
                  scale: isFading ? 1.1 : 1 - (diff * 0.05),
                  zIndex: 10 - diff
                }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 cursor-pointer"
                onClick={diff === 0 ? next : undefined}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  {product.badge && (
                    <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-2">
                      {product.badge}
                    </span>
                  )}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/60 font-mono text-xs uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                    </div>
                    <p className="text-2xl font-light text-white">{product.price}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
