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

interface ProductGrid6Props {
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

export function ProductGrid6({ section }: ProductGrid6Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-[1400px] mb-12 text-center">
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
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
        >
          {content.title}
        </motion.h2>
      </div>

      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 min-h-[800px]">
        {content.products.map((product, index) => {
          // Bento box layout classes
          let colSpan = "md:col-span-1";
          let rowSpan = "md:row-span-1";
          
          if (index === 0) { colSpan = "md:col-span-2"; rowSpan = "md:row-span-2"; } // Large main item
          else if (index === 1) { colSpan = "md:col-span-2"; rowSpan = "md:row-span-1"; } // Wide item top right
          else { colSpan = "md:col-span-1"; rowSpan = "md:row-span-1"; } // Standard items bottom right

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-gray-100 rounded-3xl cursor-pointer ${colSpan} ${rowSpan} aspect-square md:aspect-auto min-h-[300px]`}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  {product.badge ? (
                    <span className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  ) : <div />}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    +
                  </motion.div>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-xl font-bold text-black">{product.name}</h3>
                    </div>
                    <p className="text-xl font-light text-black">{product.price}</p>
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
