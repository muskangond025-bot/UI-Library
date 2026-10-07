import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Copy, Check, ShieldCheck, Zap } from 'lucide-react';

export function OffersCoupon13() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'BORDERBEAM45';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#070d0d] text-emerald-300 rounded-3xl border border-emerald-950/80 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Neon Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>REACTBITS CONTINUOUS BORDER BEAM EFFECT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-teal-300 tracking-tight font-sans">
          Neon Border Beam Tech Pass
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Sleek dark mode voucher featuring an endless animated light beam tracing the card border perimeter.
        </p>
      </div>

      {/* Main Border Beam Card */}
      <div className="w-full max-w-xl relative z-10">
        <div className="relative bg-slate-950 rounded-3xl p-7 sm:p-9 border border-emerald-900/40 shadow-[0_0_50px_rgba(16,185,129,0.2)] space-y-6 text-left overflow-hidden group">
          {/* ReactBits Continuous Animated Border Beam */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#10b981_360deg)] opacity-70 pointer-events-none z-0"
          />
          <div className="absolute inset-[2px] bg-slate-950 rounded-[22px] z-10" />

          {/* Meta Header */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4 relative z-20">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>BEAM-TECH PROMO PASS</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black uppercase shadow-md">
              45% OFF TECH
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 relative z-20 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Next-Gen Tech Voucher
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              45% discount on smart home gadgets, gaming monitors, wireless audio, and peripherals.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-1 relative z-20 shadow-inner">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
              BORDER BEAM CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-emerald-200 tracking-widest drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 relative z-20 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'BEAM CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 relative z-20 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Beam Encrypted Tech Voucher Verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon13;
