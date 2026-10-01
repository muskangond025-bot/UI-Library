import React from 'react';
import { Check, X } from 'lucide-react';

export interface CouponDiscountSection13Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection13: React.FC<CouponDiscountSection13Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "13. Applied Coupon Active State Display"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-emerald-500 text-white rounded-3xl p-6 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full uppercase flex items-center gap-1"><Check className="w-3 h-3" /> APPLIED</span>
          <button className="p-1 hover:bg-white/10 rounded-full"><X className="w-4 h-4" /></button>
        </div>
        <div>
          <span className="font-mono text-xs opacity-80 block">CODE: SAVE20</span>
          <h3 className="text-3xl font-black mt-0.5">₹800 Total Savings</h3>
          <p className="text-xs opacity-90 mt-1">20% discount applied to eligible items in your shopping bag.</p>
        </div>
      </div>
    </section>
  );
};
