import React from 'react';
import { Heart } from 'lucide-react';
export function AboutCtaBanner9() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-950 via-rose-950 to-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-rose-950/20 backdrop-blur-3xl border border-rose-500/20 shadow-2xl">
        <span className="px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-300 text-xs font-mono font-bold uppercase"><Heart className="w-3.5 h-3.5 inline mr-1" /> VELVET MATTE GLASS #09 • ANIMATION: SATIN DIFFUSE AURA FADE-IN</span>
        <h2 className="text-3xl sm:text-5xl font-black text-rose-200">Velvet Satin Sheen CTA Banner</h2>
        <button className="px-8 py-4 rounded-2xl bg-rose-500 text-white font-bold text-sm uppercase shadow-lg">Join Exclusive Club</button>
      </div>
    </section>
  );
}
