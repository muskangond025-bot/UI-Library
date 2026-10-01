import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartSummary8Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary8: React.FC<CartSummary8Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "08. Minimalist Typography Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto py-6 border-t-2 border-b-2 border-slate-900 dark:border-slate-100 space-y-4 text-xs">
        <div className="flex justify-between uppercase"><span>01 // SUBTOTAL</span><span>{c}{summary.subtotal}</span></div>
        <div className="flex justify-between uppercase text-emerald-600"><span>02 // DISCOUNT</span><span>-{c}{summary.discount}</span></div>
        <div className="flex justify-between uppercase"><span>03 // FREIGHT</span><span>{summary.shipping === 0 ? "COMPLIMENTARY" : c + summary.shipping}</span></div>
        <div className="flex justify-between uppercase"><span>04 // GST TAX</span><span>{c}{summary.tax}</span></div>
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline font-bold">
          <span className="text-sm">05 // TOTAL</span>
          <span className="text-3xl">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 mt-4">
          {summary.checkoutLabel} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
