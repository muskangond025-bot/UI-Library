import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, Trash2, ArrowRight } from 'lucide-react';

export function AccountRecentlyViewedProducts1() {
  const [items, setItems] = useState([
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', time: '10 mins ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', time: '45 mins ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Studio Noise Pods', price: '$299', category: 'Audio', time: 'Yesterday', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ]);

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-slate-800 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <Clock className="w-4 h-4 text-indigo-400" /> Browsing Activity
            </div>
            <h2 className="text-3xl font-extrabold text-white mt-1 tracking-tight">Recently Viewed Rail</h2>
          </div>
          <button onClick={() => setItems([])} className="text-xs text-slate-400 hover:text-rose-400 font-semibold uppercase tracking-wider transition-colors">
            Clear History
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="w-[280px] shrink-0 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden mb-4 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-300 backdrop-blur-md">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base line-clamp-1">{item.name}</h3>
                <p className="text-lg font-bold text-indigo-400 mt-1">{item.price}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <button className="font-semibold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                  View Product <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-rose-400 transition-colors">
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

export default AccountRecentlyViewedProducts1;
