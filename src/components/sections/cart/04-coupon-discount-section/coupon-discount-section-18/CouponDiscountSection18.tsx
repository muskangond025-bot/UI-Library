import React, { useState } from 'react';
import { Eye, Check } from 'lucide-react';

export interface CouponDiscountSection18Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection18: React.FC<CouponDiscountSection18Props> = ({ data }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Interactive Code Reveal Voucher"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 text-center space-y-4 shadow-sm">
        <span className="text-2xl font-black text-indigo-600 block">20% OFF VOUCHER</span>
        {!revealed ? (
          <button onClick={() => setRevealed(true)} className="w-full py-3 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-indigo-200 border-dashed">
            <Eye className="w-4 h-4" /> Click to Reveal Secret Code
          </button>
        ) : (
          <div className="p-3 bg-indigo-600 text-white rounded-xl font-mono text-sm font-bold flex items-center justify-between">
            <span>CODE: SAVE20</span>
            <span className="text-[10px] font-sans bg-white/20 px-2 py-0.5 rounded">REVEALED</span>
          </div>
        )}
      </div>
    </section>
  );
};
