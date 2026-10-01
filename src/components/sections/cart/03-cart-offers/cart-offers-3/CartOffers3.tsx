import React, { useState } from 'react';
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
