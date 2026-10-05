import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Eye, Trash2 } from 'lucide-react';

export function AccountRecentlyViewedProducts7() {
  const trail = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', time: '10m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', time: '35m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', time: '1h ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Studio Noise Pods', price: '$299', time: '3h ago', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Compass className="w-4 h-4 text-indigo-400" /> DISCOVERY PATH
            </div>
            <h2 className="text-3xl font-extrabold text-white">Product Trail</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            Sequential Path
          </span>
        </div>

        <div className="relative overflow-x-auto pb-6 scrollbar-none">
          <div className="flex items-center gap-4 min-w-[1000px] py-4">
            {trail.map((item, idx) => (
              <React.Fragment key={item.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="w-[240px] shrink-0 p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl text-left relative group"
                >
                  <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Step 0{idx + 1} • {item.time}
                  </span>
                  <h3 className="font-bold text-white text-base mt-2 line-clamp-1">{item.name}</h3>
                  <p className="text-indigo-400 font-bold mt-1">{item.price}</p>
                </motion.div>

                {idx < trail.length - 1 && (
                  <div className="shrink-0 flex items-center justify-center text-slate-600">
                    <ArrowRight className="w-6 h-6 text-indigo-500 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts7;
