import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderContinueShopping11() {
  const [tab, setTab] = useState<'New In' | 'Trending' | 'Sale'>('New In');

  const content = {
    'New In': 'Discover 50+ new studio items dropped this week.',
    Trending: 'Check out top customer trending items across outerwear.',
    Sale: 'Limited seasonal discounts on studio desk accessories.',
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Catalog Sections</span>
            <h2 className="text-2xl font-bold text-white">Explore Storefront</h2>
          </div>
          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {(['New In', 'Trending', 'Sale'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  tab === t ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2 text-sm text-slate-300"
          >
            <h3 className="font-bold text-base text-white">{tab} Section</h3>
            <p className="leading-relaxed">{content[tab]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default OrderContinueShopping11;
