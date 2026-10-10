import React from 'react';
import { Snowflake, ArrowUpRight } from 'lucide-react';

export const GlobalHeroBanner6: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-cyan-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-950 text-cyan-400 border border-cyan-800/60 inline-block mb-6">
            Sub-Zero Cryo Frost Hero
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Cryogenic High-Performance Gear
          </h1>
          <p className="text-slate-400 max-w-lg mb-8 text-base">
            Engineered for polar expeditions and sub-zero weather conditions. Maximum thermal retention with ultra-light breathability.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] inline-flex items-center gap-2">
            <span>Explore Arctic Collection</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full h-80 rounded-3xl bg-slate-900/90 border border-cyan-400/50 flex flex-col items-center justify-center p-8 text-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
          <Snowflake className="w-20 h-20 text-cyan-400 animate-spin [animation-duration:15s] mb-4" />
          <h3 className="text-2xl font-bold text-white mb-1">Polar Thermal X</h3>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner6;
