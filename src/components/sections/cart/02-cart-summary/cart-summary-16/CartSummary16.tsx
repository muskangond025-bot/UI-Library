import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export interface CartSummary16Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary16: React.FC<CartSummary16Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "16. Side-Rail Desktop Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 space-y-4 shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">ORDER RAIL</span>
        <div className="space-y-2 text-xs border-b pb-4">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Freight</span><span>{c}{summary.shipping}</span></div>
        </div>
        <div className="flex justify-between items-baseline font-bold">
          <span className="text-sm">Total</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
