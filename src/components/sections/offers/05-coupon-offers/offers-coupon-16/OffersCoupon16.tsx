import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Copy, Check, Heart, ShieldCheck } from 'lucide-react';

export function OffersCoupon16() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const couponCode = 'GIFTLOVE25';

  const copyCode = () => {
    if (!isOpen) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#170e17] text-amber-100 rounded-3xl border border-rose-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>3D ENVELOPE FLAP UNFOLD ANIMATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-100 to-amber-300 tracking-tight font-serif">
          Boutique Gift Letter Voucher
        </h2>
        <p className="text-rose-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Click the luxury envelope below to open the wax seal flap and reveal your personalized gift card.
        </p>
      </div>

      {/* Main Interactive 3D Envelope */}
      <div className="w-full max-w-lg relative z-10">
        <div className="relative bg-gradient-to-br from-rose-950 via-[#26101c] to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-rose-600/40 shadow-2xl space-y-6 text-center overflow-hidden">
          {/* Envelope Graphic Container */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full h-64 sm:h-72 rounded-2xl bg-rose-900/40 border-2 border-amber-400/40 shadow-inner flex flex-col items-center justify-center cursor-pointer group select-none overflow-hidden"
          >
            {/* Envelope Card Inside */}
            <motion.div
              animate={{ y: isOpen ? -40 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="w-11/12 p-6 rounded-2xl bg-[#faf6ed] text-slate-900 border border-amber-800/40 shadow-xl space-y-3 z-10 text-left"
            >
              <div className="flex items-center justify-between border-b border-amber-800/20 pb-2">
                <span className="text-[10px] font-mono font-bold text-rose-900 uppercase">
                  PERSONAL GIFT CARD
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-900 text-amber-100 text-[10px] font-mono font-bold">
                  25% OFF
                </span>
              </div>
              <h4 className="text-xl font-black font-serif text-rose-950">A Gift For You</h4>
              <p className="text-xs text-slate-700 font-sans">
                {isOpen
                  ? 'Your personalized discount code is ready to use at checkout!'
                  : 'Click to open envelope & read message...'}
              </p>
              {isOpen && (
                <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-center font-mono font-black text-xl text-rose-950">
                  {couponCode}
                </div>
              )}
            </motion.div>

            {/* Unopened Seal Prompt */}
            {!isOpen && (
              <div className="absolute inset-0 bg-rose-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-2">
                <Heart className="w-10 h-10 text-amber-300 animate-pulse" />
                <span className="text-xs font-mono font-black text-amber-200 tracking-widest uppercase">
                  CLICK TO UNSEAL ENVELOPE
                </span>
              </div>
            )}
          </div>

          {/* Action Copy Button */}
          <div className="pt-2 font-sans">
            <button
              onClick={copyCode}
              disabled={!isOpen}
              className={`w-full py-4 rounded-xl font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                isOpen
                  ? 'bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-rose-950/40 active:scale-95'
                  : 'bg-rose-950/40 text-rose-300/40 cursor-not-allowed border border-rose-900/40'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>
                {isOpen
                  ? copied
                    ? 'GIFT CODE COPIED!'
                    : `COPY CODE: ${couponCode}`
                  : 'UNSEAL ENVELOPE FIRST'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-200/60 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Personalized Boutique Gift Verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon16;
