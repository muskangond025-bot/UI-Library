import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Crown, Copy, Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export function OffersCoupon20() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'DIAMONDVIP50';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0a0614] text-white rounded-3xl border border-purple-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Celebration Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Crown className="w-3.5 h-3.5 text-amber-300" />
          <span>ENTERPRISE LOYALTY REWARDS DASHBOARD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-purple-100 to-fuchsia-300 tracking-tight">
          Diamond VIP Loyalty Dashboard
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Congratulations! You have reached 2,450 Loyalty Points and unlocked Diamond Tier 50% discount perks.
        </p>
      </div>

      {/* Main Loyalty Rewards Dashboard Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-slate-900 via-purple-950/60 to-slate-950 rounded-3xl p-7 sm:p-9 border-2 border-purple-500/40 shadow-[0_25px_60px_rgba(168,85,247,0.3)] space-y-6 text-left overflow-hidden group"
        >
          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-300" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                DIAMOND MEMBER status
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-mono text-xs font-black uppercase shadow-md">
              50% OFF UNLOCKED
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              VIP Diamond Reward Pass
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enjoy 50% discount on all purchases + complimentary priority shipping & 24/7 VIP concierge support.
            </p>
          </div>

          {/* Loyalty Level Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-slate-300">Level 4: Diamond Tier</span>
              <span className="text-amber-300">2,450 / 3,000 PTS (81% to Black Tier)</span>
            </div>
            <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-purple-500/30 p-0.5">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '81%' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-amber-300 rounded-full"
              />
            </div>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/40 text-center space-y-1 shadow-inner">
            <span className="text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
              UNLOCKED REWARD CODE
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-black text-white tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-purple-500 to-fuchsia-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'REWARD CODE COPIED!' : `COPY REWARD CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Encrypted VIP Loyalty Perks Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon20;
