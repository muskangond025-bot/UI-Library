import React from 'react';
import { motion } from 'framer-motion';
import { Footprints, ArrowRight, Eye } from 'lucide-react';

export function AccountRecentlyViewedProducts12() {
  const steps = [
    { step: 'Step 01', stage: 'First Opened', name: 'Nike Air Max Pulse', price: '$150', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { step: 'Step 02', stage: 'Next Discovery', name: 'Oversized Denim Jacket', price: '$120', time: '45 mins ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { step: 'Step 03', stage: 'Last Viewed', name: 'Leather Chronograph', price: '$210', time: '10 mins ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Footprints className="w-4 h-4 text-indigo-400" /> EXPLORATION PATH
            </div>
            <h2 className="text-3xl font-extrabold text-white">Product Journey</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            3 Sequential Steps
          </span>
        </div>

        <div className="space-y-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-800 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{item.step}</span>
                    <span className="text-xs text-slate-500">• {item.stage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{item.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                <span className="text-xl font-bold text-white">{item.price}</span>
                <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all">
                  Revisit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts12;
