import React from 'react';

export default function CartFrequentlyBoughtTogether14({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-6">14 / BUNDLE TIMELINE MILESTONES</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold text-center">
        <div className="p-4 bg-slate-50 border rounded-2xl">Step 01: Cart Item</div>
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl">Step 02: Tie Bar (+₹349)</div>
        <div className="p-4 bg-slate-900 text-white rounded-2xl">Step 03: Complete Kit</div>
      </div>
    </div>
  );
}