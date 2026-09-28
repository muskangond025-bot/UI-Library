import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival14Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      row1: Product[];
      row2: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function NewArrival14({ section }: NewArrival14Props) {
  const { content, style } = section;

  const duplicatedRow1 = [...content.row1, ...content.row1, ...content.row1];
  const duplicatedRow2 = [...content.row2, ...content.row2, ...content.row2];

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="w-[300px] md:w-[400px] shrink-0 p-4">
      <div className="w-full flex flex-col group cursor-pointer">
        <div className="w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10 relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold uppercase tracking-tight max-w-[70%]">{product.name}</h3>
          <p className="text-xl font-light text-white/60">{product.price}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="px-4 md:px-12 mb-16 text-center">
        <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full flex flex-col gap-8 md:gap-12 relative overflow-hidden">
        
        {/* Row 1 - Moves Left */}
        <motion.div 
          className="flex w-max"
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 30, 
              ease: "linear" 
            } 
          }}
        >
          {duplicatedRow1.map((product, i) => (
            <ProductCard key={`r1-${product.id}-${i}`} product={product} />
          ))}
        </motion.div>

        {/* Row 2 - Moves Right */}
        <motion.div 
          className="flex w-max"
          animate={{ x: [-1000, 0] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 35, 
              ease: "linear" 
            } 
          }}
        >
          {duplicatedRow2.map((product, i) => (
            <ProductCard key={`r2-${product.id}-${i}`} product={product} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}
