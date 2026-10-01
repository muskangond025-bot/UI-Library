import React from 'react';

export interface CouponDiscountSection14Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection14: React.FC<CouponDiscountSection14Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Side-by-Side Coupon Comparison"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-3">
          <span className="text-xs font-bold text-indigo-600 uppercase">OPTION A</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">20% OFF</h3>
          <p className="text-xs text-slate-500">Saves ₹800 on your current cart total. Requires min spend ₹2,499.</p>
          <button className="w-full py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl">Use Option A</button>
        </div>
        <div className="bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-3">
          <span className="text-xs font-bold text-emerald-600 uppercase">OPTION B</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">₹500 Flat</h3>
          <p className="text-xs text-slate-500">Flat discount for new customers. Requires min spend ₹1,999.</p>
          <button className="w-full py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl">Use Option B</button>
        </div>
      </div>
    </section>
  );
};
