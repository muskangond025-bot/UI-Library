import React from 'react';
import { Crown, Check } from 'lucide-react';

export interface CartOffers15Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers15: React.FC<CartOffers15Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "15. VIP Exclusive Member Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto border-2 border-amber-500/80 rounded-3xl p-8 bg-slate-950 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Crown className="w-12 h-12 text-amber-400" />
          <div>
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">VIP MEMBER PERK</span>
            <h3 className="text-2xl font-bold text-amber-100 mt-0.5">Double Reward Points + Free Overnight Express</h3>
            <p className="text-xs text-slate-400 mt-1">Exclusive benefits applied automatically to VIP accounts.</p>
          </div>
        </div>
        <span className="px-4 py-2 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl flex items-center gap-1">
          <Check className="w-4 h-4" /> Perks Active
        </span>
      </div>
    </section>
  );
};
