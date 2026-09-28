import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale10Props {
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

export function Sale10({ section }: Sale10Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-0 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      
      {/* Blinking Marquee Header */}
      <div className="w-full border-y border-white/20 py-4 overflow-hidden bg-black/50 mb-24 relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter" style={{ color: style.textColor }}>{content.title}</span>
              <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter animate-pulse" style={{ color: style.accentColor, textShadow: `0 0 20px ${style.accentColor}` }}>SALE</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4">
        
        <p className="text-center text-sm font-bold tracking-[0.4em] uppercase mb-16" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
            >
              
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold uppercase animate-pulse z-20" style={{ backgroundColor: style.accentColor, color: style.backgroundColor }}>
                HOT
              </div>

              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 relative bg-black">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-4 text-center">{product.name}</h3>
              
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-sm text-white/40 line-through mb-1">{product.oldPrice}</span>
                <span className="text-3xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
