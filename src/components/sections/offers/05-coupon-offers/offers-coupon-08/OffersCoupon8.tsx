import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, Copy, Check, ShieldCheck, Tag } from 'lucide-react';

export function OffersCoupon8() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });
  const [copied, setCopied] = useState(false);

  const couponCode = 'FLASHVAULT70';

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

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0f0406] text-white rounded-3xl border border-rose-950/80 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Red Hot Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          <Flame className="w-3.5 h-3.5 text-red-400 animate-bounce" />
          <span>HIGH-URGENCY FLASH SALE COUNTDOWN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-100 to-amber-300 tracking-tight uppercase font-sans">
          Black Friday Flash Vault
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Massive 70% discount code available for a strictly limited time. Grab your vault pass before timer expires!
        </p>
      </div>

      {/* Main Flash Vault Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-slate-950 via-red-950/40 to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-red-600/40 shadow-[0_0_50px_rgba(225,29,72,0.25)] space-y-6 text-left overflow-hidden group"
        >
          {/* Vault Header Meta */}
          <div className="flex items-center justify-between border-b border-red-600/20 pb-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-300 uppercase tracking-widest">
                FLASH DEAL VAULT PASS
              </span>
            </div>
            <span className="px-2.5 py-1 rounded bg-red-600 text-white text-xs font-black uppercase shadow-md animate-pulse">
              70% OFF ENDS SOON
            </span>
          </div>

          {/* Offer Details */}
          <div className="space-y-1 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Midnight Vault Super Deal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              70% discount valid on all premium items & bundles. 89% of available codes claimed today.
            </p>
          </div>

          {/* Mechanical 3D Flip Clock Countdown */}
          <div className="p-5 rounded-2xl bg-black/80 border border-red-500/30 flex items-center justify-around text-center shadow-inner">
            {[
              { label: 'HOURS', val: String(timeLeft.hours).padStart(2, '0') },
              { label: 'MINUTES', val: String(timeLeft.minutes).padStart(2, '0') },
              { label: 'SECONDS', val: String(timeLeft.seconds).padStart(2, '0') },
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 sm:w-20 py-2 rounded-xl bg-gradient-to-b from-red-950 to-slate-950 border border-red-500/40 shadow-lg text-2xl sm:text-4xl font-black text-red-400 font-mono tracking-widest">
                  {unit.val}
                </div>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest mt-1.5">{unit.label}</span>
              </div>
            ))}
          </div>

          {/* Live Progress Bar */}
          <div className="space-y-2 font-sans">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Vault Claim Limit</span>
              <span className="text-red-400">89% Claimed (Only 11 Left)</span>
            </div>
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-red-900/40 p-0.5">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '89%' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 rounded-full"
              />
            </div>
          </div>

          {/* Code Copy Button */}
          <div className="pt-2">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'VAULT CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>Verified High-Speed Flash Savings Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon8;
