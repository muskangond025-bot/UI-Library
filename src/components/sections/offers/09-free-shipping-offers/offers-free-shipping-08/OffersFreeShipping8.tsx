import React, { useState, useEffect } from 'react';
import { Clock, Zap, ArrowRight, Flame, ShieldAlert } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping8({ section }: SectionProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 px-4 bg-rose-950 font-sans text-white border-y border-rose-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-r from-slate-950 via-rose-950 to-slate-950 rounded-3xl border-2 border-rose-500/50 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Pulsing Alert Dot */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 px-3 py-1 rounded-full text-rose-300 text-[10px] font-mono font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>FLASH DISPATCH CUTOFF</span>
          </div>

          <div className="space-y-3 max-w-lg text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-slate-950 font-black text-xs uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 fill-slate-950" />
              <span>SAME-DAY FREE SHIPPING</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none">
              ORDER IN THE NEXT HOUR TO GET ZERO-FEE EXPRESS DELIVERY
            </h2>
            <p className="text-rose-200/80 text-xs sm:text-sm">
              All qualifying orders placed before timer expiry skip standard processing queue with free guaranteed express arrival.
            </p>
          </div>

          {/* Clock Display */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 font-mono text-center">
              <div className="bg-slate-900 border border-rose-500/40 px-4 py-3 rounded-2xl space-y-1">
                <span className="text-2xl sm:text-4xl font-black text-white block">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">HOURS</span>
              </div>
              <span className="text-2xl font-black text-rose-500">:</span>
              <div className="bg-slate-900 border border-rose-500/40 px-4 py-3 rounded-2xl space-y-1">
                <span className="text-2xl sm:text-4xl font-black text-white block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">MINS</span>
              </div>
              <span className="text-2xl font-black text-rose-500">:</span>
              <div className="bg-slate-900 border border-rose-500/40 px-4 py-3 rounded-2xl space-y-1">
                <span className="text-2xl sm:text-4xl font-black text-rose-400 block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">SECS</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-110 text-white font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-rose-600/30 transition-all active:scale-95">
              <span>UNLOCK FREE EXPRESS NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping8;
