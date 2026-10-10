import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export function AboutCertifications11() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> BENTO GRID #11
        </span>
        <h2 className="text-3xl font-black">Bento Modular Credentials Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 md:col-span-2 space-y-4">
            <span className="text-xs font-mono text-cyan-400 font-bold">FLAGSHIP ACCREDITATION</span>
            <h3 className="text-2xl font-bold">ISO 27001:2026 Enterprise Information Security</h3>
            <p className="text-slate-300 text-sm">Full operational security audit across distributed cloud data nodes.</p>
          </div>
          <div className="p-8 rounded-3xl bg-cyan-950/40 border border-cyan-500/30 space-y-4">
            <span className="text-xs font-mono text-cyan-300 font-bold">SOC 2 TYPE II</span>
            <h3 className="text-xl font-bold">100% Audited Trust</h3>
            <p className="text-slate-400 text-xs">Continuous zero-breach audit reporting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
