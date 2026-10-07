import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, Copy, Check, ShieldCheck, ArrowRight } from 'lucide-react';

export function OffersClearance12() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'SWISSCLEAR85';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#f8fafc] text-slate-900 rounded-3xl border border-slate-300 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-left space-y-3 mb-10 relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
          <Grid className="w-3.5 h-3.5" />
          <span>SWISS BAUHAUS MINIMALIST GRID</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter uppercase font-mono">
          085 / CLEARANCE GRID
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium font-sans">
          Strict grid alignment, precise typographic hierarchy & 85% single-accent markdown clearance.
        </p>
      </div>

      {/* Main Swiss Grid Container */}
      <div className="w-full max-w-3xl relative z-10">
        <div className="bg-white rounded-none border-2 border-slate-900 p-8 sm:p-10 space-y-8 shadow-xl text-left">
          {/* Top Grid Spec */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b-2 border-slate-900 pb-6 text-xs font-mono font-bold">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">PROJECT</span>
              <span>LIQUIDATION 2026</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">INDEX</span>
              <span>REF-85-CLEAR</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">DISCOUNT</span>
              <span className="text-red-600">85% MARKDOWN</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">STATUS</span>
              <span>ACTIVE OUTLET</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase font-mono">
              Architectural Clearance Pass
            </h3>
            <p className="text-slate-700 text-sm sm:text-base font-sans leading-relaxed">
              Designed with strict architectural grid principles. All items marked down to liquidation baseline.
            </p>
          </div>

          {/* Code Display */}
          <div className="p-6 bg-slate-100 border-2 border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
            <div>
              <span className="text-[10px] text-slate-500 block uppercase font-bold">
                SWISS GRID PROMO CODE
              </span>
              <span className="text-3xl font-black text-slate-900 tracking-widest">
                {couponCode}
              </span>
            </div>
            <button
              onClick={copyCode}
              className="w-full md:w-auto px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'GRID CODE COPIED!' : `COPY CODE`}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance12;
