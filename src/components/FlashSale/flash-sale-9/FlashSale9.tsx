import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale9Props {
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

export function FlashSale9({ section }: FlashSale9Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono bg-white"
      style={{ color: style.textColor }}
    >
      {/* Radar Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[80vw] h-[80vw] border border-black rounded-full relative">
          <div className="absolute inset-0 border border-black rounded-full scale-75" />
          <div className="absolute inset-0 border border-black rounded-full scale-50" />
          <div className="absolute inset-0 border border-black rounded-full scale-25" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-black" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-red-500 origin-left"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <Target size={48} style={{ color: style.accentColor }} className="mb-4" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-4 opacity-60">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-crosshair relative"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Crosshair Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-colors pointer-events-none flex items-center justify-center">
                  <div className="w-12 h-12 border border-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-1 h-1 bg-red-500 rounded-full" />
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-500 opacity-0 group-hover:opacity-50" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-red-500 opacity-0 group-hover:opacity-50" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-lg opacity-40 line-through">{product.oldPrice}</span>
                  <span className="text-3xl font-black bg-black text-white px-3 py-1">{product.newPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
