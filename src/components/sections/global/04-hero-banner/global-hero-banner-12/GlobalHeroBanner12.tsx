import React from 'react';
import { Orbit, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner12: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-indigo-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-indigo-950 border border-indigo-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)]">
          <Orbit className="w-14 h-14 text-indigo-400 animate-spin [animation-duration:20s]" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-950 text-indigo-300 border border-indigo-800/60 inline-block mb-4">
          Cosmic Constellation Hero
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Galactic Hero Environment</h1>
        <p className="text-indigo-300 max-w-lg mx-auto mb-8 text-base">Traverse stellar product collections in celestial orbital space.</p>
        <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.5)] inline-flex items-center gap-2">
          <span>Launch Cosmic Orbit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner12;
