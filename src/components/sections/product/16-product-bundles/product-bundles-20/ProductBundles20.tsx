import React from 'react';
import { ShoppingBag, Star, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProductBundles20({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          20. ULTIMATE ALL-IN-ONE ENTERPRISE SUITE
        </span>
        <h2 className="text-3xl font-black text-white">Full Workstation Suite</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl p-6 z-10 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
        <img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80" alt="Desk" className="w-full h-52 object-cover rounded-2xl mb-4" />
        
        <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mb-1">
          <Star size={14} className="fill-amber-400" /> 4.9 Verified Setup (320+ reviews)
        </div>

        <h3 className="font-black text-xl text-white">Ergonomic Walnut Desk + 3 Add-ons</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">Includes Desk + Monitor Arm + Leather Mat + Cable Kit (Save $200).</p>

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <div>
            <span className="text-3xl font-black text-amber-400">$876</span>
            <span className="text-xs text-slate-500 line-through block">$1,076</span>
          </div>

          <button className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={18} /> Buy Complete Suite
          </button>
        </div>
      </div>

    </div>
  );
}
