import React, { useState } from 'react';
import { Leaf, Home, RefreshCw, Compass, ArrowRight, Sparkles } from 'lucide-react';

export const PageNotFound5: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-gradient-to-br from-teal-950 via-slate-900 to-black text-emerald-300 flex items-center justify-center relative overflow-hidden">
      {/* DRIBBLE BIOME SVG RADIAL GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
          DRIBBLE ECO-BIOME 3D
        </span>

        {/* 3D FLOATING ECO SPHERE */}
        <div className="relative my-6 inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-cyan-400/10 border border-emerald-500/40 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.25)] relative">
            <Leaf className="w-24 h-24 text-emerald-400 animate-bounce" />
            <span className="absolute -top-3 -right-3 text-4xl font-black bg-emerald-500 text-slate-950 px-3 py-1 rounded-2xl border-2 border-slate-900 shadow-xl">404</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          404 // UNMAPPED DIGITAL BIOME
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto text-emerald-100/80 mb-10 leading-relaxed">
          You entered an unmapped digital forest. Re-routing energy protocols back to main website hub.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Primary Base</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Re-scan Route</span>
          </button>
        </div>
      </div>
    </section>
  );
};
