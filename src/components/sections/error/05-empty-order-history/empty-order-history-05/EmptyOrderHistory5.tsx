import React from 'react';
import { Package, ArrowRight, Zap } from 'lucide-react';

export const EmptyOrderHistory5: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-orange-400 text-slate-900 font-sans">
      <div className="w-full bg-black text-orange-300 py-3 font-mono font-black text-sm uppercase tracking-wider overflow-hidden mb-12 border-y-4 border-black">
        <div className="whitespace-nowrap animate-marquee flex gap-8">
          <span>★ NO PREVIOUS ORDERS FOUND ★ START SHOPPING TODAY ★ EXPRESS DOORSTEP DELIVERY ★</span>
          <span>★ NO PREVIOUS ORDERS FOUND ★ START SHOPPING TODAY ★ EXPRESS DOORSTEP DELIVERY ★</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_#000] rounded-none mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-amber-400 border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_#000] rotate-3 hover:rotate-0 transition-transform">
            <Package className="w-12 h-12 text-black" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black mb-4">
            ZERO ORDERS LOGGED!
          </h2>
          <p className="text-base md:text-lg font-bold text-slate-800 max-w-md mx-auto mb-8 border-b-4 border-black pb-6">
            YOUR ORDER ARCHIVE IS COMPLETELY BLANK. START SHOPPING TO GET FAST SHIPMENTS TODAY!
          </p>

          <a href="#shop" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-orange-400 font-black text-lg uppercase tracking-wider border-4 border-black shadow-[6px_6px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <Zap className="w-6 h-6 fill-orange-400" />
            <span>MAKE YOUR FIRST PURCHASE</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory5;
