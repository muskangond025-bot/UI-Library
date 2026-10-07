import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

export function OffersLimitedTime20() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient Animated Gradient Mesh Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Floating Glassmorphism Hero Card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8 text-center"
        >
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design: Floating Glassmorphism Hero • Animation: Ambient Mesh & Liquid Bob</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 tracking-tight leading-tight">
              Elevate Your Daily Setup With 50% OFF
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience unparalleled studio craftmanship. Claim your hero offer code before midnight timer expires.
            </p>
          </div>

          {/* Countdown & Discount Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-2 bg-slate-950/80 px-5 py-3 rounded-2xl border border-white/10 text-sm font-mono font-bold text-cyan-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>
                {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
            <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-white text-sm font-extrabold tracking-wide">
              FLAT 50% DISCOUNT APPLIED
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:brightness-110 text-slate-950 font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all">
              <ShoppingBag className="w-5 h-5" />
              <span>Claim Hero Offer Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Guarantee Footer */}
          <div className="pt-2 flex items-center justify-center gap-2 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Instant Voucher Activation • Free 2-Day Shipping Included</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersLimitedTime20;
