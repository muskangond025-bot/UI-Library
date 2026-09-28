import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge?: string | null;
}

interface Tab {
  id: string;
  label: string;
  products: string[];
}

interface FeaturedProductTab3Props {
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

export default function FeaturedProductTab3({ data }: FeaturedProductTab3Props) {
  const { content, style } = data;
  const [activeTab, setActiveTab] = useState(content.tabs[0]?.id);

  const activeTabObj = content.tabs.find((t) => t.id === activeTab) || content.tabs[0];
  const displayProducts = content.allProducts.filter(p => activeTabObj?.products.includes(p.id));

  return (
    <section 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full font-serif"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-medium">{content.title}</h2>
          <p className="text-gray-500 font-sans tracking-wide uppercase text-sm">{content.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Vertical Tabs */}
          <div className="lg:w-1/4 flex flex-col gap-2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
            {content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-4 pl-8 text-left font-sans text-lg font-medium transition-all duration-300 group
                  ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeVerticalIndicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 z-10"
                    style={{ backgroundColor: style.accentColor }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="flex items-center justify-between">
                  {tab.label}
                  <ChevronRight 
                    size={18} 
                    className={`transition-transform duration-300 ${activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-50'}`}
                    style={{ color: style.accentColor }}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4 min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {displayProducts.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-6">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                      />
                      {product.badge && (
                        <div className="absolute top-4 left-4 font-sans text-xs uppercase tracking-widest font-bold px-3 py-1 bg-white text-gray-900">
                          {product.badge}
                        </div>
                      )}
                      
                      <button 
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-110"
                        style={{ color: style.accentColor }}
                      >
                        <Plus size={24} />
                      </button>
                    </div>
                    <div className="flex justify-between items-start font-sans">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                        <h3 className="text-xl font-medium text-gray-900">{product.name}</h3>
                      </div>
                      <span className="text-lg font-medium">{product.price}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
