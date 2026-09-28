import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale12Props {
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

export function FlashSale12({ section }: FlashSale12Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-20 border-b-8 border-black pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="bg-black text-yellow-400 font-bold uppercase tracking-widest px-4 py-1 inline-block mb-4 text-xs animate-pulse">
              SYS.WARN // {content.subtitle}
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ textShadow: '4px 4px 0px #000' }}>
              {content.title}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">Status:</p>
            <p className="text-3xl font-black uppercase text-black">Active</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black text-white p-6 border-4 border-black relative group cursor-pointer hover:bg-zinc-900 transition-colors"
              style={{ boxShadow: '8px 8px 0px #000' }}
            >
              
              <div className="absolute top-0 right-0 bg-yellow-400 text-black font-black uppercase text-xs px-3 py-1 border-l-4 border-b-4 border-black">
                OVERRIDE
              </div>

              <div className="w-full aspect-video bg-gray-800 border-2 border-zinc-700 mb-6 overflow-hidden relative filter grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight mb-6">{product.name}</h3>
              
              <div className="flex justify-between items-center border-t-2 border-zinc-800 pt-4">
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-zinc-500 font-bold">MSRP</span>
                  <span className="text-lg line-through text-zinc-400">{product.oldPrice}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs uppercase text-yellow-400 font-bold animate-pulse">HACKED PRICE</span>
                  <span className="text-4xl font-black text-yellow-400">{product.newPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
