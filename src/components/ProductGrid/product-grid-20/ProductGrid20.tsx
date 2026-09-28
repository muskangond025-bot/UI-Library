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

interface ProductGrid20Props {
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

export function ProductGrid20({ section }: ProductGrid20Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-8 lg:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-[1600px] mb-12 border-b border-gray-200 pb-8 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-5xl md:text-8xl font-serif italic">
            {content.title}
          </h2>
        </div>
        <p className="text-sm font-bold uppercase tracking-widest hidden md:block" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      {/* Magazine Masterpiece Grid */}
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-8 lg:h-[800px]">
        {content.products.map((product, index) => {
          let layoutClasses = "";
          
          if (index === 0) {
            // Main Hero Item
            layoutClasses = "md:col-span-8 md:row-span-2";
          } else if (index === 1) {
            // Top Right Wide
            layoutClasses = "md:col-span-4 md:row-span-1";
          } else if (index === 2) {
            // Bottom Right Small 1
            layoutClasses = "md:col-span-2 md:row-span-1";
          } else if (index === 3) {
            // Bottom Right Small 2
            layoutClasses = "md:col-span-2 md:row-span-1";
          }

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative bg-gray-100 overflow-hidden cursor-pointer ${layoutClasses} min-h-[300px]`}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  {product.badge && (
                    <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/80 text-xs font-mono uppercase tracking-widest mb-2">
                    {product.category}
                  </p>
                  <div className="flex justify-between items-end">
                    <h3 className={`font-bold text-white leading-none ${index === 0 ? 'text-4xl md:text-7xl mb-2' : 'text-2xl mb-1'}`}>
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-xl font-light text-white">{product.price}</p>
                    <span className="text-sm font-bold text-white uppercase border-b border-white pb-1">Shop Now</span>
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
