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

interface FlashSale19Props {
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

export function FlashSale19({ section }: FlashSale19Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans bg-white text-black"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-24 group cursor-default">
          <motion.div
            animate={{ opacity: [1, 0, 1, 1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 0.9, 1] }}
          >
            <h2 className="text-7xl md:text-[120px] font-black uppercase tracking-tighter leading-none mix-blend-difference">
              {content.title}
            </h2>
          </motion.div>
          <div className="bg-yellow-400 text-black px-6 py-2 mt-4 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <Zap size={16} fill="currentColor" />
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gray-100 overflow-hidden group cursor-pointer"
            >
              
              <div className="w-full aspect-[4/5] relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Strobe hover effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-[strobe_0.1s_ease-in-out_infinite] mix-blend-overlay pointer-events-none" />
                
                <style>{`
                  @keyframes strobe {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                  }
                `}</style>

                {/* Price block that slides up */}
                <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-2 truncate text-black">{product.name}</h3>
                  <div className="flex justify-between items-center text-black">
                    <span className="text-sm line-through opacity-50 font-bold">{product.oldPrice}</span>
                    <span className="text-4xl font-black">{product.newPrice}</span>
                  </div>
                </div>
              </div>

              {/* Default state title (hidden on hover) */}
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40 group-hover:opacity-0 transition-opacity duration-300">
                 <h3 className="text-3xl font-black uppercase text-center text-white drop-shadow-xl">{product.name}</h3>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
