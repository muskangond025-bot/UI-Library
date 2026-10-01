const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/03-cart-offers';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 16. SIDE RAIL COMPACT OFFERS
writeComponent('cart-offers-16', 'CartOffers16', `import React from 'react';
import { Tag } from 'lucide-react';

export interface CartOffers16Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers16: React.FC<CartOffers16Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "16. Side Rail Compact Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-5 space-y-3 text-xs shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">AVAILABLE DEALS</span>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-indigo-600" />
            <span className="font-bold text-indigo-950 dark:text-indigo-200">FESTIVE20</span>
          </div>
          <button className="text-indigo-600 font-bold hover:underline">Apply</button>
        </div>
      </div>
    </section>
  );
};
`);

// 17. FULL WIDTH PROMO BANNER BAR
writeComponent('cart-offers-17', 'CartOffers17', `import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export interface CartOffers17Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers17: React.FC<CartOffers17Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Full Width Promo Banner Bar"}</h2>
      </div>
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-black uppercase">Mega Cart Festival Sale</h3>
            <p className="text-xs font-medium">Use promo code FESTIVE20 for instant 20% cashback on all orders.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-slate-950 text-white font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-slate-900">
          Apply Promo Code <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 18. INTERACTIVE COUPON DRAWER OFFERS
writeComponent('cart-offers-18', 'CartOffers18', `import React, { useState } from 'react';
import { Ticket, X } from 'lucide-react';

export interface CartOffers18Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers18: React.FC<CartOffers18Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Interactive Coupon Drawer Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm">
        <button onClick={() => setOpen(!open)} className="w-full py-4 bg-indigo-600 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-md">
          <Ticket className="w-4 h-4" /> View All Available Vouchers ({open ? "Close" : "Open"})
        </button>

        {open && (
          <div className="mt-4 pt-4 border-t space-y-2 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex justify-between items-center">
              <div><span className="font-bold block">FESTIVE20</span><span className="text-slate-500">20% OFF</span></div>
              <button className="px-3 py-1 bg-indigo-600 text-white font-bold text-[10px] rounded-lg">Apply</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
`);

// 19. ASYMMETRIC EDITORIAL OFFERS
writeComponent('cart-offers-19', 'CartOffers19', `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartOffers19Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers19: React.FC<CartOffers19Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-900 font-serif">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Asymmetric Editorial Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white dark:bg-stone-950 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">CURATED DISCOUNTS</span>
          <h3 className="text-3xl font-serif text-stone-900 dark:text-white">Complimentary Tailored Gift Packaging</h3>
          <p className="text-xs font-sans text-stone-500">Included on all orders over ₹4,000 this season.</p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <button className="w-full py-6 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-sans font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
            Claim Offer <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 20. AVANT-GARDE DARK MODE OFFERS
writeComponent('cart-offers-20', 'CartOffers20', `import React from 'react';
import { Zap, Tag } from 'lucide-react';

export interface CartOffers20Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers20: React.FC<CartOffers20Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "20. Avant-Garde Dark Mode Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto relative border border-zinc-800 rounded-3xl p-8 bg-zinc-950 shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
          <Zap className="w-3 h-3" /> Experimental Deal
        </div>
        <div>
          <span className="text-xs text-zinc-400 uppercase tracking-widest block">PROMO OFFER</span>
          <span className="text-4xl font-black text-amber-400 block mt-1">20% CASHBACK</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs">
          <span className="font-mono text-zinc-400">CODE: FESTIVE20</span>
          <button className="px-5 py-2.5 bg-amber-400 text-black font-extrabold text-xs rounded-xl hover:bg-amber-300">Apply Code</button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Cart Offers 16-20!');
