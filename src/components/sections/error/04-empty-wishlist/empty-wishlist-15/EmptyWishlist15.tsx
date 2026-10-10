import React from 'react';
import { Heart, Sparkles, Compass, Award } from 'lucide-react';

export const EmptyWishlist15: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950 text-amber-100 font-serif">
      <div className="max-w-3xl mx-auto text-center border-2 border-amber-500/30 p-12 rounded-3xl bg-amber-950/40 backdrop-blur-md shadow-2xl">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 text-amber-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
          <Heart className="w-14 h-14 fill-amber-950 stroke-none animate-pulse" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-amber-400 mb-4 block">
          Heritage Gold Locket
        </span>
        <h2 className="text-3xl md:text-5xl font-normal text-amber-50 mb-4 italic">
          An Unwritten Keepsake
        </h2>
        <p className="font-sans text-amber-200/80 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Your vintage locket holds no treasures yet. Tap the heart on handcrafted pieces to keep them close.
        </p>
        <button className="px-8 py-4 rounded-xl bg-amber-500 text-amber-950 font-sans font-bold hover:bg-yellow-400 transition-all shadow-lg inline-flex items-center gap-2">
          <Award className="w-5 h-5" />
          <span>Explore Heritage Collection</span>
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist15;
