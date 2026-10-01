import React, { useState } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export default function CartFrequentlyBoughtTogether4({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800">
      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-6">04 / CONNECTED PRODUCT CHAIN</span>
      
      <div className="flex flex-col items-center gap-3">
        <div className="w-full p-4 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">1. YOUR CART ITEM</span>
          <span className="text-sm font-bold">Navy Tailored Blazer (₹8,999)</span>
        </div>

        <ArrowDown className="text-emerald-400 w-5 h-5 animate-bounce" />

        <div className="w-full p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400 font-bold">2. RECOMMENDED PAIR</span>
          <span className="text-sm font-bold text-white">Silk Pocket Square (₹499)</span>
          <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-xl text-xs font-bold">+ Quick Add</button>
        </div>
      </div>
    </div>
  );
}