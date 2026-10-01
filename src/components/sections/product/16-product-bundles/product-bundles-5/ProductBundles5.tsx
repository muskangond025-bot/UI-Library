import React, { useState } from 'react';
import { ShoppingBag, Star, Check } from 'lucide-react';

export default function ProductBundles5({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-stone-900 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Sneakerhead Fit Bundle
        </span>
        <h2 className="text-3xl font-extrabold text-stone-100">Urban Runner & Hoodie Set</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl z-10 my-4">
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-5">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" alt="Sneakers" className="w-full h-48 object-cover rounded-2xl mb-3" />
          <h3 className="font-extrabold text-base">Red Runner Pro</h3>
          <span className="text-lg font-black text-amber-400">$210</span>
        </div>

        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-5">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" alt="Hoodie" className="w-full h-48 object-cover rounded-2xl mb-3" />
          <h3 className="font-extrabold text-base">Heavyweight Fleece Hoodie</h3>
          <span className="text-lg font-black text-amber-400">+$95</span>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-stone-950 border border-stone-800 p-5 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-stone-400 block">Complete Set Savings ($40 OFF)</span>
          <span className="text-2xl font-black text-amber-400">$265</span>
        </div>
        <button className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Full Fit to Cart
        </button>
      </div>
    </div>
  );
}
