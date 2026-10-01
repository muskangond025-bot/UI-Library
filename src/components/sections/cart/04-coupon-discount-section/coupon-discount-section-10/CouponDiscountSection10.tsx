import React from 'react';
import { Calculator } from 'lucide-react';

export interface CouponDiscountSection10Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection10: React.FC<CouponDiscountSection10Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "10. Potential Savings Calculator Display"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <Calculator className="w-6 h-6" />
        </div>
        <span className="text-xs text-slate-500 uppercase tracking-widest block font-bold">MAXIMUM POTENTIAL SAVINGS</span>
        <span className="text-4xl font-black text-emerald-600 block">Save up to ₹2,000</span>
        <button className="w-full py-3.5 bg-emerald-600 text-white font-bold text-xs rounded-2xl shadow-lg">Apply Best Voucher (SAVE20)</button>
      </div>
    </section>
  );
};
