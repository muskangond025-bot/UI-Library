import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  stock: number;
}

interface Sale14Props {
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

export function Sale14({ section }: Sale14Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <div className="px-4 py-2 border border-white/20 rounded-lg text-sm font-bold uppercase tracking-widest text-white/50">
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.products.map((product, index) => {
            const stockColor = product.stock <= 3 ? '#EF4444' : '#EAB308';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer border border-white/10 p-2 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-full aspect-square bg-black overflow-hidden mb-4 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Stock Indicator */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-xs font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: stockColor }} />
                      <span style={{ color: stockColor }}>{product.stock} LEFT</span>
                    </div>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-4 truncate">{product.name}</h3>
                  <div className="flex justify-between items-end">
                    <span className="text-2xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                    <span className="text-sm opacity-40 line-through">{product.oldPrice}</span>
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
