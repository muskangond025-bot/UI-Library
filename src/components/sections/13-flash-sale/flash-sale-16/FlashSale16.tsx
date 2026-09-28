import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale16Props {
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

export function FlashSale16({ section }: FlashSale16Props) {
  const { content, style } = section;
  const [isFlashing, setIsFlashing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Intense Flashing Border */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{ 
          borderWidth: '20px', 
          borderColor: isFlashing ? style.accentColor : 'transparent',
          boxShadow: isFlashing ? `inset 0 0 100px ${style.accentColor}` : 'none'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side Alert Info */}
        <div className="w-full md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="mb-8"
          >
            <ShieldAlert size={80} style={{ color: style.accentColor }} />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            {content.title}
          </h2>
          <p className="text-xl font-bold tracking-[0.2em] uppercase opacity-80 border-l-4 pl-4" style={{ borderColor: style.accentColor }}>
            {content.subtitle}
          </p>
          <div className="mt-12 animate-bounce">
            <span className="text-sm uppercase tracking-widest font-bold opacity-50">Scroll to view</span>
          </div>
        </div>

        {/* Right Side Products */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-6 group hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div 
                  className="absolute inset-0 bg-red-600/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">{product.name}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-lg line-through opacity-50">{product.oldPrice}</span>
                  <span className="text-4xl md:text-5xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>
              </div>
              
              {/* Animated Arrow */}
              <div className="hidden md:block pr-8 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600">
                  <span className="font-bold text-2xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
