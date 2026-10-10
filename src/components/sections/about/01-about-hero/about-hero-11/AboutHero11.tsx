import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ArrowRight, Thermometer, ShieldCheck } from 'lucide-react';

export function AboutHero11({ data, section }: { data?: any; section?: any }) {
  const [temp, setTemp] = useState(-18);
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#07131E] text-sky-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex justify-between items-center flex-wrap gap-4 border-b border-sky-800/40 pb-6">
          <span className="px-4 py-1.5 rounded-full bg-sky-900/60 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
            <Snowflake className="w-4 h-4 animate-spin text-sky-400" style={{ animationDuration: '8s' }} /> SUB-ZERO ICE FROST #11
          </span>
          <div className="flex items-center gap-3 text-xs font-mono text-sky-300">
            <Thermometer className="w-4 h-4 text-cyan-400" />
            <span>THERMAL INDEX: {temp}°C</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Crystalline Sub-Zero Thermal Glass Infrastructure
            </h1>
            <p className="text-sky-200/80 text-base sm:text-xl leading-relaxed">
              Sub-zero thermal aesthetic engineered with ultra-clear icy frosted glass facets, cold cyan glowing borders, and animated snowfall shimmer sparkles.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(56,189,248,0.4)] flex items-center gap-2">
                <span>Explore Cold Ledger</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-[2.5rem] bg-sky-900/30 border-2 border-sky-400/40 shadow-[0_0_50px_rgba(56,189,248,0.25)] backdrop-blur-2xl space-y-6">
            <div className="text-xs font-mono text-sky-300 uppercase font-bold">ICE FROST PERSISTENCE SPEC</div>
            <div className="text-5xl font-black text-white font-mono">0.00% DRIFT</div>
            <p className="text-xs text-sky-200/80 font-mono leading-relaxed">Sub-zero crystalline data persistence maintained across all global edge nodes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}