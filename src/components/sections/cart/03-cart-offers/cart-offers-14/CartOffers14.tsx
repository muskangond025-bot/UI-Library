import React from 'react';
import { CreditCard, Wallet, Smartphone } from 'lucide-react';

export interface CartOffers14Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers14: React.FC<CartOffers14Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Multi-Tiered Cashback Cards"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm space-y-2">
          <CreditCard className="w-6 h-6 text-indigo-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Credit Card Offer</h3>
          <p className="text-slate-500">10% Instant discount up to ₹1,500 on all major bank cards.</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm space-y-2">
          <Wallet className="w-6 h-6 text-emerald-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">Wallet Offer</h3>
          <p className="text-slate-500">Flat ₹200 Cashback via Paytm or PhonePe wallet payment.</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-sm space-y-2">
          <Smartphone className="w-6 h-6 text-amber-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">UPI Discount</h3>
          <p className="text-slate-500">Extra 5% instant discount when paying via Google Pay UPI.</p>
        </div>
      </div>
    </section>
  );
};
