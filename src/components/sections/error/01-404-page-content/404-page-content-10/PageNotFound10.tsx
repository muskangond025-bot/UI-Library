import React, { useState } from 'react';
import { Disc, Home, Play, Pause, ArrowRight, Volume2 } from 'lucide-react';

export const PageNotFound10: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 text-slate-900 flex items-center justify-center relative">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-amber-200/80 rounded-3xl p-8 md:p-14 text-center shadow-2xl relative">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-amber-100 text-amber-900 border border-amber-300">
          DRIBBLE ORGANIC SUNSET
        </span>

        {/* VINYL RECORD PLAYER DISK */}
        <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
          <div className={`w-36 h-36 rounded-full bg-slate-950 border-4 border-amber-300 flex items-center justify-center shadow-xl ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div className="w-12 h-12 rounded-full bg-amber-500 border-2 border-slate-950 flex items-center justify-center">
              <Disc className="w-6 h-6 text-slate-950" />
            </div>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute p-3 bg-amber-500 text-slate-950 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-amber-600 mb-2 tracking-tight">404</h1>

        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
          Sunset Route Out of Tune
        </h2>
        <p className="text-base text-slate-600 max-w-md mx-auto mb-10 leading-relaxed">
          This track skipped a beat. Listen to calm ambient sounds or head back to the main homepage track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-2xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Main Track</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <Volume2 className="w-4 h-4" />
            <span>{isPlaying ? 'Pause Chill Audio' : 'Play Chill Audio'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
