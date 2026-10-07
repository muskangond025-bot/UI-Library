import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Sparkles, Copy, Check, ShieldCheck, Zap } from 'lucide-react';

export function OffersCoupon11() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'APPAPP25';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#030712] text-white rounded-3xl border border-teal-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Animated Fluid Mesh Gradients */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Ambient Parallax Badges */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-12 left-12 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hidden lg:flex items-center gap-2 text-xs font-mono font-bold text-teal-300"
      >
        <Zap className="w-4 h-4 text-emerald-400" />
        <span>INSTANT APP CASHBACK</span>
      </motion.div>

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-teal-400/40 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
          <span>FROSTED GLASSMORPHISM PARALLAX PROMO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-emerald-300 tracking-tight">
          Mobile App Special Toast Pass
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Exclusive mobile checkout promo code with 25% extra instant discount + free express delivery.
        </p>
      </div>

      {/* Main Frosted Glassmorphism Floating Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="relative bg-slate-900/70 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 border border-white/20 shadow-[0_30px_70px_rgba(20,184,166,0.25)] space-y-6 text-left overflow-hidden group"
        >
          {/* Glass Specular Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-60 pointer-events-none" />

          {/* Card Header Meta */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-teal-300 uppercase tracking-widest">
                IN-APP SPECIAL DEAL
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-mono text-xs font-black uppercase shadow-md">
              FLAT 25% OFF
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              App Member Exclusive Voucher
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Applies automatically to any first-time mobile order or repeat membership renewal.
            </p>
          </div>

          {/* Code Display Box */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-teal-500/40 text-center space-y-1 shadow-inner">
            <span className="text-[10px] font-mono font-bold text-teal-400 uppercase tracking-widest">
              MOBILE PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-black text-white tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-teal-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'APP CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Instant Mobile Checkout Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon11;
