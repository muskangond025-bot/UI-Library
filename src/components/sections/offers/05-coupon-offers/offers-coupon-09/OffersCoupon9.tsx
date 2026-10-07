import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Gift, Copy, Check, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export function OffersCoupon9() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const code1 = 'BUYMAIN1';
  const code2 = 'FREEITEM2';

  const copyCode = (code: string, num: number) => {
    navigator.clipboard.writeText(code);
    if (num === 1) {
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2500);
    } else {
      setCopied2(true);
      setTimeout(() => setCopied2(false), 2500);
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#080d1a] text-white rounded-3xl border border-blue-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(14,165,233,0.3)]">
          <ArrowRightLeft className="w-3.5 h-3.5 text-sky-400" />
          <span>INTERACTIVE HOVER SPLIT TWIN COUPON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-blue-300 tracking-tight">
          Split BOGO Twin Voucher Pass
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Buy 1 Main Item and unlock 1 Free Item coupon. Hover over the cards to expand twin deals!
        </p>
      </div>

      {/* Main Dual Card Twin Wrapper */}
      <div className="w-full max-w-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {/* Left Card: Buy 1 Main Item */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-sky-500/40 shadow-xl flex flex-col justify-between text-left space-y-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-sky-500/30 pb-3">
              <div className="flex items-center gap-2 text-sky-300 text-xs font-mono font-bold">
                <ShoppingBag className="w-4 h-4 text-sky-400" />
                <span>STEP 1: BUY MAIN</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 text-xs font-mono font-bold">
                REGULAR PRICE
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">Purchase 1 Main Item</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Add any qualifying item from our primary collection to your active cart.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-sky-500/30 text-center space-y-1">
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">COUPON CODE STEP 1</span>
              <div className="text-2xl font-mono font-black text-white tracking-wider">{code1}</div>
            </div>

            <button
              onClick={() => copyCode(code1, 1)}
              className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 active:scale-95 transition-all"
            >
              {copied1 ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied1 ? 'COPIED!' : `COPY CODE: ${code1}`}</span>
            </button>
          </motion.div>

          {/* Right Card: Get 1 Item 100% FREE */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-emerald-400/40 shadow-xl flex flex-col justify-between text-left space-y-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono font-bold">
                <Gift className="w-4 h-4 text-emerald-400" />
                <span>STEP 2: GET FREE</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500 text-slate-950 text-xs font-mono font-black uppercase">
                100% FREE ITEM
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">Get 1 Free Bonus Item</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Claim your second matching bonus item completely free of charge at checkout.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">COUPON CODE STEP 2</span>
              <div className="text-2xl font-mono font-black text-emerald-300 tracking-wider">{code2}</div>
            </div>

            <button
              onClick={() => copyCode(code2, 2)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
            >
              {copied2 ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied2 ? 'COPIED!' : `COPY CODE: ${code2}`}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon9;
