import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';

export function AccountRecentlyViewedProducts13() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Footwear', 'Streetwear', 'Accessories'];

  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', time: '15m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', time: '40m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', time: '2h ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  const filtered = activeTab === 'All' ? items : items.filter(i => i.category === activeTab);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Filter className="w-4 h-4" /> CATEGORY EXPLORER
            </div>
            <h2 className="text-3xl font-bold text-white">Categorized History</h2>
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="categoryHistoryTab"
                    className="absolute inset-0 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-5 rounded-3xl bg-slate-900 border border-slate-800">
                <img src={item.image} alt={item.name} className="aspect-square rounded-2xl object-cover mb-4" />
                <span className="text-[10px] uppercase font-bold text-indigo-400">{item.time}</span>
                <h3 className="font-bold text-white text-base mt-1">{item.name}</h3>
                <p className="text-indigo-400 font-bold mt-1">{item.price}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts13;
