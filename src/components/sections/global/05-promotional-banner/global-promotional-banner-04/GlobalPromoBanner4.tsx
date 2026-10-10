import React, { useState } from 'react';
import { Box, Copy, Check, ArrowRight } from 'lucide-react';

export const GlobalPromoBanner4: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('SPATIAL3D');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/50 backdrop-blur-2xl border border-purple-500/30 p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-900/60 text-purple-300 border border-purple-700/50 inline-block mb-3">
            Spatial 3D Promo Suite
          </span>
          <h2 className="text-3xl font-black bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent mb-2">
            Apple Vision VR Early Access
          </h2>
          <p className="text-slate-400 text-sm max-w-md">Unlock photorealistic 3D spatial models with early access pass code.</p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-900/50 flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Box className="w-4 h-4 text-pink-300" />}
          <span>{copied ? 'CLAIMED!' : 'CLAIM CODE: SPATIAL3D'}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner4;
