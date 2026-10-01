const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/03-cart-offers';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 01. BANNER GRID CART OFFERS
writeComponent('cart-offers-1', 'CartOffers1', `import React, { useState } from 'react';
import { Tag, Copy, Check } from 'lucide-react';

export interface CartOffers1Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers1: React.FC<CartOffers1Props> = ({ data }) => {
  const offers = data?.offers || [
    { code: "FESTIVE20", title: "Flat 20% OFF", subtitle: "On orders above ₹2,999", discount: "20% OFF", badge: "POPULAR" },
    { code: "FREESHIP", title: "Free Express Shipping", subtitle: "Valid on all prepaid orders", discount: "FREE SHIP", badge: "AUTO-APPLIED" },
    { code: "BANK10", title: "10% Instant Bank Cashback", subtitle: "With HDFC & ICICI Cards", discount: "10% OFF", badge: "BANK OFFER" }
  ];
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "01. Banner Grid Cart Offers"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold rounded-full uppercase">{offer.badge}</span>
                <Tag className="w-4 h-4 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{offer.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{offer.subtitle}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">{offer.code}</span>
              <button onClick={() => handleCopy(offer.code)} className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                {copied === offer.code ? <><Check className="w-3.5 h-3.5 text-emerald-500" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
`);

// 02. CAROUSEL SLIDER CART OFFERS
writeComponent('cart-offers-2', 'CartOffers2', `import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export interface CartOffers2Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers2: React.FC<CartOffers2Props> = ({ data }) => {
  const offers = data?.offers || [
    { code: "FESTIVE20", title: "Flat 20% OFF", subtitle: "On orders above ₹2,999", discount: "20% OFF", badge: "POPULAR" },
    { code: "FREESHIP", title: "Free Express Shipping", subtitle: "Valid on all prepaid orders", discount: "FREE SHIP", badge: "AUTO-APPLIED" },
    { code: "BANK10", title: "10% Instant Bank Cashback", subtitle: "With HDFC & ICICI Cards", discount: "10% OFF", badge: "BANK OFFER" }
  ];

  return (
    <section className="py-10 px-4 bg-indigo-950 text-white">
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{data?.heading || "02. Carousel Slider Cart Offers"}</h2>
          <p className="text-xs text-indigo-300 mt-1">{data?.description}</p>
        </div>
        <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Sparkles className="w-4 h-4" /> 3 Active Deals</span>
      </div>
      <div className="max-w-5xl mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {offers.map((offer, idx) => (
          <div key={idx} className="min-w-[280px] sm:min-w-[320px] bg-indigo-900/60 border border-indigo-800 rounded-3xl p-6 flex flex-col justify-between flex-shrink-0">
            <div>
              <span className="px-3 py-1 bg-amber-400 text-indigo-950 text-[10px] font-black rounded-full uppercase">{offer.discount}</span>
              <h3 className="text-xl font-bold mt-4">{offer.title}</h3>
              <p className="text-xs text-indigo-200 mt-1">{offer.subtitle}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-indigo-800/80 flex justify-between items-center text-xs">
              <span className="font-mono bg-indigo-950 px-3 py-1 rounded-lg border border-indigo-700">{offer.code}</span>
              <button className="text-amber-400 font-bold hover:underline flex items-center gap-1">Apply <ArrowRight className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
`);

// 03. ACCORDION EXPANDABLE OFFERS
writeComponent('cart-offers-3', 'CartOffers3', `import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';

export interface CartOffers3Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers3: React.FC<CartOffers3Props> = ({ data }) => {
  const offers = data?.offers || [
    { code: "FESTIVE20", title: "Flat 20% OFF", subtitle: "On orders above ₹2,999", discount: "20% OFF", badge: "POPULAR" },
    { code: "FREESHIP", title: "Free Express Shipping", subtitle: "Valid on all prepaid orders", discount: "FREE SHIP", badge: "AUTO-APPLIED" }
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-2xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "03. Accordion Expandable Offers"}</h2>
      </div>
      <div className="max-w-2xl mx-auto space-y-3">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-sm">
            <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full p-5 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <Tag className="w-4 h-4 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{offer.title}</h3>
                  <span className="text-xs text-slate-500">{offer.subtitle}</span>
                </div>
              </div>
              {openIdx === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-5 pt-2 border-t text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 flex justify-between items-center">
                <span>Use promo code <strong className="font-mono text-slate-900 dark:text-white">{offer.code}</strong> at checkout.</span>
                <button className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl">Apply Offer</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
`);

// 04. COUPON CODE INPUT & APPLIED LIST
writeComponent('cart-offers-4', 'CartOffers4', `import React, { useState } from 'react';
import { Tag, Check } from 'lucide-react';

export interface CartOffers4Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers4: React.FC<CartOffers4Props> = ({ data }) => {
  const [inputCode, setInputCode] = useState('');
  const [applied, setApplied] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Coupon Code Input & Applied List"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 border rounded-3xl p-6 shadow-md space-y-4">
        <label className="text-xs font-bold text-slate-500 uppercase block">Have a Promo Code?</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value.toUpperCase())}
            placeholder="Enter coupon code"
            className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs font-mono font-bold uppercase focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button onClick={() => setApplied(true)} className="px-5 py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700">Apply</button>
        </div>
        {applied && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Coupon "{inputCode || 'SAVE20'}" Applied!</span>
            <button onClick={() => setApplied(false)} className="text-[10px] underline">Remove</button>
          </div>
        )}
      </div>
    </section>
  );
};
`);

// 05. BANK & PAYMENT PARTNER OFFERS
writeComponent('cart-offers-5', 'CartOffers5', `import React from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';

export interface CartOffers5Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers5: React.FC<CartOffers5Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "05. Bank & Payment Partner Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">HDFC BANK OFFER</span>
            <h3 className="text-lg font-bold mt-1">10% Instant Cashback</h3>
            <p className="text-xs text-blue-200 mt-0.5">Min spend ₹5,000 on HDFC Cards</p>
          </div>
          <CreditCard className="w-10 h-10 text-blue-300" />
        </div>
        <div className="bg-gradient-to-r from-amber-800 to-orange-900 text-white p-6 rounded-3xl shadow-lg flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">ICICI BANK OFFER</span>
            <h3 className="text-lg font-bold mt-1">No Cost EMI Available</h3>
            <p className="text-xs text-amber-200 mt-0.5">Up to 6 months zero interest EMI</p>
          </div>
          <ShieldCheck className="w-10 h-10 text-amber-300" />
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully written Cart Offers 1-5!');
