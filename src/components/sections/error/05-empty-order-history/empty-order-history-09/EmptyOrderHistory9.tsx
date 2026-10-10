import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory9: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-[#faf8f5] text-stone-800 font-serif">
      <div className="max-w-2xl mx-auto text-center border-t border-b border-stone-300 py-16">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-stone-400 rounded-full">
          <FileText className="w-8 h-8 text-stone-700 stroke-[1.25]" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-stone-500 mb-4 block">
          Editorial Order Ledger
        </span>

        <h2 className="text-3xl md:text-5xl font-light text-stone-900 mb-4 italic">
          An Unopened Envelope
        </h2>
        <p className="font-sans text-stone-600 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Your purchase registry contains no previous receipts. All future invoice documents and delivery confirmations will be safely stored here.
        </p>

        <a href="#shop" className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-bold text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
          <span>Place First Purchase</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
export default EmptyOrderHistory9;
