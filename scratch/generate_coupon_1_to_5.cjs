const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/04-coupon-discount-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 01. DIGITAL COUPON WALLET
writeComponent('coupon-discount-section-1', 'CouponDiscountSection1', `import React, { useState } from 'react';
import { Wallet, Copy, Check } from 'lucide-react';

export interface CouponDiscountSection1Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection1: React.FC<CouponDiscountSection1Props> = ({ data }) => {
  const coupons = data?.coupons || [
    { code: "SAVE20", discount: "20% OFF", title: "Festive Season Discount", minOrder: "₹2,499", expiry: "Valid till Dec 31" },
    { code: "WELCOME500", discount: "₹500 OFF", title: "New Customer Gift", minOrder: "₹1,999", expiry: "Valid for 7 days" }
  ];
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{data?.heading || "01. Premium Digital Coupon Wallet"}</h2>
          <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
          <Wallet className="w-4 h-4" /> Coupon Wallet
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((c, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 block">{c.discount}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{c.title}</h3>
              <p className="text-xs text-slate-500 mt-1">Min Order: {c.minOrder} • {c.expiry}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-mono text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-dashed">{c.code}</span>
              <button onClick={() => { setCopied(c.code); setTimeout(() => setCopied(null), 2000); }} className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                {copied === c.code ? <><Check className="w-3.5 h-3.5 text-emerald-500" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
`);

// 02. EDITORIAL OFFER LIST
writeComponent('coupon-discount-section-2', 'CouponDiscountSection2', `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CouponDiscountSection2Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection2: React.FC<CouponDiscountSection2Props> = ({ data }) => {
  const coupons = data?.coupons || [
    { code: "SAVE20", discount: "20% OFF", title: "Festive Season Discount", minOrder: "₹2,499", expiry: "Valid till Dec 31" }
  ];

  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-950 font-serif">
      <div className="max-w-4xl mx-auto mb-6 border-b border-stone-200 pb-3">
        <h2 className="text-2xl italic">{data?.heading || "02. Editorial Offer List"}</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {coupons.map((c, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-5xl font-light text-stone-900 dark:text-white">{c.discount}</span>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mt-2">{c.title}</h3>
              <p className="text-xs font-sans text-stone-500 mt-1">Minimum Order: {c.minOrder} • {c.expiry}</p>
            </div>
            <div className="font-sans flex items-center gap-4">
              <span className="font-mono text-xs font-bold bg-stone-100 dark:bg-stone-800 px-4 py-2 rounded-xl">{c.code}</span>
              <button className="px-6 py-3 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-1">
                Apply <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
`);

// 03. TICKET-STYLE COUPONS
writeComponent('coupon-discount-section-3', 'CouponDiscountSection3', `import React from 'react';
import { Ticket } from 'lucide-react';

export interface CouponDiscountSection3Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection3: React.FC<CouponDiscountSection3Props> = ({ data }) => {
  const coupons = data?.coupons || [
    { code: "SAVE20", discount: "20% OFF", title: "Festive Season Discount", minOrder: "₹2,499", expiry: "Valid till Dec 31" }
  ];

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "03. Premium Ticket-Style Coupons"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((c, idx) => (
          <div key={idx} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex justify-between items-center shadow-xl">
            {/* Ticket Notches */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900"></div>

            <div className="pl-4">
              <span className="text-3xl font-black text-amber-400 block">{c.discount}</span>
              <h3 className="font-bold text-sm text-white mt-1">{c.title}</h3>
              <span className="text-[11px] text-slate-400 block mt-0.5">{c.expiry}</span>
            </div>
            <div className="pr-4 text-right border-l border-dashed border-slate-800 pl-6">
              <span className="font-mono text-xs font-bold text-amber-400 block mb-2">{c.code}</span>
              <button className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl">Claim Ticket</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
`);

// 04. HORIZONTAL OFFER STRIP
writeComponent('coupon-discount-section-4', 'CouponDiscountSection4', `import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';

export interface CouponDiscountSection4Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection4: React.FC<CouponDiscountSection4Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Horizontal Offer Strip"}</h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-3">
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 font-extrabold text-sm rounded-lg">20% OFF</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Festive Season Special Voucher</h3>
              <p className="text-slate-500">Min spend ₹2,499 • Valid on selected catalog items</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">SAVE20</span>
            <button className="px-5 py-2 bg-indigo-600 text-white font-bold rounded-xl flex items-center gap-1">Apply Offer <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 05. DISCOUNT-FIRST GRID
writeComponent('coupon-discount-section-5', 'CouponDiscountSection5', `import React from 'react';

export interface CouponDiscountSection5Props { data?: { heading?: string; description?: string; coupons?: any[]; }; }

export const CouponDiscountSection5: React.FC<CouponDiscountSection5Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "05. Discount-First Visual Grid"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-900/60 border border-indigo-800 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <span className="text-6xl font-black text-amber-400 block">20%</span>
          <h3 className="text-lg font-bold">Festive Season Discount</h3>
          <p className="text-xs text-indigo-200">Applicable on orders above ₹2,499</p>
          <button className="w-full py-3 bg-amber-400 text-indigo-950 font-bold text-xs rounded-xl uppercase tracking-wider">Redeem Code: SAVE20</button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Coupon & Discount 1-5!');
