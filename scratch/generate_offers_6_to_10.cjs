const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/03-cart-offers';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 06. TIERED SAVINGS PROGRESS OFFERS
writeComponent('cart-offers-6', 'CartOffers6', `import React from 'react';
import { Award } from 'lucide-react';

export interface CartOffers6Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers6: React.FC<CartOffers6Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "06. Tiered Savings Progress Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6">
        <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-widest">
          <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Tiered Discount Unlocked</span>
          <span>Current Cart: ₹5,999</span>
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div className="bg-amber-400 h-full w-[70%]" title="70% Progress"></div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Spend ₹2k (5% OFF) ✓</span>
            <span className="text-amber-400 font-bold">Spend ₹5k (10% OFF) ✓</span>
            <span>Spend ₹8k (15% OFF)</span>
          </div>
        </div>
        <p className="text-xs text-slate-300 text-center bg-slate-900 p-3 rounded-xl border border-slate-800">
          Add <strong className="text-amber-400">₹2,001</strong> more to unlock an additional <strong className="text-amber-400">15% OFF</strong> on your entire cart!
        </p>
      </div>
    </section>
  );
};
`);

// 07. BUNDLE & BUY MORE SAVE MORE
writeComponent('cart-offers-7', 'CartOffers7', `import React from 'react';
import { PlusCircle, ArrowRight } from 'lucide-react';

export interface CartOffers7Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers7: React.FC<CartOffers7Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Bundle & Buy More Save More"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase">BUNDLE SAVER</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Buy 2 Items, Get 15% OFF</h3>
            <p className="text-xs text-slate-500">Add 1 more item from our featured collection to automatically save ₹500.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center gap-1 hover:bg-indigo-700">
          Browse Bundle Items <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 08. FREE GIFT WITH PURCHASE OFFERS
writeComponent('cart-offers-8', 'CartOffers8', `import React from 'react';
import { Gift, Check } from 'lucide-react';

export interface CartOffers8Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers8: React.FC<CartOffers8Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-amber-50/40 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "08. Free Gift with Purchase Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
            <Gift className="w-8 h-8" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase flex items-center gap-1 w-max"><Check className="w-3 h-3" /> GIFT UNLOCKED</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Complimentary Luxury Leather Pouch</h3>
            <p className="text-xs text-slate-500">Automatically added to your package at checkout.</p>
          </div>
        </div>
        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl">₹0 (Free Gift)</span>
      </div>
    </section>
  );
};
`);

// 09. LIMITED-TIME FLASH CART OFFERS
writeComponent('cart-offers-9', 'CartOffers9', `import React from 'react';
import { Clock, Zap } from 'lucide-react';

export interface CartOffers9Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers9: React.FC<CartOffers9Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-rose-950 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Limited-Time Flash Cart Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-rose-900/60 border border-rose-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <Zap className="w-10 h-10 text-amber-400" />
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">FLASH OFFER</span>
            <h3 className="text-xl font-bold">Extra 10% Off Instant Discount</h3>
            <p className="text-xs text-rose-200 mt-0.5">Use code FLASH10 before timer expires.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-2xl border border-rose-700/50 text-amber-400 font-mono text-sm font-bold">
          <Clock className="w-4 h-4" /> 14m 32s Remaining
        </div>
      </div>
    </section>
  );
};
`);

// 10. LOYALTY POINTS & REWARDS OFFERS
writeComponent('cart-offers-10', 'CartOffers10', `import React, { useState } from 'react';
import { Coins } from 'lucide-react';

export interface CartOffers10Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers10: React.FC<CartOffers10Props> = ({ data }) => {
  const [applied, setApplied] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "10. Loyalty Points & Rewards Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
            <Coins className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Redeem Rewards Points</h3>
            <span className="text-xs text-slate-500">Balance: 1,200 Points (Worth ₹300)</span>
          </div>
        </div>
        <button onClick={() => setApplied(!applied)} className="w-full py-3 font-bold text-xs rounded-xl transition-all bg-slate-900 text-white dark:bg-white dark:text-slate-900">
          {applied ? "₹300 Discount Applied" : "Redeem 1,200 Points for ₹300 OFF"}
        </button>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Cart Offers 6-10!');
