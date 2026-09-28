import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  isFeatured?: boolean;
}

interface Tab {
  id: string;
  label: string;
  products: string[];
}

interface FeaturedProductTab6Props {
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

export default function FeaturedProductTab6({ data }: FeaturedProductTab6Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  // Sort products to ensure the featured one is first
  const sortedProducts = [...activeProducts].sort((a, b) => {
    if (a.isFeatured) return -1;
    if (b.isFeatured) return 1;
    return 0;
  });

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b pb-6" style={{ borderColor: `${data.style.textColor}20` }}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{data.content.title}</h2>
            <p className="text-lg opacity-70">{data.content.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {data.content.tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? 'text-white' : 'hover:opacity-70'}`}
                style={{
                  backgroundColor: activeTab === tab.id ? data.style.textColor : 'transparent',
                  color: activeTab === tab.id ? data.style.backgroundColor : data.style.textColor,
                  border: `1px solid ${activeTab === tab.id ? 'transparent' : `${data.style.textColor}30`}`
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 flex flex-col ${product.isFeatured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}`}
              >
                <div className={`relative w-full ${product.isFeatured ? 'h-[400px] md:h-[600px]' : 'h-[300px]'} overflow-hidden`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg">
                      <Search size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg">
                      <Heart size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between bg-white border border-gray-100 rounded-b-2xl">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1 block">
                      {product.category}
                    </span>
                    <h3 className={`font-semibold text-gray-900 ${product.isFeatured ? 'text-xl' : 'text-base'}`}>
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`font-bold text-gray-900 ${product.isFeatured ? 'text-2xl' : 'text-lg'}`}>
                      {product.price}
                    </span>
                    <button className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity text-gray-900">
                      Add to cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
