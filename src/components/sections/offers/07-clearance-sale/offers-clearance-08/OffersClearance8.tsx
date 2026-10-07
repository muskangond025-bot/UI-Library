import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Sparkles, Copy, Check, ShieldCheck, Dices, Trophy } from 'lucide-react';

export function OffersClearance8() {
  const [copied, setCopied] = useState(false);
  const [started, setStarted] = useState(false);
  const couponCode = 'PIXEL90CLEAR';

  const copyCode = () => {
    if (!started) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0c0714] text-yellow-400 rounded-3xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.25)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Pixel Dots Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-mono">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-widest border-2 border-yellow-300">
          <Gamepad2 className="w-4 h-4 text-slate-950 animate-bounce" />
          <span>RETRO ARCADE 8-BIT PIXEL ART THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-amber-400 tracking-tight font-mono uppercase">
          8-BIT ARCADE LIQUIDATION
        </h2>
        <p className="text-yellow-200/80 text-xs sm:text-sm max-w-lg mx-auto font-mono">
          Insert 1 coin & press start to unlock high-score 90% clearance markdown code!
        </p>
      </div>

      {/* Main 8-Bit Arcade Box */}
      <div className="w-full max-w-xl relative z-10">
        <div className="relative bg-slate-950 rounded-none p-7 sm:p-9 border-4 border-yellow-400 shadow-[8px_8px_0px_#facc15] space-y-6 text-left overflow-hidden">
          {/* Top Score Bar */}
          <div className="flex items-center justify-between border-b-4 border-yellow-400 pb-4 text-xs font-mono font-black">
            <div className="flex items-center gap-2 text-yellow-300">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>HIGH SCORE: 999990</span>
            </div>
            <span className="px-2 py-0.5 bg-yellow-400 text-slate-950 uppercase">
              CREDIT 01
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 font-mono">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Retro Pixel Arcade Pass
            </h3>
            <p className="text-xs text-yellow-200/80 leading-relaxed">
              90% instant markdown discount unlocked across retro gaming consoles & 8-bit apparel.
            </p>
          </div>

          {/* Code Display Box */}
          <div className="p-5 rounded-none bg-purple-950/80 border-4 border-yellow-400 text-center space-y-1 shadow-inner font-mono">
            <span className="text-[10px] font-black text-yellow-300 uppercase tracking-widest block">
              ARCADE 8-BIT CIPHER
            </span>
            <div className="text-2xl sm:text-4xl font-black text-white tracking-widest">
              {started ? couponCode : 'PRESS START'}
            </div>
          </div>

          {/* Action Arcade Buttons */}
          <div className="pt-1 font-mono">
            {!started ? (
              <button
                onClick={() => setStarted(true)}
                className="w-full py-4.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 border-4 border-slate-950 shadow-[4px_4px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all animate-pulse"
              >
                <Dices className="w-5 h-5" />
                <span>PRESS START FOR 90% OFF</span>
              </button>
            ) : (
              <button
                onClick={copyCode}
                className="w-full py-4.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 border-4 border-slate-950 shadow-[4px_4px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                {copied ? <Check className="w-5 h-5 text-slate-950 stroke-[3]" /> : <Copy className="w-5 h-5 stroke-[3]" />}
                <span>{copied ? 'PIXEL CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-mono text-yellow-300 pt-1">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span>8-Bit Arcade Score High-Level Verification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance8;
