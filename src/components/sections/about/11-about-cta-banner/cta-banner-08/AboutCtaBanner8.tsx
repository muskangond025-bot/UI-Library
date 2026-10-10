import React from 'react';
import { Radio } from 'lucide-react';
export function AboutCtaBanner8() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white font-mono text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-2xl bg-slate-900 border border-lime-500/40 shadow-[0_0_30px_rgba(132,204,22,0.2)]">
        <span className="px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-400 text-xs font-bold uppercase"><Radio className="w-3.5 h-3.5 inline mr-1 animate-ping" /> CYBERPUNK HUD GLASS #08 • ANIMATION: SCANLINE RADAR SWEEP & LATENCY PULSE</span>
        <h2 className="text-3xl sm:text-5xl font-black text-lime-400">INITIALIZE CYBER PROTOCOL</h2>
        <button className="px-8 py-4 rounded-xl bg-lime-400 text-slate-950 font-bold text-sm uppercase">CONNECT NODE</button>
      </div>
    </section>
  );
}
