import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';

export interface CouponDiscountSection4Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection4: React.FC<CouponDiscountSection4Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Horizontal Offer Strip"}</h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-3">
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 font-extrabold text-sm rounded-lg">20% OFF</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Festive Season Special Voucher</h3>
              <p className="text-slate-500">Min spend ₹2,499 • Valid on selected catalog items</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">SAVE20</span>
            <button className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl flex items-center gap-1">Apply Offer <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
