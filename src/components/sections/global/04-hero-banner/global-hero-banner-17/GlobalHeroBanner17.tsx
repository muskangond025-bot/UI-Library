import React from 'react';
import { Sun, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner17: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#f7f0eb] text-amber-950 font-serif">
      <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-[#efe3d9] border border-amber-900/10">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-800 text-amber-50 flex items-center justify-center">
          <Sun className="w-12 h-12" />
        </div>
        <span className="text-xs uppercase tracking-widest font-sans font-bold text-amber-800 mb-3 block">Terracotta Boho Studio</span>
        <h1 className="text-3xl md:text-5xl font-bold text-amber-950 mb-6">Warm Mediterranean Pottery</h1>
        <p className="font-sans text-amber-900/80 max-w-md mx-auto mb-8 text-base">Handcrafted terracotta vases and dried floral arrangements.</p>
        <button className="px-8 py-4 rounded-full bg-amber-900 text-amber-50 font-sans font-bold hover:bg-amber-800 inline-flex items-center gap-2">
          <span>Explore Terracotta Studio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner17;
