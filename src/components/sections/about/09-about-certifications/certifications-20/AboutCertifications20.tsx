import React from 'react';
import { Sparkles, Gem } from 'lucide-react';

export function AboutCertifications20() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-amber-100">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> ULTRA LUXURY DIAMOND #20 • ANIMATION: FACETED DIAMOND SPARKLE FLARE
        </span>
        <h2 className="text-3xl font-black text-amber-200">Ultra Luxury Diamond Faceted Certificate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-6 rounded-3xl bg-stone-900 border-2 border-amber-400/40 space-y-4 shadow-2xl">
              <Gem className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Diamond Tier Credential 0{n}</h3>
              <span className="text-xs font-mono text-amber-400">FACETED GEOMETRY SEAL</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
