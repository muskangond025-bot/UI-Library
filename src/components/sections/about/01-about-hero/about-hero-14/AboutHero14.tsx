import React from 'react';
import { motion } from 'framer-motion';
import { Wind, ArrowRight, Globe } from 'lucide-react';

export function AboutHero14({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#061816] text-teal-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="px-5 py-2 rounded-full bg-teal-950 border border-teal-400/40 text-teal-300 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-lg">
            <Wind className="w-4 h-4 animate-spin text-teal-400" style={{ animationDuration: '12s' }} /> AURORA BOREALIS #14
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Translucent Northern Lights Horizon
          </h1>
          <p className="text-teal-200/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Flowing Nordic aurora borealis atmosphere, translucent multi-tone glass columns, and smooth aura light movements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Oslo Creative Hub', 'Stockholm Data Center', 'Helsinki R&D Lab'].map((title, i) => (
            <div key={i} className="p-8 rounded-3xl bg-teal-900/30 border border-teal-400/30 backdrop-blur-2xl space-y-4 shadow-xl">
              <Globe className="w-8 h-8 text-teal-300" />
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-xs text-teal-200/70 font-mono">Nordic sustainability standard compliant.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}