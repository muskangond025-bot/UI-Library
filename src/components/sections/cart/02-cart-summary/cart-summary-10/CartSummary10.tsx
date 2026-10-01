import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export interface CartSummary10Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary10: React.FC<CartSummary10Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "10. Floating Total Glassmorphic Panel"}</h2>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 text-xs space-y-3">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-400"><span>Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Tax</span><span>{c}{summary.tax}</span></div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Payable</span>
            <span className="text-2xl font-black text-amber-400">{c}{summary.total}</span>
          </div>
          <button className="px-6 py-3.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
