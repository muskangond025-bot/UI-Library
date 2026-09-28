import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  trend: string;
}

interface Trending11Props {
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

export function Trending11({ section }: Trending11Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen pt-12 pb-24 px-0 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Ticker Tape */}
      <div className="w-full bg-white text-black py-3 mb-20 overflow-hidden border-y-2 border-white/20 whitespace-nowrap flex items-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 text-sm font-bold tracking-widest uppercase items-center"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <span>{content.title}</span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: style.accentColor }} />
              <span>MARKET LIVE</span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: style.accentColor }} />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-50">
            {content.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Top Movers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.products.map((product, index) => {
            const isUp = product.trend.startsWith('+');
            const color = isUp ? style.accentColor : '#EF4444'; // Green or Red

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-white/10 bg-white/5 p-4 rounded-xl cursor-pointer hover:border-white/30 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-gray-400">SYM.{product.id.split('-')[1]}</span>
                  <div 
                    className="px-2 py-1 rounded text-xs font-bold text-black"
                    style={{ backgroundColor: color }}
                  >
                    {product.trend}
                  </div>
                </div>

                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight truncate mb-1">{product.name}</h3>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-light">{product.price}</p>
                  <p className="text-xs mb-1 opacity-50 uppercase">USD</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
