import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale8Props {
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

export function FlashSale8({ section }: FlashSale8Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans bg-[#1C1917]"
      style={{ color: style.textColor }}
    >
      
      {/* Background Ticker Tape (Diagonal) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-1/4 w-[200%] h-16 flex items-center gap-8 text-black font-black uppercase text-3xl tracking-widest -rotate-12"
          style={{ backgroundColor: style.accentColor }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>FLASH SALE</span>
          ))}
        </motion.div>
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 -left-1/4 w-[200%] h-16 flex items-center gap-8 text-black font-black uppercase text-3xl tracking-widest rotate-6"
          style={{ backgroundColor: style.accentColor }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>FLASH SALE</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 bg-black/60 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-white/10">
        
        <div className="mb-16 border-l-8 pl-6" style={{ borderColor: style.accentColor }}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            {content.title}
          </h2>
          <p className="text-xl font-bold tracking-[0.2em] uppercase mt-2 opacity-70">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white text-black p-4 cursor-pointer group hover:-translate-y-2 transition-transform shadow-2xl relative"
            >
              {/* Caution Tape Corner */}
              <div 
                className="absolute -top-2 -left-2 w-24 h-24 overflow-hidden z-20 pointer-events-none"
              >
                <div 
                  className="bg-yellow-400 text-black text-[10px] font-black uppercase text-center py-1 absolute top-6 -left-6 w-32 -rotate-45"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                >
                  SALE
                </div>
              </div>

              <div className="w-full aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>

              <h3 className="text-lg font-black uppercase tracking-tight mb-2 truncate">{product.name}</h3>
              <div className="flex justify-between items-center bg-gray-100 p-2 border-2 border-dashed border-gray-300">
                <span className="text-sm font-bold text-gray-500 line-through">{product.oldPrice}</span>
                <span className="text-2xl font-black text-red-600">{product.newPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
