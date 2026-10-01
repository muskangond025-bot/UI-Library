import React from 'react';
import { Tag, Check, ArrowRight } from 'lucide-react';

export interface CartSummary11Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary11: React.FC<CartSummary11Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "11. Coupon-Focused Order Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300">
            <Tag className="w-4 h-4" /> Promo Code "SAVE20" Applied
          </div>
          <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center gap-0.5"><Check className="w-3 h-3" /> Active</span>
        </div>
        <div className="space-y-2 text-xs border-b pb-4">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600 font-bold"><span>Promo Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-bold">Payable Total</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
