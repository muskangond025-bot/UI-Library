import React from 'react';
import { Layers } from 'lucide-react';

export interface CouponDiscountSection6Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection6: React.FC<CouponDiscountSection6Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "06. Layered Coupon Sheet Stack"}</h2>
      </div>
      <div className="max-w-md mx-auto relative p-4">
        <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-950 rounded-3xl transform rotate-2 scale-[0.98]"></div>
        <div className="relative bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex justify-between items-center text-xs font-bold text-indigo-600">
            <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> Stacked Offer #1</span>
            <span>20% OFF</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Festive Season Voucher</h3>
          <p className="text-xs text-slate-500">Min spend ₹2,499 • Valid till Dec 31</p>
          <button className="w-full py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply Code SAVE20</button>
        </div>
      </div>
    </section>
  );
};
