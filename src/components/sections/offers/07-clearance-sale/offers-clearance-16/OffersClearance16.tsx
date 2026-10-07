import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Sparkles, Copy, Check, ShieldCheck, Box } from 'lucide-react';

export function OffersClearance16() {
  const [unboxed, setUnboxed] = useState(false);
  const [copied, setCopied] = useState(false);
  const couponCode = 'UNBOX90PASS';

  const copyCode = () => {
    if (!unboxed) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#170e0a] text-amber-100 rounded-3xl border border-amber-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Package className="w-3.5 h-3.5 text-amber-400" />
          <span>INTERACTIVE 3D CARDBOARD PARCEL UNBOXING THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 tracking-tight font-serif">
          3D Cardboard Parcel Unboxing Pass
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Click the 3D shipping cardboard parcel below to unbox top flaps & reveal your 90% clearance pass!
        </p>
      </div>

      {/* Main 3D Cardboard Parcel Container */}
      <div className="w-full max-w-lg relative z-10">
        <div className="relative bg-gradient-to-br from-[#2a170b] via-[#1d0f07] to-black rounded-3xl p-6 sm:p-8 border-2 border-amber-700/50 shadow-2xl space-y-6 text-center overflow-hidden">
          {/* Interactive Cardboard Box Graphic */}
          <div
            onClick={() => setUnboxed(!unboxed)}
            className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#a16207]/20 border-2 border-dashed border-amber-500/40 shadow-inner flex flex-col items-center justify-center cursor-pointer group select-none overflow-hidden"
          >
            {/* Box Contents */}
            <motion.div
              animate={{ y: unboxed ? -40 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="w-11/12 p-6 rounded-2xl bg-[#fef3c7] text-slate-900 border border-amber-600/40 shadow-xl space-y-3 z-10 text-left font-sans"
            >
              <div className="flex items-center justify-between border-b border-amber-800/20 pb-2 font-mono">
                <span className="text-[10px] font-bold text-amber-900 uppercase">
                  UNBOXED PARCEL PASS
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-900 text-amber-100 text-[10px] font-bold">
                  90% OFF
                </span>
              </div>
              <h4 className="text-xl font-black font-serif text-amber-950">Parcel Unboxed!</h4>
              <p className="text-xs text-slate-700 font-sans">
                {unboxed
                  ? 'Your unboxed liquidation warehouse promo code is ready!'
                  : 'Click box below to unbox top flaps & inspect contents...'}
              </p>
              {unboxed && (
                <div className="p-3 rounded-xl bg-amber-200 border border-amber-400 text-center font-mono font-black text-xl text-amber-950">
                  {couponCode}
                </div>
              )}
            </motion.div>

            {!unboxed && (
              <div className="absolute inset-0 bg-amber-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-2 font-sans">
                <Box className="w-12 h-12 text-amber-300 animate-bounce" />
                <span className="text-xs font-mono font-black text-amber-200 tracking-widest uppercase">
                  CLICK TO UNBOX SHIPPING PARCEL
                </span>
              </div>
            )}
          </div>

          {/* Copy Button */}
          <div className="pt-2 font-sans">
            <button
              onClick={copyCode}
              disabled={!unboxed}
              className={`w-full py-4 rounded-xl font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                unboxed
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-amber-500/30 active:scale-95'
                  : 'bg-amber-950/40 text-amber-300/40 cursor-not-allowed border border-amber-900/40'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>
                {unboxed
                  ? copied
                    ? 'PARCEL CODE COPIED!'
                    : `COPY CODE: ${couponCode}`
                  : 'UNBOX PARCEL FIRST'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-200/60 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>3D Shipping Cardboard Parcel Verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance16;
