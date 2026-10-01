import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface CartOffers19Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers19: React.FC<CartOffers19Props> = ({ data }) => {
  return (
    <section className="py-12 px-4 bg-stone-100 dark:bg-stone-900 font-serif">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Asymmetric Editorial Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 bg-white dark:bg-stone-950 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">CURATED DISCOUNTS</span>
          <h3 className="text-3xl font-serif text-stone-900 dark:text-white">Complimentary Tailored Gift Packaging</h3>
          <p className="text-xs font-sans text-stone-500">Included on all orders over ₹4,000 this season.</p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-center">
          <button className="w-full py-6 bg-stone-900 text-white dark:bg-white dark:text-stone-950 font-sans font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2">
            Claim Offer <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
