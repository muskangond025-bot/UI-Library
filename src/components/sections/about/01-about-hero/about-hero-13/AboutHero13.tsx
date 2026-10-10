import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export function AboutHero13({ data, section }: { data?: any; section?: any }) {
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#04120B] text-emerald-100 overflow-hidden relative font-mono">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between shadow-xl">
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-2">
            <Terminal className="w-4 h-4 animate-pulse" /> CYBER COMMAND CENTER ONLINE #13
          </span>
          <span className="text-[10px] text-emerald-400 bg-emerald-950 px-3 py-1 rounded border border-emerald-500/40">SYSTEM OPERATIONAL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Real-Time Enterprise Threat Neutralization
            </h1>
            <p className="text-emerald-300/80 text-base sm:text-lg leading-relaxed">
              Command center UI layout featuring glowing emerald scanlines, matrix status indicators, live telemetry metrics, and cybernetic typography.
            </p>
            <div className="p-5 rounded-2xl bg-black border border-emerald-500/40 text-xs text-emerald-400 font-mono shadow-inner">
              $ status_check --all<br />
              [OK] Edge Mesh Cluster Active (10,240 Nodes)<br />
              [OK] Threat Neutralization Engine: 99.9% Efficiency
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-[2.5rem] bg-emerald-950/40 border-2 border-emerald-500/40 space-y-6 shadow-2xl">
            <div className="text-xs text-emerald-400 font-bold uppercase">LIVE TELEMETRY WIDGET</div>
            <div className="text-4xl font-black text-white">0.4ms SYNC</div>
            <div className="w-full bg-emerald-950 h-2.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[94%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}