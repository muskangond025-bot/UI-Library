import React from 'react';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export interface CartSummary1Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary1: React.FC<CartSummary1Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, savings: 800, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "01. Classic Premium Cart Summary"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Order Overview</h3>
        <div className="space-y-3 text-sm border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex justify-between text-slate-600 dark:text-slate-400"><span>Subtotal</span><span className="font-mono">{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600 font-medium"><span>Discount</span><span className="font-mono">-{c}{summary.discount}</span></div>
          <div className="flex justify-between text-slate-600 dark:text-slate-400"><span>Shipping</span><span className="text-emerald-600 font-bold">{summary.shipping === 0 ? "FREE" : c + summary.shipping}</span></div>
          <div className="flex justify-between text-slate-600 dark:text-slate-400"><span>Estimated Tax</span><span className="font-mono">{c}{summary.tax}</span></div>
        </div>
        <div className="flex justify-between items-baseline py-4 text-slate-900 dark:text-white">
          <span className="text-base font-bold">Total Amount</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
        <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
          <Lock className="w-3.5 h-3.5 text-emerald-500" /> Encrypted 256-Bit SSL Checkout
        </div>
      </div>
    </section>
  );
};
