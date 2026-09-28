import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel13Props {
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

export function ProductCarousel13({ section }: ProductCarousel13Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const DURATION = 5000; // 5 seconds per slide

  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setActiveIndex((prev) => (prev + 1) % content.products.length);
        setProgress(0);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex, content.products.length]);

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 text-center z-20">
        <h2 className="text-2xl font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.title}
        </h2>
        <p className="text-sm text-gray-400 font-mono uppercase">
          {content.subtitle}
        </p>
      </div>

      <div className="relative w-full max-w-lg aspect-square mb-12">
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10">
          <circle 
            cx="50%" 
            cy="50%" 
            r="48%" 
            fill="none" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="2" 
          />
          <circle 
            cx="50%" 
            cy="50%" 
            r="48%" 
            fill="none" 
            stroke={style.accentColor}
            strokeWidth="4" 
            strokeDasharray="301" // Approximate circumference (2 * pi * 48)
            strokeDashoffset={301 - (301 * progress) / 100}
            className="transition-all duration-75 ease-linear"
          />
        </svg>

        <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              src={activeProduct.image}
              alt={activeProduct.name}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="text-center z-20 max-w-xl h-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeProduct.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeProduct.badge && (
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                {activeProduct.badge}
              </span>
            )}
            <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-2">{activeProduct.name}</h3>
            <p className="text-2xl font-light text-gray-300">{activeProduct.price}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 flex gap-4 z-20">
        {content.products.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              setProgress(0);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${idx === activeIndex ? 'bg-white' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
