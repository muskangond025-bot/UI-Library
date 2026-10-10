import React from 'react';
import { Sparkles } from 'lucide-react';

export function AboutCertifications14() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> MONOCHROME MINIMAL #14
        </span>
        <h2 className="text-3xl font-black">Monochrome Architectural Line Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-6 rounded-none border border-slate-300 space-y-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase">SPEC-REF-0{n}</span>
              <h3 className="text-lg font-bold">Architectural Standard 0{n}</h3>
              <p className="text-xs text-slate-600 font-mono">Ultra-clean typography focus with hairline borders.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
