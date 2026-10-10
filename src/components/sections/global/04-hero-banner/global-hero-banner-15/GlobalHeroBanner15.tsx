import React from 'react';
import { Award } from 'lucide-react';

export const GlobalHeroBanner15: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-amber-100 font-serif">
      <div className="max-w-4xl mx-auto text-center border-2 border-amber-500/30 p-12 rounded-3xl bg-amber-950/40 backdrop-blur-md shadow-2xl">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 text-amber-950 flex items-center justify-center">
          <Award className="w-12 h-12 stroke-none fill-amber-950" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-amber-400 mb-4 block">Golden Vintage Locket</span>
        <h1 className="text-4xl md:text-6xl font-normal text-amber-50 mb-6 italic">A Heritage of Distinction</h1>
        <p className="font-sans text-amber-200/80 text-base max-w-md mx-auto mb-8">Timeless gold leaf craftsmanship and heirloom quality jewelry.</p>
        <button className="px-8 py-4 rounded-xl bg-amber-500 text-amber-950 font-sans font-bold hover:bg-yellow-400 inline-flex items-center gap-2">
          <span>Explore Heritage Suite</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalHeroBanner15;
