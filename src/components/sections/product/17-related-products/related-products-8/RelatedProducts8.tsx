import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function RelatedProducts8({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Neumorphic Audio Suite
        </span>
        <h2 className="text-3xl font-extrabold text-white">Audiophile Companion Gear</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl z-10 my-4">
        <div className="bg-slate-900 border border-purple-500/40 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" alt="Headphones" className="w-full h-40 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Pro ANC Headphones</h3>
          <span className="text-sm font-black text-purple-400">$299</span>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=80" alt="Stand" className="w-full h-40 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Aluminum Headphone Stand</h3>
          <span className="text-sm font-black text-purple-400">$49</span>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=80" alt="Case" className="w-full h-40 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Hard Shell Travel Case</h3>
          <span className="text-sm font-black text-purple-400">$35</span>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Audiophile Companion Pack</span>
          <span className="text-2xl font-black text-purple-400">$383</span>
        </div>
        <button className="px-6 py-3 bg-purple-600 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Audiophile Pack
        </button>
      </div>
    </div>
  );
}
