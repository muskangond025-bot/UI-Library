import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Trending5Props {
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

export function Trending5({ section }: Trending5Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 overflow-hidden flex flex-col"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="px-4 md:px-12 mb-16 relative z-20">
        <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="flex-1 w-full flex flex-col md:flex-row relative">
        {content.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group flex-1 min-h-[300px] md:min-h-0 relative overflow-hidden cursor-pointer border-r border-black/10 last:border-0"
          >
            {/* Diagonal Clip Path for Image */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="absolute bottom-8 left-8 p-4 bg-white shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
              <p className="text-lg font-light text-black/60">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
