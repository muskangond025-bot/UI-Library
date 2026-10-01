import React, { useState } from 'react';
import { Wallet, Copy, Check } from 'lucide-react';

export interface CouponDiscountSection1Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection1: React.FC<CouponDiscountSection1Props> = ({ data }) => {
  const coupons = data?.coupons || [
    { code: "SAVE20", discount: "20% OFF", title: "Festive Season Discount", minOrder: "₹2,499", expiry: "Valid till Dec 31" },
    { code: "WELCOME500", discount: "₹500 OFF", title: "New Customer Gift", minOrder: "₹1,999", expiry: "Valid for 7 days" }
  ];
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{data?.heading || "01. Premium Digital Coupon Wallet"}</h2>
          <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
          <Wallet className="w-4 h-4" /> Coupon Wallet
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((c, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 block">{c.discount}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{c.title}</h3>
              <p className="text-xs text-slate-500 mt-1">Min Order: {c.minOrder} • {c.expiry}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-mono text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-dashed">{c.code}</span>
              <button onClick={() => { setCopied(c.code); setTimeout(() => setCopied(null), 2000); }} className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                {copied === c.code ? <><Check className="w-3.5 h-3.5 text-emerald-500" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
