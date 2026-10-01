import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export interface CartSummary18Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary18: React.FC<CartSummary18Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Expandable Financial Accordion"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400">Total Payable</span>
            <span className="text-2xl font-black block text-slate-900 dark:text-white">{c}{summary.total}</span>
          </div>
          <button onClick={() => setOpen(!open)} className="p-2 border rounded-xl flex items-center gap-1 text-xs font-semibold">
            {open ? "Less" : "Details"} {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {open && (
          <div className="border-t pt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{c}{summary.tax}</span></div>
          </div>
        )}

        <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-2xl flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
