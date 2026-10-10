import React, { useState } from 'react';
import { Sparkles, ArrowRight, Tag, Clock, Copy, Check } from 'lucide-react';

export const GlobalPromoBanner1: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ISLAND50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-rose-100 via-purple-100 to-pink-100 relative text-slate-800">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-rose-100 text-rose-700 mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin [animation-duration:8s]" />
            <span>Global Promo Edition #1</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Exclusive 50% Off Flash Drop
          </h2>
          <p className="text-slate-600 text-base max-w-md mb-6 leading-relaxed">
            Unlock instant savings across all luxury outerwear. Limited to the first 500 orders globally.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-rose-50 text-rose-700 px-4 py-2 rounded-xl border border-rose-200 flex items-center gap-2 font-bold">
              <Clock className="w-4 h-4 text-rose-500 animate-pulse" />
              <span>Ends in: 04h : 18m : 33s</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleCopy}
            className="px-6 py-4 rounded-2xl bg-white border border-slate-200 font-bold text-xs text-slate-800 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-rose-500" />}
            <span>{copied ? 'COPIED!' : 'CODE: ISLAND50'}</span>
          </button>

          <button className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-rose-600 transition-all shadow-xl flex items-center gap-2">
            <span>Claim Discount</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default GlobalPromoBanner1;
