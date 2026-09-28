import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale3Props {
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

export function FlashSale3({ section }: FlashSale3Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24">
          <h2 
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter"
            style={{ 
              color: style.backgroundColor, 
              WebkitTextStroke: `2px ${style.accentColor}`,
              textShadow: `0 0 20px ${style.accentColor}` 
            }}
          >
            {content.title}
          </h2>
          <div className="inline-block mt-4 px-6 py-2 border border-white/20 text-sm font-bold tracking-[0.4em] uppercase">
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              {/* Neon Frame */}
              <div 
                className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500 animate-pulse"
                style={{ backgroundColor: style.accentColor }}
              />

              <div className="relative bg-black rounded-xl border border-white/10 overflow-hidden h-full flex flex-col">
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  {/* Digital overlay pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay pointer-events-none" />
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">{product.name}</h3>
                  <div className="flex justify-between items-end">
                    <span className="text-sm line-through opacity-50 mb-1">{product.oldPrice}</span>
                    <span 
                      className="text-4xl font-black"
                      style={{ color: style.accentColor, textShadow: `0 0 10px ${style.accentColor}` }}
                    >
                      {product.newPrice}
                    </span>
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
