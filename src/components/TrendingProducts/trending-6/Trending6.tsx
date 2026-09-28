import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Eye, TrendingUp } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  velocity: string;
  views: string;
}

interface Trending6Props {
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

export function Trending6({ section }: Trending6Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-800 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
                {content.subtitle}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              {content.title}
            </h2>
          </div>
          <div className="flex gap-8 text-xs text-gray-400 tracking-widest uppercase">
            <span className="flex items-center gap-2"><Activity size={14} /> Velocity</span>
            <span className="flex items-center gap-2"><Eye size={14} /> Impressions</span>
          </div>
        </div>

        <div className="flex flex-col">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-gray-800 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-8 w-full md:w-auto mb-6 md:mb-0">
                <div className="text-2xl font-light text-gray-600">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-900 shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                  <p className="text-lg opacity-80">{product.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Growth</span>
                  <span className="text-xl font-bold flex items-center gap-2" style={{ color: style.accentColor }}>
                    <TrendingUp size={18} /> {product.velocity}
                  </span>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-xs text-gray-500 mb-1 uppercase tracking-widest">Views (24h)</span>
                  <span className="text-xl font-bold">{product.views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
