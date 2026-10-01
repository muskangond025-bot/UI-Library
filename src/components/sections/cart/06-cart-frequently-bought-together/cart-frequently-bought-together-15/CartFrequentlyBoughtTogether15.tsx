import React from 'react';

export default function CartFrequentlyBoughtTogether15({ data }: { data?: any }) {
  return (
    <div className="w-full py-12 px-8 bg-slate-950 text-white rounded-3xl font-serif my-4 border border-slate-800">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">15 / EDITORIAL COLLAGE</span>
      <h3 className="text-3xl font-light mb-6">Curated Cart Accessories</h3>
      <button className="px-6 py-3 bg-amber-500 text-slate-950 font-sans font-bold text-xs rounded-xl">+ Add Collage Picks</button>
    </div>
  );
}