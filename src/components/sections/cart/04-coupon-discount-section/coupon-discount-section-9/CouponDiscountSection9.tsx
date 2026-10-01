import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CouponDiscountSection9Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection9: React.FC<CouponDiscountSection9Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Horizontal Coupon Carousel"}</h2>
      </div>
      <div className="max-w-5xl mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        <div className="min-w-[280px] bg-slate-950 border border-slate-800 rounded-3xl p-6 flex-shrink-0 space-y-4">
          <span className="text-2xl font-black text-amber-400">20% OFF</span>
          <h3 className="font-bold text-sm text-white">Festive Season Voucher</h3>
          <p className="text-xs text-slate-400">Valid on orders above ₹2,499</p>
          <button className="w-full py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1">Apply <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
      </div>
    </section>
  );
};
