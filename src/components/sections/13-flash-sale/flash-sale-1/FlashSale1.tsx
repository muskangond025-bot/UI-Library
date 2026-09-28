import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale1Props {
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

export function FlashSale1({ section }: FlashSale1Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Background Lighting Effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: style.accentColor, clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6 p-4 rounded-full bg-white/10"
          >
            <Zap size={48} style={{ color: style.accentColor, fill: style.accentColor }} />
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">
            {content.title}
          </h2>
          <p className="text-xl font-bold tracking-[0.3em] uppercase mt-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -50, skewX: 10 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
              className="group relative cursor-pointer"
            >
              <div 
                className="w-full aspect-square bg-gray-900 overflow-hidden relative mb-6"
                style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 filter contrast-125"
                />
                
                {/* Slanted overlay line */}
                <div 
                  className="absolute top-0 right-0 bottom-0 w-2 transform translate-x-4 group-hover:-translate-x-full transition-transform duration-1000 bg-white opacity-50"
                  style={{ transform: 'skewX(-10deg)' }}
                />
              </div>

              <div className="pl-4 border-l-4" style={{ borderColor: style.accentColor }}>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 italic">{product.name}</h3>
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-black">{product.newPrice}</span>
                  <span className="text-lg opacity-40 line-through pb-1">{product.oldPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
