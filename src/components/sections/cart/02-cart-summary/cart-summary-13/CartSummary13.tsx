import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary13Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary13: React.FC<CartSummary13Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-md mx-auto mb-6 text-center">
        <h2 className="text-xl font-bold">{data?.heading || "13. Large Total Hero Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block">Final Order Total</span>
          <span className="text-5xl font-black text-amber-400 block mt-2">{c}{summary.total}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl text-xs text-slate-400">
          <div>Subtotal: <strong className="text-white block font-mono">{c}{summary.subtotal}</strong></div>
          <div>Savings: <strong className="text-emerald-400 block font-mono">-{c}{summary.discount}</strong></div>
        </div>
        <button className="w-full py-4 bg-amber-400 text-slate-950 font-bold text-sm rounded-2xl flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
