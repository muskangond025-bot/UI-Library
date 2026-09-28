import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  image: string;
  badge?: string | null;
}

interface Tab {
  id: string;
  label: string;
  products: string[];
}

interface FeaturedProductTab2Props {
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

export default function FeaturedProductTab2({ data }: FeaturedProductTab2Props) {
  const { content, style } = data;
  const [activeTab, setActiveTab] = useState(content.tabs[0]?.id);

  const activeTabObj = content.tabs.find((t) => t.id === activeTab) || content.tabs[0];
  const displayProducts = content.allProducts.filter(p => activeTabObj?.products.includes(p.id));

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8 w-full font-sans relative overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20" 
        style={{ backgroundColor: style.accentColor }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10" 
        style={{ backgroundColor: '#ffffff' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              {content.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {content.subtitle}
            </p>
          </div>
          
          {/* Neon-style Tabs */}
          <div className="flex flex-wrap gap-3 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {content.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative"
                style={{ 
                  color: activeTab === tab.id ? '#fff' : '#a1a1aa'
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab2"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: style.accentColor }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - Glassmorphism Style */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {displayProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                        {product.badge}
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <button 
                        className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        style={{ backgroundColor: style.accentColor, color: '#fff' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start px-2">
                    <div>
                      <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">{product.category}</p>
                      <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold" style={{ color: style.accentColor }}>{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
