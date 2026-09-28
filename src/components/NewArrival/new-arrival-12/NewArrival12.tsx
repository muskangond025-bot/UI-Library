import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface NewArrival12Props {
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

export function NewArrival12({ section }: NewArrival12Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <button 
            className="px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: style.accentColor }}
          >
            Shop All New
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15, 
                delay: (index % 3) * 0.15 
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-xl mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Add Button */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <ShoppingBag size={20} />
                  </div>
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                <p className="text-lg font-light opacity-60">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
