import React, { useState } from 'react';
import { Gift, Copy, Check, ArrowRight } from 'lucide-react';

export const GlobalPromoBanner7: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('PASTEL25');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-amber-50 text-slate-800">
      <div className="max-w-5xl mx-auto p-10 rounded-[35px] bg-white border-4 border-amber-100 shadow-[10px_10px_20px_rgba(251,191,36,0.15)] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="px-4 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-800 inline-block mb-3">
            Claymorphism Pastel Gift
          </span>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Free Handcrafted Gift Box</h2>
          <p className="text-slate-600 text-sm max-w-md">Includes organic ceramic coaster & dried floral bouquet on orders over $100.</p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-3xl bg-amber-400 text-slate-900 font-extrabold text-xs hover:bg-amber-500 shadow-md flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4" /> : <Gift className="w-4 h-4" />}
          <span>{copied ? 'CLAIMED!' : 'GIFT CODE: PASTEL25'}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner7;
