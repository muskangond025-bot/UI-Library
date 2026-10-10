import React from 'react';
import { Layers } from 'lucide-react';
export function AboutCtaBanner12() {
  return (
    <section className="w-full py-16 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
        <span className="text-xs font-mono text-cyan-400 font-bold uppercase">FLOATING PARALLAX STACK #12 • ANIMATION: MULTI-PLANE SCROLL ELEVATION</span>
        <h2 className="text-3xl font-black">Multi-Plane Parallax Layer CTA</h2>
        <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-sm">Elevate Layer</button>
      </div>
    </section>
  );
}
