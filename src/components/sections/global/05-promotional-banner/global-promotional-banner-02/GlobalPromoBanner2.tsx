import React, { useState } from 'react';
import { Terminal, Radio, ShieldAlert, Cpu, ArrowRight, Copy, Check } from 'lucide-react';

export const GlobalPromoBanner2: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('MATRIX40');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 bg-slate-950 text-cyan-400 font-mono relative overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-2xl bg-slate-900/80 border border-cyan-500/40 p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-950 border border-cyan-400/50 text-cyan-300 text-xs mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>DISCOUNT_MATRIX_SIGNAL: ACTIVE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-3">
            40% CYBERNETIC PROMO
          </h2>
          <p className="text-slate-400 text-sm font-sans max-w-md leading-relaxed mb-4">
            Execute promo protocol for quantum neural processors. Instant allocation applied at checkout.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleCopy}
            className="px-6 py-4 bg-slate-950 border border-cyan-400 text-cyan-300 font-mono font-bold text-xs hover:bg-cyan-500 hover:text-black transition-colors flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
            <span>{copied ? 'EXECUTED!' : 'CODE: MATRIX40'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default GlobalPromoBanner2;
