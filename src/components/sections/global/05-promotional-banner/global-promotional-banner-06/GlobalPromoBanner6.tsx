import React, { useState } from 'react';
import { Snowflake, ArrowUpRight, Copy, Check } from 'lucide-react';

export const GlobalPromoBanner6: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('FREEZE40');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-slate-950 text-cyan-200 relative overflow-hidden font-mono">
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-cyan-400/50 p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Snowflake className="w-5 h-5 text-cyan-400 animate-spin [animation-duration:10s]" />
            <span className="text-xs text-cyan-400 font-bold uppercase">CRYOGENIC_VAULT_PROMO</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-2">40% CRYOGENIC UNFREEZE</h2>
          <p className="text-slate-400 text-xs font-sans max-w-md">Polar arctic insulation suite. Apply code to unfreeze discount.</p>
        </div>

        <button
          onClick={handleCopy}
          className="px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'UNFROZEN!' : 'CODE: FREEZE40'}</span>
        </button>
      </div>
    </section>
  );
};
export default GlobalPromoBanner6;
