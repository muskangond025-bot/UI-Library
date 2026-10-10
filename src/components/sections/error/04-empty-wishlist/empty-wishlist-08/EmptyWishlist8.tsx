import React from 'react';
import { Heart, Gamepad2, Award, ArrowRight } from 'lucide-react';

export const EmptyWishlist8: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-emerald-400 font-mono relative">
      <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-black border-4 border-emerald-500/80 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-center">
        <div className="flex justify-between items-center text-xs text-emerald-600 mb-6 border-b border-emerald-900 pb-3">
          <span>SCORE: 000000</span>
          <span className="animate-pulse">INSERT COIN TO WISHLIST</span>
          <span>HIGH SCORE: 999999</span>
        </div>

        <div className="w-24 h-24 mx-auto mb-6 bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center">
          <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-ping [animation-duration:1.5s]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wider">
          GAME OVER: 0 ITEMS
        </h2>
        <p className="text-emerald-500 text-sm md:text-base max-w-md mx-auto mb-8">
          NO SAVED POWER-UPS IN YOUR WISHLIST INVENTORY. PRESS START TO HUNT NEW ITEMS!
        </p>

        <button className="px-8 py-4 rounded bg-emerald-500 text-black font-black text-base hover:bg-emerald-400 transition-colors uppercase tracking-widest inline-flex items-center gap-3">
          <Gamepad2 className="w-5 h-5" />
          <span>PRESS START</span>
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist8;
