import React, { useState } from 'react';
import { Tag, Check } from 'lucide-react';

export interface CartOffers4Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers4: React.FC<CartOffers4Props> = ({ data }) => {
  const [inputCode, setInputCode] = useState('');
  const [applied, setApplied] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Coupon Code Input & Applied List"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 border rounded-3xl p-6 shadow-md space-y-4">
        <label className="text-xs font-bold text-slate-500 uppercase block">Have a Promo Code?</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value.toUpperCase())}
            placeholder="Enter coupon code"
            className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs font-mono font-bold uppercase focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button onClick={() => setApplied(true)} className="px-5 py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700">Apply</button>
        </div>
        {applied && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Coupon "{inputCode || 'SAVE20'}" Applied!</span>
            <button onClick={() => setApplied(false)} className="text-[10px] underline">Remove</button>
          </div>
        )}
      </div>
    </section>
  );
};
