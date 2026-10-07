import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Sparkles, Copy, Check, ShieldCheck, Tag } from 'lucide-react';

export function OffersCoupon19() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'CORPPROMO15';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090d16] text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Megaphone className="w-3.5 h-3.5 text-blue-400" />
          <span>MINIMAL CORPORATE PROMO ANNOUNCEMENT BAR</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Enterprise Minimal Promo Bar
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Ultra-clean horizontal notification bar design for high-converting store headers and inline announcements.
        </p>
      </div>

      {/* Main Corporate Promo Bar */}
      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-4 sm:p-6 border border-blue-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 text-left"
        >
          {/* Left Side Info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
              <Tag className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-500 text-slate-950 text-[10px] font-mono font-black uppercase">
                  15% OFF STOREWIDE
                </span>
                <span className="text-xs font-mono text-slate-400">VALID THIS WEEK</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Claim 15% Instant Savings On Your Entire Order
              </h4>
            </div>
          </div>

          {/* Right Side Code & Copy */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-blue-500/30 text-center font-mono font-black text-sm text-blue-300 tracking-wider">
              {couponCode}
            </div>
            <button
              onClick={copyCode}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase flex items-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95 transition-all whitespace-nowrap"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon19;
