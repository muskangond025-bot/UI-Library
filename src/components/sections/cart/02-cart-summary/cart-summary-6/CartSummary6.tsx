import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export interface CartSummary6Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary6: React.FC<CartSummary6Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "06. Horizontal Financial Flow Summary"}</h2>
        <p className="text-xs text-slate-400 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-auto text-xs">
          <div><span className="text-slate-500 block">Subtotal</span><span className="text-base font-bold font-mono">{c}{summary.subtotal}</span></div>
          <div><span className="text-slate-500 block">Discount</span><span className="text-base font-bold text-emerald-400 font-mono">-{c}{summary.discount}</span></div>
          <div><span className="text-slate-500 block">Shipping</span><span className="text-base font-bold text-emerald-400 font-mono">{summary.shipping === 0 ? "FREE" : c + summary.shipping}</span></div>
          <div><span className="text-slate-500 block">Estimated Tax</span><span className="text-base font-bold font-mono">{c}{summary.tax}</span></div>
        </div>
        <div className="flex items-center gap-6 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 justify-between md:justify-start">
          <div><span className="text-[10px] text-slate-400 uppercase tracking-widest block">Total</span><span className="text-3xl font-black text-amber-400">{c}{summary.total}</span></div>
          <button className="px-6 py-4 bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl hover:bg-amber-300 transition-colors flex items-center gap-2">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
