import React from 'react';
import { Tag } from 'lucide-react';

export interface CartOffers16Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers16: React.FC<CartOffers16Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "16. Side Rail Compact Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-5 space-y-3 text-xs shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">AVAILABLE DEALS</span>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-indigo-600" />
            <span className="font-bold text-indigo-950 dark:text-indigo-200">FESTIVE20</span>
          </div>
          <button className="text-indigo-600 font-bold hover:underline">Apply</button>
        </div>
      </div>
    </section>
  );
};
