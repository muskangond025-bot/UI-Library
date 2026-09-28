import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  percentage: string;
}

interface Sale9Props {
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

export function Sale9({ section }: Sale9Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-black pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
            <p className="text-lg font-bold tracking-[0.2em] uppercase mt-2">
              {content.subtitle}
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">
            Shop All <ArrowDownRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-6 relative border border-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                  <div className="flex gap-3 items-center">
                    <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                    <span className="font-bold text-lg">{product.newPrice}</span>
                  </div>
                </div>
                <div className="text-4xl font-black tracking-tighter text-red-600">
                  {product.percentage}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
