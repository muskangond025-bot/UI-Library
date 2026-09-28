import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale18Props {
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

export function Sale18({ section }: Sale18Props) {
  const { content, style } = section;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("EXTRA20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Coupon Header */}
        <div className="flex flex-col items-center justify-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center mb-6">{content.title}</h2>
          
          <button 
            onClick={handleCopy}
            className="group relative flex items-center gap-4 bg-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-dashed"
            style={{ borderColor: style.accentColor }}
          >
            <span className="text-3xl md:text-5xl font-black tracking-widest" style={{ color: style.accentColor }}>EXTRA20</span>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-gray-400 group-hover:text-black transition-colors">
              {copied ? <Check size={28} style={{ color: style.accentColor }} /> : <Copy size={28} />}
            </div>
            
            <AnimatePresence>
              {copied && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -20 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded"
                >
                  COPIED!
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <p className="text-sm font-medium opacity-60 mt-4 uppercase tracking-widest">Apply at checkout</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer border border-gray-100"
            >
              <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
              </div>

              <div className="text-center px-2 pb-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                  <span className="text-2xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
