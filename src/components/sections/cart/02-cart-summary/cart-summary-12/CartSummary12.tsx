import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary12Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary12: React.FC<CartSummary12Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-6 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-sm mx-auto mb-3">
        <h2 className="text-sm font-bold">{data?.heading || "12. Ultra-Compact Cart Summary"}</h2>
      </div>
      <div className="max-w-sm mx-auto bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
        <div className="flex justify-between"><span>Subtotal</span><span className="font-mono">{c}{summary.subtotal}</span></div>
        <div className="flex justify-between text-emerald-600"><span>Savings</span><span className="font-mono">-{c}{summary.discount}</span></div>
        <div className="flex justify-between border-t pt-2 font-bold text-sm text-slate-900 dark:text-white">
          <span>Total</span>
          <span className="font-mono">{c}{summary.total}</span>
        </div>
        <button className="w-full py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1 mt-2">
          {summary.checkoutLabel} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
