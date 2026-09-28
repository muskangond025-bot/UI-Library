import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  claimed: number; // percentage 0-100
}

interface FlashSale5Props {
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

export function FlashSale5({ section }: FlashSale5Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="flex items-center gap-4 mb-4 text-red-500">
            <AlertTriangle size={32} className="animate-bounce" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Warning</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-center">
            {content.title}
          </h2>
          <p className="text-lg font-medium opacity-70 mt-4 uppercase tracking-widest text-center">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#27272A] p-4 rounded-3xl group cursor-pointer border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="w-full aspect-[4/5] bg-black rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase rounded">
                  Sale
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 truncate">{product.name}</h3>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                  <span className="text-2xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>

                {/* Claimed Progress Bar */}
                <div className="w-full bg-black h-3 rounded-full overflow-hidden mb-2 border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${product.claimed}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: style.accentColor }}
                  />
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400">
                  <span>{product.claimed}% Claimed</span>
                  <span className="text-red-400 animate-pulse">Almost gone</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
