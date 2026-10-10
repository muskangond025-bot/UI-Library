import React from 'react';
import { Sparkles, Grid } from 'lucide-react';
export function AboutPartnersBrands15() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> BENTO BOX GLASS #15 • ANIMATION: STAGGERED MODULAR TILE FADE-UP</span>
        <h2 className="text-3xl font-black">Bento Box Modular Partner Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-8 rounded-3xl bg-slate-900 border border-orange-500/30 md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-orange-400 font-bold">PREMIER GLOBAL TIER</span>
            <h3 className="text-2xl font-bold">NVIDIA & AWS Global Infrastructure</h3>
            <p className="text-xs text-slate-400">Multi-region cloud node deployment partner.</p>
          </div>
          <div className="p-8 rounded-3xl bg-orange-950/40 border border-orange-500/30 space-y-3">
            <span className="text-xs font-mono text-orange-300 font-bold">SECURITY TIER</span>
            <h3 className="text-xl font-bold">Google Security</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
