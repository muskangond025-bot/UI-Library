import React, { useState } from 'react';
import { Snowflake, Home, ArrowLeft, ThermometerSnowflake, ShieldCheck } from 'lucide-react';

export const PageNotFound7: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-black text-cyan-100 flex items-center justify-center relative overflow-hidden">
      {/* ICE FROST BG CANVAS */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="max-w-3xl mx-auto bg-cyan-900/20 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(56,189,248,0.15)] relative z-10">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-cyan-900/40 text-cyan-300 border border-cyan-400/40 backdrop-blur-xl">
          DRIBBLE ICE FROST 3D
        </span>

        <div className="w-28 h-28 mx-auto rounded-3xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
          <Snowflake className="w-14 h-14 text-cyan-300 animate-spin-slow" />
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-500 mb-2 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Sub-Zero Frozen Connection
        </h2>
        <p className="text-sm md:text-base max-w-lg mx-auto text-cyan-200/80 mb-10 leading-relaxed">
          This digital pathway froze over. Thermal resolution protocol ready to unfreeze your browser route.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Melt Route & Go Home</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retrace Steps</span>
          </button>
        </div>
      </div>
    </section>
  );
};
