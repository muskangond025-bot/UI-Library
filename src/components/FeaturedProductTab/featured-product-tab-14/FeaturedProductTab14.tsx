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

interface FeaturedProductTab14Props {
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

export default function FeaturedProductTab14({ data }: FeaturedProductTab14Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      {/* Background Spotlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: data.style.accentColor }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] mb-4">{data.content.title}</h2>
          <p className="text-xl font-light opacity-70 tracking-widest">{data.content.subtitle}</p>
        </div>

        {/* Floating tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-4 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            {data.content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'text-black' : 'text-white/60 hover:text-white'}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="spotlight-tab"
                    className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(252,211,77,0.5)]"
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
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-500"
              >
                <div className="aspect-square p-8">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>

                <div className="p-8 pt-0 flex flex-col items-center text-center">
                  <span className="text-xs uppercase tracking-widest opacity-50 mb-2">{product.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <span 
                    className="text-xl font-medium"
                    style={{ color: data.style.accentColor }}
                  >{product.price}</span>
                </div>

                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: data.style.accentColor }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
