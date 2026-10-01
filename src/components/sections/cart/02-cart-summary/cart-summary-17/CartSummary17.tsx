import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary17Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary17: React.FC<CartSummary17Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Full-Width Wide Summary Bar"}</h2>
      </div>
      <div className="max-w-5xl mx-auto bg-indigo-950 border border-indigo-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex flex-wrap items-center gap-8 text-xs">
          <div><span className="text-indigo-300 block">Subtotal</span><span className="font-bold text-sm">{c}{summary.subtotal}</span></div>
          <div><span className="text-indigo-300 block">Savings</span><span className="font-bold text-sm text-emerald-400">-{c}{summary.discount}</span></div>
          <div><span className="text-indigo-300 block">Estimated Tax</span><span className="font-bold text-sm">{c}{summary.tax}</span></div>
        </div>
        <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-indigo-800 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-between">
          <div><span className="text-[10px] text-indigo-300 uppercase block">Total</span><span className="text-3xl font-black text-amber-400">{c}{summary.total}</span></div>
          <button className="px-8 py-4 bg-amber-400 text-indigo-950 font-bold text-xs rounded-2xl flex items-center gap-2 hover:bg-amber-300">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
