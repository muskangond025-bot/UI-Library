import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid14Props {
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

export function ProductGrid14({ section }: ProductGrid14Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full pb-32 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-4xl pt-24 pb-16 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase mb-4" 
          style={{ color: style.accentColor }}
        >
          {content.subtitle}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
        >
          {content.title}
        </motion.h2>
      </div>

      <div className="w-full max-w-4xl px-4 flex flex-col gap-12 relative z-10">
        {content.products.map((product, index) => {
          return (
            <div
              key={product.id}
              className="sticky w-full"
              style={{ 
                top: `calc(15vh + ${index * 40}px)`
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-8 md:p-12 relative"
                style={{ backgroundColor: '#ffffff' }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
                  <div>
                    <span className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg mb-6 inline-block">
                      {product.badge || product.category}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">{product.name}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <p className="text-3xl font-light text-white">{product.price}</p>
                    <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-transform duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
