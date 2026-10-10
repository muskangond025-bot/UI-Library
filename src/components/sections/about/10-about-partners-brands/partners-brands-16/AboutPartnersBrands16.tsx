import React from 'react';
import { Sparkles, Leaf } from 'lucide-react';
export function AboutPartnersBrands16() {
  return (
    <section className="w-full py-16 px-4 bg-emerald-950 text-emerald-100 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> FROSTED BIO-GLASS #16 • ANIMATION: ORGANIC LEAF PARTICLE FLOATING</span>
        <h2 className="text-3xl font-black text-white">Frosted Emerald Bio-Glass Eco Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-emerald-900/40 border border-emerald-500/30 space-y-3">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Eco Net-Zero Partner 0{n}</h3>
              <p className="text-xs text-emerald-300/80">Organic leaf particle glow.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
