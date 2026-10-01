import React, { useState } from 'react';
import { Coins } from 'lucide-react';

export interface CartOffers10Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers10: React.FC<CartOffers10Props> = ({ data }) => {
  const [applied, setApplied] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "10. Loyalty Points & Rewards Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
            <Coins className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Redeem Rewards Points</h3>
            <span className="text-xs text-slate-500">Balance: 1,200 Points (Worth ₹300)</span>
          </div>
        </div>
        <button onClick={() => setApplied(!applied)} className="w-full py-3 font-bold text-xs rounded-xl transition-all bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          {applied ? "₹300 Discount Applied" : "Redeem 1,200 Points for ₹300 OFF"}
        </button>
      </div>
    </section>
  );
};
