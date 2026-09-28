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

interface ProductGrid3Props {
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

export function ProductGrid3({ section }: ProductGrid3Props) {
  const { content, style } = section;

  // Split products for masonry layout
  const col1 = content.products.filter((_, i) => i % 2 === 0);
  const col2 = content.products.filter((_, i) => i % 2 === 1);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-6xl text-center mb-20">
        <h2 className="text-6xl md:text-8xl font-serif italic mb-6">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl font-light tracking-wide uppercase" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Column 1 */}
        <div className="w-full md:w-1/2 flex flex-col gap-16 md:mt-24">
          {col1.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative overflow-hidden w-full mb-6 bg-gray-100" style={{ aspectRatio: index % 2 === 0 ? '3/4' : '1/1' }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 font-mono uppercase tracking-widest z-10">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-end px-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
                </div>
                <p className="text-lg">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/2 flex flex-col gap-16">
          {col2.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative overflow-hidden w-full mb-6 bg-gray-100" style={{ aspectRatio: index % 2 === 0 ? '4/5' : '3/4' }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 font-mono uppercase tracking-widest z-10">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-end px-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
                </div>
                <p className="text-lg">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
