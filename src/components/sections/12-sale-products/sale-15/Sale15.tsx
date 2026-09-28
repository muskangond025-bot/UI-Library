import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale15Props {
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

export function Sale15({ section }: Sale15Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative w-full h-[400px] md:h-[500px] overflow-hidden cursor-pointer rounded-2xl flex"
            >
              
              {/* Background Image (Shared) */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Left Side (Before / Full Price) */}
              <div className="w-1/2 h-full relative z-10 border-r border-white/20 bg-black/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500 flex flex-col justify-center p-8 md:p-16 text-white">
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Original</span>
                <span className="text-3xl md:text-5xl font-light line-through opacity-80">{product.oldPrice}</span>
              </div>

              {/* Right Side (After / Sale Price) */}
              <div className="w-1/2 h-full relative z-10 flex flex-col justify-center p-8 md:p-16 text-white bg-gradient-to-r from-transparent to-black/60">
                <div className="ml-auto text-right">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2 block" style={{ color: style.accentColor }}>Now</span>
                  <span className="text-5xl md:text-7xl font-black tracking-tighter" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>
              </div>

              {/* Product Name Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-center pointer-events-none">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-lg">
                  {product.name}
                </h3>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
