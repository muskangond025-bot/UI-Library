import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GlobalHeroBanner19: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-pink-50 text-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-10 rounded-3xl bg-white border-4 border-slate-900 shadow-[10px_10px_0px_#000]">
          <span className="px-3 py-1 rounded bg-yellow-300 border-2 border-slate-900 text-xs font-black uppercase rotate-[-3deg] inline-block mb-4">
            ★ STICKER COLLAGE HERO
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-6">Pop-Art Scrapbook Collection!</h1>
          <p className="text-slate-700 font-medium max-w-md mx-auto mb-8 text-base">Vibrant doodle graphics and limited edition sticker merch.</p>
          <button className="px-8 py-4 rounded-2xl bg-slate-900 text-yellow-300 font-black text-base hover:bg-rose-600 hover:text-white border-2 border-slate-900 shadow-[4px_4px_0px_#000] inline-flex items-center gap-2">
            <span>SHOP STICKER HERO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner19;
