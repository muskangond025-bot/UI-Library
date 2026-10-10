import React from 'react';
import { Home, ArrowLeft, Compass, Sparkles, MoveRight } from 'lucide-react';

export const PageNotFound1: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* 3D SPATIAL ORBITAL PARTICLES */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-25 animate-pulse pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none animate-spin-slow" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 backdrop-blur-md">
          AWWWARDS 3D SPATIAL
        </span>

        {/* GIANT 3D GLOWING 404 TEXT */}
        <div className="relative my-4">
          <h1 className="text-8xl md:text-[160px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-200 to-indigo-900 select-none drop-shadow-[0_0_35px_rgba(99,102,241,0.5)]">
            404
          </h1>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-indigo-500/30 border border-indigo-400/50 backdrop-blur-md flex items-center justify-center animate-bounce">
            <Compass className="w-12 h-12 text-indigo-300 animate-spin-slow" />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-white">
          404 — Cosmic Singularity
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto text-slate-300 mb-10 leading-relaxed">
          The page you are looking for has been pulled into a deep space black hole.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-indigo-600/40 flex items-center justify-center gap-2 group"
          >
            <Home className="w-4 h-4" />
            <span>Return to Safe Earth</span>
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Orbit</span>
          </button>
        </div>
      </div>
    </section>
  );
};
