import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  likes: string;
}

interface Trending3Props {
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

export function Trending3({ section }: Trending3Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1600px] mx-auto w-full">
        
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
            className="px-8 py-4 rounded-full font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundColor: style.accentColor }}
          >
            Follow Trend
          </button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart size={16} fill="currentColor" />
                <span className="text-xs font-bold">{product.likes}</span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                <p className="text-lg font-light">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
