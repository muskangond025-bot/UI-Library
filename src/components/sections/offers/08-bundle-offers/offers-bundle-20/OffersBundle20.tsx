import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Crown, Zap, ShieldCheck, Gem } from 'lucide-react';

export function OffersBundle20() {
  const [claimed, setClaimed] = useState(false);

  const handleClaimVIP = () => {
    setClaimed(true);
    setTimeout(() => setClaimed(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-950 text-white rounded-3xl border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.2)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Animated Holographic Iridescent Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-cyan-500/10 to-amber-500/10 animate-pulse pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-cyan-400/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-cyan-500/20 to-amber-500/20 text-cyan-300 text-xs font-semibold border border-cyan-400/40 shadow-inner">
          <Sparkles className="w-4 h-4 text-pink-400 animate-spin" />
          <span>HOLOGRAPHIC IRIDESCENT CHRONO FOIL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-cyan-200 to-amber-200 tracking-tight uppercase">
          CHRONO VIP HOLO BUNDLE
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Ultimate Chrono VIP Pack! Claim 50% discount on All-Access Annual Pass + Metallic Merch Hoodie + Physical Mint Collector Coin.
        </p>
      </div>

      {/* Holographic Card Container */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-pink-500 via-cyan-400 to-amber-300 shadow-[0_0_40px_rgba(236,72,153,0.3)]"
        >
          <div className="bg-slate-900/95 rounded-[22px] p-7 sm:p-10 space-y-6 text-left backdrop-blur-xl">
            {/* Top VIP Badge */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black text-cyan-300 uppercase tracking-widest">
                  IRIDESCENT FOIL TIER #001
                </span>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-black text-xs uppercase tracking-widest shadow-md">
                FLAT 50% OFF VIP
              </span>
            </div>

            {/* VIP Pack Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-pink-500/30 text-center space-y-2">
                <div className="text-3xl">🎫</div>
                <div className="text-xs font-bold text-pink-300">All-Access Pass</div>
                <div className="text-[11px] text-slate-400 line-through">$399.00</div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-cyan-500/30 text-center space-y-2">
                <div className="text-3xl">🧥</div>
                <div className="text-xs font-bold text-cyan-300">Holo Merch Hoodie</div>
                <div className="text-[11px] text-slate-400 line-through">$120.00</div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30 text-center space-y-2">
                <div className="text-3xl">🪙</div>
                <div className="text-xs font-bold text-amber-300">Mint Collector Coin</div>
                <div className="text-[11px] text-slate-400 line-through">$79.00</div>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                  REGULAR SEPARATE COST
                </span>
                <span className="text-xs text-slate-400 line-through">$598.00</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-cyan-400 uppercase tracking-widest block font-bold">
                  CHRONO HOLO BUNDLE PRICE
                </span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-cyan-200 to-amber-200">
                  $299.00
                </span>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-1">
              <button
                onClick={handleClaimVIP}
                className="w-full py-4.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-cyan-400 to-amber-400 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                {claimed ? <Check className="w-5 h-5 text-slate-950 stroke-[3]" /> : <Gem className="w-5 h-5" />}
                <span>{claimed ? 'HOLO VIP PACK UNLOCKED!' : 'CLAIM CHRONO HOLO VIP BUNDLE ($299)'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle20;
