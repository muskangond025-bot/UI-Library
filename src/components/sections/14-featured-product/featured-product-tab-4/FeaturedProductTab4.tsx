import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

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

interface FeaturedProductTab4Props {
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

export default function FeaturedProductTab4({ data }: FeaturedProductTab4Props) {
  const { content, style } = data;
  const [activeTab, setActiveTab] = useState(content.tabs[0]?.id);

  const activeTabObj = content.tabs.find((t) => t.id === activeTab) || content.tabs[0];
  const displayProducts = content.allProducts.filter(p => activeTabObj?.products.includes(p.id));

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 w-full font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">{content.title}</h2>
            <p className="text-gray-500 text-lg">{content.subtitle}</p>
          </div>

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
            {content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-lg md:text-xl font-medium whitespace-nowrap transition-colors duration-300 relative`}
                style={{ color: activeTab === tab.id ? style.textColor : '#9CA3AF' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underlineTab4"
                    className="absolute -bottom-[27px] left-0 right-0 h-0.5"
                    style={{ backgroundColor: style.accentColor }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
            >
              {displayProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Minimalist Overlay */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Quick Add Button */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button 
                        className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm shadow-lg flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
                      >
                        <ShoppingBag size={16} /> Quick Add
                      </button>
                    </div>

                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
