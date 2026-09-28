import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale7Props {
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

export function FlashSale7({ section }: FlashSale7Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono bg-black"
      style={{ color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-24 text-center group cursor-default">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter relative inline-block">
            {/* Base text */}
            <span className="relative z-10">{content.title}</span>
            {/* Glitch layers on hover */}
            <span className="absolute top-0 left-0 -ml-2 text-red-500 z-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity">{content.title}</span>
            <span className="absolute top-0 left-0 ml-2 text-blue-500 z-0 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity">{content.title}</span>
          </h2>
          <p className="text-sm font-bold tracking-[0.5em] uppercase mt-4 text-green-500 animate-pulse">
            &gt; {content.subtitle}_
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group cursor-pointer border border-green-500/20 hover:border-green-500/80 p-4 bg-green-900/10 transition-colors`}
            >
              
              <div className="w-full md:w-1/2 aspect-video bg-gray-900 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Glitch scanlines */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-green-400 transition-colors">{product.name}</h3>
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <span className="text-2xl font-bold opacity-50 text-red-500">{product.oldPrice}</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1 bg-red-500/80 -rotate-12" />
                    </div>
                  </div>
                  <span className="text-5xl font-black text-white group-hover:scale-110 transition-transform origin-left">{product.newPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
