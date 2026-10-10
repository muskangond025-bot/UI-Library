import React from 'react';
import { Sparkles, Shield } from 'lucide-react';
export function AboutCtaBanner7() {
  return (
    <section className="w-full py-16 px-4 bg-zinc-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-8 p-10 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border-2 border-slate-400/40 shadow-2xl">
        <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold uppercase"><Shield className="w-3.5 h-3.5 inline mr-1" /> METALLIC CHROMIUM #07 • ANIMATION: LIQUID METAL SHEEN & SHINE</span>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Brushed Platinum Metallic CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold text-sm uppercase shadow-xl">Upgrade to Platinum</button>
      </div>
    </section>
  );
}
