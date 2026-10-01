import React from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';

export interface CartSummary14Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary14: React.FC<CartSummary14Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Two-Tier Separated Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        {/* Tier 1 */}
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 text-xs space-y-2">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600 font-bold"><span>Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
        </div>
        {/* Tier 2 */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-slate-400">Total Amount</span>
            <span className="text-2xl font-black">{c}{summary.total}</span>
          </div>
          <button className="w-full py-3.5 bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
