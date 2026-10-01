import React from 'react';
import { Award } from 'lucide-react';

export interface CartOffers6Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers6: React.FC<CartOffers6Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "06. Tiered Savings Progress Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6">
        <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-widest">
          <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Tiered Discount Unlocked</span>
          <span>Current Cart: ₹5,999</span>
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div className="bg-amber-400 h-full w-[70%]" title="70% Progress"></div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Spend ₹2k (5% OFF) ✓</span>
            <span className="text-amber-400 font-bold">Spend ₹5k (10% OFF) ✓</span>
            <span>Spend ₹8k (15% OFF)</span>
          </div>
        </div>
        <p className="text-xs text-slate-300 text-center bg-slate-900 p-3 rounded-xl border border-slate-800">
          Add <strong className="text-amber-400">₹2,001</strong> more to unlock an additional <strong className="text-amber-400">15% OFF</strong> on your entire cart!
        </p>
      </div>
    </section>
  );
};
