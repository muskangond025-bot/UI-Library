import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Trending8Props {
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

export function Trending8({ section }: Trending8Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-20 border-l-4 pl-6" style={{ borderColor: style.accentColor }}>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mb-2 opacity-70">
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter" style={{ textShadow: `2px 2px 0px ${style.accentColor}` }}>
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative w-full aspect-square bg-white/5 border border-white/10 overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Glitch overlays */}
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-75 mix-blend-screen"
                  style={{ backgroundColor: style.accentColor, clipPath: 'polygon(0 10%, 100% 10%, 100% 12%, 0 12%, 0 40%, 100% 40%, 100% 42%, 0 42%, 0 70%, 100% 70%, 100% 75%, 0 75%)' }}
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-100 delay-75 mix-blend-screen"
                  style={{ backgroundColor: style.textColor, clipPath: 'polygon(0 30%, 100% 30%, 100% 35%, 0 35%, 0 60%, 100% 60%, 100% 65%, 0 65%)' }}
                />

                <div className="absolute top-4 right-4 text-xs font-bold bg-black text-white px-2 py-1 border border-white/20">
                  SYS.REQ
                </div>
              </div>

              <div className="flex flex-col relative">
                <div 
                  className="absolute -left-4 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: style.accentColor }}
                />
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform">
                  {product.name}
                </h3>
                <p className="text-lg opacity-70 group-hover:translate-x-2 transition-transform delay-75">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
