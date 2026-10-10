import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';

export const GlobalPromoBanner3: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('VELVET30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-[#f0e6e4] text-slate-800">
      <div className="max-w-5xl mx-auto p-10 rounded-[35px] bg-[#f0e6e4] shadow-[16px_16px_32px_#ccbebc,-16px_-16px_32px_#ffffff] border border-white/40 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
            Neumorphic Soft Promo
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">30% Velvet Suite Discount</h2>
          <p className="text-slate-600 text-sm max-w-md">Experience soft tactile luxury with exclusive seasonal promotional pricing.</p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-2xl bg-rose-500 text-white font-bold text-sm shadow-[6px_6px_12px_#ccbebc,-6px_-6px_12px_#ffffff] hover:bg-rose-600 transition-all flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'COPIED!' : 'CODE: VELVET30'}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner3;
