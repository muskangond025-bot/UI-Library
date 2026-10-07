import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stamp, Award, Copy, Check, ShieldCheck, Feather } from 'lucide-react';

export function OffersCoupon6() {
  const [stamped, setStamped] = useState(false);
  const [copied, setCopied] = useState(false);

  const couponCode = 'ROYALCRAFT35';

  const handleStampPress = () => {
    setStamped(true);
  };

  const copyCode = () => {
    if (!stamped) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#1a0f18] text-amber-100 rounded-3xl border border-rose-950/60 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Deep Crimson Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Feather className="w-3.5 h-3.5 text-amber-400" />
          <span>INTERACTIVE WAX SEAL PRESS STAMP</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-100 to-amber-400 tracking-tight">
          Luxury Artisan Gift Certificate
        </h2>
        <p className="text-rose-200/70 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Press the royal red wax seal stamp below to officially validate your 35% boutique discount certificate.
        </p>
      </div>

      {/* Main Luxury Parchment Certificate Pass */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#faf6ed] text-slate-900 rounded-3xl p-7 sm:p-9 border-4 border-amber-800/40 shadow-[0_25px_60px_rgba(88,28,28,0.4)] space-y-6 text-left overflow-hidden group"
        >
          {/* Subtle Parchment Inner Gold Foil Border */}
          <div className="absolute inset-3 border border-amber-800/30 rounded-2xl pointer-events-none" />

          {/* Certificate Header Meta */}
          <div className="flex items-center justify-between border-b border-amber-800/20 pb-4 relative z-10">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-800" />
              <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest">
                BOUTIQUE PRIVILEGE PASS
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-rose-900 text-amber-100 text-xs font-extrabold font-mono uppercase shadow-sm">
              35% OFF CERTIFICATE
            </span>
          </div>

          {/* Certificate Content */}
          <div className="space-y-2 relative z-10">
            <span className="text-[11px] font-mono text-amber-900 font-bold uppercase tracking-widest block">
              HERITAGE CRAFT & FASHION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-rose-950 font-serif tracking-tight">
              Royal VIP Artisan Discount
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
              Valid across all handcrafted leather goods, luxury fragrances, and artisanal jewelry collections.
            </p>
          </div>

          {/* Interactive Wax Seal & Coupon Code Box */}
          <div className="relative p-6 rounded-2xl bg-[#f2e9d8] border-2 border-dashed border-amber-800/30 flex flex-col items-center justify-center space-y-3 min-h-[140px] z-10">
            {/* Visual Stamped Ink Seal Overlay */}
            <AnimatePresence>
              {stamped && (
                <motion.div
                  initial={{ scale: 2.5, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 0.9, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="absolute top-2 right-4 w-20 h-20 rounded-full border-4 border-rose-900 flex items-center justify-center text-rose-900 font-extrabold text-[10px] uppercase tracking-widest text-center shadow-inner pointer-events-none rotate-[-8deg] bg-rose-900/10"
                >
                  OFFICIALLY<br />STAMPED
                </motion.div>
              )}
            </AnimatePresence>

            <span className="text-[11px] font-mono font-bold text-amber-900 uppercase tracking-widest">
              {stamped ? 'VALIDATED CERTIFICATE CODE' : 'PRESS WAX SEAL BELOW TO VALIDATE'}
            </span>

            <div className="text-2xl sm:text-4xl font-mono font-black tracking-widest text-rose-950">
              {stamped ? couponCode : '•••• •••• ••••'}
            </div>

            {/* Interactive Pressable Wax Seal Stamp Button */}
            {!stamped && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleStampPress}
                className="mt-2 w-16 h-16 rounded-full bg-gradient-to-br from-rose-700 via-rose-800 to-rose-950 text-amber-100 font-extrabold shadow-xl shadow-rose-900/50 flex flex-col items-center justify-center border-2 border-amber-400/40 cursor-pointer group/seal"
              >
                <Stamp className="w-7 h-7 text-amber-300 group-hover/seal:scale-110 transition-transform" />
                <span className="text-[9px] font-mono uppercase tracking-tighter">STAMP</span>
              </motion.button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 relative z-10">
            <button
              onClick={copyCode}
              disabled={!stamped}
              className={`w-full py-4 rounded-xl font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                stamped
                  ? 'bg-rose-900 hover:bg-rose-950 text-amber-100 shadow-rose-950/30 active:scale-95'
                  : 'bg-amber-800/20 text-amber-900/50 cursor-not-allowed border border-amber-800/20'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>
                {stamped
                  ? copied
                    ? 'CERTIFICATE COPIED!'
                    : `COPY VOUCHER CODE: ${couponCode}`
                  : 'PRESS WAX SEAL FIRST TO UNLOCK'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-900/70 pt-1 font-sans relative z-10">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
            <span>Official Royal Seal Certificate • 100% Guaranteed Offer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon6;
