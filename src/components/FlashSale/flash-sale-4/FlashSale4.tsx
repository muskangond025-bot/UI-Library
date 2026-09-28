import React from 'react';
import { motion } from 'framer-motion';
import { FastForward } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale4Props {
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

export function FlashSale4({ section }: FlashSale4Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8 border-b-4 pb-8" style={{ borderColor: style.textColor }}>
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <FastForward size={32} style={{ color: style.accentColor }} />
              <p className="text-sm font-bold tracking-[0.4em] uppercase" style={{ color: style.accentColor }}>
                {content.subtitle}
              </p>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
              {content.title}
            </h2>
          </div>
          <button 
            className="px-8 py-4 text-white font-bold uppercase tracking-widest text-sm italic hover:scale-105 transition-transform"
            style={{ backgroundColor: style.accentColor }}
          >
            Shop Now
          </button>
        </div>

        <div className="flex flex-col gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col md:flex-row gap-8 items-center cursor-pointer"
            >
              {/* Image with motion blur simulation */}
              <div className="w-full md:w-1/2 lg:w-2/3 aspect-[21/9] bg-gray-200 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter blur-[2px] group-hover:blur-0 grayscale group-hover:grayscale-0"
                  style={{ transform: 'scale(1.05)' }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center px-4">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-4 blur-[1px] group-hover:blur-0 transition-all duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-6">
                  <span className="text-5xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                  <span className="text-2xl line-through opacity-40">{product.oldPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
