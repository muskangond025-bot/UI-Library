import React from 'react';
import { Leaf } from 'lucide-react';
export function AboutCtaBanner16() {
  return (
    <section className="w-full py-16 px-4 bg-emerald-950 text-emerald-100 text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-emerald-900/40 border border-emerald-500/30">
        <span className="text-xs font-mono text-emerald-300 font-bold uppercase">FROSTED BIO-GLASS #16 • ANIMATION: ORGANIC LEAF PARTICLE FLOATING</span>
        <h2 className="text-3xl font-black text-white">Frosted Emerald Eco-Bio CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-emerald-400 text-slate-950 font-bold text-sm">Plant Seed</button>
      </div>
    </section>
  );
}
