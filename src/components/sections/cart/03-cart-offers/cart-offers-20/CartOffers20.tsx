import React from 'react';
import { Zap, Tag } from 'lucide-react';

export interface CartOffers20Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers20: React.FC<CartOffers20Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "20. Avant-Garde Dark Mode Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto relative border border-zinc-800 rounded-3xl p-8 bg-zinc-950 shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
          <Zap className="w-3 h-3" /> Experimental Deal
        </div>
        <div>
          <span className="text-xs text-zinc-400 uppercase tracking-widest block">PROMO OFFER</span>
          <span className="text-4xl font-black text-amber-400 block mt-1">20% CASHBACK</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs">
          <span className="font-mono text-zinc-400">CODE: FESTIVE20</span>
          <button className="px-5 py-2.5 bg-amber-400 text-black font-extrabold text-xs rounded-xl hover:bg-amber-300">Apply Code</button>
        </div>
      </div>
    </section>
  );
};
