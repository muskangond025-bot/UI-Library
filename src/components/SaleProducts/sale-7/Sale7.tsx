import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale7Props {
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

export function Sale7({ section }: Sale7Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="mb-20">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none" style={{ color: style.accentColor }}>
            {content.title}
          </h2>
          <div className="bg-white text-black inline-block px-4 py-2 text-xl font-bold uppercase mt-4 transform -rotate-2">
            {content.subtitle}
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-0 bg-white/5 group cursor-pointer`}
            >
              
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Torn paper effect edge (using SVG clip path simulation via css) */}
                <div 
                  className={`absolute top-0 bottom-0 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-8 bg-black z-10 hidden md:block`}
                  style={{ clipPath: 'polygon(0% 0%, 100% 5%, 0% 10%, 100% 15%, 0% 20%, 100% 25%, 0% 30%, 100% 35%, 0% 40%, 100% 45%, 0% 50%, 100% 55%, 0% 60%, 100% 65%, 0% 70%, 100% 75%, 0% 80%, 100% 85%, 0% 90%, 100% 95%, 0% 100%, 100% 100%, 100% 0%)' }}
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-[#18181B]">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">{product.name}</h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="relative inline-block">
                    <span className="text-4xl font-bold text-white/40">{product.oldPrice}</span>
                    <div className="absolute top-1/2 left-[-10%] right-[-10%] h-2 bg-red-600 transform -rotate-12 translate-y-[-50%]" />
                  </div>
                  <span className="text-6xl md:text-8xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
