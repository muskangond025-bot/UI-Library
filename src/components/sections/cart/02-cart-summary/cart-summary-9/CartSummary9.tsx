import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary9Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary9: React.FC<CartSummary9Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-indigo-50/40 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Multi-Layered Overlapping Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto relative p-4">
        <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-950/40 rounded-3xl transform rotate-2 scale-[0.98]"></div>
        <div className="relative bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Financial Overview</h3>
          <div className="space-y-2 text-xs border-b pb-4">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold">Total</span>
            <span className="text-3xl font-black text-indigo-600">{c}{summary.total}</span>
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
