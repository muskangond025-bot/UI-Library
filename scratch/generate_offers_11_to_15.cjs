const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/03-cart-offers';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 11. SCRATCH CARD SURPRISE OFFERS
writeComponent('cart-offers-11', 'CartOffers11', `import React, { useState } from 'react';
import { Sparkles, Gift } from 'lucide-react';

export interface CartOffers11Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers11: React.FC<CartOffers11Props> = ({ data }) => {
  const [scratched, setScratched] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6 text-center">
        <h2 className="text-xl font-bold">{data?.heading || "11. Scratch Card Surprise Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm text-center">
        {!scratched ? (
          <button onClick={() => setScratched(true)} className="w-full h-40 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl flex flex-col items-center justify-center text-slate-950 font-bold shadow-lg hover:scale-[1.02] transition-transform">
            <Sparkles className="w-8 h-8 mb-2" />
            <span className="text-base uppercase tracking-wider">Tap to Scratch & Reveal</span>
            <span className="text-xs font-normal opacity-90 mt-1">Unlock your mystery cart bonus</span>
          </button>
        ) : (
          <div className="h-40 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 rounded-2xl flex flex-col items-center justify-center text-emerald-800 dark:text-emerald-300 font-bold p-4">
            <Gift className="w-8 h-8 text-emerald-600 mb-1" />
            <span className="text-xl font-black">YOU UNLOCKED ₹400 OFF!</span>
            <span className="text-xs font-mono bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border mt-2">CODE: MYSTERY400</span>
          </div>
        )}
      </div>
    </section>
  );
};
`);

// 12. MINIMAL TYPOGRAPHY LIST OFFERS
writeComponent('cart-offers-12', 'CartOffers12', `import React from 'react';
import { Tag } from 'lucide-react';

export interface CartOffers12Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers12: React.FC<CartOffers12Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-4xl mx-auto mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "12. Minimal Typography List Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto divide-y divide-slate-200 dark:divide-slate-800 text-xs">
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400">PROMO // 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white uppercase mt-0.5">Flat 20% OFF</h3>
            <p className="text-slate-500">Valid on orders above ₹2,999</p>
          </div>
          <span className="font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded font-bold">FESTIVE20</span>
        </div>
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400">PROMO // 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white uppercase mt-0.5">Complimentary Shipping</h3>
            <p className="text-slate-500">Auto-applied at checkout</p>
          </div>
          <span className="font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded font-bold">FREESHIP</span>
        </div>
      </div>
    </section>
  );
};
`);

// 13. FLOATING BANNER TOAST OFFERS
writeComponent('cart-offers-13', 'CartOffers13', `import React from 'react';
import { Tag, X } from 'lucide-react';

export interface CartOffers13Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers13: React.FC<CartOffers13Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "13. Floating Banner Toast Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-emerald-500 text-white rounded-xl"><Tag className="w-4 h-4" /></span>
          <div>
            <span className="font-bold block">Best Offer Applied!</span>
            <span className="text-slate-400">You are saving ₹800 with code "FESTIVE20"</span>
          </div>
        </div>
        <button className="text-slate-400 hover:text-white p-1"><X className="w-4 h-4" /></button>
      </div>
    </section>
  );
};
`);

// 14. MULTI-TIERED CASHBACK CARDS
writeComponent('cart-offers-14', 'CartOffers14', `import React from 'react';
import { CreditCard, Wallet, Smartphone } from 'lucide-react';

export interface CartOffers14Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers14: React.FC<CartOffers14Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Multi-Tiered Cashback Cards"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm space-y-2">
          <CreditCard className="w-6 h-6 text-indigo-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Credit Card Offer</h3>
          <p className="text-slate-500">10% Instant discount up to ₹1,500 on all major bank cards.</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm space-y-2">
          <Wallet className="w-6 h-6 text-emerald-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Wallet Offer</h3>
          <p className="text-slate-500">Flat ₹200 Cashback via Paytm or PhonePe wallet payment.</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm space-y-2">
          <Smartphone className="w-6 h-6 text-amber-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">UPI Discount</h3>
          <p className="text-slate-500">Extra 5% instant discount when paying via Google Pay UPI.</p>
        </div>
      </div>
    </section>
  );
};
`);

// 15. VIP EXCLUSIVE MEMBER OFFERS
writeComponent('cart-offers-15', 'CartOffers15', `import React from 'react';
import { Crown, Check } from 'lucide-react';

export interface CartOffers15Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers15: React.FC<CartOffers15Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "15. VIP Exclusive Member Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto border-2 border-amber-500/80 rounded-3xl p-8 bg-slate-950 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Crown className="w-12 h-12 text-amber-400" />
          <div>
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">VIP MEMBER PERK</span>
            <h3 className="text-2xl font-bold text-amber-100 mt-0.5">Double Reward Points + Free Overnight Express</h3>
            <p className="text-xs text-slate-400 mt-1">Exclusive benefits applied automatically to VIP accounts.</p>
          </div>
        </div>
        <span className="px-4 py-2 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl flex items-center gap-1">
          <Check className="w-4 h-4" /> Perks Active
        </span>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Cart Offers 11-15!');
