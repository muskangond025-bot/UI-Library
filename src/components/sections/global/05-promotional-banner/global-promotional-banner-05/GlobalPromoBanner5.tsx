import React, { useState } from 'react';
import { Zap, Copy, Check } from 'lucide-react';

export const GlobalPromoBanner5: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('BRUTAL50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-yellow-300 text-black font-sans">
      <div className="max-w-5xl mx-auto bg-white border-4 border-black p-8 shadow-[10px_10px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="w-fit bg-rose-500 text-white font-black text-xs uppercase px-3 py-1 border-2 border-black mb-3 shadow-[2px_2px_0px_#000]">
            ★ NEO-BRUTALIST PROMO
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">50% OFF ALL HIGH-FASHION!</h2>
          <p className="font-bold text-slate-800 text-sm max-w-md">NO BORING MINIMALISM. HARD OFFSET SHADOWS ONLY.</p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 bg-black text-yellow-300 font-black text-sm uppercase border-4 border-black shadow-[4px_4px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Zap className="w-4 h-4 fill-yellow-300" />}
          <span>{copied ? 'COPIED!' : 'CODE: BRUTAL50'}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner5;
