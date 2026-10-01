import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartSummary19Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary19: React.FC<CartSummary19Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-900 font-serif">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Asymmetric Editorial Summary"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white dark:bg-stone-950 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">VALUATION SUMMARY</span>
          <div className="text-5xl font-light text-stone-900 dark:text-white">{c}{summary.total}</div>
          <div className="flex gap-6 text-xs font-sans text-stone-500 pt-4 border-t border-stone-100 dark:border-stone-800">
            <span>Subtotal: {c}{summary.subtotal}</span>
            <span className="text-emerald-600">Savings: -{c}{summary.discount}</span>
            <span>Tax: {c}{summary.tax}</span>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <button className="w-full py-6 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-sans font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
            {summary.checkoutLabel} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
