import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';

export function OffersDealsGrid14() {
  const [activeCat, setActiveCat] = useState('ALL');

  const deals = [
    { title: 'Bespoke Aluminum Sound Dock', price: '$119', orig: '$239', disc: '50% OFF', cat: 'AUDIO' },
    { title: 'Minimal Desk Charging Mat', price: '$49', orig: '$99', disc: '50% OFF', cat: 'ACCESSORY' },
    { title: 'Smart Ambient Monitor Light Bar', price: '$79', orig: '$159', disc: '50% OFF', cat: 'LIGHTING' }
  ];

  const filtered = activeCat === 'ALL' ? deals : deals.filter(d => d.cat === activeCat);

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Pinned Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-8 sm:p-12 flex flex-col justify-between border-r border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6">
              <Filter className="w-4 h-4 text-indigo-400" /> PINNED CATEGORY SELECTOR
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Curated Category Sales
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore ongoing price drops organized strictly by product category.
            </p>
          </div>

          <div className="space-y-2 pt-8">
            {['ALL', 'AUDIO', 'ACCESSORY', 'LIGHTING'].map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`w-full py-3 px-4 rounded-xl text-left font-bold text-xs uppercase transition-all border ${
                  activeCat === c
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {c} CATEGORY DEALS
              </button>
            ))}
          </div>
        </div>

        {/* Right Deals Panel */}
        <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-900/60 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {filtered.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex items-center justify-between transition-all"
              >
                <div>
                  <span className="text-xs font-bold text-indigo-400">{item.disc}</span>
                  <h3 className="font-bold text-lg text-white mt-0.5">{item.title}</h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xl font-black text-white">{item.price}</div>
                    <div className="text-xs text-slate-500 line-through">{item.orig}</div>
                  </div>
                  <button className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid14;
