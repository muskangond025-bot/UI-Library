import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Sparkles, Copy, Check, Megaphone, Star, Tag, ShoppingBag } from 'lucide-react';

const COUPON_THEMES = [
  {
    id: 1,
    discount: '50% OFF',
    title: 'MEGA FLASH SALE',
    sub: 'Valid on all premium store collections until midnight.',
    code: 'MEGASALE50',
    bgLeft: 'bg-red-600 text-white',
    bgCenter: 'bg-amber-400 text-slate-950',
    bgRight: 'bg-amber-500 text-slate-950',
    accentText: 'text-red-600',
    badgeBg: 'bg-red-500 text-white',
    ringColor: 'bg-red-400/40',
  },
  {
    id: 2,
    discount: '30% OFF',
    title: 'CYAN SUMMER DROP',
    sub: 'Get 30% instant discount on fresh summer apparel.',
    code: 'CYAN30OFF',
    bgLeft: 'bg-cyan-500 text-white',
    bgCenter: 'bg-sky-400 text-slate-950',
    bgRight: 'bg-blue-600 text-white',
    accentText: 'text-cyan-600',
    badgeBg: 'bg-cyan-600 text-white',
    ringColor: 'bg-cyan-400/40',
  },
  {
    id: 3,
    discount: '50% OFF',
    title: 'TEAL GOLD PROMO',
    sub: 'VIP member exclusive voucher stack with 50% savings.',
    code: 'TEALGOLD50',
    bgLeft: 'bg-teal-600 text-white',
    bgCenter: 'bg-yellow-300 text-slate-950',
    bgRight: 'bg-yellow-400 text-slate-950',
    accentText: 'text-teal-700',
    badgeBg: 'bg-teal-700 text-white',
    ringColor: 'bg-teal-400/40',
  },
  {
    id: 4,
    discount: '30% OFF',
    title: 'MINT SUNSET DEAL',
    sub: 'Limited edition promo coupon stack for featured items.',
    code: 'SUNSET30',
    bgLeft: 'bg-emerald-500 text-white',
    bgCenter: 'bg-cyan-300 text-slate-950',
    bgRight: 'bg-amber-400 text-slate-950',
    accentText: 'text-emerald-700',
    badgeBg: 'bg-emerald-700 text-white',
    ringColor: 'bg-emerald-400/40',
  },
];

export function OffersCoupon1() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = COUPON_THEMES[activeIdx];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Design: Megaphone Sale Voucher • Animation: Soundwave Pulse & Confetti Drift</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Megaphone Promo Coupons
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Choose your preferred promotional theme voucher below. Click to copy your discount code!
          </p>
        </div>

        {/* Theme Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {COUPON_THEMES.map((theme, idx) => (
            <button
              key={theme.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                activeIdx === idx
                  ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/30'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Option {theme.id}: {theme.discount}
            </button>
          ))}
        </div>

        {/* Main Ticket Graphic Showcase */}
        <div className="py-6 flex justify-center">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row border-4 border-white/20 drop-shadow-2xl"
          >
            {/* Left Semi-circle Cutout */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950 z-30 border-r-2 border-white/20 pointer-events-none" />

            {/* Right Semi-circle Cutout */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950 z-30 border-l-2 border-white/20 pointer-events-none" />

            {/* Left Section: Megaphone Graphic & Logo */}
            <div className={`md:w-5/12 p-6 sm:p-8 ${current.bgLeft} flex flex-col justify-between relative overflow-hidden min-h-[220px]`}>
              {/* Confetti Particles */}
              <div className="absolute top-3 left-4 w-3 h-3 bg-yellow-300 transform rotate-12 opacity-80" />
              <div className="absolute bottom-4 right-6 w-2.5 h-2.5 bg-white transform -rotate-45 opacity-80" />
              <div className="absolute top-10 right-8 w-2 h-2 bg-yellow-200 transform rotate-45 opacity-70" />

              {/* Logo Label */}
              <div className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-white/90">
                <span className="px-2 py-0.5 rounded bg-black/20 border border-white/30 text-xs">LOGO</span>
                <span>STORE DEALS</span>
              </div>

              {/* Megaphone Vector Graphic with Pulsing Soundwave Rings */}
              <div className="relative my-4 flex items-center justify-center">
                {/* Soundwave Pulse Rings */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className={`absolute w-28 h-28 rounded-full ${current.ringColor}`}
                />
                <motion.div
                  animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: 'easeInOut' }}
                  className={`absolute w-36 h-36 rounded-full ${current.ringColor}`}
                />

                {/* Megaphone Icon Frame */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl relative z-10 transform -rotate-12">
                  <Megaphone className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-lg stroke-[2.5]" />
                </div>
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/80">
                EXCLUSIVE VOUCHER ★ 2026
              </span>
            </div>

            {/* Middle Section: Speech Bubble & Offer Text */}
            <div className={`md:w-5/12 p-6 sm:p-8 ${current.bgCenter} flex flex-col justify-between text-left relative overflow-hidden`}>
              {/* Speech Bubble Tail Graphic */}
              <div className="space-y-2">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-950 text-white font-black text-xs uppercase tracking-wider shadow-md">
                  {current.title}
                </div>

                {/* Speech Bubble Discount Box */}
                <div className="p-4 rounded-2xl bg-white shadow-xl border border-slate-200 text-slate-950 relative my-2">
                  <span className="text-xs font-bold text-slate-500 uppercase block">LIMITED OFFER</span>
                  <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none">
                    SALE <span className={current.accentText}>{current.discount}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-medium leading-relaxed">
                    {current.sub}
                  </p>
                </div>
              </div>

              {/* Code Copy Button */}
              <button
                onClick={() => copyCode(current.code)}
                className="w-full mt-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'CODE COPIED!' : `COPY CODE: ${current.code}`}</span>
              </button>
            </div>

            {/* Perforated Divider Line */}
            <div className="hidden md:flex flex-col justify-between items-center py-4 bg-slate-950/20 w-3 z-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-slate-950/40" />
              ))}
            </div>

            {/* Right Side Stub: Vertical Coupon Text */}
            <div className={`md:w-2/12 p-4 sm:p-6 ${current.bgRight} flex flex-row md:flex-col items-center justify-between relative overflow-hidden border-t-2 md:border-t-0 md:border-l-2 border-dashed border-slate-950/30`}>
              <div className="hidden md:flex items-center gap-1 font-mono text-xs text-slate-950 font-extrabold">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                <span>OFFICIAL</span>
              </div>

              {/* Rotated Stub Text */}
              <div className="font-black text-xl sm:text-2xl tracking-widest text-slate-950 uppercase md:rotate-90 md:whitespace-nowrap my-auto drop-shadow-sm">
                COUPON BUY NOW ★
              </div>

              <div className="hidden md:flex flex-col items-center gap-1 text-[10px] font-bold text-slate-950">
                <span>NO. 88392</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon1;
