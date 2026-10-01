import React, { useState } from 'react';

export default function CartFrequentlyBoughtTogether6({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-950 text-white rounded-3xl font-sans my-4 border border-slate-800">
      <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-4">06 / COMPARISON BUNDLE BREAKDOWN</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400 block mb-1">INDIVIDUAL PURCHASE TOTAL</span>
          <span className="text-3xl font-black text-slate-400 line-through">₹9,847</span>
        </div>
        <div className="p-6 bg-emerald-950 border border-emerald-500/40 rounded-2xl">
          <span className="text-xs text-emerald-400 font-bold block mb-1">BUNDLE DISCOUNT TOTAL</span>
          <span className="text-4xl font-black text-white">₹9,497</span>
          <span className="text-xs text-emerald-300 font-bold block mt-1">You Save ₹350 Instantly</span>
        </div>
      </div>
    </div>
  );
}