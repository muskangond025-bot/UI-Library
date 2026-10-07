import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, AlertOctagon, Copy, Check, ShieldAlert, ArrowRight, Zap } from 'lucide-react';

export function OffersClearance1() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'NEOBLOWOUT90';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#fbbf24] text-slate-950 rounded-3xl border-4 border-slate-950 shadow-[10px_10px_0px_#000] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Neo-Brutalism Diagonal Hazard Stripes */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_12.5%,transparent_12.5%,transparent_50%,#000_50%,#000_62.5%,transparent_62.5%,transparent_100%)] bg-[size:30px_30px] opacity-[0.06] pointer-events-none" />

      {/* Top Hazard Tape Banner */}
      <div className="w-full bg-slate-950 text-amber-400 py-2.5 px-4 font-black text-xs uppercase tracking-widest border-b-4 border-slate-950 flex items-center justify-between absolute top-0 inset-x-0 z-20 overflow-hidden">
        <div className="flex items-center gap-2 animate-pulse">
          <AlertOctagon className="w-4 h-4 text-amber-400" />
          <span>WARNING: FINAL LIQUIDATION STAGE • 90% OFF</span>
        </div>
        <span className="hidden sm:inline-block px-2 py-0.5 bg-amber-400 text-slate-950 font-extrabold text-[10px]">
          NEO-BRUTALISM EDITION
        </span>
      </div>

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mt-10 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-slate-950 text-amber-400 text-xs font-black tracking-widest uppercase border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>NEO-BRUTALISM HAZARD CLEARANCE</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tighter uppercase font-sans drop-shadow-sm">
          RAW HAZARD BLOWOUT
        </h2>
        <p className="text-slate-900 text-sm sm:text-base max-w-xl mx-auto font-bold font-sans">
          No filters. No soft margins. Straight 90% liquidation pricing on all warehouse overstock!
        </p>
      </div>

      {/* Main Neo-Brutalism Card Container */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-none p-7 sm:p-9 border-4 border-slate-950 shadow-[12px_12px_0px_#000] space-y-6 text-left overflow-hidden"
        >
          {/* Top Hazard Badge */}
          <div className="flex items-center justify-between border-b-4 border-slate-950 pb-4">
            <div className="flex items-center gap-2 font-black text-xs uppercase text-slate-950">
              <Flame className="w-5 h-5 text-red-600 fill-red-600" />
              <span>CLEARANCE STATUS: CRITICAL</span>
            </div>
            <span className="px-3 py-1 bg-red-600 text-white font-black text-xs uppercase border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
              90% OFF RAW
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase">
              Factory Warehouse Liquidation
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
              Excess inventory marked down to raw cost price. All sales final — claim code before remaining stock is cleared.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 bg-amber-300 border-4 border-slate-950 shadow-[6px_6px_0px_#000] text-center space-y-1 font-mono">
            <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest block">
              NEO-BRUTALISM PROMO CODE
            </span>
            <div className="text-3xl sm:text-5xl font-black text-slate-950 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4.5 bg-red-600 hover:bg-red-500 text-white font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 border-4 border-slate-950 shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              {copied ? <Check className="w-5 h-5 text-white stroke-[3]" /> : <Copy className="w-5 h-5 stroke-[3]" />}
              <span>{copied ? 'RAW CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-black text-slate-950 pt-1 font-sans">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span>100% Neo-Brutalism Liquidation Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance1;
