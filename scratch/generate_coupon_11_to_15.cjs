const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/04-coupon-discount-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 11. ELIGIBILITY-FOCUSED OFFER
writeComponent('coupon-discount-section-11', 'CouponDiscountSection11', `import React from 'react';
import { UserCheck, Check } from 'lucide-react';

export interface CouponDiscountSection11Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection11: React.FC<CouponDiscountSection11Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "11. Eligibility-Focused Offer Section"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 p-3 rounded-2xl">
          <UserCheck className="w-4 h-4" /> You are eligible for this discount!
        </div>
        <div className="border-t pt-3 space-y-1">
          <span className="text-2xl font-black text-indigo-600 block">₹500 OFF</span>
          <h3 className="font-bold text-sm">New Customer Gift Voucher</h3>
          <p className="text-xs text-slate-500">Criteria: First Order • Minimum Cart ₹1,999</p>
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply Code WELCOME500</button>
      </div>
    </section>
  );
};
`);

// 12. EXPIRY-FOCUSED COUPON
writeComponent('coupon-discount-section-12', 'CouponDiscountSection12', `import React from 'react';
import { Clock } from 'lucide-react';

export interface CouponDiscountSection12Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection12: React.FC<CouponDiscountSection12Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-rose-950 text-white">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "12. Expiry-Focused Urgency Coupons"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-rose-900/60 border border-rose-800 rounded-3xl p-6 shadow-2xl space-y-4 text-center">
        <div className="inline-flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full text-amber-400 font-mono text-xs font-bold border border-rose-700/50 mx-auto">
          <Clock className="w-3.5 h-3.5" /> Expires in 2 Days
        </div>
        <span className="text-4xl font-black text-amber-400 block">20% OFF</span>
        <h3 className="font-bold text-base">Festive Season Flash Voucher</h3>
        <button className="w-full py-3.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl">Claim Voucher SAVE20</button>
      </div>
    </section>
  );
};
`);

// 13. APPLIED COUPON STATE
writeComponent('coupon-discount-section-13', 'CouponDiscountSection13', `import React from 'react';
import { Check, X } from 'lucide-react';

export interface CouponDiscountSection13Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection13: React.FC<CouponDiscountSection13Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "13. Applied Coupon Active State Display"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-emerald-500 text-white rounded-3xl p-6 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-white/20 text-white text-[10px] font-bold rounded-full uppercase flex items-center gap-1"><Check className="w-3 h-3" /> APPLIED</span>
          <button className="p-1 hover:bg-white/10 rounded-full"><X className="w-4 h-4" /></button>
        </div>
        <div>
          <span className="font-mono text-xs opacity-80 block">CODE: SAVE20</span>
          <h3 className="text-3xl font-black mt-0.5">₹800 Total Savings</h3>
          <p className="text-xs opacity-90 mt-1">20% discount applied to eligible items in your shopping bag.</p>
        </div>
      </div>
    </section>
  );
};
`);

// 14. COUPON COMPARISON
writeComponent('coupon-discount-section-14', 'CouponDiscountSection14', `import React from 'react';

export interface CouponDiscountSection14Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection14: React.FC<CouponDiscountSection14Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Side-by-Side Coupon Comparison"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-3">
          <span className="text-xs font-bold text-indigo-600 uppercase">OPTION A</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">20% OFF</h3>
          <p className="text-xs text-slate-500">Saves ₹800 on your current cart total. Requires min spend ₹2,499.</p>
          <button className="w-full py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl">Use Option A</button>
        </div>
        <div className="bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-3">
          <span className="text-xs font-bold text-emerald-600 uppercase">OPTION B</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">₹500 Flat</h3>
          <p className="text-xs text-slate-500">Flat discount for new customers. Requires min spend ₹1,999.</p>
          <button className="w-full py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl">Use Option B</button>
        </div>
      </div>
    </section>
  );
};
`);

// 15. MINIMAL TYPOGRAPHIC OFFERS
writeComponent('coupon-discount-section-15', 'CouponDiscountSection15', `import React from 'react';

export interface CouponDiscountSection15Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection15: React.FC<CouponDiscountSection15Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-4xl mx-auto mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "15. Minimalist Typographic Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-4 text-xs">
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <span className="font-bold text-sm block">SAVE20 // 20% DISCOUNT</span>
            <span className="text-slate-500">Valid till Dec 31 • Min order ₹2,499</span>
          </div>
          <button className="px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold uppercase text-[10px]">Apply</button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Coupon & Discount 11-15!');
