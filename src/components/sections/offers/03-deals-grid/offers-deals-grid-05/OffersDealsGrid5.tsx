import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame } from 'lucide-react';

export function OffersDealsGrid5() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 sm:p-10 font-sans rounded-3xl border border-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// CLEARANCE BENTO MATRIX</span>
          <span className="text-xs font-mono text-slate-500">OUTLET INDEX V5</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main Bento Hero */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-indigo-900/60 via-slate-900 to-indigo-950 p-8 rounded-3xl border border-indigo-500/30 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full text-xs font-bold uppercase inline-flex items-center gap-1 mb-4">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> TOP CLEARANCE ITEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                Ultra Noise Cancelling Headphones
              </h2>
              <p className="text-slate-400 text-sm max-w-sm mb-6">40mm custom beryllium drivers with active transparency mode.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-indigo-400">$179</span>
                <span className="text-sm line-through text-slate-500">$359</span>
                <span className="px-2 py-0.5 bg-indigo-500 text-white text-xs font-bold rounded">SAVE 50%</span>
              </div>
              <button className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-2">
                GET CLEARANCE DEAL <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Secondary Bento 1 */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <span className="text-xs font-mono text-emerald-400 font-bold">45% PRICE DROP</span>
            <div>
              <h3 className="font-bold text-white text-lg">Titanium Smart Watch</h3>
              <p className="text-xs text-slate-400 mt-1">Dual GPS + Sapphire Glass</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <span className="font-bold text-xl">$139</span>
              <span className="text-xs text-slate-500 line-through">$259</span>
            </div>
          </div>

          {/* Secondary Bento 2 */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <span className="text-xs font-mono text-purple-400 font-bold">OUTLET SPECIAL</span>
            <div>
              <h3 className="font-bold text-white text-lg">Ergonomic Mouse Dock</h3>
              <p className="text-xs text-slate-400 mt-1">Wireless Fast Charge</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <span className="font-bold text-xl font-mono">$45</span>
              <span className="text-xs text-slate-500 line-through">$89</span>
            </div>
          </div>

          {/* Wide Bento 3 */}
          <div className="md:col-span-2 bg-slate-900 p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold">BUNDLE DISCOUNT</span>
              <h3 className="font-bold text-white text-xl">Mechanical Keyboard + Custom Caps</h3>
              <p className="text-xs text-slate-400 mt-1">Full PBT set included</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-amber-400">$109</div>
              <button className="mt-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl">
                Claim Bundle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid5;
