import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Utensils, Sparkles, Copy, Check, ShieldCheck, Flame } from 'lucide-react';

export function OffersCoupon12() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'GOURMET30';

  // ReactBits Magnet Button Hover Effect
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springBtnX = useSpring(btnX, springConfig);
  const springBtnY = useSpring(btnY, springConfig);

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    btnX.set((e.clientX - centerX) * 0.35);
    btnY.set((e.clientY - centerY) * 0.35);
  };

  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#160d08] text-amber-100 rounded-3xl border border-amber-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Sizzling Steam Particle Drift */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-10 left-1/4 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>REACTBITS MAGNETIC BUTTON & STEAM DRIFT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 tracking-tight font-serif">
          Foodie Feast Culinary Pass
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-lg mx-auto">
          Taste the extraordinary with 30% OFF fine dining, gourmet takeaways, and artisan chef specials.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-[#24140a] via-[#1a0e07] to-black rounded-3xl p-7 sm:p-9 border-2 border-amber-600/40 shadow-[0_25px_60px_rgba(217,119,6,0.3)] space-y-6 text-left overflow-hidden group"
        >
          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-amber-600/20 pb-4 font-sans">
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                GOURMET DINING PRIVILEGE
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black font-mono uppercase">
              30% OFF TOTAL BILL
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Artisan Culinary Voucher
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 font-sans leading-relaxed">
              Valid on all dine-in reservations and gourmet delivery packages at partner restaurants.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-black/80 border border-amber-500/40 text-center space-y-1 shadow-inner font-mono">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
              FINE DINING PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-amber-200 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* ReactBits Magnet Button */}
          <div className="pt-1 flex flex-col items-center font-sans">
            <motion.button
              ref={btnRef}
              style={{ x: springBtnX, y: springBtnY }}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'GOURMET VOUCHER COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-300/60 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Guaranteed Instant Dining Discount Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon12;
