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
  image?: string;
  products: string[];
}

interface FeaturedProductTab12Props {
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

export default function FeaturedProductTab12({ data }: FeaturedProductTab12Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left: Lookbook Image */}
        <div className="w-full lg:sticky lg:top-24 h-[60vh] lg:h-[80vh] overflow-hidden rounded-sm relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabObj.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={activeTabObj.image} 
                alt={activeTabObj.label} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle Overlay text */}
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-3xl md:text-5xl font-serif text-white">{activeTabObj.label}</h3>
          </div>
        </div>

        {/* Right: Products & Tabs */}
        <div className="flex flex-col">
          <div className="mb-16">
            <h2 className="text-5xl font-bold uppercase tracking-widest mb-4">{data.content.title}</h2>
            <p className="text-lg opacity-60 font-medium tracking-wider">{data.content.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-6 mb-12 border-b pb-6" style={{ borderColor: `${data.style.textColor}20` }}>
            {data.content.tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative text-sm font-semibold uppercase tracking-widest group overflow-hidden pb-2"
              >
                <span className={`relative z-10 transition-colors duration-300 ${activeTab === tab.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}>
                  0{index + 1} {tab.label.split(':')[0]}
                </span>
                <span 
                  className={`absolute bottom-0 left-0 w-full h-px transform origin-left transition-transform duration-500 ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}
                  style={{ backgroundColor: data.style.textColor }}
                />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex flex-col gap-8"
            >
              {activeProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-6 cursor-pointer"
                >
                  <div className="w-24 h-32 shrink-0 bg-gray-100 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center border-b pb-6 border-dashed" style={{ borderColor: `${data.style.textColor}30` }}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium group-hover:italic transition-all duration-300">{product.name}</h4>
                      <span className="text-lg font-semibold">{product.price}</span>
                    </div>
                    <span className="text-sm uppercase tracking-widest opacity-50 mb-4">{product.category}</span>
                    
                    <button className="text-xs font-bold uppercase tracking-widest text-left hover:underline underline-offset-4 decoration-2">
                      Quick Shop
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
