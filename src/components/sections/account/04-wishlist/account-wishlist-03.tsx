import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';

export function AccountWishlist3() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Classic Leather Chronograph', price: '$210', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Wireless Studio Headphones', price: '$299', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">Saved Items</span>
            <h2 className="text-3xl font-bold text-white mt-1">Horizontal Showcase</h2>
          </div>
          <span className="text-xs text-slate-400 flex items-center gap-1 font-semibold">
            Scroll Horizontal <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="w-[280px] shrink-0 bg-slate-800/80 border border-slate-700/60 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white text-base line-clamp-1">{item.name}</h3>
                <p className="text-lg font-bold text-indigo-400 mt-1">{item.price}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50 flex gap-2">
                <button className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all">
                  <ShoppingBag className="w-3.5 h-3.5" /> Move
                </button>
                <button className="p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist3;
