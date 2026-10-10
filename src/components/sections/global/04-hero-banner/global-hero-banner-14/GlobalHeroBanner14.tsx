import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GlobalHeroBanner14: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-black text-white font-sans border-y border-slate-800">
      <div className="max-w-4xl mx-auto text-left border-l-2 border-white pl-8">
        <span className="text-xs font-mono text-slate-500 block mb-3">[LAT 48.8566° N • SWISS LINE HERO]</span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">ARCHITECTURAL GRID</h1>
        <p className="text-slate-400 max-w-md text-base mb-8">Swiss minimalist grid geometry with high-contrast monochrome aesthetics.</p>
        <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-slate-200 inline-flex items-center gap-3">
          <span>EXPLORE INDEX</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner14;
