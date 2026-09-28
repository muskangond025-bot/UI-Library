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

interface ProductGrid17Props {
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

export function ProductGrid17({ section }: ProductGrid17Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full px-4 md:px-12 lg:px-24 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-widest uppercase mt-2" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24">
        {/* CSS Multi-column layout for true masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative break-inside-avoid overflow-hidden group cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {product.badge && (
                <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest z-10">
                  {product.badge}
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-lg font-light text-white">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
