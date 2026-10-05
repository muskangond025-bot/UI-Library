import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderHeart, ShoppingBag, Trash2 } from 'lucide-react';

export function AccountWishlist4() {
  const [activeTab, setActiveTab] = useState('Sneakers');

  const collections: Record<string, any[]> = {
    Sneakers: [{ id: '1', name: 'Nike Air Max 270', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }],
    Streetwear: [{ id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }],
    Accessories: [{ id: '3', name: 'Leather Chronograph', price: '$210', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }],
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <FolderHeart className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Saved Collections</h2>
            <p className="text-sm text-slate-400 mt-0.5">Organized favorites grouped by style</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8 border-b border-slate-800 pb-4 overflow-x-auto">
          {Object.keys(collections).map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all relative ${
                  isActive ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat} ({collections[cat].length})
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {collections[activeTab].map((item) => (
              <div key={item.id} className="p-5 rounded-3xl bg-slate-900 border border-slate-800">
                <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white text-base">{item.name}</h3>
                <p className="text-indigo-400 font-bold mt-1">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AccountWishlist4;
