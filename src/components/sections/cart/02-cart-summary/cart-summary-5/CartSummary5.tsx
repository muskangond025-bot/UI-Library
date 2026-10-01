import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';

export interface CartSummary5Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary5: React.FC<CartSummary5Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, savings: 800, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-emerald-50/40 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "05. Savings-First Financial Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900 rounded-3xl overflow-hidden shadow-lg">
        <div className="bg-emerald-600 text-white p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-4 h-4" /> Total Order Savings
          </div>
          <div className="text-3xl font-black mt-1">You Saved {c}{summary.savings}!</div>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2 text-xs border-b pb-4 text-slate-600 dark:text-slate-400">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600 font-bold"><span>Instant Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Delivery Charge</span><span>{summary.shipping === 0 ? "FREE" : c + summary.shipping}</span></div>
          </div>
          <div className="flex justify-between items-baseline text-slate-900 dark:text-white">
            <span className="text-sm font-bold">Net Total</span>
            <span className="text-2xl font-black">{c}{summary.total}</span>
          </div>
          <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
