import React from 'react';
import { Gem } from 'lucide-react';
export function AboutCtaBanner20() {
  return (
    <section className="w-full py-16 px-4 bg-black text-amber-100 text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-stone-900 border-2 border-amber-400/40 shadow-2xl">
        <span className="text-xs font-mono text-amber-300 font-bold uppercase">ULTRA LUXURY DIAMOND #20 • ANIMATION: FACETED DIAMOND SPARKLE FLARE</span>
        <h2 className="text-3xl font-black text-amber-200">Ultra Luxury Diamond Faceted CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-amber-400 text-slate-950 font-bold text-sm uppercase">Claim Diamond Pass</button>
      </div>
    </section>
  );
}
