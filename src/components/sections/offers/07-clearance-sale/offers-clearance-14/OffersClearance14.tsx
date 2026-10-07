import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, Check, ShieldCheck, Award } from 'lucide-react';

export function OffersClearance14() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'LEATHER75PASS';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#1f150e] text-amber-100 rounded-3xl border border-amber-900/60 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Tag className="w-3.5 h-3.5 text-amber-400" />
          <span>STITCHED LEATHER & BRASS SKEUOMORPHISM THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 tracking-tight font-serif">
          Stitched Leather Skeuomorphic Pass
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Authentic stitched leather texture card with antique brass rivets & metallic embossed tag.
        </p>
      </div>

      {/* Main Leather Skeuomorphic Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#3b2517] text-amber-100 rounded-3xl p-7 sm:p-9 border-4 border-amber-800/60 shadow-[0_25px_60px_rgba(45,25,10,0.6)] space-y-6 text-left overflow-hidden group"
        >
          {/* Stitched Edge Lines Graphic */}
          <div className="absolute inset-3 border-2 border-dashed border-amber-600/40 rounded-2xl pointer-events-none" />

          {/* Brass Corner Rivets */}
          <div className="absolute top-5 left-5 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-800 border border-amber-300 shadow-md" />
          <div className="absolute top-5 right-5 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-800 border border-amber-300 shadow-md" />
          <div className="absolute bottom-5 left-5 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-800 border border-amber-300 shadow-md" />
          <div className="absolute bottom-5 right-5 w-4 h-4 rounded-full bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-800 border border-amber-300 shadow-md" />

          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-amber-600/30 pb-4 relative z-10 font-sans">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                HERITAGE LEATHER OUTLET
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-mono text-xs font-black uppercase shadow-md">
              75% OFF LEATHER
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
              Skeuomorphic Leather Voucher
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 font-sans leading-relaxed">
              75% discount valid on artisan leather wallets, boots, belts & travel luggage.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-black/80 border border-amber-500/40 text-center space-y-1 relative z-10 shadow-inner font-mono">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              LEATHER CLEARANCE CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-amber-200 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 relative z-10 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'LEATHER CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-300/60 pt-1 relative z-10 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Guaranteed Stitched Leather Skeuomorphic Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance14;
