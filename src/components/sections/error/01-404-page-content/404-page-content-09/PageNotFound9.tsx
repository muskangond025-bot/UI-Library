import React from 'react';
import { Layers, Home, ArrowLeft, Sparkles, Compass } from 'lucide-react';

export const PageNotFound9: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-slate-950 text-indigo-100 flex items-center justify-center relative overflow-hidden">
      {/* PRISM REFRACTION GRADIENT */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto bg-indigo-900/30 backdrop-blur-2xl border border-indigo-500/40 rounded-3xl p-8 md:p-14 text-center shadow-[0_0_60px_rgba(99,102,241,0.2)] relative z-10">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-indigo-900/40 text-indigo-300 border border-indigo-500/40">
          DRIBBLE PRISM GLASS
        </span>

        <div className="w-28 h-28 mx-auto rounded-3xl bg-indigo-500/10 border border-indigo-400/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <Layers className="w-14 h-14 text-indigo-300 animate-pulse" />
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 mb-2 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Prismatic Spectrum Void
        </h2>
        <p className="text-base max-w-lg mx-auto text-indigo-200/80 mb-10 leading-relaxed">
          Light refracted through this URL but found no destination. Re-converge rays to your main homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-indigo-600/40 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Refract Home</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};
