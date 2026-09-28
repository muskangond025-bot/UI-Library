import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

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

interface FeaturedProductTab7Props {
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

export default function FeaturedProductTab7({ data }: FeaturedProductTab7Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen py-20 overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col xl:flex-row gap-12 items-start">
        
        {/* Sidebar Controls */}
        <div className="w-full xl:w-1/4 shrink-0 xl:sticky xl:top-20 z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 leading-none">
            {data.content.title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h2>
          <p className="text-lg opacity-60 mb-10 font-light">{data.content.subtitle}</p>

          <div className="flex flex-row xl:flex-col gap-4 overflow-x-auto xl:overflow-visible pb-4 xl:pb-0 scrollbar-hide">
            {data.content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="group flex items-center justify-between text-left pb-4 border-b whitespace-nowrap xl:whitespace-normal transition-colors duration-300"
                style={{
                  borderColor: activeTab === tab.id ? data.style.textColor : `${data.style.textColor}20`
                }}
              >
                <span className={`text-xl font-medium tracking-wide transition-opacity duration-300 ${activeTab === tab.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
                  {tab.label}
                </span>
                <ChevronRight 
                  size={20} 
                  className={`transition-all duration-300 transform ${activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                />
              </button>
            ))}
          </div>

          <button className="hidden xl:flex items-center gap-3 mt-12 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
            View All Collections <ArrowRight size={16} />
          </button>
        </div>

        {/* Carousel Area */}
        <div className="w-full xl:w-3/4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
              ref={scrollRef}
              style={{
                // Hide scrollbar for webkit
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {activeProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[280px] md:w-[350px] shrink-0 snap-center group cursor-pointer"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-gray-800">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Floating Add to Cart Button */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-center">
                      <button 
                        className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-2xl hover:scale-105 transition-transform"
                        style={{ color: data.style.backgroundColor, backgroundColor: data.style.textColor }}
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-50 mb-1">{product.category}</p>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                    <span className="text-lg font-medium">{product.price}</span>
                  </div>
                </motion.div>
              ))}
              
              {/* Spacer for ending scroll nicely */}
              <div className="w-[40px] md:w-[80px] shrink-0"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Global CSS to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
