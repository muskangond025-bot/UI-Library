import React from 'react';
import { ShoppingBag, Search, Sparkles } from 'lucide-react';

export const GlobalHeader11: React.FC = () => {
  return (
    <div className="w-full py-4 px-6 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between">
          <span className="font-extrabold text-xl">BENTO<span className="text-rose-500">.UI</span></span>
        </div>
        <div className="md:col-span-2 p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-around font-bold text-sm text-slate-700">
          <a href="#deals" className="hover:text-rose-600">Daily Deals</a>
          <a href="#top" className="hover:text-rose-600">Best Sellers</a>
          <a href="#new" className="text-rose-600 flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-amber-500" /> New Arrivals</a>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-md flex items-center justify-between">
          <span className="text-xs font-bold">Cart: 4 Items</span>
          <button className="px-4 py-1.5 rounded-xl bg-rose-600 text-xs font-bold hover:bg-rose-500">Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default GlobalHeader11;
