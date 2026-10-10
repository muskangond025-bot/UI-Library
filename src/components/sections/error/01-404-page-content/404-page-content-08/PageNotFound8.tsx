import React from 'react';
import { Rocket, Home, RefreshCcw, Sparkles, ArrowRight } from 'lucide-react';

export const PageNotFound8: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-rose-50/60 text-slate-800 flex items-center justify-center relative">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-14 border border-rose-200 shadow-2xl text-center relative overflow-hidden">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-rose-100 text-rose-700 border border-rose-200">
          DRIBBLE 3D CLAY ASTRONAUT
        </span>

        {/* 3D CLAYMORPHIC FLOATING ROCKET CONTAINER */}
        <div className="w-32 h-32 mx-auto rounded-3xl bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center mb-6 shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.06),inset_3px_3px_8px_rgba(255,255,255,0.9)] animate-bounce">
          <Rocket className="w-16 h-16 text-rose-500" />
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-2 tracking-tight">404</h1>

        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
          Houston, We Have a 404!
        </h2>
        <p className="text-base text-slate-600 max-w-md mx-auto mb-10 leading-relaxed">
          You slipped into zero-gravity space. Tap below to launch your spacecraft safely back to land.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Launch Home Capsule</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Re-align Orbit</span>
          </button>
        </div>
      </div>
    </section>
  );
};
