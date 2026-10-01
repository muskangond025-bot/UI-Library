import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CouponDiscountSection17Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection17: React.FC<CouponDiscountSection17Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-900 font-serif">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Asymmetric Featured Coupon Layout"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white dark:bg-stone-950 p-8 rounded-3xl border space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">FEATURED OFFER</span>
          <h3 className="text-4xl font-serif font-light text-stone-900 dark:text-white">20% Festive Savings</h3>
          <p className="text-xs font-sans text-stone-500">Valid on orders above ₹2,499. Applied at checkout.</p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <button className="w-full py-6 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-sans font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
            Claim Code SAVE20 <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
