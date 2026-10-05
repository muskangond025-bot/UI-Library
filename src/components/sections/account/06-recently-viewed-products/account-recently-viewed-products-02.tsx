import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye } from 'lucide-react';

export function AccountRecentlyViewedProducts2() {
  const steps = [
    { period: 'Today — 2:15 PM', name: 'Nike Air Max Pulse', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { period: 'Yesterday — 8:40 PM', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">History Timeline</h2>

        <div className="relative pl-8 space-y-8 border-l-2 border-indigo-500/30 ml-4">
          {steps.map((step, idx) => (
            <motion.div key={step.period} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }} className="relative">
              <div className="absolute -left-[41px] top-1 p-2 rounded-full bg-indigo-600 text-white">
                <Clock className="w-4 h-4" />
              </div>
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={step.image} alt={step.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-900" />
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{step.period}</span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{step.name}</h3>
                    <p className="text-xs text-slate-400">{step.price}</p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs">
                  View Again
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts2;
