import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Copy, Check, ChevronRight, ShieldCheck } from 'lucide-react';

export function OffersClearance10() {
  const [unfolded, setUnfolded] = useState(false);
  const [copied, setCopied] = useState(false);
  const couponCode = 'PAMPHLET80';

  const copyCode = () => {
    if (!unfolded) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0f0a14] text-white rounded-3xl border border-purple-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
          <span>TRI-FOLD PAMPHLET BROCHURE UNFOLD THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-pink-300 tracking-tight">
          Tri-Fold Pamphlet Clearance Pass
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Click the interactive tri-fold brochure below to unfold panels & reveal clearance catalog sections.
        </p>
      </div>

      {/* Main Tri-Fold Brochure Container */}
      <div className="w-full max-w-2xl relative z-10">
        <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-500/40 shadow-2xl space-y-6 text-left overflow-hidden">
          {/* Unfoldable 3-Panel Brochure */}
          <div
            onClick={() => setUnfolded(!unfolded)}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 cursor-pointer group select-none"
          >
            {/* Panel 1 */}
            <motion.div
              animate={{ rotateY: unfolded ? 0 : 15 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 border border-purple-500/30 shadow-lg space-y-2"
            >
              <span className="text-[10px] font-mono text-purple-300 block font-bold uppercase">
                PANEL 01 // OVERSTOCK
              </span>
              <h4 className="text-lg font-black text-white">Fashion Clearance</h4>
              <p className="text-xs text-slate-400">80% markdown on designer coats & bags.</p>
            </motion.div>

            {/* Panel 2 */}
            <motion.div
              animate={{ scale: unfolded ? 1.02 : 1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 border border-purple-500/30 shadow-lg space-y-2"
            >
              <span className="text-[10px] font-mono text-purple-300 block font-bold uppercase">
                PANEL 02 // OUTLET
              </span>
              <h4 className="text-lg font-black text-white">Electronics Deals</h4>
              <p className="text-xs text-slate-400">80% discount on 4K TVs & headphones.</p>
            </motion.div>

            {/* Panel 3 */}
            <motion.div
              animate={{ rotateY: unfolded ? 0 : -15 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 border border-purple-500/30 shadow-lg space-y-2"
            >
              <span className="text-[10px] font-mono text-purple-300 block font-bold uppercase">
                PANEL 03 // LIQUIDATION
              </span>
              <h4 className="text-lg font-black text-white">Home & Cookware</h4>
              <p className="text-xs text-slate-400">80% off premium kitchen appliance sets.</p>
            </motion.div>
          </div>

          {!unfolded && (
            <div className="text-center py-2 text-xs font-mono text-purple-300 animate-pulse font-bold uppercase">
              ✨ CLICK TRI-FOLD BROCHURE ABOVE TO UNFOLD FULL CATALOG ✨
            </div>
          )}

          {/* Unlocked Code Display Box */}
          <AnimatePresence>
            {unfolded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-5 rounded-2xl bg-slate-950 border border-purple-500/40 text-center space-y-1 font-mono shadow-inner"
              >
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-widest">
                  PAMPHLET CATALOG CLEARANCE CODE
                </span>
                <div className="text-2xl sm:text-4xl font-black text-white tracking-widest">
                  {couponCode}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              disabled={!unfolded}
              className={`w-full py-4 rounded-xl font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                unfolded
                  ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:brightness-110 text-white shadow-purple-600/30 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>
                {unfolded
                  ? copied
                    ? 'PAMPHLET CODE COPIED!'
                    : `COPY CODE: ${couponCode}`
                  : 'UNFOLD BROCHURE FIRST'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Encrypted Tri-Fold Brochure Catalog Verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance10;
