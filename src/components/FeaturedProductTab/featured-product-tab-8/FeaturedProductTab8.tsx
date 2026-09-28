import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

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

interface FeaturedProductTab8Props {
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

export default function FeaturedProductTab8({ data }: FeaturedProductTab8Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            {data.content.title}
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl">{data.content.subtitle}</p>

          <div className="inline-flex items-center p-1.5 bg-white/5 rounded-full backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/10">
            {data.content.tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-glow"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: data.style.accentColor }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500"
              >
                {/* Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl pointer-events-none"
                  style={{ backgroundColor: data.style.accentColor }}
                ></div>

                <div className="p-4 relative z-10">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-black/50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>

                  <div className="flex flex-col gap-1 px-2 pb-2">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{product.category}</span>
                    <h3 className="text-lg font-medium text-gray-100">{product.name}</h3>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-white">{product.price}</span>
                      <button 
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-black transition-colors duration-300"
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
