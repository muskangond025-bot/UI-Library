import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Stamp, Copy, Check, ShieldCheck, Tag } from 'lucide-react';

export function OffersCoupon18() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'KRAFTBREW25';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#18130d] text-amber-950 rounded-3xl border border-amber-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Coffee className="w-3.5 h-3.5 text-amber-400" />
          <span>VINTAGE KRAFT PAPER THERMAL RECEIPT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 tracking-tight font-serif">
          Heritage Kraft Bakery Receipt
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Authentic thermal receipt format featuring serrated cut edges, itemized items & coffee discount code.
        </p>
      </div>

      {/* Main Kraft Thermal Receipt Card */}
      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#f4ebd0] text-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-amber-800/30 shadow-[0_25px_60px_rgba(80,50,20,0.4)] space-y-5 text-left overflow-hidden group"
        >
          {/* Top Serrated Receipt Cut Graphic */}
          <div className="absolute -top-2 left-0 right-0 h-4 bg-[#18130d] [clip-path:polygon(0%_0%,5%_100%,10%_0%,15%_100%,20%_0%,25%_100%,30%_0%,35%_100%,40%_0%,45%_100%,50%_0%,55%_100%,60%_0%,65%_100%,70%_0%,75%_100%,80%_0%,85%_100%,90%_0%,95%_100%,100%_0%)]" />

          {/* Receipt Header */}
          <div className="text-center border-b-2 border-dashed border-amber-800/30 pb-4 space-y-1">
            <span className="text-xs font-bold text-amber-900 tracking-widest block">
              HERITAGE BAKERY & COFFEE HOUSE
            </span>
            <h3 className="text-xl font-black text-rose-950 font-serif">RECEIPT DEAL #99201</h3>
            <span className="text-[10px] text-amber-800 font-bold block">DATE: 2026-10-06 • VERIFIED REGISTER</span>
          </div>

          {/* Itemized Thermal Breakdown */}
          <div className="space-y-2 text-xs font-semibold text-slate-800 border-b-2 border-dashed border-amber-800/30 pb-4">
            <div className="flex justify-between">
              <span>1x Signature Roasted Espresso Shot</span>
              <span>$5.50</span>
            </div>
            <div className="flex justify-between">
              <span>1x Artisanal Butter Croissant</span>
              <span>$4.50</span>
            </div>
            <div className="flex justify-between text-rose-900 font-black pt-1">
              <span>PROMO DISCOUNT (25% OFF)</span>
              <span>-$2.50</span>
            </div>
          </div>

          {/* Code Display */}
          <div className="p-4 rounded-xl bg-[#e8dbba] border border-amber-800/30 text-center space-y-1">
            <span className="text-[10px] font-bold text-amber-900 uppercase tracking-widest">
              RECEIPT DISCOUNT CODE
            </span>
            <div className="text-2xl font-black text-rose-950 tracking-wider font-mono">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-amber-100 font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'RECEIPT CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          {/* Bottom Serrated Receipt Cut Graphic */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 bg-[#18130d] [clip-path:polygon(0%_100%,5%_0%,10%_100%,15%_0%,20%_100%,25%_0%,30%_100%,35%_0%,40%_100%,45%_0%,50%_100%,55%_0%,60%_100%,65%_0%,70%_100%,75%_0%,80%_100%,85%_0%,90%_100%,95%_0%,100%_100%)]" />
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon18;
