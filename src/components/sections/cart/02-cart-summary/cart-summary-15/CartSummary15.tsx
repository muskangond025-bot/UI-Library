import React from 'react';
import { PieChart, ArrowRight } from 'lucide-react';

export interface CartSummary15Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary15: React.FC<CartSummary15Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "15. Infographic Savings Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 border rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
          <PieChart className="w-4 h-4 text-indigo-600" /> Cost Distribution
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-1">
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex">
            <div className="bg-indigo-600 h-full w-[70%]" title="Subtotal"></div>
            <div className="bg-emerald-500 h-full w-[20%]" title="Savings"></div>
            <div className="bg-amber-500 h-full w-[10%]" title="Tax"></div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 pt-1 font-mono">
            <span>70% Subtotal</span>
            <span className="text-emerald-600">20% Saved</span>
            <span>10% Tax</span>
          </div>
        </div>

        <div className="flex justify-between items-baseline pt-4 border-t">
          <span className="text-sm font-bold">Total Payable</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>

        <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-2xl flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
