import React from 'react';
import { Package, Tag, ArrowUpRight } from 'lucide-react';

export const EmptyOrderHistory13: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-sky-100 text-slate-900">
      <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl text-center">
        <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-white/60 border border-white/80 shadow-xl flex items-center justify-center backdrop-blur-md">
          <Package className="w-16 h-16 text-blue-600 animate-bounce" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/80 text-indigo-700 inline-block mb-4 shadow-sm">
          Frosted Shipping Prism
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Prismatic Order History Empty</h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-base">Refract your purchasing history. Complete your first purchase to store invoices in frosted glass tags.</p>
        <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-xl inline-flex items-center gap-2">
          <Tag className="w-5 h-5 text-cyan-300" />
          <span>Shop Catalog Deals</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory13;
