import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival13Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      mainImage: string;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function NewArrival13({ section }: NewArrival13Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left: Huge Editorial Image */}
        <div className="w-full lg:w-1/2 flex flex-col relative">
          <div className="mb-12 relative z-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              {content.title}
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl relative"
          >
            <img 
              src={content.mainImage} 
              alt="Editorial Main"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Grid of Products */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-32">
          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl">
            {content.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight leading-tight mb-1">{product.name}</h3>
                  <p className="text-base font-light opacity-60">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
