import React from 'react';
import { Sparkles, Sun } from 'lucide-react';
export function AboutPartnersBrands11() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> PRISM LIGHT GLASS #11 • ANIMATION: PRISM COLOR SPLITTING & BEAM TILT</span>
        <h2 className="text-3xl font-black">Prism Light Beam Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-slate-900 border border-violet-500/30 space-y-3">
              <Sun className="w-6 h-6 text-violet-400" />
              <h3 className="text-lg font-bold">Prism Partner Node 0{n}</h3>
              <p className="text-xs font-mono text-slate-400">Prism refraction light beam tracking on hover.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
