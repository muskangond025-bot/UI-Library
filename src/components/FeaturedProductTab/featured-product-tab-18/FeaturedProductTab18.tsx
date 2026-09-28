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

interface FeaturedProductTab18Props {
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

export default function FeaturedProductTab18({ data }: FeaturedProductTab18Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col font-serif" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b pb-8 mb-16 border-gray-300">
          <div className="w-full md:w-1/2">
            <h2 className="text-6xl md:text-8xl tracking-tight mb-4 leading-none">{data.content.title}</h2>
            <p className="text-xl md:text-2xl italic opacity-70 font-light">{data.content.subtitle}</p>
          </div>
          
          <div className="w-full md:w-1/2 flex gap-8 justify-start md:justify-end mt-8 md:mt-0 font-sans text-sm font-bold uppercase tracking-widest">
            {data.content.tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-2 transition-colors ${activeTab === tab.id ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="editorial-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            {activeProducts[0] && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-1 md:col-span-7 group cursor-pointer"
              >
                <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-6">
                  <img src={activeProducts[0].image} alt={activeProducts[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">{activeProducts[0].category}</span>
                    <h3 className="text-3xl md:text-4xl">{activeProducts[0].name}</h3>
                  </div>
                  <span className="text-2xl italic">{activeProducts[0].price}</span>
                </div>
              </motion.div>
            )}
            
            <div className="col-span-1 md:col-span-5 flex flex-col gap-12 md:mt-32">
              {activeProducts.slice(1).map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center md:items-end"
                >
                  <div className="w-full md:w-1/2 aspect-square bg-gray-100 overflow-hidden shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-end">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">{product.category}</span>
                    <h3 className="text-2xl mb-2">{product.name}</h3>
                    <span className="text-xl italic text-gray-600">{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
