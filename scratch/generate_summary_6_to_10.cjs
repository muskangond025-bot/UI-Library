const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/02-cart-summary';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 06. HORIZONTAL FINANCIAL SUMMARY
writeComponent('cart-summary-6', 'CartSummary6', `import React from 'react';
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
`);

// 07. STEPPER CHECKOUT PROGRESS SUMMARY
writeComponent('cart-summary-7', 'CartSummary7', `import React from 'react';
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
`);

// 08. MINIMAL TYPOGRAPHY SUMMARY
writeComponent('cart-summary-8', 'CartSummary8', `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartSummary8Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary8: React.FC<CartSummary8Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "08. Minimalist Typography Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto py-6 border-t-2 border-b-2 border-slate-900 dark:border-slate-100 space-y-4 text-xs">
        <div className="flex justify-between uppercase"><span>01 // SUBTOTAL</span><span>{c}{summary.subtotal}</span></div>
        <div className="flex justify-between uppercase text-emerald-600"><span>02 // DISCOUNT</span><span>-{c}{summary.discount}</span></div>
        <div className="flex justify-between uppercase"><span>03 // FREIGHT</span><span>{summary.shipping === 0 ? "COMPLIMENTARY" : c + summary.shipping}</span></div>
        <div className="flex justify-between uppercase"><span>04 // GST TAX</span><span>{c}{summary.tax}</span></div>
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline font-bold">
          <span className="text-sm">05 // TOTAL</span>
          <span className="text-3xl">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 mt-4">
          {summary.checkoutLabel} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 09. MULTI-LAYERED OVERLAPPING SUMMARY
writeComponent('cart-summary-9', 'CartSummary9', `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary9Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary9: React.FC<CartSummary9Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-indigo-50/40 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Multi-Layered Overlapping Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto relative p-4">
        <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-950/40 rounded-3xl transform rotate-2 scale-[0.98]"></div>
        <div className="relative bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-xl space-y-4">
          <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Financial Overview</h3>
          <div className="space-y-2 text-xs border-b pb-4">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold">Total</span>
            <span className="text-3xl font-black text-indigo-600">{c}{summary.total}</span>
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 10. FLOATING TOTAL GLASSMORPHIC PANEL
writeComponent('cart-summary-10', 'CartSummary10', `import React from 'react';
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
`);

console.log('Successfully written Cart Summary 6-10!');
