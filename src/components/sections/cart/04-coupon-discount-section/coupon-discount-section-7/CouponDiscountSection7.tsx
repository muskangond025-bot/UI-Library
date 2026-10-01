import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';

export interface CouponDiscountSection7Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection7: React.FC<CouponDiscountSection7Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Expandable Coupon Terms Accordion"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="font-bold text-sm">Festive 20% OFF</h3>
              <span className="text-xs text-slate-500 font-mono">SAVE20</span>
            </div>
          </div>
          <button onClick={() => setOpen(!open)} className="p-2 border rounded-xl text-xs font-bold flex items-center gap-1">
            {open ? "Less" : "Terms"} {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        {open && (
          <div className="pt-4 border-t text-xs text-slate-600 dark:text-slate-400 space-y-2 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl">
            <p>• Minimum cart value: ₹2,499</p>
            <p>• Applicable on apparel & accessories catalog.</p>
          </div>
        )}
        <button className="w-full py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply Coupon</button>
      </div>
    </section>
  );
};
