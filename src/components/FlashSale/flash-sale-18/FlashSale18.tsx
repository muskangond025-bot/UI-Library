import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale18Props {
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

export function FlashSale18({ section }: FlashSale18Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans bg-zinc-900"
      style={{ color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 border-b-2 border-zinc-800 pb-12 gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
              {content.title}
            </h2>
            <p className="text-xl font-bold tracking-[0.2em] uppercase mt-2 opacity-70 italic">
              {content.subtitle}
            </p>
          </div>

          {/* Speedometer graphic */}
          <div className="relative w-64 h-32 overflow-hidden flex-shrink-0">
            <div className="w-64 h-64 border-8 border-zinc-800 rounded-full absolute bottom-0 border-t-blue-500 border-l-blue-500 border-r-red-500 transform rotate-45" />
            <motion.div 
              initial={{ rotate: -90 }}
              whileInView={{ rotate: 70 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.6 }}
              className="absolute bottom-0 left-1/2 w-1 h-28 bg-red-500 origin-bottom rounded-full -translate-x-1/2"
            />
            <div className="absolute bottom-[-10px] left-1/2 w-8 h-8 bg-zinc-900 border-4 border-zinc-800 rounded-full -translate-x-1/2" />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col md:flex-row bg-black rounded-r-full overflow-hidden hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-800 relative"
            >
              {/* Blue accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500" />

              <div className="w-full md:w-1/3 aspect-[21/9] md:aspect-auto md:h-48 bg-zinc-800 relative ml-2">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform -skew-x-12 scale-110 opacity-70 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
                />
              </div>

              <div className="flex-grow flex flex-col md:flex-row items-center justify-between p-8 md:pr-24 gap-8">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight italic text-center md:text-left">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-6">
                  <span className="text-xl line-through text-zinc-500">{product.oldPrice}</span>
                  <div className="bg-blue-500 text-white font-black text-4xl px-6 py-2 transform -skew-x-12">
                    <span className="inline-block transform skew-x-12">{product.newPrice}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
