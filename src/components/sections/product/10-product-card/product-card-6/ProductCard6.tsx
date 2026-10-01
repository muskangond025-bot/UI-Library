import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard6({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-emerald-500/40 rounded-3xl p-5 shadow-[0_0_40px_rgba(16,185,129,0.2)] relative">
        
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold uppercase rounded-lg">
            Cyber Edition
          </span>
          <span className="text-xs font-mono text-emerald-400 font-bold">READY TO SHIP</span>
        </div>

        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group border border-emerald-500/20">
          <img 
            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80" 
            alt="Cyber Processing Unit" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-lg text-white mb-1">RTX Cyber Accelerator X</h3>
        <p className="text-xs text-slate-400 mb-4 font-mono">24GB GDDR6X • Ray-Tracing 4.0 • DLSS 3.5</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-xs text-slate-400 block font-mono">MSRP</span>
            <span className="text-2xl font-black text-emerald-400 font-mono">$1,199</span>
          </div>

          <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Deploy Unit
          </button>
        </div>

      </div>

    </div>
  );
}
