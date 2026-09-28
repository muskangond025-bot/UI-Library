import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

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

interface FeaturedProductTab1Props {
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

export default function FeaturedProductTab1({ data }: FeaturedProductTab1Props) {
  const { content, style } = data;
  const [activeTab, setActiveTab] = useState(content.tabs[0]?.id);

  const activeTabObj = content.tabs.find((t) => t.id === activeTab) || content.tabs[0];
  
  // Get actual product objects for the active tab
  const displayProducts = content.allProducts.filter(p => activeTabObj?.products.includes(p.id));

  return (
    <section 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: style.textColor }}>
          {content.title}
        </h2>
        <p className="text-gray-500 max-w-2xl text-lg">
          {content.subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {content.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
              ${activeTab === tab.id 
                ? 'shadow-md scale-105' 
                : 'hover:bg-gray-100'}`}
            style={activeTab === tab.id ? { 
              backgroundColor: style.accentColor, 
              color: '#ffffff' 
            } : {
              backgroundColor: 'transparent',
              color: style.textColor
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="overflow-hidden min-h-[500px]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {displayProducts.map((product) => (
            <div key={product.id} className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span 
                      className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full"
                      style={{ 
                        backgroundColor: product.badge.toLowerCase() === 'sale' ? '#EF4444' : style.accentColor,
                        color: 'white'
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-100 hover:scale-110 transition-all shadow-lg">
                    <Heart size={18} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-100 hover:scale-110 transition-all shadow-lg" style={{ color: style.accentColor }}>
                    <ShoppingCart size={22} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-100 hover:scale-110 transition-all shadow-lg">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-semibold text-lg mb-2 truncate" style={{ color: style.textColor }}>{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg" style={{ color: style.accentColor }}>{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
