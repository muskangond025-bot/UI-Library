import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge: string | null;
}

interface NewArrival15Props {
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

export function NewArrival15({ section }: NewArrival15Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-8 mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-2">
              {content.title}
            </h2>
            <p className="text-xs tracking-widest uppercase opacity-50">
              {content.subtitle}
            </p>
          </div>
          <button className="text-xs uppercase tracking-widest border border-black/20 px-6 py-2 hover:bg-black hover:text-white transition-colors">
            View Exhibition
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-black/10">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="bg-white p-8 flex flex-col group cursor-pointer relative"
            >
              {product.badge && (
                <div className="absolute top-8 right-8 z-10">
                  <span className="text-[10px] uppercase tracking-widest bg-black text-white px-2 py-1">
                    {product.badge}
                  </span>
                </div>
              )}
              
              <div className="w-full aspect-[3/4] overflow-hidden mb-8 bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex justify-between items-start border-t border-black/10 pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">{product.name}</h3>
                <p className="text-sm font-light">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
