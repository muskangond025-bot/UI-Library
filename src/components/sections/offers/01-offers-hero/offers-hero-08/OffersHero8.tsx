import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

export function OffersHero8({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-wider rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>TIERED STACK OFFER</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            STACK MORE, <br/><span className="text-violet-400">SAVE UP TO 50%</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Choose your promotional tier. Unlock higher discounts as your cart value grows across selected categories.
          </p>
          <button className="px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-violet-500/25">
            <span>CLAIM STACKED SAVINGS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-6 flex justify-center py-6">
          <div className="relative w-72 sm:w-80 h-72 cursor-pointer group">
            <motion.div 
              className="absolute inset-0 bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg flex flex-col justify-between -rotate-6 transition-transform duration-500 group-hover:-translate-x-8 group-hover:-translate-y-4 group-hover:-rotate-12"
            >
              <div className="text-xs text-slate-400 uppercase font-bold">TIER 03</div>
              <div className="text-3xl font-black text-slate-300">20% OFF</div>
              <div className="text-xs text-slate-500 font-mono">ON ₹1,999+</div>
            </motion.div>

            <motion.div 
              className="absolute inset-0 bg-slate-900 rounded-2xl p-6 border border-violet-500/40 shadow-xl flex flex-col justify-between rotate-3 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-6"
            >
              <div className="text-xs text-violet-400 uppercase font-bold">TIER 02</div>
              <div className="text-4xl font-black text-violet-300">30% OFF</div>
              <div className="text-xs text-slate-400 font-mono">ON ₹3,999+</div>
            </motion.div>

            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-900 rounded-2xl p-6 border border-violet-400 shadow-2xl flex flex-col justify-between transition-transform duration-500 group-hover:scale-105"
            >
              <div className="text-xs text-violet-200 uppercase font-bold">TOP TIER 01</div>
              <div>
                <div className="text-5xl font-black text-white">50% OFF</div>
                <div className="text-xs text-violet-200 mt-1 font-mono">CODE: STACK50</div>
              </div>
              <div className="text-xs text-violet-300 font-medium">ON ORDERS ABOVE ₹5,999</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero8;
