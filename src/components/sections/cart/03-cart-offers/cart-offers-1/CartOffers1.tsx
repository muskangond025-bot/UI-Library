import React, { useState } from 'react';
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
