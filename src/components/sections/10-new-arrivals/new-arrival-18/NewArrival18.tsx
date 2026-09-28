import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival18Props {
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

export function NewArrival18({ section }: NewArrival18Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-[#4B5563] drop-shadow-[2px_2px_2px_rgba(255,255,255,0.8)] mb-2 uppercase">
            {content.title}
          </h2>
          <p className="text-sm tracking-widest uppercase text-[#9CA3AF]">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center p-8 rounded-[3rem] bg-[#E0E5EC] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] group"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-4 bg-[#E0E5EC] shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.6),inset_-6px_-6px_10px_0_rgba(255,255,255,0.5)] mb-8 overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-xl font-bold text-[#4B5563] mb-2 text-center uppercase tracking-wider">{product.name}</h3>
              <p className="text-lg text-[#9CA3AF] mb-8 font-light">{product.price}</p>

              <button 
                className="w-16 h-16 rounded-full flex items-center justify-center text-[#4B5563] bg-[#E0E5EC] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[inset_5px_5px_10px_rgba(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all duration-300"
                style={{ color: style.accentColor }}
              >
                <ShoppingCart size={20} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
