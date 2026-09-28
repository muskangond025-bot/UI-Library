import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  timeLeft: string;
}

interface Trending13Props {
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

export function Trending13({ section }: Trending13Props) {
  const { content, style } = section;

  // Simple countdown simulation for visual effect
  const [seconds, setSeconds] = useState(59);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-current pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase mt-2 opacity-60">
              {content.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8 md:mt-0 px-6 py-3 rounded-full animate-pulse" style={{ backgroundColor: style.accentColor, color: '#fff' }}>
            <Timer size={24} />
            <span className="font-bold text-xl uppercase tracking-widest">Ending Soon</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => {
            // Fake the countdown string by replacing seconds
            const timeStr = product.timeLeft.slice(0, -2) + String(seconds).padStart(2, '0');

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute top-4 left-4 z-10 bg-white text-black font-mono font-bold text-lg px-3 py-1 rounded shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {timeStr}
                </div>

                <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-4 border-2 border-transparent group-hover:border-current transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold uppercase tracking-tight max-w-[70%]">{product.name}</h3>
                  <p className="text-xl font-bold" style={{ color: style.accentColor }}>{product.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
