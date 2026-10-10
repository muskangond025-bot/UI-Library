import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GlobalHeroBanner9: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#faf8f5] text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-between items-center text-xs font-sans uppercase tracking-[0.3em] text-stone-500 mb-6 border-b border-stone-300 pb-3">
          <span>ISSUE N° 42 • PARIS</span>
          <span>SPECIAL EDITORIAL EDITION</span>
          <span>OCTOBER 2026</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-light italic text-stone-900 mb-6 tracking-tight">
          The Art of Modern Elegance
        </h1>
        <p className="font-sans text-stone-600 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          An editorial lookbook featuring bespoke tailored suits, fine silk scarves, and timeless leather accessories.
        </p>
        <button className="px-8 py-4 border-2 border-stone-900 font-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-stone-900 hover:text-white transition-colors inline-flex items-center gap-2">
          <span>Explore Lookbook</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner9;
