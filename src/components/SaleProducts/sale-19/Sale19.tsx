import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Equal } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface Sale19Props {
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

export function Sale19({ section }: Sale19Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: style.accentColor }}>
            {content.title}
          </h2>
          <div className="inline-block px-6 py-2 bg-white rounded-full text-black font-bold text-sm tracking-widest uppercase mt-6 shadow-sm">
            {content.subtitle}
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            
            {/* The Items */}
            {content.products.map((product, index) => (
              <React.Fragment key={product.id}>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="w-full lg:w-1/4 group cursor-pointer"
                >
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden">
                    <div className="absolute top-2 left-2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                      ITEM {index + 1}
                    </div>
                    <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                      />
                    </div>
                    <h3 className="text-center font-bold text-sm mb-1">{product.name}</h3>
                    <div className="text-center text-xs text-gray-500 line-through">{product.oldPrice}</div>
                  </div>
                </motion.div>

                {/* Math Operators */}
                {index < content.products.length - 1 && (
                  <div className="text-gray-400">
                    <Plus size={32} />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Equals */}
            <div className="text-gray-400 hidden lg:block">
              <Equal size={32} />
            </div>

            {/* Total Bundle Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="w-full lg:w-1/4 bg-[#14532D] text-white p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10 mix-blend-overlay" />
              
              <div className="relative z-10">
                <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-70 mb-2 block">Bundle Price</span>
                <div className="text-5xl font-black mb-2">$90</div>
                <div className="text-sm opacity-60 line-through mb-8">Value: $180</div>
                <button 
                  className="px-6 py-3 bg-white text-[#14532D] font-bold rounded-full w-full uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
