import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale16Props {
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

export function Sale16({ section }: Sale16Props) {
  const { content, style } = section;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % content.products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + content.products.length) % content.products.length);
  };

  const currentProduct = content.products[currentIndex];

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden font-sans flex items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      
      {/* Background massive text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <h1 className="text-[30vw] font-black uppercase whitespace-nowrap" style={{ color: style.accentColor }}>
          SALE
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 h-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm font-bold tracking-[0.4em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
            {content.title}
          </h2>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Right Side Carousel */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-[70vh] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl bg-white/5">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-white">
                    {currentProduct.name}
                  </h3>
                  <div className="flex items-center gap-6">
                    <span className="text-2xl opacity-50 line-through text-white">{currentProduct.oldPrice}</span>
                    <span className="text-5xl md:text-6xl font-black" style={{ color: style.accentColor }}>{currentProduct.newPrice}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
