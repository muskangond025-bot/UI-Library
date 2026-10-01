import React from 'react';
import { Tag } from 'lucide-react';

export interface CouponDiscountSection16Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection16: React.FC<CouponDiscountSection16Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "16. Vertical Sidebar Offer Rail"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-5 space-y-3 shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">PROMO RAIL</span>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-indigo-600" />
            <div>
              <span className="font-bold block">SAVE20</span>
              <span className="text-[10px] text-slate-500">20% OFF</span>
            </div>
          </div>
          <button className="px-3 py-1 bg-indigo-600 text-white font-bold text-[10px] rounded-lg">Apply</button>
        </div>
      </div>
    </section>
  );
};
