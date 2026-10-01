import React from 'react';
import { Gift, Check } from 'lucide-react';

export interface CartOffers8Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers8: React.FC<CartOffers8Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-amber-50/40 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "08. Free Gift with Purchase Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
            <Gift className="w-8 h-8" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase flex items-center gap-1 w-max"><Check className="w-3 h-3" /> GIFT UNLOCKED</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Complimentary Luxury Leather Pouch</h3>
            <p className="text-xs text-slate-500">Automatically added to your package at checkout.</p>
          </div>
        </div>
        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl">₹0 (Free Gift)</span>
      </div>
    </section>
  );
};
