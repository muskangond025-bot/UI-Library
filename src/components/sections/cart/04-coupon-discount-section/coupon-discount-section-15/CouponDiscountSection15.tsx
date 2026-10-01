import React from 'react';

export interface CouponDiscountSection15Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection15: React.FC<CouponDiscountSection15Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-4xl mx-auto mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "15. Minimalist Typographic Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-4 text-xs">
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <span className="font-bold text-sm block">SAVE20 // 20% DISCOUNT</span>
            <span className="text-slate-500">Valid till Dec 31 • Min order ₹2,499</span>
          </div>
          <button className="px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold uppercase text-[10px]">Apply</button>
        </div>
      </div>
    </section>
  );
};
