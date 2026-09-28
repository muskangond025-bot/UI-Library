import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale6Props {
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

export function FlashSale6({ section }: FlashSale6Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans bg-[#0F172A]"
      style={{ color: style.textColor }}
    >
      {/* Siren background effects */}
      <motion.div 
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute top-0 left-0 w-1/2 h-full bg-red-600/30 filter blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/30 filter blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-red-500 mb-6"
          >
            <AlertCircle size={64} />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            {content.title}
          </h2>
          <div className="mt-4 px-6 py-2 bg-red-600 text-white font-bold tracking-[0.3em] uppercase animate-pulse">
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="w-full aspect-square bg-gray-900 rounded-3xl overflow-hidden relative mb-6 border border-white/10 group-hover:border-red-500 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-sm line-through opacity-50">{product.oldPrice}</span>
                  <span className="text-4xl font-black text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">{product.newPrice}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-center">{product.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
