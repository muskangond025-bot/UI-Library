import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Copy, Check, ShieldCheck, Award } from 'lucide-react';

export function OffersClearance9() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'GOLDLEAF90';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0a1210] text-amber-100 rounded-3xl border border-amber-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Crown className="w-3.5 h-3.5 text-amber-300" />
          <span>LUXURY VELVET GOLD LEAF EMBOSSED THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 tracking-tight font-serif">
          Gold Leaf Velvet Outlet Pass
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Deep royal emerald velvet texture background with gold foil embossed borders & wax seal emblem.
        </p>
      </div>

      {/* Main Luxury Velvet Card Container */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-[#0c1815] via-[#05110e] to-black rounded-3xl p-7 sm:p-9 border-2 border-amber-400/50 shadow-[0_25px_60px_rgba(217,119,6,0.3)] space-y-6 text-left overflow-hidden group"
        >
          {/* Inner Gold Foil Filigree Border */}
          <div className="absolute inset-3 border border-amber-400/30 rounded-2xl pointer-events-none" />

          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 relative z-10 font-sans">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-300" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                EMBOSSED GOLD LEAF PRIVILEGE
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-mono text-xs font-black uppercase shadow-md">
              90% OFF GOLD
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
              Royal Gold Leaf Outlet Pass
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 font-sans leading-relaxed">
              90% markdown discount valid on luxury fragrances, gold jewelry & designer leather collections.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-amber-400/40 text-center space-y-1 relative z-10 shadow-inner font-mono">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">
              GOLD EMBOSSED PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 relative z-10 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'GOLD CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-300/70 pt-1 relative z-10 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Official Gold Leaf Embossed Privileges Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance9;
