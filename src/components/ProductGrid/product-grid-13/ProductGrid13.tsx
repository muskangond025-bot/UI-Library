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

interface ProductGrid13Props {
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

export function ProductGrid13({ section }: ProductGrid13Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-[1200px] mb-24 text-center">
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
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
        >
          {content.title}
        </motion.h2>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
        {content.products.map((product, index) => {
          // Push every even item down to create the offset/checkerboard look natively
          const offsetClass = index % 2 === 1 ? "md:mt-32" : "";

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`group flex flex-col cursor-pointer ${offsetClass}`}
            >
              <div className="relative w-full aspect-[4/5] bg-gray-800 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                />
                
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-white text-black text-xs font-bold px-4 py-2 uppercase tracking-widest z-10">
                    {product.badge}
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Reveal button on hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest opacity-0 transform scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                  >
                    View
                  </motion.div>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-gray-800 pb-6 group-hover:border-white transition-colors duration-500">
                <div>
                  <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-2 group-hover:text-white transition-colors duration-300">
                    {product.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:italic transition-all duration-300">
                    {product.name}
                  </h3>
                </div>
                <p className="text-xl font-light text-white/80">{product.price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
