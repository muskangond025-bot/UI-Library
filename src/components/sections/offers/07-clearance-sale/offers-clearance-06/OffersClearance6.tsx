import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Stamp, Copy, Check, ShieldCheck, Feather } from 'lucide-react';

export function OffersClearance6() {
  const [stamped, setStamped] = useState(false);
  const [copied, setCopied] = useState(false);
  const couponCode = 'GAZETTE1920';

  const handleStamp = () => {
    setStamped(true);
  };

  const copyCode = () => {
    if (!stamped) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#1e1713] text-amber-950 rounded-3xl border border-amber-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Newspaper className="w-3.5 h-3.5 text-amber-400" />
          <span>VINTAGE 1920s NEWSPAPER GAZETTE CLASSIFIEDS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 tracking-tight font-serif">
          1920 Gazette Clearance Gazette
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Authentic vintage newspaper press classifieds layout with rubber ink liquidation stamp validation.
        </p>
      </div>

      {/* Main Vintage Newspaper Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#f4ebd0] text-slate-900 rounded-3xl p-7 sm:p-9 border-4 border-amber-900/40 shadow-[0_25px_60px_rgba(80,50,20,0.4)] space-y-6 text-left overflow-hidden group"
        >
          {/* Gazette Masthead Bar */}
          <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
            <span className="text-[10px] font-mono font-bold text-amber-900 tracking-[0.3em] block uppercase">
              THE DAILY MERCHANTS GAZETTE • EST. 1920
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-serif text-slate-950 tracking-tight uppercase">
              PUBLIC LIQUIDATION SALE
            </h3>
            <span className="text-[10px] text-slate-700 font-mono block">VOL. CVIII NO. 42 • SPECIAL EDITION • PRICE TWO CENTS</span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black font-serif text-rose-950">
              Warehouse Excess Must Be Cleared!
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
              Notice is hereby given that all overstocked goods are marked down by 85% until current inventory is exhausted.
            </p>
          </div>

          {/* Interactive Ink Stamp Box */}
          <div className="relative p-6 rounded-2xl bg-[#e8dbba] border-2 border-dashed border-amber-900/40 flex flex-col items-center justify-center space-y-3 min-h-[140px]">
            <AnimatePresence>
              {stamped && (
                <motion.div
                  initial={{ scale: 2.5, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 0.95, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="absolute top-2 right-4 w-20 h-20 rounded-full border-4 border-rose-900 flex items-center justify-center text-rose-900 font-extrabold text-[10px] uppercase tracking-widest text-center shadow-inner pointer-events-none rotate-[-8deg] bg-rose-900/10"
                >
                  STAMPED<br />VERIFIED
                </motion.div>
              )}
            </AnimatePresence>

            <span className="text-[11px] font-mono font-bold text-amber-950 uppercase tracking-widest">
              {stamped ? 'GAZETTE PROMO CIPHER' : 'PRESS INK STAMP BELOW TO VALIDATE'}
            </span>

            <div className="text-2xl sm:text-4xl font-mono font-black text-rose-950 tracking-widest">
              {stamped ? couponCode : '•••• •••• ••••'}
            </div>

            {!stamped && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStamp}
                className="px-5 py-2.5 rounded-xl bg-amber-950 text-amber-100 font-mono font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Stamp className="w-4 h-4 text-amber-400" />
                <span>PRESS INK STAMP</span>
              </motion.button>
            )}
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              disabled={!stamped}
              className={`w-full py-4 rounded-xl font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                stamped
                  ? 'bg-rose-950 hover:bg-rose-900 text-amber-100 shadow-rose-950/30 active:scale-95'
                  : 'bg-amber-900/20 text-amber-950/40 cursor-not-allowed border border-amber-900/20'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>
                {stamped
                  ? copied
                    ? 'GAZETTE CODE COPIED!'
                    : `COPY CODE: ${couponCode}`
                  : 'PRESS STAMP FIRST TO UNLOCK'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-950/70 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-900" />
            <span>Official 1920 Gazette Classifieds Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance6;
