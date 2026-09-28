import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale13Props {
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

export function Sale13({ section }: Sale13Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-serif"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Massive Spinning Coin / Badge */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center perspective-1000">
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-current flex flex-col items-center justify-center bg-[#18181B]"
            style={{ 
              transformStyle: 'preserve-3d', 
              color: style.accentColor,
              boxShadow: `0 0 50px ${style.accentColor}40` 
            }}
          >
            {/* Front face content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
              <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter">SALE</span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase mt-2">50% OFF</span>
            </div>
          </motion.div>

          <div className="mt-16 text-center font-sans">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">{content.title}</h2>
            <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-70">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Product Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer font-sans"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-white/5 mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold uppercase tracking-tight">{product.name}</h3>
                <div className="flex flex-col items-end">
                  <span className="text-sm line-through opacity-50 mb-1">{product.oldPrice}</span>
                  <span className="text-xl font-bold" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
