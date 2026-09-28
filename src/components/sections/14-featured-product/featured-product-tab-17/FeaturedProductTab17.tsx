import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

interface Tab {
  id: string;
  label: string;
  products: string[];
}

interface FeaturedProductTab17Props {
  data: {
    content: {
      title: string;
      subtitle: string;
      tabs: Tab[];
      allProducts: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export default function FeaturedProductTab17({ data }: FeaturedProductTab17Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center perspective-1000" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">{data.content.title}</h2>
        <p className="text-xl opacity-60 mb-10">{data.content.subtitle}</p>

        <div className="flex justify-center gap-4 border-b border-white/20 pb-4">
          {data.content.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm uppercase tracking-widest font-bold transition-all duration-300 px-4 py-2 rounded-lg ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, rotateX: 20, y: 50 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -20, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform-style-3d"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)]"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 bg-gray-900 border border-white/10 rounded-xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Glass panel */}
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">{product.category}</span>
                    <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-medium" style={{ color: data.style.accentColor }}>${product.price}</span>
                      <span className="text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        View &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}} />
    </div>
  );
}
