import React from 'react';
import { Sparkles } from 'lucide-react';
export function AboutPartnersBrands14() {
  return (
    <section className="w-full py-16 px-4 bg-white text-slate-900 border-y border-slate-200 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> MONOCHROME HAIRLINE #14 • ANIMATION: ARCHITECTURAL LINEAR MATRIX SCALE</span>
        <h2 className="text-3xl font-black">Monochrome Hairline Matrix Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 border border-slate-300 space-y-2">
              <span className="text-[10px] font-mono text-slate-500">MATRIX-REF-0{n}</span>
              <h3 className="text-lg font-bold">Minimal Brand Partner 0{n}</h3>
              <p className="text-xs font-mono text-slate-600">Zero clutter architectural typography.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
