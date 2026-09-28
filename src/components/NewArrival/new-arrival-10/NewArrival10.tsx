import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival10Props {
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

export function NewArrival10({ section }: NewArrival10Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const total = content.products.length;

  const radius = 300;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const currentRadius = isMobile ? 140 : radius;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-0 right-0 text-center z-20 pointer-events-none">
        <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center mt-24">
        
        {/* Orbit Path (Visual Only) */}
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-8 rounded-full border border-white/5" />

        {/* Orbiting Elements */}
        {content.products.map((product, index) => {
          const angle = (index * (360 / total)) * (Math.PI / 180);
          const x = Math.sin(angle) * currentRadius;
          const y = -Math.cos(angle) * currentRadius;
          const isActive = activeIndex === index;

          return (
            <button
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 -mt-6 -ml-6 md:-mt-8 md:-ml-8 rounded-full overflow-hidden border-2 transition-all duration-300 group shadow-lg"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.2 : 1})`,
                borderColor: isActive ? style.accentColor : 'transparent',
                zIndex: isActive ? 20 : 10
              }}
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              {isActive && <div className="absolute inset-0 bg-black/20" />}
            </button>
          );
        })}

        {/* Center Main Detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full h-full rounded-full overflow-hidden relative shadow-2xl border-4 border-white/10"
            >
              <img 
                src={content.products[activeIndex].image} 
                alt={content.products[activeIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2 leading-tight">
                  {content.products[activeIndex].name}
                </h3>
                <p className="text-xl md:text-2xl font-light" style={{ color: style.accentColor }}>
                  {content.products[activeIndex].price}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
