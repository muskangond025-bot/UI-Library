import React from 'react';
import { Sun, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner20: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-purple-950 via-slate-950 to-pink-950 text-pink-300 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-t from-pink-500 to-yellow-400 p-0.5 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
            <Sun className="w-12 h-12 text-pink-400 animate-pulse" />
          </div>
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-mono uppercase bg-pink-950 text-pink-300 border border-pink-700/50 inline-block mb-4">
          SYNTHWAVE SUNSET HORIZON
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">OUTRUN THE FUTURE HERO</h1>
        <p className="text-slate-300 max-w-lg mx-auto mb-8 text-sm font-sans">Retro 80s synth grid perspective environment.</p>
        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black hover:from-pink-600 hover:to-purple-700 shadow-[0_0_30px_rgba(236,72,153,0.6)] inline-flex items-center gap-2">
          <span>CRUISE THE HERO RUN</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner20;
