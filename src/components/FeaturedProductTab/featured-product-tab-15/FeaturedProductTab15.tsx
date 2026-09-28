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

interface FeaturedProductTab15Props {
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

export default function FeaturedProductTab15({ data }: FeaturedProductTab15Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="w-full min-h-screen py-32 overflow-hidden flex flex-col justify-center" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      {/* Skewed Container */}
      <div className="relative w-full py-24 bg-white shadow-2xl -skew-y-3 transform origin-top-left border-y-8" style={{ borderColor: data.style.textColor }}>
        
        {/* Un-skew content inside */}
        <div className="skew-y-3 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left: Headers & Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <h2 
              className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-2"
              style={{ color: data.style.accentColor, WebkitTextStroke: `2px ${data.style.textColor}` }}
            >
              {data.content.title}
            </h2>
            <p className="text-2xl font-bold uppercase tracking-widest mb-12">{data.content.subtitle}</p>

            <div className="flex flex-col gap-2">
              {data.content.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative text-left py-4 px-6 border-4 font-black uppercase text-xl md:text-2xl transition-all duration-300 overflow-hidden`}
                  style={{
                    borderColor: data.style.textColor,
                    color: activeTab === tab.id ? data.style.backgroundColor : data.style.textColor
                  }}
                >
                  <motion.div
                    className="absolute inset-0 z-0 origin-left"
                    initial={false}
                    animate={{ scaleX: activeTab === tab.id ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ backgroundColor: data.style.textColor }}
                  />
                  <div className="absolute inset-0 z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out opacity-20" style={{ backgroundColor: data.style.textColor }} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Products Horizontal Scroll */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
                style={{
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                }}
              >
                {activeProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-[280px] shrink-0 snap-center group relative bg-gray-100 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    style={{ borderColor: data.style.textColor }}
                  >
                    <div className="aspect-square overflow-hidden bg-gray-200 border-b-4" style={{ borderColor: data.style.textColor }}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-black text-xl uppercase tracking-tighter truncate">{product.name}</h3>
                      <div className="flex justify-between items-end mt-2">
                        <span className="text-sm font-bold opacity-60 uppercase">{product.category}</span>
                        <span 
                          className="text-2xl font-black italic"
                          style={{ color: data.style.accentColor }}
                        >
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
