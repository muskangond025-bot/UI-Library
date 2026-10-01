import React from 'react';
import { PlusCircle, ArrowRight } from 'lucide-react';

export interface CartOffers7Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers7: React.FC<CartOffers7Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Bundle & Buy More Save More"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase">BUNDLE SAVER</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Buy 2 Items, Get 15% OFF</h3>
            <p className="text-xs text-slate-500">Add 1 more item from our featured collection to automatically save ₹500.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center gap-1 hover:bg-indigo-700">
          Browse Bundle Items <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
