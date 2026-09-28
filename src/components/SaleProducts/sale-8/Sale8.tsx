import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale8Props {
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

export function Sale8({ section }: Sale8Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mix-blend-multiply opacity-20" style={{ color: style.accentColor }}>
          {content.title}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full min-h-[80vh] relative z-10 flex items-center justify-center">
        
        <div className="relative w-full h-[600px] flex items-center justify-center">
          {content.products.map((product, index) => {
            // Haphazard scattering
            const rotate = (index % 2 === 0 ? 1 : -1) * (Math.random() * 30 + 10);
            const x = (Math.random() - 0.5) * 400;
            const y = (Math.random() - 0.5) * 200;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate, x, y }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  damping: 15
                }}
                className="absolute w-[250px] md:w-[300px] bg-white p-4 shadow-xl cursor-pointer group"
                style={{ zIndex: index }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xl shadow-lg rotate-12 transform group-hover:scale-110 transition-transform">
                  SALE
                </div>

                <div className="w-full aspect-[4/5] bg-gray-100 mb-4 overflow-hidden border border-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center font-sans">
                  <h3 className="text-lg font-bold text-gray-900 uppercase truncate mb-1">{product.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm font-medium text-gray-400 line-through">{product.oldPrice}</span>
                    <span className="text-xl font-black text-red-600">{product.newPrice}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <p className="text-2xl md:text-4xl font-black uppercase tracking-widest bg-blue-900 text-yellow-300 px-6 py-3 border-4 border-black transform rotate-[-5deg]">
          {content.subtitle}
        </p>
      </div>
    </div>
  );
}
