import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export interface CartSummary20Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary20: React.FC<CartSummary20Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "20. Avant-Garde Experimental Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto relative border border-zinc-800 rounded-3xl p-8 bg-zinc-950 shadow-2xl space-y-6">
        <div className="flex items-center gap-1 bg-amber-400 text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase w-max">
          <Zap className="w-3 h-3" /> Experimental Commerce
        </div>
        <div>
          <span className="text-xs text-zinc-400 uppercase tracking-widest block">Grand Payable Total</span>
          <span className="text-5xl font-black text-amber-400 block mt-1">{c}{summary.total}</span>
        </div>
        <div className="space-y-2 text-xs text-zinc-400 border-t border-zinc-800 pt-4 font-mono">
          <div className="flex justify-between"><span>SUBTOTAL</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-400"><span>SAVINGS</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>TAX</span><span>{c}{summary.tax}</span></div>
        </div>
        <button className="w-full py-4 bg-amber-400 text-black font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 hover:bg-amber-300">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
