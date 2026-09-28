import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale11Props {
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

export function FlashSale11({ section }: FlashSale11Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Vortex Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[150vw] h-[150vw] border-[100px] border-dashed rounded-full"
          style={{ borderColor: style.accentColor }}
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.5, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-[100vw] border-[50px] border-dashed rounded-full"
          style={{ borderColor: style.accentColor }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20 bg-black/50 p-8 rounded-full backdrop-blur-md border border-white/10">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: style.accentColor }}>
            {content.title}
          </h2>
          <p className="text-lg font-bold tracking-[0.4em] uppercase mt-2">
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="w-full md:w-80 group cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-white transition-colors duration-500 shadow-[0_0_50px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_100px_rgba(168,85,247,0.6)]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-black uppercase mb-4 text-white">{product.name}</h3>
                  <span className="text-sm line-through text-white/50 mb-1">{product.oldPrice}</span>
                  <span className="text-5xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>
              </div>
              
              {/* Default state info (hidden on hover) */}
              <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                 <h3 className="text-xl font-bold uppercase">{product.name}</h3>
                 <span className="text-2xl font-black mt-2 block" style={{ color: style.accentColor }}>{product.newPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
