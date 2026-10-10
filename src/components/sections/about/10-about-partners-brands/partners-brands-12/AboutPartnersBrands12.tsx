import React from 'react';
import { Sparkles, Layers } from 'lucide-react';
export function AboutPartnersBrands12() {
  return (
    <section className="w-full py-16 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> FLOATING PARALLAX STACK #12 • ANIMATION: MULTI-PLANE SCROLL ELEVATION</span>
        <h2 className="text-3xl font-black">Floating Parallax Multi-Plane Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 shadow-2xl">
              <Layers className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold">Parallax Partner Layer 0{n}</h3>
              <p className="text-xs font-mono text-slate-400">Multi-layer parallax scroll elevation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
