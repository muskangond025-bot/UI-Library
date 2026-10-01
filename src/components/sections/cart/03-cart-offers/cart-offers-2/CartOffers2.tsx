import React from 'react';
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
