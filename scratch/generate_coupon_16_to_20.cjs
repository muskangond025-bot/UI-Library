const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/04-coupon-discount-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 16. VERTICAL OFFER RAIL
writeComponent('coupon-discount-section-16', 'CouponDiscountSection16', `import React from 'react';
import { Tag } from 'lucide-react';

export interface CouponDiscountSection16Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection16: React.FC<CouponDiscountSection16Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "16. Vertical Sidebar Offer Rail"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-5 space-y-3 shadow-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">PROMO RAIL</span>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-indigo-600" />
            <div>
              <span className="font-bold block">SAVE20</span>
              <span className="text-[10px] text-slate-500">20% OFF</span>
            </div>
          </div>
          <button className="px-3 py-1 bg-indigo-600 text-white font-bold text-[10px] rounded-lg">Apply</button>
        </div>
      </div>
    </section>
  );
};
`);

// 17. ASYMMETRIC COUPON LAYOUT
writeComponent('coupon-discount-section-17', 'CouponDiscountSection17', `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CouponDiscountSection17Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection17: React.FC<CouponDiscountSection17Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-900 font-serif">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Asymmetric Featured Coupon Layout"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white dark:bg-stone-950 p-8 rounded-3xl border space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">FEATURED OFFER</span>
          <h3 className="text-4xl font-serif font-light text-stone-900 dark:text-white">20% Festive Savings</h3>
          <p className="text-xs font-sans text-stone-500">Valid on orders above ₹2,499. Applied at checkout.</p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <button className="w-full py-6 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-sans font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
            Claim Code SAVE20 <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
`);

// 18. INTERACTIVE COUPON REVEAL
writeComponent('coupon-discount-section-18', 'CouponDiscountSection18', `import React, { useState } from 'react';
import { Eye, Check } from 'lucide-react';

export interface CouponDiscountSection18Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection18: React.FC<CouponDiscountSection18Props> = ({ data }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Interactive Code Reveal Voucher"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 text-center space-y-4 shadow-sm">
        <span className="text-2xl font-black text-indigo-600 block">20% OFF VOUCHER</span>
        {!revealed ? (
          <button onClick={() => setRevealed(true)} className="w-full py-3 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-indigo-200 border-dashed">
            <Eye className="w-4 h-4" /> Click to Reveal Secret Code
          </button>
        ) : (
          <div className="p-3 bg-indigo-600 text-white rounded-xl font-mono text-sm font-bold flex items-center justify-between">
            <span>CODE: SAVE20</span>
            <span className="text-[10px] font-sans bg-white/20 px-2 py-0.5 rounded">REVEALED</span>
          </div>
        )}
      </div>
    </section>
  );
};
`);

// 19. FULL-WIDTH OFFER EXPERIENCE
writeComponent('coupon-discount-section-19', 'CouponDiscountSection19', `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CouponDiscountSection19Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection19: React.FC<CouponDiscountSection19Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Full-Width Editorial Experience"}</h2>
      </div>
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900 to-slate-900 border border-indigo-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">VIP VOUCHER</span>
          <h3 className="text-3xl font-black mt-1">20% OFF Festive Discount</h3>
          <p className="text-xs text-indigo-200 mt-1">Valid on all catalog items with cart total above ₹2,499.</p>
        </div>
        <button className="px-8 py-4 bg-amber-400 text-indigo-950 font-bold text-xs rounded-2xl flex items-center gap-2 hover:bg-amber-300">
          Apply SAVE20 <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
`);

// 20. AWARD-LEVEL EXPERIMENTAL COUPON
writeComponent('coupon-discount-section-20', 'CouponDiscountSection20', `import React from 'react';
import { Zap, Tag } from 'lucide-react';

export interface CouponDiscountSection20Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection20: React.FC<CouponDiscountSection20Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "20. Avant-Garde Experimental Coupon"}</h2>
      </div>
      <div className="max-w-md mx-auto relative border border-zinc-800 rounded-3xl p-8 bg-zinc-950 shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
          <Zap className="w-3 h-3" /> Experimental Voucher
        </div>
        <div>
          <span className="text-xs text-zinc-400 uppercase tracking-widest block">EXCLUSIVE DEAL</span>
          <span className="text-5xl font-black text-amber-400 block mt-1">20% OFF</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs">
          <span className="font-mono text-zinc-400">CODE: SAVE20</span>
          <button className="px-5 py-2.5 bg-amber-400 text-black font-extrabold text-xs rounded-xl hover:bg-amber-300">Redeem</button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Coupon & Discount 16-20!');
