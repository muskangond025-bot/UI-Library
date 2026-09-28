import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

interface FeaturedProductTab20Props {
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

export default function FeaturedProductTab20({ data }: FeaturedProductTab20Props) {
  const [activeTab, setActiveTab] = useState(data.content.tabs[0].id);

  const activeTabObj = data.content.tabs.find(t => t.id === activeTab) || data.content.tabs[0];
  const activeProducts = data.content.allProducts.filter(p => activeTabObj.products.includes(p.id));

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-end justify-center pb-12 px-6 md:px-12" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      {/* Immersive Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeTab}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${activeProducts[0]?.image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Floating Glass Panel */}
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Headers & Tabs */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-2">{data.content.title}</h2>
          <p className="text-lg opacity-60 mb-8">{data.content.subtitle}</p>

          <div className="flex flex-row md:flex-col gap-4 mb-4">
            {data.content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-white/20 overflow-hidden group ${activeTab === tab.id ? 'text-black bg-white' : 'text-white hover:bg-white/10'}`}
              >
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Products List */}
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex flex-col gap-4"
            >
              {activeProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest opacity-50 mb-1 block">{product.category}</span>
                      <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-xl font-light">{product.price}</span>
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
