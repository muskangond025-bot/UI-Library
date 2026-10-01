import React from 'react';

export default function CartFrequentlyBoughtTogether11({ data }: { data?: any }) {
  return (
    <div className="w-full py-12 px-8 bg-white border border-slate-200 rounded-3xl font-serif my-4">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">USUALLY BOUGHT TOGETHER</h2>
      <div className="font-sans flex items-center justify-between p-4 bg-slate-50 border rounded-2xl">
        <span className="text-sm font-bold">Silk Pocket Square + Silver Tie Bar</span>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold">+ Add Accessories</button>
      </div>
    </div>
  );
}