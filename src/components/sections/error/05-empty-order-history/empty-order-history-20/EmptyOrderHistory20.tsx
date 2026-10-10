import React from 'react';
import { Package, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory20: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-blue-950 via-slate-950 to-cyan-950 text-cyan-300 font-mono relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-t from-cyan-500 to-blue-400 p-1 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)]">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
            <Package className="w-14 h-14 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-950 text-cyan-300 border border-cyan-700/50 inline-block mb-4">
          SYNTHWAVE DISPATCH HORIZON
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          OUTRUN THE EMPTY HISTORY
        </h2>
        <p className="text-slate-300 max-w-lg mx-auto mb-8 text-sm font-sans">
          Retro 80s synth grid horizon. Zero saved order logs in memory cache. Launch first order run now!
        </p>
        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] inline-flex items-center gap-2">
          <span>CRUISE THE CATALOG</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory20;
