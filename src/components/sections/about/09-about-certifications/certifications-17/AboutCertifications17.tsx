import React from 'react';
import { Sparkles, Orbit } from 'lucide-react';

export function AboutCertifications17() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-purple-950 text-purple-100">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> COSMIC NEBULA #17
        </span>
        <h2 className="text-3xl font-black text-white">Cosmic Starfield Certification Shield</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-6 rounded-3xl bg-purple-900/40 border border-purple-400/30 space-y-4">
              <Orbit className="w-8 h-8 text-purple-300" />
              <h3 className="text-lg font-bold text-white">Cosmic Accreditation 0{n}</h3>
              <p className="text-xs text-purple-300/80">Twinkling starfield background with orbital ring glow.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
