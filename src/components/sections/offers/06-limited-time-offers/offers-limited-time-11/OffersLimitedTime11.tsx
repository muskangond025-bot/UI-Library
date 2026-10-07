import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Copy, Check, RefreshCw, Zap, Tag, Gift, Percent } from 'lucide-react';

const REEL_ITEMS = [
  { id: 'gem', label: '50% OFF', icon: Sparkles, color: 'text-amber-400', bg: 'from-amber-500/20 to-yellow-500/10' },
  { id: 'zap', label: 'FREE GIFT', icon: Zap, color: 'text-cyan-400', bg: 'from-cyan-500/20 to-blue-500/10' },
  { id: 'tag', label: 'FLAT $100', icon: Tag, color: 'text-emerald-400', bg: 'from-emerald-500/20 to-teal-500/10' },
  { id: 'gift', label: 'BUY 1 GET 1', icon: Gift, color: 'text-pink-400', bg: 'from-pink-500/20 to-rose-500/10' },
  { id: 'percent', label: '30% OFF', icon: Percent, color: 'text-purple-400', bg: 'from-purple-500/20 to-indigo-500/10' },
];

export function OffersLimitedTime11() {
  const [reels, setReels] = useState([0, 0, 0]);
  const [spinning, setSpinning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [copied, setCopied] = useState(false);
  const [spinsLeft, setSpinsLeft] = useState(3);

  const pullLever = () => {
    if (spinning || spinsLeft <= 0) return;

    setSpinning(true);
    setHasWon(false);
    setSpinsLeft((prev) => prev - 1);

    // Dynamic reel spinning timing
    let counter = 0;
    const interval = setInterval(() => {
      setReels([
        Math.floor(Math.random() * REEL_ITEMS.length),
        Math.floor(Math.random() * REEL_ITEMS.length),
        Math.floor(Math.random() * REEL_ITEMS.length),
      ]);
      counter++;

      if (counter > 18) {
        clearInterval(interval);
        // Guarantee jackpot match on last spin or 70% chance
        const winningIdx = spinsLeft === 1 ? 0 : Math.floor(Math.random() * REEL_ITEMS.length);
        setReels([winningIdx, winningIdx, winningIdx]);
        setSpinning(false);
        setHasWon(true);
      }
    }, 90);
  };

  const copyCode = () => {
    navigator.clipboard.writeText('JACKPOT50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
      {/* Background Neon Glow Effects */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Design: Cyber Jackpot Slot Machine • Animation: 3-Reel Ticker & Lever Pull</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tight">
            Spin To Unlock Your Offer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Pull the lever to spin the jackpot reels. Match 3 identical rewards to claim an instant VIP discount code!
          </p>
        </div>

        {/* Slot Machine Frame */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative backdrop-blur-md">
          {/* Top Display Bar */}
          <div className="mb-6 flex items-center justify-between px-4 py-2 bg-slate-950 rounded-xl border border-slate-800 text-xs sm:text-sm">
            <span className="text-slate-400">Remaining Spins: <strong className="text-amber-400 font-bold">{spinsLeft}</strong></span>
            <span className="text-emerald-400 font-semibold animate-pulse">● Live Jackpot Ready</span>
          </div>

          {/* Slot Reels Container */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-inner min-h-[160px] sm:min-h-[200px] items-center">
            {reels.map((itemIdx, idx) => {
              const item = REEL_ITEMS[itemIdx];
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border bg-gradient-to-b ${item.bg} border-slate-700/80 transition-all duration-200 ${
                    spinning ? 'scale-95 opacity-70 blur-[1px]' : 'scale-100 opacity-100'
                  }`}
                >
                  <Icon className={`w-8 h-8 sm:w-12 sm:h-12 ${item.color} mb-2 drop-shadow-md`} />
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-200 text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Controls & Lever Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={pullLever}
              disabled={spinning || spinsLeft <= 0}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-slate-950 text-base sm:text-lg tracking-wide uppercase shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                spinning || spinsLeft <= 0
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-110 active:scale-95 shadow-amber-500/20'
              }`}
            >
              <RefreshCw className={`w-5 h-5 ${spinning ? 'animate-spin' : ''}`} />
              {spinning ? 'Spinning Reels...' : spinsLeft > 0 ? 'Pull Lever & Spin' : 'No Spins Remaining'}
            </button>
          </div>

          {/* Winner Banner & Code Claim */}
          <AnimatePresence>
            {hasWon && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-500/40 text-left space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                      <Sparkles className="w-5 h-5" />
                      <span>JACKPOT UNLOCKED!</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Congratulations! You unlocked <strong className="text-white">50% OFF Entire Cart</strong> code.
                    </p>
                  </div>
                  <button
                    onClick={copyCode}
                    className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 text-slate-950 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Code Copied!' : 'JACKPOT50'}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime11;
