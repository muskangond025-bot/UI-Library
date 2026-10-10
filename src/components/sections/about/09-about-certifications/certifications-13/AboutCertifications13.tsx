import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles } from 'lucide-react';

export function AboutCertifications13() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-slate-200">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-400/10 border border-slate-400/30 text-slate-300 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> METALLIC PLATINUM #13
        </span>
        <h2 className="text-3xl font-black text-white">Metallic Platinum Shield Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-6 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border-2 border-slate-400/40 space-y-4">
              <Shield className="w-8 h-8 text-slate-300" />
              <h3 className="text-lg font-bold text-white">Platinum Accreditation 0{n}</h3>
              <span className="text-xs font-mono text-slate-400">EMBOSSED PLATINUM SEAL</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
