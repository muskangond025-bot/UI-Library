const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/04-coupon-discount-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 06. COUPON STACK
writeComponent('coupon-discount-section-6', 'CouponDiscountSection6', `import React from 'react';
import { Layers } from 'lucide-react';

export interface CouponDiscountSection6Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection6: React.FC<CouponDiscountSection6Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "06. Layered Coupon Sheet Stack"}</h2>
      </div>
      <div className="max-w-md mx-auto relative p-4">
        <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-950 rounded-3xl transform rotate-2 scale-[0.98]"></div>
        <div className="relative bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex justify-between items-center text-xs font-bold text-indigo-600">
            <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> Stacked Offer #1</span>
            <span>20% OFF</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Festive Season Voucher</h3>
          <p className="text-xs text-slate-500">Min spend ₹2,499 • Valid till Dec 31</p>
          <button className="w-full py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply Code SAVE20</button>
        </div>
      </div>
    </section>
  );
};
`);

// 07. EXPANDABLE COUPON
writeComponent('coupon-discount-section-7', 'CouponDiscountSection7', `import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';

export interface CouponDiscountSection7Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection7: React.FC<CouponDiscountSection7Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Expandable Coupon Terms Accordion"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="font-bold text-sm">Festive 20% OFF</h3>
              <span className="text-xs text-slate-500 font-mono">SAVE20</span>
            </div>
          </div>
          <button onClick={() => setOpen(!open)} className="p-2 border rounded-xl text-xs font-bold flex items-center gap-1">
            {open ? "Less" : "Terms"} {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        {open && (
          <div className="pt-4 border-t text-xs text-slate-600 dark:text-slate-400 space-y-2 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl">
            <p>• Minimum cart value: ₹2,499</p>
            <p>• Applicable on apparel & accessories catalog.</p>
          </div>
        )}
        <button className="w-full py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply Coupon</button>
      </div>
    </section>
  );
};
`);

// 08. OFFER FILTER + RESULTS
writeComponent('coupon-discount-section-8', 'CouponDiscountSection8', `import React, { useState } from 'react';

export interface CouponDiscountSection8Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection8: React.FC<CouponDiscountSection8Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "08. Offer Discovery Filter Grid"}</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-bold">
          {['all', 'fashion', 'new user', 'high savings'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-4 py-2 rounded-full uppercase tracking-wider bg-indigo-600 text-white">
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 border p-6 rounded-3xl shadow-sm flex justify-between items-center">
            <div>
              <span className="text-lg font-black text-indigo-600">20% OFF</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-1">Festive Discount</h3>
              <span className="text-xs text-slate-500 block">Min spend ₹2,499</span>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl">Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 09. COUPON CAROUSEL
writeComponent('coupon-discount-section-9', 'CouponDiscountSection9', `import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CouponDiscountSection9Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection9: React.FC<CouponDiscountSection9Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Horizontal Coupon Carousel"}</h2>
      </div>
      <div className="max-w-5xl mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        <div className="min-w-[280px] bg-slate-950 border border-slate-800 rounded-3xl p-6 flex-shrink-0 space-y-4">
          <span className="text-2xl font-black text-amber-400">20% OFF</span>
          <h3 className="font-bold text-sm text-white">Festive Season Voucher</h3>
          <p className="text-xs text-slate-400">Valid on orders above ₹2,499</p>
          <button className="w-full py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1">Apply <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
      </div>
    </section>
  );
};
`);

// 10. SAVINGS CALCULATOR STYLE
writeComponent('coupon-discount-section-10', 'CouponDiscountSection10', `import React from 'react';
import { Calculator } from 'lucide-react';

export interface CouponDiscountSection10Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection10: React.FC<CouponDiscountSection10Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "10. Potential Savings Calculator Display"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <Calculator className="w-6 h-6" />
        </div>
        <span className="text-xs text-slate-500 uppercase tracking-widest block font-bold">MAXIMUM POTENTIAL SAVINGS</span>
        <span className="text-4xl font-black text-emerald-600 block">Save up to ₹2,000</span>
        <button className="w-full py-3.5 bg-emerald-600 text-white font-bold text-xs rounded-2xl shadow-lg">Apply Best Voucher (SAVE20)</button>
      </div>
    </section>
  );
};
`);

console.log('Successfully fixed & written Coupon & Discount 6-10!');
