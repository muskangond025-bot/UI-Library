import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export interface CartOffers17Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers17: React.FC<CartOffers17Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Full Width Promo Banner Bar"}</h2>
      </div>
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-black uppercase">Mega Cart Festival Sale</h3>
            <p className="text-xs font-medium">Use promo code FESTIVE20 for instant 20% cashback on all orders.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-slate-900">
          Apply Promo Code <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
