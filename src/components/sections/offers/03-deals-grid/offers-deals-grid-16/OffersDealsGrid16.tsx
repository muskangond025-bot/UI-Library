import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cloud } from 'lucide-react';

export function OffersDealsGrid16() {
  const cards = [
    { title: 'Levitating Speaker Core', price: '$189', orig: '$379', delay: 0 },
    { title: 'Ambient Cloud Light', price: '$99', orig: '$199', delay: 0.5 },
    { title: 'Zero-Gravity Wrist Rest', price: '$49', orig: '$99', delay: 1 }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-14 font-sans rounded-3xl border border-slate-800 overflow-hidden relative">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-2">
          <span className="px-4 py-1 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <Cloud className="w-4 h-4 text-indigo-400" /> FLOATING PARALLAX SAVINGS CANVAS
          </span>
          <h2 className="text-4xl font-extrabold text-white">Weightless Discount Drops</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: item.delay }}
              className="bg-slate-900/80 p-6 rounded-3xl border border-indigo-500/20 backdrop-blur-md flex flex-col justify-between h-80 shadow-2xl hover:border-indigo-400/50 transition-colors"
            >
              <div>
                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">SAVINGS MODULE #0{idx + 1}</span>
                <h3 className="font-extrabold text-2xl text-white mt-2">{item.title}</h3>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
                <div>
                  <div className="text-3xl font-black text-indigo-400">{item.price}</div>
                  <div className="text-xs text-slate-500 line-through">{item.orig}</div>
                </div>
                <button className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid16;
