import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival16Props {
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

export function NewArrival16({ section }: NewArrival16Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1600px] mx-auto w-full border-8 border-current p-4 md:p-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-8 border-current pb-8 mb-12 gap-8">
          <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-none m-0 p-0">
            {content.title}
          </h2>
          <div className="bg-current text-white px-8 py-4 font-black uppercase tracking-widest text-xl">
            {content.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer border-4 border-current p-4 relative bg-white transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-[[-16px_16px_0_0_rgba(0,0,0,1)]] duration-300"
            >
              <div className="w-full aspect-[4/3] border-4 border-current overflow-hidden mb-6 relative bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex justify-between items-end">
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none max-w-[70%]">
                  {product.name}
                </h3>
                <div 
                  className="text-3xl font-black border-4 border-current px-4 py-2"
                  style={{ color: style.accentColor }}
                >
                  {product.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
