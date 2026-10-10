import React from 'react';
import { Heart, Smile, Star, ArrowRight } from 'lucide-react';

export const EmptyWishlist19: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-pink-50 text-slate-900">
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="inline-block p-10 rounded-3xl bg-white border-4 border-slate-900 shadow-[10px_10px_0px_#000] relative">
          <div className="absolute -top-4 -left-4 px-4 py-1 rounded-full bg-yellow-300 border-2 border-slate-900 text-xs font-black uppercase tracking-wider rotate-[-6deg]">
            ★ SAVE ME!
          </div>
          <div className="absolute -bottom-4 -right-4 px-4 py-1 rounded-full bg-purple-300 border-2 border-slate-900 text-xs font-black uppercase tracking-wider rotate-[6deg]">
            ❤ FAVOURITES
          </div>
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-rose-400 border-4 border-slate-900 flex items-center justify-center rotate-[-3deg]">
            <Heart className="w-12 h-12 text-white fill-white animate-bounce" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Wishlist Sticker Book Empty!
          </h2>
          <p className="text-slate-700 font-medium max-w-md mx-auto mb-8 text-base">
            Collect sticker badges for items you love. Tap the heart button anywhere in the app!
          </p>
          <button className="px-8 py-4 rounded-2xl bg-slate-900 text-yellow-300 font-black text-base hover:bg-rose-600 hover:text-white transition-colors border-2 border-slate-900 shadow-[4px_4px_0px_#000] inline-flex items-center gap-2">
            <span>START STICKER HUNT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist19;
