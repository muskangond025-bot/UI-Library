import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  glow: string;
}

interface Trending4Props {
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

export function Trending4({ section }: Trending4Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden bg-[#020617]"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={24} style={{ color: style.accentColor }} className="animate-pulse" />
            <p className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <Zap size={24} style={{ color: style.accentColor }} className="animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
              className="relative group flex flex-col items-center"
            >
              {/* Pulse Glow Background */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full blur-[60px] opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"
                style={{ backgroundColor: product.glow }}
              />

              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl p-4 mb-6 hover:border-white/30 transition-colors cursor-pointer">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500"
                />
              </div>

              <div className="text-center relative z-20">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-1">{product.name}</h3>
                <p className="text-lg font-light text-white/70">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
