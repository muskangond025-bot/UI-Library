import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale17Props {
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

export function Sale17({ section }: Sale17Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
          >
            {content.title}
          </motion.h2>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.products.map((product, index) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative cursor-pointer font-sans"
              >
                
                <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-8 relative border-2 border-transparent group-hover:border-black transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase rounded-full">
                    Sale
                  </div>
                </div>

                <div className="text-center h-32 relative">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                  
                  {/* Price Animation Container */}
                  <div className="relative h-16 flex justify-center items-center overflow-hidden">
                    
                    {/* Old Price (Falls down on hover) */}
                    <div className="absolute text-3xl font-medium text-gray-400 line-through transition-all duration-500 group-hover:translate-y-16 group-hover:opacity-0 group-hover:rotate-12">
                      {product.oldPrice}
                    </div>

                    {/* New Price (Comes down from top on hover) */}
                    <div 
                      className="absolute text-4xl font-black transition-all duration-500 -translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ color: style.accentColor }}
                    >
                      {product.newPrice}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
