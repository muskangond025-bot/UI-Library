import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale5Props {
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

export function Sale5({ section }: Sale5Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${style.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${style.accentColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
            style={{ color: style.accentColor, textShadow: `0 0 20px ${style.accentColor}` }}
          >
            {content.title}
          </motion.h2>
          <div className="inline-block px-4 py-2 mt-4 bg-white text-black font-bold text-sm tracking-[0.3em] uppercase">
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div 
                className="absolute -inset-0.5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: style.accentColor }}
              />

              <div className="relative bg-black rounded-xl p-4 border border-white/10 group-hover:border-transparent transition-colors z-10">
                <div className="w-full aspect-square overflow-hidden mb-4 relative rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{product.name}</h3>
                
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/50 line-through mb-1">{product.oldPrice}</span>
                    <span className="text-2xl font-bold" style={{ color: style.accentColor, textShadow: `0 0 10px ${style.accentColor}` }}>
                      {product.newPrice}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-xl pb-1 group-hover:bg-white group-hover:text-black transition-colors">
                    +
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
