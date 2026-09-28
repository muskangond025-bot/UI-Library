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

interface FeaturedProductTab16Props {
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

export default function FeaturedProductTab16({ data }: FeaturedProductTab16Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col font-mono" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b-2 border-black pb-8 mb-12 uppercase text-sm tracking-widest font-bold">
          <div className="col-span-2 md:col-span-1">
            <h2>{data.content.title}</h2>
            <p className="opacity-50 mt-1">{data.content.subtitle}</p>
          </div>
          <div className="hidden md:block col-span-3">
            <div className="flex justify-end gap-12">
              {data.content.tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative hover:opacity-100 transition-opacity ${activeTab === tab.id ? 'opacity-100' : 'opacity-40'}`}
                >
                  [{tab.label}]
                  {activeTab === tab.id && (
                    <motion.div layoutId="index-active" className="absolute -bottom-9 w-full h-1 bg-black" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* List items */}
        <div className="relative border-b-2 border-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {activeProducts.map((product, index) => (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-t border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors px-4"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full sm:w-auto">
                    <span className="text-xs opacity-40 w-8">{(index + 1).toString().padStart(2, '0')}</span>
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter group-hover:italic">{product.name}</h3>
                  </div>
                  <div className="flex items-center gap-12 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-sm opacity-50 uppercase">{product.category}</span>
                    <span className="text-lg font-bold">${product.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Floating Hover Image */}
          <div className="hidden lg:block pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <AnimatePresence>
              {hoveredProduct && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: Math.random() * 10 - 5 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-80 h-[400px] overflow-hidden shadow-2xl bg-white border border-gray-200 p-2"
                >
                  <img 
                    src={data.content.allProducts.find(p => p.id === hoveredProduct)?.image} 
                    alt="Preview"
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
