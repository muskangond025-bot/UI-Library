import React from 'react';
import { ShoppingBag, Truck, CreditCard, ArrowRight } from 'lucide-react';

export interface CartSummary7Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary7: React.FC<CartSummary7Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Stepper Checkout Progress Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-6">
        
        {/* Stepper Header */}
        <div className="flex items-center justify-between border-b pb-4 text-xs font-bold">
          <div className="flex items-center gap-1 text-indigo-600"><ShoppingBag className="w-4 h-4" /> 1. Cart</div>
          <div className="flex items-center gap-1 text-slate-300"><Truck className="w-4 h-4" /> 2. Delivery</div>
          <div className="flex items-center gap-1 text-slate-300"><CreditCard className="w-4 h-4" /> 3. Payment</div>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600"><span>Savings</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Freight</span><span>{summary.shipping === 0 ? "FREE" : c + summary.shipping}</span></div>
        </div>

        <div className="flex justify-between items-baseline border-t pt-4">
          <span className="text-sm font-bold">Grand Total</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>

        <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-2xl flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
