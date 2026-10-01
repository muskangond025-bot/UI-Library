import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CouponDiscountSection19Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection19: React.FC<CouponDiscountSection19Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Full-Width Editorial Experience"}</h2>
      </div>
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900 to-slate-900 border border-indigo-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">VIP VOUCHER</span>
          <h3 className="text-3xl font-black mt-1">20% OFF Festive Discount</h3>
          <p className="text-xs text-indigo-200 mt-1">Valid on all catalog items with cart total above ₹2,499.</p>
        </div>
        <button className="px-8 py-4 bg-amber-400 text-indigo-950 font-bold text-xs rounded-2xl flex items-center gap-2 hover:bg-amber-300">
          Apply SAVE20 <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
