import React, { useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Crosshair, Radio, Copy, Check, ShieldAlert, Cpu } from 'lucide-react';

export function OffersCoupon17() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const couponCode = 'TARGETHUD50';

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#060a12] text-cyan-400 rounded-3xl border border-cyan-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>SCOPE RETICLE TARGETING & EQUALIZER BARS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-sky-300 tracking-tight uppercase font-sans">
          Sci-Fi Target HUD Pro Pass
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Move your target scope over the cybernetic coupon telemetry card to lock on 50% pro discounts.
        </p>
      </div>

      {/* Main Reticle HUD Container */}
      <div className="w-full max-w-xl relative z-10">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative bg-slate-950/90 rounded-3xl p-7 sm:p-9 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.25)] space-y-6 text-left overflow-hidden group cursor-crosshair"
        >
          {/* Cursor Follow Target Reticle */}
          <motion.div
            style={{ left: mouseX, top: mouseY }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-dashed border-cyan-400 rounded-full z-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
          </motion.div>

          {/* Meta Bar */}
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-4 text-xs font-bold">
            <div className="flex items-center gap-2 text-cyan-300">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>RETICLE // SCOPE-LOCK</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-black uppercase">
              50% PRO DISCOUNT
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Cyber Target Pro Voucher
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Target locked on esports peripherals, pro software passes, and high-speed telemetry subscriptions.
            </p>
          </div>

          {/* Audio Equalizer Bars Visualizer */}
          <div className="flex items-center justify-center gap-1.5 py-2">
            {[40, 75, 55, 90, 30, 80, 60, 100, 45, 85, 70, 35].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ repeat: Infinity, duration: 1.2 + (i % 4) * 0.2, ease: 'easeInOut' }}
                className="w-1.5 bg-gradient-to-t from-cyan-600 to-sky-400 rounded-full h-8"
              />
            ))}
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-1 shadow-inner">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
              TELEMETRY PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-cyan-200 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'PRO CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span>Target Lock Scope Verification Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon17;
