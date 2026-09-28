import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  status: string;
}

interface Trending1Props {
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

export function Trending1({ section }: Trending1Props) {
  const { content, style } = section;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [content.products.length]);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute inset-0 z-0 opacity-20 blur-[100px]">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ backgroundColor: style.accentColor }}
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <div className="flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Flame size={20} style={{ color: style.accentColor }} />
            <span className="text-sm font-bold uppercase tracking-widest">{content.subtitle}</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            {content.title}
          </h2>

          <div className="flex gap-4 mb-12">
            {content.products.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-16' : 'w-4 opacity-30'}`}
                style={{ backgroundColor: idx === currentIndex ? style.accentColor : style.textColor }}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl p-6 md:p-8 flex flex-col"
              style={{ perspective: 1000 }}
            >
              <div className="w-full flex-1 rounded-2xl overflow-hidden relative mb-6">
                <img 
                  src={content.products[currentIndex].image} 
                  alt={content.products[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  {content.products[currentIndex].status}
                </div>
              </div>
              
              <div className="flex justify-between items-end mt-auto">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none max-w-[70%]">
                  {content.products[currentIndex].name}
                </h3>
                <p className="text-2xl font-light" style={{ color: style.accentColor }}>
                  {content.products[currentIndex].price}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
