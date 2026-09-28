import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  type: "hero" | "thumb";
}

interface Trending15Props {
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

export function Trending15({ section }: Trending15Props) {
  const { content, style } = section;
  const heroProduct = content.products.find(p => p.type === 'hero');
  const thumbProducts = content.products.filter(p => p.type === 'thumb');

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1400px] mx-auto w-full border-t border-b border-black/20 py-12">
        
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-6xl md:text-8xl font-serif italic tracking-tighter">
            {content.title}.
          </h2>
          <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest font-bold rotate-90">{content.subtitle}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Hero Section (Left) */}
          {heroProduct && (
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/5 group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  src={heroProduct.image} 
                  alt={heroProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black">
                    <Play size={32} className="ml-2" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start font-mono">
                <h3 className="text-3xl uppercase tracking-tighter">{heroProduct.name}</h3>
                <p className="text-xl">{heroProduct.price}</p>
              </div>
            </motion.div>
          )}

          {/* Sidebar Section (Right) */}
          <div className="w-full lg:w-2/5 flex flex-col gap-12 justify-center">
            <div className="max-w-sm">
              <p className="text-lg font-serif italic mb-8 opacity-80 leading-relaxed">
                "An exclusive look at the pieces dominating the global conversation right now. Uncompromising style meets unparalleled demand."
              </p>
              <button 
                className="font-mono text-sm uppercase tracking-widest border-b border-current pb-1 hover:opacity-60 transition-opacity"
                style={{ color: style.accentColor }}
              >
                Read Editorial
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              {thumbProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.2) }}
                  className="w-full sm:w-1/2 group cursor-pointer"
                >
                  <div className="w-full aspect-square overflow-hidden mb-4 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="font-mono">
                    <h3 className="text-sm font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                    <p className="text-sm opacity-70">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
