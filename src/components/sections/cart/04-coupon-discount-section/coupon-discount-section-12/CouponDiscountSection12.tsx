import React from 'react';
import { Clock } from 'lucide-react';

export interface CouponDiscountSection12Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection12: React.FC<CouponDiscountSection12Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-rose-950 text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "12. Expiry-Focused Urgency Coupons"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-rose-900/60 border border-rose-800 rounded-3xl p-6 shadow-2xl space-y-4 text-center">
        <div className="inline-flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full text-amber-400 font-mono text-xs font-bold border border-rose-700/50 mx-auto">
          <Clock className="w-3.5 h-3.5" /> Expires in 2 Days
        </div>
        <span className="text-4xl font-black text-amber-400 block">20% OFF</span>
        <h3 className="font-bold text-base">Festive Season Flash Voucher</h3>
        <button className="w-full py-3.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl">Claim Voucher SAVE20</button>
      </div>
    </section>
  );
};
