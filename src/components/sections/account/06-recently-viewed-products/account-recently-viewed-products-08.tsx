import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Trash2, ArrowUpRight, RotateCcw } from 'lucide-react';

export function AccountRecentlyViewedProducts8() {
  const [items, setItems] = useState([
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', time: 'Viewed 15m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', time: 'Viewed 40m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', time: 'Viewed 2h ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Studio Noise Pods', price: '$299', category: 'Audio', time: 'Viewed Yesterday', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ]);

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Clock className="w-4 h-4 text-slate-400" /> DENSE ACTIVITY LOG
            </div>
            <h2 className="text-2xl font-bold text-white">Compact History List</h2>
          </div>
          <button onClick={() => setItems([])} className="text-xs text-rose-400 hover:underline font-bold uppercase tracking-wider">
            Clear Entire Log
          </button>
        </div>

        <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-900" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">{item.category}</span>
                    <h3 className="font-bold text-white text-base group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-bold text-white text-base">{item.price}</span>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1">
                      Revisit <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-500 hover:text-rose-400 transition-colors">
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

export default AccountRecentlyViewedProducts8;
