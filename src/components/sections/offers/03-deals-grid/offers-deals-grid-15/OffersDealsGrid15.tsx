import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ArrowRight } from 'lucide-react';

export function OffersDealsGrid15() {
  const feed = [
    { item: 'Quantum Mechanical Keyboard', price: '$89', orig: '$179', saved: 'SAVE $90 (50% OFF)', time: 'Just updated' },
    { item: 'Spatial Noise pods Pro', price: '$119', orig: '$239', saved: 'SAVE $120 (50% OFF)', time: '2 mins ago' },
    { item: 'Titanium Smart Ring V2', price: '$149', orig: '$299', saved: 'SAVE $150 (50% OFF)', time: '5 mins ago' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <TrendingDown className="w-6 h-6 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold">REALTIME PRICE SLASH & SAVINGS FEED</h2>
              <span className="text-xs text-slate-400">DISCOUNT MONITORING DIRECTORY</span>
            </div>
          </div>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase">
            LIVE CATALOG MONITORING
          </span>
        </div>

        <div className="space-y-4">
          {feed.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold">{item.saved} • {item.time}</div>
                <h3 className="font-extrabold text-xl text-white">{item.item}</h3>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-black text-white">{item.price}</div>
                  <div className="text-xs text-slate-500 line-through text-right">{item.orig}</div>
                </div>
                <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase rounded-xl shrink-0 flex items-center gap-1">
                  VIEW SAVINGS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid15;
