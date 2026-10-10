import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner18: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-emerald-950 text-emerald-100">
      <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-slate-900/80 border border-emerald-500/30 shadow-2xl">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-900 border border-emerald-400/50 flex items-center justify-center">
          <Leaf className="w-12 h-12 text-emerald-400 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase bg-emerald-900 text-emerald-300 inline-block mb-4">
          Bio-Luminescent Haven Hero
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6">Sustainable Eco-System Hero</h1>
        <p className="text-emerald-300/80 max-w-md mx-auto mb-8 text-base">100% carbon-neutral organic products with bio-degradable packaging.</p>
        <button className="px-8 py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] inline-flex items-center gap-2">
          <Leaf className="w-5 h-5" />
          <span>Explore Eco Suite</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner18;
