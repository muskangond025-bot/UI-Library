import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  type: "pinnacle" | "micro";
}

interface Trending20Props {
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

export function Trending20({ section }: Trending20Props) {
  const { content, style } = section;
  const pinnacle = content.products.find(p => p.type === 'pinnacle');
  const micros = content.products.filter(p => p.type === 'micro');

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1400px] w-full mx-auto relative flex flex-col items-center">
        
        <div className="w-full text-left z-20 mb-12 mt-12 md:mt-0">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-xl leading-none">
            {content.title}
          </h2>
        </div>

        {/* The Pinnacle Product */}
        {pinnacle && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl relative z-10 group cursor-pointer"
          >
            <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative bg-black">
              <img 
                src={pinnacle.image} 
                alt={pinnacle.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                <div>
                  <div className="flex items-center gap-2 mb-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                    <Crown size={20} style={{ color: style.accentColor }} />
                    <span className="text-xs font-bold uppercase tracking-widest">#1 Trending</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{pinnacle.name}</h3>
                </div>
                <div className="text-3xl md:text-4xl font-light">{pinnacle.price}</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Micro thumbnails orbiting or placed below */}
        <div className="w-full max-w-4xl flex justify-between gap-4 mt-8 px-8">
          {micros.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="group cursor-pointer flex-1"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 shadow-lg border-2 border-transparent group-hover:border-current transition-all bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-tight truncate mb-1">{product.name}</h4>
              <p className="text-[10px] opacity-60">{product.price}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
