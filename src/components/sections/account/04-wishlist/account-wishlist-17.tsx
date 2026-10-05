import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, Compass, Tag, Check, Sparkles } from 'lucide-react';

export function AccountWishlist17() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Nike Air Max 270',
      category: 'Footwear',
      price: '$150',
      oldPrice: '$180',
      tag: '16% OFF',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
      isSaved: true
    },
    {
      id: '2',
      name: 'Oversized Denim Jacket',
      category: 'Streetwear',
      price: '$120',
      oldPrice: '$160',
      tag: '25% OFF',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
      isSaved: true
    },
    {
      id: '3',
      name: 'Classic Leather Watch',
      category: 'Accessories',
      price: '$210',
      oldPrice: '$210',
      tag: 'BESTSELLER',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      isSaved: true
    },
    {
      id: '4',
      name: 'Studio Wireless Pods',
      category: 'Tech',
      price: '$299',
      oldPrice: '$349',
      tag: 'HOT',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      isSaved: true
    }
  ]);

  const categories = ['All', 'Footwear', 'Streetwear', 'Accessories', 'Tech'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  const toggleSave = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, isSaved: !item.isSaved } : item));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-4 h-4 text-rose-500" /> Category Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
              Wishlist Explorer
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              {filteredItems.length} Products Found
            </span>
          </div>
        </div>

        {/* Animated Category Tab Journey Selector */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors z-10 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="categoryJourneyPill"
                    className="absolute inset-0 bg-gradient-to-r from-rose-600 to-indigo-600 rounded-2xl shadow-lg shadow-rose-600/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-900/90 border border-slate-800/80 rounded-3xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleSave(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-white hover:scale-110 transition-transform"
                  >
                    <Heart className={`w-4 h-4 ${item.isSaved ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                  </button>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-xl font-bold text-white">{item.price}</span>
                      <span className="text-xs text-slate-500 line-through">{item.oldPrice}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button className="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/20">
                      <ShoppingBag className="w-3.5 h-3.5" /> Move to Cart
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist17;
