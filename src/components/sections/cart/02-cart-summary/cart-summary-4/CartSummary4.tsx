import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Lock } from 'lucide-react';

export interface CartSummary4Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary4: React.FC<CartSummary4Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Sticky Anchored Checkout Summary"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 border rounded-3xl p-6 shadow-xl space-y-4">
        {expanded && (
          <div className="space-y-2 text-xs border-b pb-4 text-slate-600 dark:text-slate-300">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{c}{summary.tax}</span></div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            <button onClick={() => setExpanded(!expanded)} className="text-xs text-indigo-600 font-semibold flex items-center gap-1">
              {expanded ? "Hide Breakdown" : "View Breakdown"} {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
            <span className="text-2xl font-black text-slate-900 dark:text-white block mt-0.5">{c}{summary.total}</span>
          </div>
          <button className="px-6 py-3.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl shadow-md">
            {summary.checkoutLabel}
          </button>
        </div>
      </div>
    </section>
  );
};
