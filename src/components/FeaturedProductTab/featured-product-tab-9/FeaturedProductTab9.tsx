import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

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

interface FeaturedProductTab9Props {
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

export default function FeaturedProductTab9({ data }: FeaturedProductTab9Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 lg:px-12" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">{data.content.title}</h2>
          <p className="text-xl text-gray-500 font-light">{data.content.subtitle}</p>
        </div>

        <div className="flex flex-col border-t border-gray-200">
          {data.content.tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const tabProducts = data.content.allProducts.filter(p => tab.products.includes(p.id));

            return (
              <div key={tab.id} className="border-b border-gray-200 flex flex-col">
                <button
                  onClick={() => setActiveTab(isActive ? '' : tab.id)}
                  className="w-full py-8 flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-medium text-gray-400 w-8">0{index + 1}</span>
                    <h3 className={`text-2xl md:text-4xl font-medium transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-700'}`}>
                      {tab.label}
                    </h3>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-400 group-hover:border-gray-500'}`}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tabProducts.map((product, pIndex) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                            className="group cursor-pointer"
                          >
                            <div className="relative w-full aspect-[4/5] bg-gray-100 mb-4 overflow-hidden rounded-lg">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-black">
                                <ArrowUpRight size={20} />
                              </div>
                            </div>
                            
                            <div className="flex flex-col">
                              <span className="text-xs text-gray-500 mb-1">{product.category}</span>
                              <div className="flex items-center justify-between">
                                <h4 className="text-base font-medium text-gray-900 group-hover:underline underline-offset-4 decoration-1">{product.name}</h4>
                                <span className="text-base font-medium text-gray-900">{product.price}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
