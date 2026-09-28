import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

interface FeaturedProductTab13Props {
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

export default function FeaturedProductTab13({ data }: FeaturedProductTab13Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      {/* Left: Sticky Tabs */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] opacity-60 mb-2">{data.content.subtitle}</h2>
          <h3 className="text-3xl font-serif italic">{data.content.title}</h3>
        </div>

        <div className="flex flex-col gap-4 my-12 lg:my-0">
          {data.content.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="text-left group relative w-fit"
            >
              <h4 className={`text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase transition-colors duration-500 ${activeTab === tab.id ? 'text-black' : 'text-gray-300 hover:text-gray-400'}`}>
                {tab.label}
              </h4>
              
              {/* Animated underline */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-black"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
        
        <div className="hidden lg:block">
          <p className="text-sm font-medium opacity-50">Scroll to explore collections &rarr;</p>
        </div>
      </div>

      {/* Right: Scrollable Grid */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto p-8 lg:p-16 bg-white/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight size={20} className="text-black" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">{product.category}</span>
                  <h4 className="text-xl font-medium mb-1">{product.name}</h4>
                  <span className="text-lg font-light">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
    </div>
  );
}
