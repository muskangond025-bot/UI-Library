import React from 'react';

export default function CartFrequentlyBoughtTogether9({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4">
      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-6">09 / HORIZONTAL PRODUCT JOURNEY</span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">1. CART: Blazer</div>
        <span>→</span>
        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">2. PAIR: Pocket Square</div>
        <span>→</span>
        <div className="p-3 bg-emerald-600 rounded-xl font-black">3. BUNDLE COMPLETE</div>
      </div>
    </div>
  );
}