import React from 'react';
import { Heart, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export const EmptyWishlist18: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-emerald-950 text-emerald-100">
      <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-slate-900/80 border border-emerald-500/30 shadow-2xl">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-emerald-900/80 border border-emerald-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <Heart className="w-14 h-14 text-emerald-400 fill-emerald-400/20 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-900 text-emerald-300 border border-emerald-700/50 inline-block mb-4">
          Bio-Luminescent Haven
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Bio-Dome Wishlist Empty
        </h2>
        <p className="text-emerald-300/80 max-w-md mx-auto mb-8 text-base">
          Nurture your eco-wishlist. Save sustainable products to track carbon savings and eco rewards.
        </p>
        <button className="px-8 py-4 rounded-2xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] inline-flex items-center gap-2">
          <Leaf className="w-5 h-5" />
          <span>Explore Eco Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist18;
