import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale12Props {
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

export function Sale12({ section }: Sale12Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden bg-gray-50 flex items-center"
      style={{ color: style.textColor }}
    >
      
      {/* Animated blob backgrounds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        style={{ backgroundColor: style.accentColor }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{ backgroundColor: '#FCD34D' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-xl text-black">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.3em] uppercase mt-4 text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-white/60 transition-colors"
            >
              
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white flex flex-col items-center">
                  <span className="text-xs text-gray-500 line-through mb-1">{product.oldPrice}</span>
                  <span className="text-xl font-black text-black leading-none">{product.newPrice}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-center mb-2 px-2 text-black">{product.name}</h3>
              <div className="flex justify-center pb-2">
                <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 transition-colors">
                  Quick View
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
