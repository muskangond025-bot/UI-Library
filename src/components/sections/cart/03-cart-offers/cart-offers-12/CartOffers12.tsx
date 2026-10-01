import React from 'react';
import { Tag } from 'lucide-react';

export interface CartOffers12Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers12: React.FC<CartOffers12Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-4xl mx-auto mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "12. Minimal Typography List Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto divide-y divide-slate-200 dark:divide-slate-800 text-xs">
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400">PROMO // 01</span>
            <h3 className="font-bold text-slate-900 dark:text-white uppercase mt-0.5">Flat 20% OFF</h3>
            <p className="text-slate-500">Valid on orders above ₹2,999</p>
          </div>
          <span className="font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded font-bold">FESTIVE20</span>
        </div>
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="text-[10px] text-slate-400">PROMO // 02</span>
            <h3 className="font-bold text-slate-900 dark:text-white uppercase mt-0.5">Complimentary Shipping</h3>
            <p className="text-slate-500">Auto-applied at checkout</p>
          </div>
          <span className="font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded font-bold">FREESHIP</span>
        </div>
      </div>
    </section>
  );
};
