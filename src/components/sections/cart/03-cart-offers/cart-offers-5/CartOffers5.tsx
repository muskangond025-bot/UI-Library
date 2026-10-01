import React from 'react';
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
