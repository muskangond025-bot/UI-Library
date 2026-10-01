import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CouponDiscountSection2Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection2: React.FC<CouponDiscountSection2Props> = ({ data }) => {
  const coupons = data?.coupons || [
    { code: "SAVE20", discount: "20% OFF", title: "Festive Season Discount", minOrder: "₹2,499", expiry: "Valid till Dec 31" }
  ];

  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-950 font-serif">
      <div className="max-w-4xl mx-auto mb-6 border-b border-stone-200 pb-3">
        <h2 className="text-2xl italic">{data?.heading || "02. Editorial Offer List"}</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {coupons.map((c, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-5xl font-light text-stone-900 dark:text-white">{c.discount}</span>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mt-2">{c.title}</h3>
              <p className="text-xs font-sans text-stone-500 mt-1">Minimum Order: {c.minOrder} • {c.expiry}</p>
            </div>
            <div className="font-sans flex items-center gap-4">
              <span className="font-mono text-xs font-bold bg-stone-100 dark:bg-stone-800 px-4 py-2 rounded-xl">{c.code}</span>
              <button className="px-6 py-3 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-1">
                Apply <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
