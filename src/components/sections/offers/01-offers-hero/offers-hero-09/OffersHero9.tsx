import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';

export function OffersHero9({ data, section }: { data?: any; section?: any }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, mins: 18, secs: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full py-16 px-6 bg-red-950 text-white rounded-3xl border border-red-800/60 overflow-hidden shadow-2xl">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest">
          <Flame className="w-4 h-4 animate-bounce" />
          <span>FLASH SALE ENDS SOON</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
          LIMITED-TIME <span className="text-red-500">FLAT 50% OFF</span>
        </h1>

        <div className="flex justify-center items-center gap-3 sm:gap-6 py-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-6 w-24 sm:w-32 text-center shadow-inner">
            <div className="text-3xl sm:text-5xl font-mono font-black text-red-500">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-1 font-semibold">HOURS</div>
          </div>
          <span className="text-2xl font-bold text-red-600">:</span>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-6 w-24 sm:w-32 text-center shadow-inner">
            <div className="text-3xl sm:text-5xl font-mono font-black text-red-500">
              {String(timeLeft.mins).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-1 font-semibold">MINUTES</div>
          </div>
          <span className="text-2xl font-bold text-red-600">:</span>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-6 w-24 sm:w-32 text-center shadow-inner">
            <div className="text-3xl sm:text-5xl font-mono font-black text-red-500">
              {String(timeLeft.secs).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest mt-1 font-semibold">SECONDS</div>
          </div>
        </div>

        <p className="text-red-200/80 text-sm max-w-lg mx-auto">
          Hurry! Promotional stock is strictly limited. Discount code automatically applied at checkout.
        </p>

        <div className="pt-2 flex justify-center">
          <button className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center gap-2">
            <span>CLAIM FLASH DEAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero9;
