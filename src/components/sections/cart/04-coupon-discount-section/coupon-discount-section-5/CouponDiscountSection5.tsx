import React from 'react';

export interface CouponDiscountSection5Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection5: React.FC<CouponDiscountSection5Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "05. Discount-First Visual Grid"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-900/60 border border-indigo-800 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <span className="text-6xl font-black text-amber-400 block">20%</span>
          <h3 className="text-lg font-bold">Festive Season Discount</h3>
          <p className="text-xs text-indigo-200">Applicable on orders above ₹2,499</p>
          <button className="w-full py-3 bg-amber-400 text-indigo-950 font-bold text-xs rounded-xl uppercase tracking-wider">Redeem Code: SAVE20</button>
        </div>
      </div>
    </section>
  );
};
