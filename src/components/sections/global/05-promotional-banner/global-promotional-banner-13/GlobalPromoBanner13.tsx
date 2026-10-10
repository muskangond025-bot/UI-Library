import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

export const GlobalPromoBanner13: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`PROMO13`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-100 text-indigo-700 inline-block mb-3">
            Dedicated Global Promo #13 (BRIGHT)
          </span>
          <h2 className="text-3xl font-black mb-2">Dedicated Promotional Suite #13</h2>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Independent promotional banner layout with instant discount redemption and global express delivery.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-xl flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Sparkles className="w-4 h-4 text-amber-400" />}
          <span>{copied ? 'COPIED!' : `CODE: PROMO13`}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner13;
