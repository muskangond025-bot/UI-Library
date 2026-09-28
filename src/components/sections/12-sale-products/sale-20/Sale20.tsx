import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  minutes: number;
}

interface Sale20Props {
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

export function Sale20({ section }: Sale20Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: style.accentColor }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center justify-center mb-24">
          <div className="flex items-center gap-4 mb-4" style={{ color: style.accentColor }}>
            <Clock size={40} className="animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <p className="text-xl font-bold tracking-[0.2em] uppercase opacity-70">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              
              <div className="bg-[#111] p-4 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors">
                
                {/* Individual Timer */}
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-white/40 uppercase">Ends In</span>
                  <div className="flex items-center gap-2" style={{ color: style.accentColor }}>
                    <span className="animate-pulse w-2 h-2 rounded-full bg-current" />
                    <span className="font-bold">{product.minutes}:00 Mins</span>
                  </div>
                </div>

                <div className="w-full aspect-square bg-black overflow-hidden relative rounded-lg mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-50" />
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight mb-4 truncate text-white">{product.name}</h3>
                
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black text-white">{product.newPrice}</span>
                  <span className="text-sm text-white/40 line-through pb-1">{product.oldPrice}</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
