import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

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

interface FeaturedProductTab5Props {
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

export default function FeaturedProductTab5({ data }: FeaturedProductTab5Props) {
  const { content, style } = data;
  const [activeTab, setActiveTab] = useState(content.tabs[0]?.id);

  const activeTabObj = content.tabs.find((t) => t.id === activeTab) || content.tabs[0];
  const displayProducts = content.allProducts.filter(p => activeTabObj?.products.includes(p.id));

  // The first product will be featured large, the rest in a grid
  const featuredProduct = displayProducts[0];
  const gridProducts = displayProducts.slice(1);

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 w-full font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              {content.title}
            </h2>
            <p className="text-gray-500 text-lg">
              {content.subtitle}
            </p>
          </div>

          <div className="flex bg-white shadow-sm p-1.5 rounded-2xl border border-gray-100">
            {content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 relative`}
                style={{ 
                  color: activeTab === tab.id ? '#fff' : '#6B7280'
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="pillTab5"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: style.accentColor }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-8 h-full"
            >
              {/* Featured Large Product */}
              {featuredProduct && (
                <div className="lg:w-1/2 group cursor-pointer relative rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-[500px] lg:h-[600px]">
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {featuredProduct.badge && (
                    <div className="absolute top-6 left-6 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {featuredProduct.badge}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
                    <p className="text-white/70 text-sm uppercase tracking-widest font-bold mb-2">
                      Featured {featuredProduct.category}
                    </p>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                      {featuredProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-2xl font-light">{featuredProduct.price}</span>
                      <button 
                        className="w-14 h-14 rounded-full flex items-center justify-center transform group-hover:translate-x-2 transition-all duration-300"
                        style={{ backgroundColor: style.accentColor, color: '#fff' }}
                      >
                        <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid Products */}
              <div className="lg:w-1/2 flex flex-col gap-8 h-[500px] lg:h-[600px]">
                {gridProducts.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                    className="flex-1 group bg-white rounded-3xl p-4 flex gap-6 items-center shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-1/3 md:w-48 h-full rounded-2xl overflow-hidden bg-gray-50 relative flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-black px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 py-2 pr-4 flex flex-col justify-center h-full">
                      <div className="flex items-center gap-1 mb-2 text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">{product.category}</p>
                      <h4 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: style.textColor }}>
                        {product.name}
                      </h4>
                      <p className="text-xl font-light" style={{ color: style.textColor }}>{product.price}</p>
                      
                      <div className="mt-auto pt-4 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <span className="text-sm font-bold" style={{ color: style.accentColor }}>View Details</span>
                        <ArrowRight size={16} style={{ color: style.accentColor }} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
