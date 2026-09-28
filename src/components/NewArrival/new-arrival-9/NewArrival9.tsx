import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
}

interface NewArrival9Props {
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

export function NewArrival9({ section }: NewArrival9Props) {
  const { content, style } = section;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % content.products.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + content.products.length) % content.products.length);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={content.products[currentIndex].image} 
            alt={content.products[currentIndex].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Typography */}
        <div className="w-full md:w-1/3 flex flex-col justify-center text-white">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
            {content.title}
          </h2>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Active Product Card */}
        <div className="w-full md:w-2/3 flex justify-center md:justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={content.products[currentIndex].image} 
                  alt={content.products[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                {content.products[currentIndex].badge && (
                  <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                    {content.products[currentIndex].badge}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-end text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Item {currentIndex + 1} of {content.products.length}</p>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{content.products[currentIndex].name}</h3>
                </div>
                <p className="text-2xl font-light">{content.products[currentIndex].price}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Progress */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {content.products.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}
