import React, { useState } from 'react';
import { ShoppingBag, Cpu, Shield } from 'lucide-react';

export default function RelatedProducts6({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase font-bold rounded-full mb-2 inline-block">
          Cyber Matrix Recommendations
        </span>
        <h2 className="text-3xl font-extrabold text-white">Related Gaming Hardware</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl z-10 my-4">
        <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-4 text-center shadow-[0_0_25px_rgba(16,185,129,0.15)]">
          <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80" alt="GPU" className="w-full h-40 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs font-mono">RTX Cyber Accelerator X</h3>
          <span className="text-sm font-black text-emerald-400 font-mono">$1,199</span>
        </div>
        <div className="bg-slate-900 border border-emerald-500/20 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" alt="Keyboard" className="w-full h-40 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs font-mono">RGB Mechanical Keyboard</h3>
          <span className="text-sm font-black text-emerald-400 font-mono">$149</span>
        </div>
        <div className="bg-slate-900 border border-emerald-500/20 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=80" alt="Mouse" className="w-full h-40 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs font-mono">Wireless Gaming Mouse</h3>
          <span className="text-sm font-black text-emerald-400 font-mono">$79</span>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 border border-emerald-500/30 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block font-mono">Deploy Upgrade Hardware</span>
          <span className="text-2xl font-black text-emerald-400 font-mono">$1,427</span>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Deploy Hardware
        </button>
      </div>
    </div>
  );
}
