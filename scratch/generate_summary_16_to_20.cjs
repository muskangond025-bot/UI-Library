const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/02-cart-summary';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 16. SIDE-RAIL SUMMARY
writeComponent('cart-summary-16', 'CartSummary16', `import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export interface CartSummary16Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary16: React.FC<CartSummary16Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "16. Side-Rail Desktop Summary"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 space-y-4 shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">ORDER RAIL</span>
        <div className="space-y-2 text-xs border-b pb-4">
          <div className="flex justify-between"><span>Subtotal</span><span>{c}{summary.subtotal}</span></div>
          <div className="flex justify-between text-emerald-600"><span>Discount</span><span>-{c}{summary.discount}</span></div>
          <div className="flex justify-between"><span>Freight</span><span>{c}{summary.shipping}</span></div>
        </div>
        <div className="flex justify-between items-baseline font-bold">
          <span className="text-sm">Total</span>
          <span className="text-2xl font-black">{c}{summary.total}</span>
        </div>
        <button className="w-full py-4 bg-indigo-600 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2">
          {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 17. FULL-WIDTH SUMMARY BAR
writeComponent('cart-summary-17', 'CartSummary17', `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CartSummary17Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary17: React.FC<CartSummary17Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Full-Width Wide Summary Bar"}</h2>
      </div>
      <div className="max-w-5xl mx-auto bg-indigo-950 border border-indigo-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex flex-wrap items-center gap-8 text-xs">
          <div><span className="text-indigo-300 block">Subtotal</span><span className="font-bold text-sm">{c}{summary.subtotal}</span></div>
          <div><span className="text-indigo-300 block">Savings</span><span className="font-bold text-sm text-emerald-400">-{c}{summary.discount}</span></div>
          <div><span className="text-indigo-300 block">Estimated Tax</span><span className="font-bold text-sm">{c}{summary.tax}</span></div>
        </div>
        <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-indigo-800 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-between">
          <div><span className="text-[10px] text-indigo-300 uppercase block">Total</span><span className="text-3xl font-black text-amber-400">{c}{summary.total}</span></div>
          <button className="px-8 py-4 bg-amber-400 text-indigo-950 font-bold text-xs rounded-2xl flex items-center gap-2 hover:bg-amber-300">
            {summary.checkoutLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 18. EXPANDABLE SUMMARY
writeComponent('cart-summary-18', 'CartSummary18', `import React, { useState } from 'react';
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
`);

// 19. ASYMMETRIC EDITORIAL SUMMARY
writeComponent('cart-summary-19', 'CartSummary19', `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartSummary19Props { data?: { heading?: string; description?: string; summary?: any; }; }

export const CartSummary19: React.FC<CartSummary19Props> = ({ data }) => {
  const summary = data?.summary || { currency: "₹", subtotal: 5999, discount: 800, shipping: 0, tax: 540, total: 5739, checkoutLabel: "Proceed to Checkout" };
  const c = summary.currency || "₹";

  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-900 font-serif">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Asymmetric Editorial Summary"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white dark:bg-stone-950 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">VALUATION SUMMARY</span>
          <div className="text-5xl font-light text-stone-900 dark:text-white">{c}{summary.total}</div>
          <div className="flex gap-6 text-xs font-sans text-stone-500 pt-4 border-t border-stone-100 dark:border-stone-800">
            <span>Subtotal: {c}{summary.subtotal}</span>
            <span className="text-emerald-600">Savings: -{c}{summary.discount}</span>
            <span>Tax: {c}{summary.tax}</span>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <button className="w-full py-6 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-sans font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
            {summary.checkoutLabel} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 20. AWARD-LEVEL EXPERIMENTAL SUMMARY
writeComponent('cart-summary-20', 'CartSummary20', `import React from 'react';
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
`);

console.log('Successfully written Cart Summary 16-20!');
