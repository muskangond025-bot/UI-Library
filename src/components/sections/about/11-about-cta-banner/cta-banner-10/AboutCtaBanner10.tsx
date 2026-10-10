import React from 'react';
import { Waves } from 'lucide-react';
export function AboutCtaBanner10() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-950 via-teal-950 to-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-teal-500/30 shadow-2xl">
        <span className="px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono font-bold uppercase"><Waves className="w-3.5 h-3.5 inline mr-1 animate-pulse" /> LIQUID AURORA MORPHISM #10 • ANIMATION: MORPHING SVG AURORA WAVE FLOW</span>
        <h2 className="text-3xl sm:text-5xl font-black text-teal-200">Liquid SVG Wave Aurora CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-teal-400 text-slate-950 font-bold text-sm uppercase shadow-lg">Flow into Next-Gen</button>
      </div>
    </section>
  );
}
