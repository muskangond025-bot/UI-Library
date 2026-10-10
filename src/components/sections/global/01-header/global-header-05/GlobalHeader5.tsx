import React from 'react';
import { Zap, Tag, ShoppingBag, ArrowRight } from 'lucide-react';

export const GlobalHeader5: React.FC = () => {
  return (
    <header className="w-full bg-yellow-300 border-b-4 border-black font-sans">
      <div className="w-full bg-black text-yellow-300 py-2 font-mono font-black text-xs uppercase tracking-widest overflow-hidden border-b-2 border-black">
        <div className="whitespace-nowrap animate-marquee flex gap-12">
          <span>★ 50% OFF SUMMER COLLECTION ★ CODE: BRUTAL50 ★ EXPRESS WORLDWIDE SHIPPING ★</span>
          <span>★ 50% OFF SUMMER COLLECTION ★ CODE: BRUTAL50 ★ EXPRESS WORLDWIDE SHIPPING ★</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-rose-500 border-4 border-black font-black text-white text-2xl flex items-center justify-center shadow-[4px_4px_0px_#000]">
            B!
          </div>
          <span className="font-black text-3xl uppercase tracking-tighter text-black">
            BRUTAL<span className="text-rose-600">.MODE</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-black text-sm uppercase tracking-wider text-black">
          <a href="#new" className="hover:underline">NEW DROPS</a>
          <a href="#apparel" className="hover:underline">APPAREL</a>
          <a href="#footwear" className="hover:underline">FOOTWEAR</a>
          <a href="#sale" className="text-rose-600 bg-black text-yellow-300 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
            SALE 50%
          </a>
        </nav>

        <button className="px-6 py-3 bg-black text-yellow-300 font-black text-sm uppercase border-4 border-black shadow-[4px_4px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
          <Zap className="w-5 h-5 fill-yellow-300" />
          <span>CHECKOUT (05)</span>
        </button>
      </div>
    </header>
  );
};
export default GlobalHeader5;
