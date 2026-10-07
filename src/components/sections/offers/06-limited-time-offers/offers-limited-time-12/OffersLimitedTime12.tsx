import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Flame, ShoppingBag, ArrowRight } from 'lucide-react';

export function OffersLimitedTime12() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });
  const [stockLeft, setStockLeft] = useState(14);
  const [claimedPercent, setClaimedPercent] = useState(86);

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
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Flip Clock & Flash Sale Banner */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 animate-pulse" />
            <span>Design: Split-Screen Midnight Flash • Animation: Mechanical Flip Clock</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Limited Midnight Drop <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-amber-500">
              Save Up To 60% OFF
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
            Exclusive midnight drop batch. Once the timer reaches zero or stock exhausts, prices return to standard retail ($499).
          </p>

          {/* Mechanical Flip Clock Counter */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md pt-2">
            {[
              { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
              { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
              { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') },
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center shadow-xl relative overflow-hidden group">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-rose-400 tracking-wider">
                    {unit.value}
                  </span>
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-950/80" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 tracking-widest mt-2">{unit.label}</span>
              </div>
            ))}
          </div>

          {/* Stock Meter */}
          <div className="space-y-2 pt-2 max-w-md">
            <div className="flex justify-between text-xs sm:text-sm font-semibold">
              <span className="text-slate-300">Hurry! Stock Claimed</span>
              <span className="text-rose-400 font-bold">{claimedPercent}% ({stockLeft} left)</span>
            </div>
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${claimedPercent}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Featured Product Card */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6 backdrop-blur-xl relative">
            <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-rose-500 text-white font-extrabold text-xs tracking-wider shadow-lg">
              FLAT 60% OFF
            </div>

            {/* Product Image Placeholder with Glossy Styling */}
            <div className="w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-800 overflow-hidden relative group flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                alt="Limited Edition Headphones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Product Details */}
            <div className="space-y-3 text-left">
              <h3 className="text-xl font-bold text-white">Studio Wireless Pro Headphones</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Spatial Audio • Active Noise Cancelling • 40hr Battery Life
              </p>
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl sm:text-3xl font-black text-rose-400">$199.00</span>
                <span className="text-base text-slate-500 line-through font-semibold">$499.00</span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 transition-all duration-200 active:scale-95">
              <ShoppingBag className="w-5 h-5" />
              <span>Claim Midnight Deal</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Free Express Shipping • 30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime12;
