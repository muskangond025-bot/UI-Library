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

interface ProductGrid8Props {
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

export function ProductGrid8({ section }: ProductGrid8Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20 pointer-events-none">
        <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-[1400px] h-[60vh] md:h-[70vh] flex flex-col md:flex-row gap-2 mt-24">
        {content.products.map((product, index) => {
          const isActive = index === activeIndex;
          
          return (
            <motion.div
              key={product.id}
              layout
              onMouseEnter={() => setActiveIndex(index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-gray-900 group"
              initial={false}
              animate={{ 
                flex: isActive ? (window.innerWidth < 768 ? 4 : 5) : 1,
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Vertical Title (when collapsed) */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center p-4 md:hidden pointer-events-none"
                animate={{ opacity: isActive ? 0 : 1 }}
              >
                <h3 className="text-white text-xl font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">
                  {product.name}
                </h3>
              </motion.div>
              
              <div className="hidden md:flex absolute inset-0 items-end justify-center pb-8 pointer-events-none">
                <motion.h3 
                  className="text-white text-2xl font-bold uppercase tracking-widest -rotate-90 origin-bottom whitespace-nowrap"
                  animate={{ opacity: isActive ? 0 : 1 }}
                >
                  {product.name}
                </motion.h3>
              </div>

              {/* Full Details (when expanded) */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 pointer-events-none"
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-mono uppercase tracking-widest mb-2 inline-block" style={{ color: style.accentColor }}>
                    {product.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-2xl text-white/90 font-light mb-2">{product.price}</p>
                  </div>
                  
                  <div className="mt-6 flex gap-4 pointer-events-auto">
                    <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors rounded-sm">
                      View Details
                    </button>
                    {product.badge && (
                      <span className="px-4 py-3 border border-white/30 text-white font-bold uppercase tracking-wider text-sm rounded-sm backdrop-blur-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
