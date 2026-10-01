import React from 'react';

export default function CartFrequentlyBoughtTogether19({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-4">19 / ASYMMETRIC GRIDLESS</span>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border">
        <h4 className="text-base font-bold text-slate-900">Silk Pocket Square + Tie Bar Combo</h4>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold">+ Add Combo</button>
      </div>
    </div>
  );
}