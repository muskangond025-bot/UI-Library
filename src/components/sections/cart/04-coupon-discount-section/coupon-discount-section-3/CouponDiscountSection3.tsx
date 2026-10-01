import React from 'react';
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
