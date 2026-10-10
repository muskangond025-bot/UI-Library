import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

export const GlobalPromoBanner10: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`PROMO10`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-950 text-indigo-400 border border-indigo-800/60 inline-block mb-3">
            Dedicated Global Promo #10 (DARK)
          </span>
          <h2 className="text-3xl font-black mb-2">Dedicated Promotional Suite #10</h2>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Independent promotional banner layout with instant discount redemption and global express delivery.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-xl flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Sparkles className="w-4 h-4 text-amber-400" />}
          <span>{copied ? 'COPIED!' : `CODE: PROMO10`}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner10;
