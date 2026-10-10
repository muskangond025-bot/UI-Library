import React from 'react';
import { Package, Search, Sparkles, ArrowRight, ShoppingBag, FileText } from 'lucide-react';

export const EmptyOrderHistory1: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-orange-50/60 via-white to-amber-50/40 text-slate-800 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-200/30 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="relative mx-auto w-40 h-40 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-amber-200 bg-white/50 backdrop-blur-md shadow-xl animate-spin [animation-duration:18s]" />
          <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-2xl shadow-amber-200 transform hover:scale-105 transition-transform">
            <Package className="w-16 h-16 stroke-[1.5] animate-bounce [animation-duration:2.5s]" />
            <FileText className="absolute top-2 right-2 w-6 h-6 text-amber-200 animate-pulse" />
          </div>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-100 text-amber-800 mb-4 border border-amber-200 shadow-sm">
          Design #1 • Order Receipt Scanner
        </span>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          No Past Orders Found
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          You haven't placed any orders yet. Once you make a purchase, all your invoices, tracking numbers, and delivery receipts will appear here.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#shop" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-amber-600 transition-all shadow-xl hover:-translate-y-0.5">
            <ShoppingBag className="w-5 h-5" />
            <span>Place Your First Order</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory1;
