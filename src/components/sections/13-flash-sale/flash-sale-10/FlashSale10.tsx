import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale10Props {
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

export function FlashSale10({ section }: FlashSale10Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans bg-[#7F1D1D]"
      style={{ color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [-5, 5, -5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🔥
          </motion.div>
          <h2 
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter"
            style={{ 
              color: style.textColor,
              textShadow: `0 4px 20px ${style.accentColor}` 
            }}
          >
            {content.title}
          </h2>
          <div className="bg-black text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mt-6 animate-pulse">
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#450a0a] rounded-xl overflow-hidden cursor-pointer group border-2 border-transparent hover:border-orange-500 transition-colors shadow-2xl"
            >
              <div className="w-full aspect-[4/5] relative bg-black">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Fire gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-orange-600">
                  <span className="text-white font-black uppercase tracking-widest text-sm">Grab it now!</span>
                </div>
              </div>

              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-white truncate w-full text-center">{product.name}</h3>
                <div className="flex gap-4 items-center">
                  <span className="text-sm line-through text-white/50">{product.oldPrice}</span>
                  <span className="text-3xl font-black text-orange-400">{product.newPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
