import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner7: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-amber-50 text-slate-800">
      <div className="max-w-5xl mx-auto text-center p-12 rounded-[40px] bg-white border-4 border-amber-100 shadow-[12px_12px_24px_rgba(251,191,36,0.15)]">
        <div className="w-28 h-28 mx-auto mb-6 rounded-3xl bg-amber-400 text-white flex items-center justify-center shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.2)]">
          <Gift className="w-14 h-14 stroke-white animate-bounce" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 inline-block mb-4">
          Claymorphism Pastel Hero
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
          Soft Pastel Handcrafted Delights
        </h1>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-base">
          Bring warmth into your home with squishy clay ceramics and pastel interior decor.
        </p>
        <button className="px-8 py-4 rounded-3xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 shadow-lg shadow-amber-200 transition-all inline-flex items-center gap-2">
          <span>Shop Pastel Collection</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner7;
