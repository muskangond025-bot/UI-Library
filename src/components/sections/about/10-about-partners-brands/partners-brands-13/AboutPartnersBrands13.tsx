import React from 'react';
import { Sparkles, Shield } from 'lucide-react';
export function AboutPartnersBrands13() {
  return (
    <section className="w-full py-16 px-4 bg-zinc-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> SKEUOMORPHIC BEVEL #13 • ANIMATION: GLOSSY BEVEL SHINE & SEAL PRESS</span>
        <h2 className="text-3xl font-black">Skeuomorphic Glossy Bevel Seal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-gradient-to-b from-stone-800 to-stone-900 border-2 border-amber-500/40 space-y-3">
              <Shield className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-amber-100">Glossy Bevel Partner 0{n}</h3>
              <p className="text-xs font-mono text-amber-400/80">Real-feel glass edge bevels & seals.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
