import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';

export function AccountRecentlyViewedProducts16() {
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', time: 'Viewed 5m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', delay: 0 },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', time: 'Viewed 30m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80', delay: 0.5 }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-indigo-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AMBIENT FLOATING MODULES
          </div>
          <h2 className="text-3xl font-extrabold text-white">Floating History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: item.delay, ease: 'easeInOut' }}
              className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl space-y-4 group hover:border-indigo-500 transition-colors"
            >
              <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-slate-950/80 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                  {item.time}
                </span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-indigo-400 font-bold text-lg mt-1">{item.price}</p>
                </div>
                <button className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts16;
