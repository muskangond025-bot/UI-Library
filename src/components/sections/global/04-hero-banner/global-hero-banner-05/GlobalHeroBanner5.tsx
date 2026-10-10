import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner5: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-yellow-300 text-black font-sans">
      <div className="max-w-6xl mx-auto bg-white border-4 border-black p-10 md:p-16 shadow-[12px_12px_0px_#000] relative">
        <div className="w-fit bg-rose-500 text-white font-black text-xs uppercase px-4 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000] mb-6">
          ★ NEO-BRUTALIST GLOBAL HERO
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
          UNapologetic <br /> HIGH-FASHION!
        </h1>

        <p className="text-base md:text-xl font-bold text-slate-800 max-w-lg mb-8 border-b-4 border-black pb-6">
          CHUNKY BORDERS. HARD OFFSET SHADOWS. ZERO BORING MINIMALISM. EXPLORE THE LIMITED COLLECTION NOW!
        </p>

        <button className="px-8 py-4 bg-black text-yellow-300 font-black text-lg uppercase tracking-wider border-4 border-black shadow-[6px_6px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-3">
          <Zap className="w-6 h-6 fill-yellow-300" />
          <span>SHOP BRUTAL DROP</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner5;
