const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/02-cart-summary';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 11. COUPON-FOCUSED SUMMARY
writeComponent('cart-summary-11', 'CartSummary11', `import React from 'react';
import { Tag, Check, ArrowRight } from 'lucide-react';

export interface CartSummary11Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary11: React.FC<CartSummary11Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "11. Coupon-Focused Order Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300">
            <Tag className="w-4 h-4" /> Promo Code "SAVE20" Applied
          </div>
          <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center gap-0.5"><Check className="w-3 h-3" /> Active</span>
        </div>
        <div className="space-y-2 text-xs border-b pb-4">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600 font-bold"><span>Promo Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-bold">Payable Total</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 12. COMPACT CART SUMMARY
writeComponent('cart-summary-12', 'CartSummary12', `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary12Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary12: React.FC<CartSummary12Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-6 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-sm mx-auto mb-3">
        <h2 className="text-sm font-bold">{data?.heading || "12. Ultra-Compact Cart Summary"}</h2>
      </div>
      <div className="max-w-sm mx-auto bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
        <div className="flex justify-between"><span>Subtotal</span><span className="font-mono">{c}{summary.subtotal}</span></div>
        <div className="flex justify-between text-emerald-600"><span>Savings</span><span className="font-mono">-{c}{summary.discount}</span></div>
        <div className="flex justify-between border-t pt-2 font-bold text-sm text-slate-900 dark:text-white">
          <span>Total</span>
          <span className="font-mono">{c}{summary.total}</span>
        </div>
        <button className="w-full py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1 mt-2">
          {summary.checkoutLabel} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
`);

// 13. LARGE TOTAL HERO SUMMARY
writeComponent('cart-summary-13', 'CartSummary13', `import React from 'react';
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
`);

// 14. TWO-TIER SUMMARY
writeComponent('cart-summary-14', 'CartSummary14', `import React from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';

export interface CartSummary14Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary14: React.FC<CartSummary14Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Two-Tier Separated Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        {/* Tier 1 */}
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 text-xs space-y-2">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600 font-bold"><span>Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
        </div>
        {/* Tier 2 */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-slate-400">Total Amount</span>
            <span className="text-2xl font-black">{c}{summary.total}</span>
          </div>
          <button className="w-full py-3.5 bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 15. INFOGRAPHIC SUMMARY
writeComponent('cart-summary-15', 'CartSummary15', `import React from 'react';
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
`);

console.log('Successfully written Cart Summary 11-15!');
