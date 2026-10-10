import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival3Props {
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

export function NewArrival3({ section }: NewArrival3Props) {
  const { content, style } = section;

  // Duplicate products for infinite scroll effect
  const scrollingProducts = [...content.products, ...content.products];

  return (
    <div 
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="px-4 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>
        <button 
          className="border-b-2 pb-1 font-bold uppercase tracking-widest text-sm hover:text-gray-500 transition-colors self-start md:self-auto"
          style={{ borderColor: style.textColor }}
        >
          View All Drops
        </button>
      </div>

      <div className="w-full relative group">
        <motion.div 
          className="flex gap-6 px-4 cursor-grab active:cursor-grabbing w-max"
          animate={{ x: [0, -1920] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 30, 
              ease: "linear" 
            } 
          }}
        >
          {scrollingProducts.map((product, i) => (
            <div 
              key={`${product.id}-3`}
              className="w-[280px] md:w-[350px] shrink-0 flex flex-col group/card"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold uppercase tracking-tight max-w-[70%]">{product.name}</h3>
                <p className="text-lg font-light">{product.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
