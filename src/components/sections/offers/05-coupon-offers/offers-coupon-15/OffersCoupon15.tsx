import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, Copy, Check, Dices, RefreshCw } from 'lucide-react';

export function OffersCoupon15() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<{ discount: string; code: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const prizes = [
    { discount: '50% OFF', code: 'SPIN50WIN' },
    { discount: '20% OFF', code: 'SPIN20WIN' },
    { discount: '35% OFF', code: 'SPIN35WIN' },
    { discount: 'FREE GIFT', code: 'SPINGIFT' },
    { discount: '25% OFF', code: 'SPIN25WIN' },
    { discount: '40% OFF', code: 'SPIN40WIN' },
  ];

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWonPrize(null);

    const randomPrizeIndex = Math.floor(Math.random() * prizes.length);
    const prizeDegrees = 360 / prizes.length;
    const extraSpins = 5 * 360; // 5 full rotations
    const targetDegree = extraSpins + randomPrizeIndex * prizeDegrees + prizeDegrees / 2;

    const newRotation = rotation + targetDegree;
    setRotation(newRotation);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(prizes[randomPrizeIndex]);
    }, 4000);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0e0717] text-white rounded-3xl border border-fuchsia-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/80 border border-fuchsia-400/40 text-fuchsia-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Dices className="w-3.5 h-3.5 text-fuchsia-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>GAMIFIED SPIN-TO-WIN FORTUNE WHEEL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-white to-pink-300 tracking-tight">
          Lucky Fortune Coupon Wheel
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Spin the wheel of fortune to unlock guaranteed discount prizes up to 50% OFF!
        </p>
      </div>

      {/* Main Wheel & Game Container */}
      <div className="w-full max-w-lg relative z-10 flex flex-col items-center space-y-6">
        {/* Wheel Graphic Container */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          {/* Wheel Top Ticker Pointer Arrow */}
          <div className="absolute -top-3 z-30 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-400 filter drop-shadow-md" />

          {/* Rotating Wheel Disk */}
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 4, ease: [0.15, 0.9, 0.2, 1] }}
            className="w-full h-full rounded-full border-4 border-amber-400/60 shadow-[0_0_40px_rgba(217,70,239,0.3)] bg-gradient-to-tr from-purple-950 via-fuchsia-950 to-indigo-950 relative overflow-hidden flex items-center justify-center"
          >
            {prizes.map((p, idx) => {
              const deg = (360 / prizes.length) * idx;
              return (
                <div
                  key={idx}
                  className="absolute w-full h-full flex items-start justify-center pt-4"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <span className="text-xs font-mono font-black text-amber-300 tracking-wider">
                    {p.discount}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Center Hub Button */}
          <button
            onClick={spinWheel}
            disabled={spinning}
            className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl border-2 border-white/60 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          >
            {spinning ? 'SPINNING' : 'SPIN!'}
          </button>
        </div>

        {/* Won Prize Coupon Reveal Modal */}
        <AnimatePresence>
          {wonPrize && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="w-full p-6 rounded-2xl bg-gradient-to-br from-fuchsia-950 via-purple-950 to-slate-950 border-2 border-fuchsia-400/60 shadow-2xl space-y-4 text-center"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase">
                <Gift className="w-3.5 h-3.5" />
                <span>YOU WON {wonPrize.discount}!</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-fuchsia-300 block uppercase font-bold">
                  YOUR REWARD CODE
                </span>
                <span className="text-3xl font-mono font-black text-white tracking-widest">
                  {wonPrize.code}
                </span>
              </div>
              <button
                onClick={() => copyCode(wonPrize.code)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:brightness-110 text-white font-mono font-black text-xs uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'PRIZE CODE COPIED!' : `COPY CODE: ${wonPrize.code}`}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OffersCoupon15;
