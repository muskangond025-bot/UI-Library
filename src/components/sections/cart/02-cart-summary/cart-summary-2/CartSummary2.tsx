import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface CartSummary2Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary2: React.FC<CartSummary2Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-stone-100 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "02. Split Financial & Checkout Summary"}</h2>
        <p className="text-xs text-stone-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-7 bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-6">Financial Statement</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-2"><span>Bag Subtotal</span><span className="font-mono">{c}{summary.subtotal}</span></div>
            <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-2 text-emerald-600"><span>Coupon Savings</span><span className="font-mono">-{c}{summary.discount}</span></div>
            <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-2"><span>Estimated Freight</span><span className="font-mono">{summary.shipping === 0 ? "Complimentary" : c + summary.shipping}</span></div>
            <div className="flex justify-between pb-2"><span>GST / Local Taxes</span><span className="font-mono">{c}{summary.tax}</span></div>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free returns on all domestic orders within 30 days.
          </div>
        </div>
        <div className="md:col-span-5 bg-stone-900 text-white p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="text-xs text-stone-400 uppercase tracking-widest block">Final Payable</span>
            <span className="text-4xl font-serif font-bold text-amber-400 block mt-2">{c}{summary.total}</span>
            <p className="text-xs text-stone-400 mt-2">Includes all applicable duties and taxes.</p>
          </div>
          <button className="w-full py-4 bg-amber-400 text-stone-950 font-bold text-sm rounded-2xl flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors mt-8">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
