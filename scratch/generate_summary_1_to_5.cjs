const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/02-cart-summary';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 01. CLASSIC PREMIUM SUMMARY
writeComponent('cart-summary-1', 'CartSummary1', `import React from 'react';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export interface CartSummary1Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary1: React.FC<CartSummary1Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, savings: 800, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "01. Classic Premium Cart Summary"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Order Overview</h3>
        <div className="space-y-3 text-sm border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex justify-between text-slate-600 dark:text-slate-400"><span>Subtotal</span><span className="font-mono">{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600 font-medium"><span>Discount</span><span className="font-mono">-{c}{summary.discount}</span></div>
          <div className="flex justify-between text-slate-600 dark:text-slate-400"><span>Shipping</span><span className="text-emerald-600 font-bold">{summary.shipping === 0 ? "FREE" : c + summary.shipping}</span></div>
          <div className="flex justify-between text-slate-600 dark:text-slate-400"><span>Estimated Tax</span><span className="font-mono">{c}{summary.tax}</span></div>
        </div>
        <div className="flex justify-between items-baseline py-4 text-slate-900 dark:text-white">
          <span className="text-base font-bold">Total Amount</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
        <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
          <Lock className="w-3.5 h-3.5 text-emerald-500" /> Encrypted 256-Bit SSL Checkout
        </div>
      </div>
    </section>
  );
};
`);

// 02. SPLIT SUMMARY
writeComponent('cart-summary-2', 'CartSummary2', `import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface CartSummary2Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary2: React.FC<CartSummary2Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-stone-100 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "02. Split Financial & Checkout Summary"}</h2>
        <p className="text-xs text-stone-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-7 bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-6">Financial Statement</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-2"><span>Bag Subtotal</span><span className="font-mono">{c}{summary.subtotal}</span></div>
            <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-2 text-emerald-600"><span>Coupon Savings</span><span className="font-mono">-{c}{summary.discount}</span></div>
            <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-2"><span>Estimated Freight</span><span className="font-mono">{summary.shipping === 0 ? "Complimentary" : c + summary.shipping}</span></div>
            <div className="flex justify-between pb-2"><span>GST / Local Taxes</span><span className="font-mono">{c}{summary.tax}</span></div>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free returns on all domestic orders within 30 days.
          </div>
        </div>
        <div className="md:col-span-5 bg-stone-900 text-white p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <span className="text-xs text-stone-400 uppercase tracking-widest block">Final Payable</span>
            <span className="text-4xl font-serif font-bold text-amber-400 block mt-2">{c}{summary.total}</span>
            <p className="text-xs text-stone-400 mt-2">Includes all applicable duties and taxes.</p>
          </div>
          <button className="w-full py-4 bg-amber-400 text-stone-950 font-bold text-sm rounded-2xl flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors mt-8">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 03. EDITORIAL OVERSIZED TOTAL SUMMARY
writeComponent('cart-summary-3', 'CartSummary3', `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartSummary3Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary3: React.FC<CartSummary3Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-white dark:bg-stone-950 font-serif">
      <div className="max-w-3xl mx-auto mb-8 text-center border-b border-stone-200 pb-4">
        <h2 className="text-2xl italic">{data?.heading || "03. Editorial Oversized Total Summary"}</h2>
      </div>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400">GRAND TOTAL PAYABLE</span>
        <div className="text-6xl md:text-7xl font-light text-stone-900 dark:text-white tracking-tight">{c}{summary.total}</div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-sans text-stone-500 pt-4 border-t border-b border-stone-100 dark:border-stone-800 py-3">
          <span>SUBTOTAL: <strong className="text-stone-900 dark:text-stone-200">{c}{summary.subtotal}</strong></span>
          <span>SAVINGS: <strong className="text-emerald-600">-{c}{summary.discount}</strong></span>
          <span>SHIPPING: <strong className="text-stone-900 dark:text-stone-200">{summary.shipping === 0 ? "FREE" : c + summary.shipping}</strong></span>
          <span>TAX: <strong className="text-stone-900 dark:text-stone-200">{c}{summary.tax}</strong></span>
        </div>
        <button className="px-10 py-5 bg-stone-900 text-white dark:bg-white dark:text-stone-950 text-xs uppercase font-sans tracking-widest font-bold hover:opacity-90 inline-flex items-center gap-2">
          {summary.checkoutLabel} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 04. STICKY ANCHORED CHECKOUT SUMMARY
writeComponent('cart-summary-4', 'CartSummary4', `import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Lock } from 'lucide-react';

export interface CartSummary4Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary4: React.FC<CartSummary4Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Sticky Anchored Checkout Summary"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 border rounded-3xl p-6 shadow-xl space-y-4">
        {expanded && (
          <div className="space-y-2 text-xs border-b pb-4 text-slate-600 dark:text-slate-300">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{c}{summary.shipping}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{c}{summary.tax}</span></div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div>
            <button onClick={() => setExpanded(!expanded)} className="text-xs text-indigo-600 font-semibold flex items-center gap-1">
              {expanded ? "Hide Breakdown" : "View Breakdown"} {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
            <span className="text-2xl font-black text-slate-900 dark:text-white block mt-0.5">{c}{summary.total}</span>
          </div>
          <button className="px-6 py-3.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl shadow-md">
            {summary.checkoutLabel}
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 05. SAVINGS-FIRST SUMMARY
writeComponent('cart-summary-5', 'CartSummary5', `import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';

export interface CartSummary5Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary5: React.FC<CartSummary5Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, savings: 800, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-emerald-50/40 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "05. Savings-First Financial Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900 rounded-3xl overflow-hidden shadow-lg">
        <div className="bg-emerald-600 text-white p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-4 h-4" /> Total Order Savings
          </div>
          <div className="text-3xl font-black mt-1">You Saved {c}{summary.savings}!</div>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2 text-xs border-b pb-4 text-slate-600 dark:text-slate-400">
            <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
            <div className="flex justify-between text-emerald-600 font-bold"><span>Instant Discount</span><span>-{c}{summary.discount}</span></div>
            <div className="flex justify-between"><span>Delivery Charge</span><span>{summary.shipping === 0 ? "FREE" : c + summary.shipping}</span></div>
          </div>
          <div className="flex justify-between items-baseline text-slate-900 dark:text-white">
            <span className="text-sm font-bold">Net Total</span>
            <span className="text-2xl font-black">{c}{summary.total}</span>
          </div>
          <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Cart Summary 1-5!');
