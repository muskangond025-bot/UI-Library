import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Award, Zap, Trophy, Check, Flame } from 'lucide-react';

export function OffersBundle15() {
  const [started, setStarted] = useState(false);

  const handlePressStart = () => {
    setStarted(true);
    setTimeout(() => setStarted(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-900 text-yellow-400 rounded-3xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.2)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* 8-Bit Scanline Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-20 opacity-60" />

      {/* Arcade Score Header Banner */}
      <div className="w-full max-w-2xl bg-slate-950 border-2 border-yellow-400 p-3 mb-8 rounded-none shadow-[4px_4px_0px_#facc15] flex flex-wrap items-center justify-between gap-2 relative z-10 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span>1UP: 009840</span>
        </div>
        <div className="text-yellow-300 font-bold uppercase tracking-widest animate-pulse">
          ★ HIGH SCORE SAVINGS: $50 OFF ★
        </div>
        <div className="text-purple-400 font-bold">CREDITS: 99</div>
      </div>

      {/* Main Title Header */}
      <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-widest border-2 border-slate-950">
          <Gamepad2 className="w-4 h-4 text-slate-950" />
          <span>8-BIT RETRO POWER BUNDLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-mono drop-shadow-[2px_2px_0px_#facc15]">
          RETRO GAMER COMBO
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans font-medium">
          Level up your gaming setup! Get Arcade Stick + Wireless Gamepad + Neon Arcade Mat combo with extra 5,000 PTS discount.
        </p>
      </div>

      {/* Main Arcade Cabinet Card */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-950 p-6 sm:p-8 border-4 border-yellow-400 shadow-[8px_8px_0px_#facc15] space-y-6 text-left"
        >
          {/* Item Power-Up Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-4 border-2 border-purple-500 text-center space-y-2 shadow-[4px_4px_0px_#a855f7]">
              <div className="text-2xl">🕹️</div>
              <div className="text-xs font-black text-purple-400 uppercase">Arcade Stick</div>
              <div className="text-[11px] text-slate-400 line-through">$89.00</div>
            </div>

            <div className="bg-slate-900 p-4 border-2 border-cyan-400 text-center space-y-2 shadow-[4px_4px_0px_#22d3ee]">
              <div className="text-2xl">🎮</div>
              <div className="text-xs font-black text-cyan-300 uppercase">Dual Gamepad</div>
              <div className="text-[11px] text-slate-400 line-through">$59.00</div>
            </div>

            <div className="bg-slate-900 p-4 border-2 border-pink-500 text-center space-y-2 shadow-[4px_4px_0px_#ec4899]">
              <div className="text-2xl">⚡</div>
              <div className="text-xs font-black text-pink-400 uppercase">Neon LED Mat</div>
              <div className="text-[11px] text-slate-400 line-through">$39.00</div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 bg-purple-950/60 border-2 border-yellow-400 flex items-center justify-between font-mono">
            <div>
              <span className="text-[10px] font-black text-purple-300 uppercase tracking-widest block">
                REGULAR STAGE COST
              </span>
              <span className="text-xs text-slate-400 line-through">$187.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest block">
                ARCADE COMBO PRICE
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">$137.00</span>
            </div>
          </div>

          {/* Press Start Arcade Button */}
          <div className="pt-2">
            <button
              onClick={handlePressStart}
              className="w-full py-4.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-base uppercase tracking-widest border-2 border-slate-950 shadow-[4px_4px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              {started ? <Check className="w-5 h-5 text-slate-950 stroke-[3]" /> : <Flame className="w-5 h-5 text-slate-950" />}
              <span>{started ? 'COMBO UNLOCKED! (+5000 PTS)' : 'PRESS START TO CLAIM COMBO ($137)'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle15;
