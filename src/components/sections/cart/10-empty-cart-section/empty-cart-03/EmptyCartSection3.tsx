import React from 'react';
import { ShoppingBag, ArrowUpRight, AlertTriangle, RefreshCw } from 'lucide-react';

export const EmptyCartSection3: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-yellow-50 text-slate-900 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 md:p-14 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
        <span className="inline-block bg-black text-yellow-300 font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
          NEO-BRUTALIST EMPTY CART
        </span>

        <div className="w-28 h-28 mx-auto bg-yellow-300 border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <ShoppingBag className="w-14 h-14 text-black" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
          EMPTY CART! NO ITEMS YET
        </h2>
        <p className="text-lg font-bold max-w-md mx-auto mb-10 text-slate-800">
          Do not leave your cart hanging. Add items now and enjoy free express delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-yellow-300 text-black font-black uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>START SHOPPING NOW</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
