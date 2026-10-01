import React from 'react';
import { Tag, X } from 'lucide-react';

export interface CartOffers13Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers13: React.FC<CartOffers13Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "13. Floating Banner Toast Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-emerald-500 text-white rounded-xl"><Tag className="w-4 h-4" /></span>
          <div>
            <span className="font-bold block">Best Offer Applied!</span>
            <span className="text-slate-400">You are saving ₹800 with code "FESTIVE20"</span>
          </div>
        </div>
        <button className="text-slate-400 hover:text-white p-1"><X className="w-4 h-4" /></button>
      </div>
    </section>
  );
};
