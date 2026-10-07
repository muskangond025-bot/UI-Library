import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, ArrowRight, ShieldCheck, Crown } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping20({ section }: SectionProps) {
  const [isSubscribe, setIsSubscribe] = useState(true);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-cyan-900/40 relative overflow-hidden">
      
      {/* Subtle Neon Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10 text-center">
        
        <div className="space-y-3 max-w-lg mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
            NEON GLASS SUBSCRIPTION SWITCHER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 tracking-tight">
            Never Pay For Shipping Again
          </h2>
          <p className="text-slate-400 text-sm">
            Toggle subscription mode to instantly waive all future delivery costs on recurring order replenishments.
          </p>
        </div>

        {/* Interactive Toggle Pill */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-xs font-bold font-mono transition-colors ${!isSubscribe ? 'text-white' : 'text-slate-500'}`}>
            ONE-TIME ORDER ($9.99 SHIPPING)
          </span>

          <button
            onClick={() => setIsSubscribe(!isSubscribe)}
            className="w-16 h-9 rounded-full bg-slate-900 border border-cyan-500/40 p-1 relative focus:outline-none transition-colors"
          >
            <motion.div
              className="w-7 h-7 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              animate={{ x: isSubscribe ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </button>

          <span className={`text-xs font-bold font-mono flex items-center gap-1 transition-colors ${isSubscribe ? 'text-cyan-400' : 'text-slate-500'}`}>
            <Crown className="w-3.5 h-3.5 text-cyan-400" />
            <span>SUBSCRIBE & UNLOCK FREE SHIPPING</span>
          </span>
        </div>

        {/* Dynamic Card Display */}
        <div className="max-w-xl mx-auto bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-cyan-500/40 p-8 shadow-2xl text-left space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold block">SELECTED CHECKOUT MODE</span>
              <h3 className="text-xl font-bold text-white">
                {isSubscribe ? 'Subscribe & Save Plan' : 'One-Time Direct Order'}
              </h3>
            </div>

            <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
              isSubscribe ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
            }`}>
              {isSubscribe ? 'DELIVERY: $0.00' : 'DELIVERY: $9.99'}
            </span>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{isSubscribe ? 'Guaranteed zero-cost express air delivery on every cycle' : 'Standard 3-5 day ground delivery'}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{isSubscribe ? '15% Extra product discount auto-applied' : 'Standard MSRP item price'}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{isSubscribe ? 'Pause, skip, or cancel delivery schedule anytime with 1-click' : 'One-off delivery transaction'}</span>
            </div>
          </div>

          <button className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/20 active:scale-95 transition-all">
            <span>PROCEED WITH {isSubscribe ? '$0 FREE SHIPPING' : '$9.99 SHIPPING'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping20;
