import React from 'react';
import { Sparkles, Radio } from 'lucide-react';
export function AboutPartnersBrands19() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> SYNTHWAVE NEON GRID #19 • ANIMATION: PERSPECTIVE GRID SCROLL & SCANLINE</span>
        <h2 className="text-3xl font-black">Synthwave Neon Perspective Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-slate-900 border border-fuchsia-500/40 space-y-3">
              <Radio className="w-6 h-6 text-fuchsia-400 animate-pulse" />
              <h3 className="text-lg font-bold text-white">Synthwave Brand 0{n}</h3>
              <p className="text-xs font-mono text-fuchsia-300/80">Retro sunset perspective grid lines.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
