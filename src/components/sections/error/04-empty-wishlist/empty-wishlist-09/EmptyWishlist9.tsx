import React from 'react';
import { Heart, Compass, ArrowRight } from 'lucide-react';

export const EmptyWishlist9: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#faf8f5] text-stone-800 font-serif">
      <div className="max-w-2xl mx-auto text-center border-t border-b border-stone-300 py-16">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-stone-400 rounded-full">
          <Heart className="w-8 h-8 text-stone-700 stroke-[1.25]" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-stone-500 mb-4 block">
          Editorial Portfolio Wishlist
        </span>

        <h2 className="text-3xl md:text-5xl font-light text-stone-900 mb-4 italic">
          An Empty Canvas
        </h2>
        <p className="font-sans text-stone-600 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Curate your personal collection of luxury essentials. Items saved will remain permanently accessible across all your devices.
        </p>

        <a href="#curate" className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-bold text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-rose-700 hover:border-rose-700 transition-colors">
          <span>Explore Curated Lookbook</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
export default EmptyWishlist9;
