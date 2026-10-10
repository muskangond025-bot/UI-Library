import React from 'react';
import { Terminal, Radio, Cpu, Activity, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner2: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-cyan-400 font-mono relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs mb-6">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>GLOBAL_MAINFRAME_HERO_SYSTEM_V4.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6">
            CYBERNETIC <span className="text-cyan-400">HARDWARE MATRIX</span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base font-sans max-w-lg mb-8 leading-relaxed">
            Quantum-accelerated neural processing units engineered for autonomous AI telemetry & high-frequency spatial computation.
          </p>

          <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold text-sm uppercase hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>DEPLOY SYSTEM NODE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-slate-900/80 border border-cyan-500/40 p-8 rounded-2xl relative shadow-[0_0_50px_rgba(6,182,212,0.2)] text-center">
          <Cpu className="w-20 h-20 text-cyan-400 mx-auto animate-pulse mb-4" />
          <span className="text-white font-bold text-xl block">QUANTUM-NPU-X1</span>
          <span className="text-xs text-slate-500">STATUS: OPTIMAL ALLOCATION</span>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner2;
