import React from 'react';
import { Package, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory19: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-amber-50 text-slate-900">
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="inline-block p-10 rounded-3xl bg-white border-4 border-slate-900 shadow-[10px_10px_0px_#000] relative">
          <div className="absolute -top-4 -left-4 px-4 py-1 rounded-full bg-orange-300 border-2 border-slate-900 text-xs font-black uppercase tracking-wider rotate-[-6deg]">
            ★ FIRST ORDER OFFER!
          </div>
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-amber-400 border-4 border-slate-900 flex items-center justify-center rotate-[-3deg]">
            <Package className="w-12 h-12 text-slate-900 animate-bounce" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            No Orders Stamp Book!
          </h2>
          <p className="text-slate-700 font-medium max-w-md mx-auto mb-8 text-base">
            Every order earns digital postage stamps and cashback rewards. Make your first purchase now!
          </p>
          <button className="px-8 py-4 rounded-2xl bg-slate-900 text-amber-300 font-black text-base hover:bg-orange-600 hover:text-white transition-colors border-2 border-slate-900 shadow-[4px_4px_0px_#000] inline-flex items-center gap-2">
            <span>GET FIRST ORDER STAMP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory19;
