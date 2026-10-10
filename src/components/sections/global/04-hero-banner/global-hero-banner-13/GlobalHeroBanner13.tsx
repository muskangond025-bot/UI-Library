import React from 'react';
import { Gem, ArrowUpRight } from 'lucide-react';

export const GlobalHeroBanner13: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-slate-900">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl text-center">
        <div className="w-28 h-28 mx-auto mb-6 rounded-3xl bg-white/60 border border-white/80 shadow-xl flex items-center justify-center">
          <Gem className="w-14 h-14 text-pink-500 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/80 text-purple-700 inline-block mb-4">
          Prism Glass Refraction Hero
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Refract Your Personal Style</h1>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-base">Prismatic light spectrum collection with frosted glass aesthetics.</p>
        <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-pink-600 shadow-xl inline-flex items-center gap-2">
          <span>Discover Prism Vault</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner13;
