import React from 'react';

export default function CartFrequentlyBoughtTogether16({ data }: { data?: any }) {
  return (
    <div className="w-full py-10 px-8 bg-white font-sans text-center my-4">
      <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4">ADD THESE TO YOUR ORDER</h3>
      <div className="inline-flex items-center gap-6 border-b border-slate-900 pb-2 text-xs font-mono font-bold">
        <span>Silk Pocket Square (₹499)</span>
        <button className="text-emerald-600 hover:underline">+ Add</button>
      </div>
    </div>
  );
}