import React from 'react';
import { UserCheck, Check } from 'lucide-react';

export interface CouponDiscountSection11Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection11: React.FC<CouponDiscountSection11Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "11. Eligibility-Focused Offer Section"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 p-3 rounded-2xl">
          <UserCheck className="w-4 h-4" /> You are eligible for this discount!
        </div>
        <div className="border-t pt-3 space-y-1">
          <span className="text-2xl font-black text-indigo-600 block">₹500 OFF</span>
          <h3 className="font-bold text-sm">New Customer Gift Voucher</h3>
          <p className="text-xs text-slate-500">Criteria: First Order • Minimum Cart ₹1,999</p>
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply Code WELCOME500</button>
      </div>
    </section>
  );
};
