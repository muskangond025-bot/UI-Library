import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export function AccountRecentlyViewedProducts17() {
  const [isOpen, setIsOpen] = useState(true);

  const sessionItems = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">SESSION #4021 • TODAY</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Your Last Session</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300">
            {sessionItems.length} Items Browsed
          </span>
        </div>

        {/* Collapsible Session Box */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Active Session Group</h3>
                <p className="text-xs text-slate-400">Recorded 25 minutes ago • Mobile Browser</p>
              </div>
            </div>
            <button className="p-2 rounded-xl bg-slate-900 text-slate-400">
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4 pt-4 border-t border-slate-800"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {sessionItems.map((item) => (
                    <div key={item.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                      <img src={item.image} alt={item.name} className="aspect-square rounded-xl object-cover mb-3" />
                      <span className="text-[10px] uppercase font-bold text-indigo-400">{item.category}</span>
                      <h4 className="font-bold text-white text-sm line-clamp-1 mt-0.5">{item.name}</h4>
                      <p className="text-indigo-400 font-bold text-xs mt-1">{item.price}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts17;
