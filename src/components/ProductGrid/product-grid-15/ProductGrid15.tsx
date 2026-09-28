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

interface ProductGrid15Props {
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

export function ProductGrid15({ section }: ProductGrid15Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-6xl mb-24 text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text" style={{ WebkitTextStroke: `2px ${style.textColor}`, color: 'transparent' }}>
          {content.title}
        </h2>
        <p className="text-lg font-bold tracking-widest uppercase mt-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 pt-12">
        {content.products.map((product, index) => {
          // Generate a pseudo-random rotation between -8 and 8 degrees
          const rotation = (index % 2 === 0 ? 1 : -1) * ((index * 3) % 8 + 3);
          
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              className="bg-white p-4 pb-8 md:p-6 md:pb-12 rounded-sm shadow-xl cursor-pointer flex flex-col relative"
              style={{ color: '#000' }}
            >
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 rotate-12 bg-yellow-400 text-black text-xs font-black px-3 py-1 uppercase tracking-widest shadow-md border-2 border-black">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="text-center font-serif">
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-gray-500 italic mb-2">{product.category}</p>
                <p className="text-xl font-bold">{product.price}</p>
              </div>

              {/* Tape effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-3 mix-blend-overlay border border-white/20" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
