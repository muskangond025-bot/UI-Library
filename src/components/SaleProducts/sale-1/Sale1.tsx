import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale1Props {
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

export function Sale1({ section }: Sale1Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Huge background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none z-0">
        <h1 className="text-[20vw] font-black uppercase tracking-tighter leading-none" style={{ color: style.accentColor }}>
          {content.title}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        <div className="mb-16">
          <p className="text-xl font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        {/* Horizontal scroll container on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group min-w-[280px] md:min-w-0 snap-center cursor-pointer"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Sale Tag */}
                <div 
                  className="absolute top-4 left-4 text-white text-xs font-bold uppercase tracking-widest px-3 py-1"
                  style={{ backgroundColor: style.accentColor }}
                >
                  Sale
                </div>
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold" style={{ color: style.accentColor }}>{product.newPrice}</span>
                <span className="text-sm font-medium text-gray-400 line-through">{product.oldPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
