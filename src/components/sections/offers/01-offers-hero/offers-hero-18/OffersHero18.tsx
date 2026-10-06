import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersHero18({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs text-sky-400 font-mono uppercase tracking-widest font-bold">SAVINGS JOURNEY</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            3 STEPS TO <span className="text-sky-400">50% OFF</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">1</div>
            <h3 className="text-lg font-bold text-white uppercase">DISCOVER DEALS</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Browse curated seasonal items across fashion and tech.</p>
          </div>

          <div className="bg-slate-900 border border-sky-500/40 p-6 rounded-2xl space-y-3 shadow-lg shadow-sky-500/10">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-sm">2</div>
            <h3 className="text-lg font-bold text-white uppercase">CLAIM VOUCHER</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Code <strong className="text-white font-mono">PATH50</strong> copied to your clipboard.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">3</div>
            <h3 className="text-lg font-bold text-white uppercase">REDEEM & SAVE</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Apply code at checkout for immediate 50% discount.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
            <span>START SAVINGS PATH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero18;
