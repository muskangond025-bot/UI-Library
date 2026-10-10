import React from 'react';
import { Sparkles, Gem } from 'lucide-react';
export function AboutPartnersBrands20() {
  return (
    <section className="w-full py-16 px-4 bg-black text-amber-100 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> ULTRA LUXURY DIAMOND #20 • ANIMATION: FACETED DIAMOND SPARKLE FLARE</span>
        <h2 className="text-3xl font-black text-amber-200">Ultra Luxury Diamond Faceted Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-stone-900 border-2 border-amber-400/40 space-y-3">
              <Gem className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Diamond Tier Partner 0{n}</h3>
              <p className="text-xs font-mono text-amber-400">FACETED DIAMOND GEOMETRY</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
