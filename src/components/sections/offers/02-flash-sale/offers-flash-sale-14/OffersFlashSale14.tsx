import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Zap } from 'lucide-react';

export function OffersFlashSale14() {
  const deals = [
    { title: 'Bespoke Aluminum Sound Dock', price: '$119', orig: '$239', disc: '50% OFF' },
    { title: 'Minimal Desk Charging Mat', price: '$49', orig: '$99', disc: '50% OFF' },
    { title: 'Smart Ambient Monitor Light Bar', price: '$79', orig: '$159', disc: '50% OFF' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Pinned Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-8 sm:p-12 flex flex-col justify-between border-r border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6">
              <Zap className="w-4 h-4 text-amber-400" /> PINNED FLASH HERO
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Midnight Ultra Flash Sale
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Curated precision hardware drops available at 50% discount for the next 2 hours only.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-3 bg-slate-900/80 p-4 rounded-2xl border border-indigo-500/30">
              <Clock className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">COUNTDOWN REMAINING</div>
                <div className="text-xl font-black font-mono text-white">01h : 48m : 33s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Deals Panel */}
        <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-900/60 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {deals.map((item, idx) => (
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
export default OffersFlashSale14;
