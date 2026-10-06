import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Crown } from 'lucide-react';

export function OffersDealsGrid20() {
  const luxury = [
    { num: '01', title: 'Velvet Spatial Acoustic Pods', price: '$890', orig: '$1,800', disc: '50% SAVINGS' },
    { num: '02', title: '24K Gold Accent Mechanical Board', price: '$650', orig: '$1,300', disc: '50% SAVINGS' }
  ];

  return (
    <div className="w-full bg-slate-950 text-amber-100 p-8 sm:p-14 font-serif rounded-3xl border border-amber-500/30 relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase">
            <Crown className="w-4 h-4 text-amber-400" /> AWARD SHOWCASE LUXURY SLATE SALE
          </div>
          <h2 className="text-4xl sm:text-6xl font-light italic tracking-tight text-white">
            The Velvet Savings Archive
          </h2>
          <p className="text-amber-200/60 font-sans text-sm max-w-md mx-auto">Luxury private catalog discount drops and hardware artifacts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {luxury.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-slate-900/90 p-8 rounded-3xl border border-amber-500/20 flex flex-col justify-between h-80 group transition-all"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-sans text-amber-400/60 tracking-widest mb-4">
                  <span>LOT NO. {item.num}</span>
                  <span className="text-amber-400 font-bold">{item.disc}</span>
                </div>
                <h3 className="font-serif font-light text-2xl text-white mb-2">{item.title}</h3>
              </div>

              <div className="flex justify-between items-end pt-6 border-t border-amber-500/10 font-sans">
                <div>
                  <div className="text-3xl font-light text-amber-300">{item.price}</div>
                  <div className="text-xs text-slate-500 line-through">{item.orig}</div>
                </div>
                <button className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-2xl transition-colors flex items-center gap-1">
                  ACQUIRE <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid20;
