import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale3Props {
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

export function Sale3({ section }: Sale3Props) {
  const { content, style } = section;

  // Fake countdown
  const [timeLeft, setTimeLeft] = useState({ h: 11, m: 59, s: 59 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Sticky Header with Timer */}
        <div className="sticky top-0 z-50 py-6 mb-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xl">FS</span>
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">{content.title}</h2>
              <p className="text-xs font-bold tracking-widest uppercase opacity-50">{content.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full" style={{ backgroundColor: style.accentColor }}>
            <Timer className="text-white" size={20} />
            <div className="font-mono text-xl font-bold text-white tracking-widest">
              {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.products.map((product, index) => {
            // Make some items taller for masonry effect
            const isTall = index === 2 || index === 5;
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer flex flex-col ${isTall ? 'lg:row-span-2' : ''}`}
              >
                <div className={`w-full ${isTall ? 'aspect-[3/5]' : 'aspect-square'} rounded-2xl overflow-hidden bg-gray-100 mb-4 relative`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex gap-2 mb-1">
                      <span className="text-white/70 line-through text-lg">{product.oldPrice}</span>
                      <span className="text-white font-bold text-2xl">{product.newPrice}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight px-2">{product.name}</h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
