import React from 'react';

export default function CartFrequentlyBoughtTogether8({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 border-r pr-6">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">08 / IN YOUR CART</span>
          <h3 className="text-xl font-bold text-slate-900 mt-2">Navy Tailored Blazer</h3>
          <span className="text-sm font-mono font-bold text-slate-600">₹8,999</span>
        </div>
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-3">FREQUENTLY BOUGHT WITH THIS</span>
          <div className="p-4 bg-slate-50 border rounded-2xl flex justify-between items-center text-xs font-bold">
            <span>Silk Pocket Square (₹499)</span>
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-xl">+ Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}