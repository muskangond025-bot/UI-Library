import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

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

interface FeaturedProductTab11Props {
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

export default function FeaturedProductTab11({ data }: FeaturedProductTab11Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="relative w-full min-h-[800px] h-screen overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: data.style.backgroundColor }}>
      
      {/* Background with blur effect from first product */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center blur-2xl scale-110"
          style={{ backgroundImage: `url(${activeProducts[0]?.image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-between py-12">
        
        {/* Header */}
        <div className="text-center mt-8">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase italic drop-shadow-2xl">{data.content.title}</h2>
          <p className="text-xl text-white/80 mt-2 font-medium">{data.content.subtitle}</p>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex items-center justify-center w-full my-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              className="flex gap-4 md:gap-8 justify-center overflow-visible w-full"
            >
              {activeProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative w-[250px] md:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end h-1/2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-widest text-white/70 mb-1">{product.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-white">{product.price}</span>
                      <button 
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: data.style.accentColor, color: '#fff' }}
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Glass Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex p-2 gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
            {data.content.tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden ${activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="glass-tab-active"
                    className="absolute inset-0 bg-white/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
