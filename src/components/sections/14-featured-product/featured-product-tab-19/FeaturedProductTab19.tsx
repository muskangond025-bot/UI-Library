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

interface FeaturedProductTab19Props {
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

export default function FeaturedProductTab19({ data }: FeaturedProductTab19Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      {/* Decorative background circle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] border-[1px] border-dashed rounded-full opacity-10 pointer-events-none"
        style={{ borderColor: data.style.textColor }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-4">{data.content.title}</h2>
          <p className="text-lg italic opacity-70">{data.content.subtitle}</p>
        </div>

        {/* Circular Tabs */}
        <div className="flex justify-center gap-6 md:gap-12 mb-20">
          {data.content.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="group relative flex flex-col items-center gap-3"
            >
              <div 
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500 overflow-hidden ${activeTab === tab.id ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100 hover:scale-105'}`}
                style={{
                  borderColor: activeTab === tab.id ? data.style.accentColor : data.style.textColor,
                  backgroundColor: activeTab === tab.id ? data.style.accentColor : 'transparent'
                }}
              >
                {/* Find first product image for the tab as a background thumbnail */}
                {(() => {
                  const firstProduct = data.content.allProducts.find(p => p.id === tab.products[0]);
                  return firstProduct ? (
                    <img 
                      src={firstProduct.image} 
                      alt={tab.label}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${activeTab === tab.id ? 'opacity-30 mix-blend-multiply' : 'opacity-20 group-hover:opacity-40 grayscale'}`}
                    />
                  ) : null;
                })()}
              </div>
              <span 
                className={`text-sm uppercase tracking-widest font-semibold transition-colors duration-300 ${activeTab === tab.id ? '' : 'opacity-50'}`}
                style={{ color: activeTab === tab.id ? data.style.accentColor : data.style.textColor }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center gap-12 md:gap-24"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center cursor-pointer w-[280px]"
              >
                <div className="relative w-64 h-64 mb-8">
                  {/* Rotating border */}
                  <motion.div 
                    className="absolute -inset-4 rounded-full border border-dashed opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ borderColor: data.style.textColor }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative z-10 bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="text-center flex flex-col items-center">
                  <span className="text-xs uppercase tracking-widest opacity-50 mb-2">{product.category}</span>
                  <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                  <span className="text-lg italic">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
