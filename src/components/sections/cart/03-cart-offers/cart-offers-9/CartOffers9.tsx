import React from 'react';
import { Clock, Zap } from 'lucide-react';

export interface CartOffers9Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers9: React.FC<CartOffers9Props> = ({ data }) => {
  return (
    <section className="py-10 px-4 bg-rose-950 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Limited-Time Flash Cart Offers"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-rose-900/60 border border-rose-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <Zap className="w-10 h-10 text-amber-400" />
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">FLASH OFFER</span>
            <h3 className="text-xl font-bold">Extra 10% Off Instant Discount</h3>
            <p className="text-xs text-rose-200 mt-0.5">Use code FLASH10 before timer expires.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-2xl border border-rose-700/50 text-amber-400 font-mono text-sm font-bold">
          <Clock className="w-4 h-4" /> 14m 32s Remaining
        </div>
      </div>
    </section>
  );
};
