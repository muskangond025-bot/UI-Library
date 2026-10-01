import React from 'react';

export default function CartFrequentlyBoughtTogether18({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl font-sans my-4 shadow-xl">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-200 block mb-2">BUY TOGETHER & SAVE 20%</span>
      <h3 className="text-2xl font-black mb-4">Complete Set Special Price</h3>
      <button className="px-6 py-3 bg-white text-emerald-950 font-bold rounded-xl text-xs">+ Add Set & Save ₹350</button>
    </div>
  );
}