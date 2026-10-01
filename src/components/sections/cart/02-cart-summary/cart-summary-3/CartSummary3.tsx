import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartSummary3Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary3: React.FC<CartSummary3Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-white dark:bg-stone-950 font-serif">
      <div className="max-w-3xl mx-auto mb-8 text-center border-b border-stone-200 pb-4">
        <h2 className="text-2xl italic">{data?.heading || "03. Editorial Oversized Total Summary"}</h2>
      </div>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400">GRAND TOTAL PAYABLE</span>
        <div className="text-6xl md:text-7xl font-light text-stone-900 dark:text-white tracking-tight">{c}{summary.total}</div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-sans text-stone-500 pt-4 border-t border-b border-stone-100 dark:border-stone-800 py-3">
          <span>SUBTOTAL: <strong className="text-stone-900 dark:text-stone-200">{c}{summary.subtotal}</strong></span>
          <span>SAVINGS: <strong className="text-emerald-600">-{c}{summary.discount}</strong></span>
          <span>SHIPPING: <strong className="text-stone-900 dark:text-stone-200">{summary.shipping === 0 ? "FREE" : c + summary.shipping}</strong></span>
          <span>TAX: <strong className="text-stone-900 dark:text-stone-200">{c}{summary.tax}</strong></span>
        </div>
        <button className="px-10 py-5 bg-stone-900 text-white dark:bg-white dark:text-stone-950 text-xs uppercase font-sans tracking-widest font-bold hover:opacity-90 inline-flex items-center gap-2">
          {summary.checkoutLabel} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
