import React from 'react';
import { Terminal, ShieldAlert, Cpu, ArrowLeft, CornerDownLeft } from 'lucide-react';

export const PageNotFound2: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-slate-950 text-cyan-400 font-mono border-t border-cyan-500/30 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto w-full bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
            <Terminal className="w-5 h-5 animate-pulse" />
            <span>SYS_DIAGNOSTIC // ERR_404</span>
          </div>
          <span className="text-xs font-mono text-slate-500">[STATUS: UNRESOLVED]</span>
        </div>

        <div className="space-y-6 my-8">
          <div className="text-5xl md:text-8xl font-black tracking-wider text-cyan-400 font-mono drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            &gt; 404_NOT_FOUND
          </div>
          <h2 className="text-2xl font-bold text-white font-mono">404 // SIGNAL_LOST</h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl">[FATAL_ERR: MEMORY_ADDRESS_NOT_FOUND]. Automatic warp protocol available.</p>
        </div>

        <div className="p-4 bg-slate-950 border border-cyan-500/20 rounded-xl font-mono text-xs text-cyan-300 space-y-1 mb-8">
          <p>&gt; RUNNING DIAGNOSTIC ROUTINE...</p>
          <p>&gt; ADDRESS [CYBER GLITCH MATRIX] NOT RECOGNIZED IN CORE DATABASE.</p>
          <p className="text-emerald-400">&gt; RECOMMENDED ACTION: DISPATCH WARP PROTOCOL TO PRIMARY GATEWAY.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-800">
          <a
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <CornerDownLeft className="w-4 h-4" />
            <span>EXECUTE WARP HOME</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-mono text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>STEP BACK</span>
          </button>
        </div>
      </div>
    </section>
  );
};
