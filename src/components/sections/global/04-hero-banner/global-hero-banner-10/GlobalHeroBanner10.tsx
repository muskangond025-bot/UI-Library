import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner10: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-black text-fuchsia-400 font-mono relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-6 bg-slate-950 border border-fuchsia-500 flex items-center justify-center shadow-[0_0_30px_#d946ef]">
          <Zap className="w-12 h-12 text-fuchsia-500 animate-bounce" />
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
          [ CYBERPUNK_HERO_MAINFRAME ]
        </h1>
        <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto mb-8 font-sans">
          Neon laser lattice environment. Initialize high-velocity shopping matrix protocols now.
        </p>
        <button className="px-8 py-4 bg-fuchsia-600 text-black font-black uppercase tracking-widest hover:bg-fuchsia-400 transition-colors shadow-[4px_4px_0px_#fff]">
          CONNECT TO MATRIX
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner10;
