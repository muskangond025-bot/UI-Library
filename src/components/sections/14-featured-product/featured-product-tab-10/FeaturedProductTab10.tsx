import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  size?: 'large' | 'medium' | 'small';
}

interface Tab {
  id: string;
  label: string;
  products: string[];
}

interface FeaturedProductTab10Props {
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

export default function FeaturedProductTab10({ data }: FeaturedProductTab10Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  const getSizeClasses = (size?: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2 aspect-[4/5] md:aspect-auto md:h-full';
      case 'medium':
        return 'col-span-1 md:col-span-1 row-span-2 aspect-[3/4]';
      case 'small':
        return 'col-span-1 md:col-span-1 row-span-1 aspect-square';
      default:
        return 'col-span-1 md:col-span-1 row-span-1 aspect-square';
    }
  };

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">{data.content.title}</h2>
            <p className="text-xl md:text-2xl font-light opacity-70">{data.content.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {data.content.tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative text-lg font-medium py-2 overflow-hidden group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${activeTab === tab.id ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                  {tab.label}
                </span>
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[minmax(250px,_auto)]"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-gray-200 overflow-hidden rounded-xl ${getSizeClasses(product.size)}`}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                  <span className="text-sm uppercase tracking-widest mb-2 font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-light">{product.price}</span>
                    <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                      Add to Bag
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
