import React, { useState } from 'react';
import { Sparkles, Gift } from 'lucide-react';

export interface CartOffers11Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers11: React.FC<CartOffers11Props> = ({ data }) => {
  const [scratched, setScratched] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6 text-center">
        <h2 className="text-xl font-bold">{data?.heading || "11. Scratch Card Surprise Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm text-center">
        {!scratched ? (
          <button onClick={() => setScratched(true)} className="w-full h-40 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl flex flex-col items-center justify-center text-slate-950 font-bold shadow-lg hover:scale-[1.02] transition-transform">
            <Sparkles className="w-8 h-8 mb-2" />
            <span className="text-base uppercase tracking-wider">Tap to Scratch & Reveal</span>
            <span className="text-xs font-normal opacity-90 mt-1">Unlock your mystery cart bonus</span>
          </button>
        ) : (
          <div className="h-40 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 rounded-2xl flex flex-col items-center justify-center text-emerald-800 dark:text-emerald-300 font-bold p-4">
            <Gift className="w-8 h-8 text-emerald-600 mb-1" />
            <span className="text-xl font-black">YOU UNLOCKED ₹400 OFF!</span>
            <span className="text-xs font-mono bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border mt-2">CODE: MYSTERY400</span>
          </div>
        )}
      </div>
    </section>
  );
};
