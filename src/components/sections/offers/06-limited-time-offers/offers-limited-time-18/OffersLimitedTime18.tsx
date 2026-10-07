import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Copy, Check, ShoppingBag, ArrowRight } from 'lucide-react';

export function OffersLimitedTime18() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('MYSTERY45');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Design: Unbox 3D Mystery Gift Box • Animation: Floating Lid Open Reveal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Unbox Your Surprise Gift
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Click on the mystery luxury box below to untie the ribbon and reveal your exclusive surprise discount!
          </p>
        </div>

        {/* Gift Box Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-purple-500/30 shadow-2xl relative flex flex-col items-center justify-center space-y-6 backdrop-blur-md">
          {/* Animated 3D Gift Box Graphic */}
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center group"
          >
            <motion.div
              animate={isOpen ? { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] } : { y: [0, -8, 0] }}
              transition={isOpen ? { duration: 0.5 } : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Box Pedestal Glow */}
              <div className="absolute bottom-0 w-36 h-6 bg-purple-500/30 rounded-full blur-lg" />

              {/* Gift Box Body */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-purple-500 border-2 border-purple-300 shadow-2xl relative overflow-hidden flex items-center justify-center">
                {/* Gold Ribbon Cross */}
                <div className="absolute inset-y-0 w-8 bg-amber-400 shadow-md" />
                <div className="absolute inset-x-0 h-8 bg-amber-400 shadow-md" />
                <Gift className="w-16 h-16 text-slate-950 relative z-10 drop-shadow" />
              </div>
            </motion.div>
          </div>

          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-extrabold text-base tracking-wide flex items-center gap-2 shadow-lg shadow-purple-500/25 active:scale-95 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Tap To Unbox Gift</span>
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-r from-purple-950/90 to-slate-900 border border-purple-400/40 text-left space-y-4 shadow-2xl"
              >
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <Sparkles className="w-5 h-5" />
                  <span>SURPRISE UNBOXED!</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">FLAT 45% OFF + Free VIP Accessory</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Your code is ready! Copy and paste at checkout to redeem immediately.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-sm font-mono text-amber-300 font-bold bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    MYSTERY45
                  </span>
                  <button
                    onClick={copyCode}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-300 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Code Copied!' : 'Copy Voucher'}</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime18;
