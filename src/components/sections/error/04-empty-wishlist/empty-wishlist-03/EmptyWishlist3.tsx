import React from 'react';
import { Heart, Sparkles, ArrowUpRight, BookmarkCheck, ShoppingBag } from 'lucide-react';

export const EmptyWishlist3: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#f0e6e4] text-slate-800 relative">
      <div className="max-w-3xl mx-auto">
        {/* Soft Neumorphic Card */}
        <div className="p-10 md:p-16 rounded-[40px] bg-[#f0e6e4] shadow-[20px_20px_60px_#ccbebc,-20px_-20px_60px_#ffffff] text-center relative border border-white/40">
          {/* Neumorphic Heart Button */}
          <div className="mx-auto w-32 h-32 mb-8 rounded-full bg-[#f0e6e4] shadow-[inset_10px_10px_20px_#ccbebc,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center transition-transform hover:scale-105 duration-300">
            <div className="w-20 h-20 rounded-full bg-[#f0e6e4] shadow-[6px_6px_12px_#ccbebc,-6px_-6px_12px_#ffffff] flex items-center justify-center">
              <Heart className="w-10 h-10 text-rose-500 fill-rose-100 animate-pulse" />
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100/80 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Neumorphic Soft Velvet
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Nothing Saved to Your Favorites
          </h2>
          <p className="text-slate-600 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Fill your space with things that inspire you. Explore our handcrafted arrivals and tap the heart icon on any product.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-rose-500 text-white font-bold shadow-[8px_8px_16px_#ccbebc,-8px_-8px_16px_#ffffff] hover:bg-rose-600 transition-all duration-300 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Explore New Arrivals</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist3;
