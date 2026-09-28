import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid10Props {
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

export function ProductGrid10({ section }: ProductGrid10Props) {
  const { content, style } = section;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-6xl mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest uppercase mb-4" 
          style={{ color: style.accentColor }}
        >
          {content.subtitle}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          {content.title}
        </motion.h2>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {content.products.map((product, index) => {
          const isHovered = hoveredIndex === index;
          const isBlurry = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-square w-full rounded-2xl overflow-hidden cursor-pointer"
              style={{
                filter: isBlurry ? 'blur(8px) brightness(0.5) grayscale(0.5)' : 'none',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                zIndex: isHovered ? 10 : 1,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end w-full">
                  {product.badge && (
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div 
                  style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                    opacity: isHovered ? 1 : 0.8,
                    transition: 'all 0.4s ease'
                  }}
                >
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-xl font-light text-white">{product.price}</p>
                  
                  <div 
                    className="overflow-hidden"
                    style={{
                      height: isHovered ? 'auto' : '0px',
                      marginTop: isHovered ? '16px' : '0px',
                      opacity: isHovered ? 1 : 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <button 
                      className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-colors"
                      style={{ backgroundColor: style.accentColor, color: style.backgroundColor }}
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
