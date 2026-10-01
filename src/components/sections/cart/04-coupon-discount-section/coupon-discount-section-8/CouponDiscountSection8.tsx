import React, { useState } from 'react';

export interface CouponDiscountSection8Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection8: React.FC<CouponDiscountSection8Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "08. Offer Discovery Filter Grid"}</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-bold">
          {['all', 'fashion', 'new user', 'high savings'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-4 py-2 rounded-full uppercase tracking-wider bg-indigo-600 text-white">
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 border p-6 rounded-3xl shadow-sm flex justify-between items-center">
            <div>
              <span className="text-lg font-black text-indigo-600">20% OFF</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-1">Festive Discount</h3>
              <span className="text-xs text-slate-500 block">Min spend ₹2,499</span>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};
