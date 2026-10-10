import React from 'react';
import { Heart, Sparkles, Gem, ArrowUpRight } from 'lucide-react';

export const EmptyWishlist13: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-slate-900">
      <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl text-center relative">
        <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-white/60 border border-white/80 shadow-xl flex items-center justify-center backdrop-blur-md">
          <Heart className="w-16 h-16 text-pink-500 fill-pink-500/20 animate-bounce" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/80 text-purple-700 inline-block mb-4 shadow-sm">
          Frosted Prism Edition
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
          Prismatic Wishlist Empty
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-base">
          Refract your personal style. Save sparkling items to view them in your frosted jewel box anytime.
        </p>
        <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-pink-600 transition-all shadow-xl inline-flex items-center gap-2">
          <Gem className="w-5 h-5 text-amber-300" />
          <span>Discover Jewel Catalog</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist13;
