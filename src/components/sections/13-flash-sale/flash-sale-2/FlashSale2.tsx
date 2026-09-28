import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale2Props {
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

export function FlashSale2({ section }: FlashSale2Props) {
  const { content, style } = section;
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Giant Split-flap Ticker */}
        <div className="flex flex-col items-center justify-center mb-24">
          <p className="text-xl font-bold tracking-[0.3em] uppercase mb-8 opacity-80">{content.title}</p>
          
          <div className="flex gap-4 md:gap-8">
            <div className="w-24 h-32 md:w-48 md:h-64 bg-black rounded-xl border-t-2 border-white/20 shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-black/80 z-10 -translate-y-1/2" />
              <span className="text-7xl md:text-[150px] font-black text-white leading-none">00</span>
            </div>
            <div className="text-7xl md:text-[150px] font-black flex items-center justify-center animate-pulse">:</div>
            <div className="w-24 h-32 md:w-48 md:h-64 bg-black rounded-xl border-t-2 border-white/20 shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-black/80 z-10 -translate-y-1/2" />
              <motion.span 
                key={timeLeft}
                initial={{ rotateX: -90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.3 }}
                className="text-7xl md:text-[150px] font-black text-white leading-none origin-bottom"
              >
                {String(timeLeft).padStart(2, '0')}
              </motion.span>
            </div>
          </div>
          
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-8 opacity-60 bg-black text-white px-6 py-2">
            {content.subtitle}
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white text-black p-4 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform"
            >
              <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 border-b-2 border-black pb-2">{product.name}</h3>
              <div className="flex justify-between items-center bg-black text-white p-3">
                <span className="text-sm line-through opacity-50">{product.oldPrice}</span>
                <span className="text-2xl font-black text-red-500">{product.newPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
