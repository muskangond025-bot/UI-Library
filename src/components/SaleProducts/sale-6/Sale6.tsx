import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  discount: string;
}

interface Sale6Props {
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

export function Sale6({ section }: Sale6Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <p className="text-sm font-bold tracking-[0.4em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white mb-6 relative shadow-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scratch Card Overlay */}
                  <div className="absolute inset-0 backdrop-blur-xl bg-black/40 group-hover:opacity-0 transition-opacity duration-700 flex flex-col items-center justify-center text-white">
                    <span className="text-4xl">🏷️</span>
                    <span className="text-sm font-bold uppercase tracking-widest mt-4">Hover to Reveal</span>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center text-white p-6 text-center">
                    <span 
                      className="text-4xl font-black uppercase tracking-tighter mb-2"
                      style={{ color: style.accentColor }}
                    >
                      {product.discount}
                    </span>
                    <div className="w-12 h-1 bg-white/20 my-4" />
                    <span className="text-xl line-through text-white/50 mb-1">{product.oldPrice}</span>
                    <span className="text-3xl font-bold">{product.newPrice}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-center">{product.name}</h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
