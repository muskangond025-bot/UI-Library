import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plane, Calendar, MapPin, Phone, Mail, Globe, Copy, Check, Sparkles, Tag, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

export function OffersCoupon3() {
  const [selectedDays, setSelectedDays] = useState<'30' | '60' | '90'>('30');
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // ReactBits Spotlight Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

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

  const offerData = {
    '30': { title: '30 Days Flight Pass', discount: '35% OFF', code: 'FLYVISA30', price: '$299', origPrice: '$450' },
    '60': { title: '60 Days Express Pass', discount: '45% OFF', code: 'FLYVISA60', price: '$499', origPrice: '$899' },
    '90': { title: '90 Days Premium Pass', discount: '50% OFF', code: 'FLYVISA90', price: '$699', origPrice: '$1399' },
  };

  const currentOffer = offerData[selectedDays];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentOffer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 min-h-[780px] flex flex-col items-center justify-center relative overflow-hidden rounded-3xl border border-sky-200/80 shadow-2xl">
      {/* Floating Animated Cloud Background Particles */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        className="absolute top-6 left-10 w-72 h-36 bg-white/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [30, -30, 30], y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-96 h-48 bg-white/50 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header Info */}
      <div className="max-w-3xl text-center space-y-3 mb-10 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 backdrop-blur-md border border-sky-300/40 text-sky-200 text-xs font-mono font-semibold tracking-wider uppercase shadow-md">
          <Plane className="w-4 h-4 text-sky-400 animate-pulse" />
          <span>REACTBITS SPOTLIGHT & MAGNET ANIMATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight drop-shadow-sm font-sans">
          Exclusive Flight & Visa Coupon Pass
        </h2>
        <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Claim instant flight discount vouchers for 30, 60 or 90 days visa change packages with live barcode scanner verification.
        </p>
      </div>

      {/* Main Boarding Pass Wrapper */}
      <div className="w-full max-w-lg z-10">
        {/* Days Selector Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-900/10 backdrop-blur-md rounded-2xl mb-6 border border-white/40 shadow-inner">
          {(['30', '60', '90'] as const).map((days) => (
            <button
              key={days}
              onClick={() => setSelectedDays(days)}
              className={`flex-1 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                selectedDays === days
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-[1.02]'
                  : 'text-slate-800 hover:bg-white/40'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{days} DAYS</span>
            </button>
          ))}
        </div>

        {/* Boarding Pass Ticket Card with ReactBits Spotlight Follow Effect */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl shadow-[0_30px_70px_rgba(14,165,233,0.3)] border border-sky-200/90 overflow-hidden text-slate-900 group"
        >
          {/* ReactBits Spotlight Glowing Radial Cursor Follower */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.15), transparent 80%)`
              ),
            }}
          />

          {/* Ticket Header Image Area */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-sky-900">
            <img
              src="/travel_airplane_clouds.jpg"
              alt="Visa Change By Flight"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Flight Brand Logo Header */}
            <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <Compass className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold font-mono text-white tracking-wider">EAZYGO TRAVEL</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs font-mono uppercase shadow-md animate-bounce">
                {currentOffer.discount}
              </span>
            </div>

            {/* Vertical Ticket Text Header Overlay */}
            <div className="absolute bottom-4 left-5 z-20 text-left">
              <span className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-widest block">
                SPECIAL FLIGHT PASS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mt-1">
                VISA CHANGE BY FLIGHT
              </h3>
            </div>
          </div>

          {/* Perforated Divider Line with Notch Cutouts */}
          <div className="relative bg-white py-3 border-y border-dashed border-slate-300 flex items-center justify-between px-6 z-20">
            {/* Left Notch */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-sky-200 border-r border-slate-300" />
            {/* Perforated Dashed Line */}
            <div className="w-full border-t-2 border-dashed border-slate-300" />
            {/* Right Notch */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-sky-200 border-l border-slate-300" />
          </div>

          {/* Ticket Details & Offer Body */}
          <div className="p-6 sm:p-8 bg-white space-y-6 text-left relative z-20">
            {/* Price & Package Info */}
            <div className="flex items-end justify-between border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">
                  SELECTED OPTION
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-0.5">{currentOffer.title}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 line-through mr-1.5 font-mono">{currentOffer.origPrice}</span>
                <span className="text-3xl font-black text-sky-600 font-mono">{currentOffer.price}</span>
              </div>
            </div>

            {/* Contact & Location Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Muhaisnah 2, Near RTA Bus Station, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <span>+971 04 227 7132 / 052 931 0366</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <span>info@eazygotravels.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-600 shrink-0" />
                <span>www.ezaygotravels.com</span>
              </div>
            </div>

            {/* ReactBits Magnet Button (Magnetic Hover Pull Effect) */}
            <div className="pt-2 flex flex-col items-center">
              <motion.button
                ref={btnRef}
                style={{ x: springBtnX, y: springBtnY }}
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                onClick={handleCopy}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-mono font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-xl shadow-sky-600/30 active:scale-95 transition-all"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-300" /> : <Copy className="w-5 h-5 text-sky-200" />}
                <span>{copied ? 'VOUCHER COPIED TO CLIPBOARD!' : `COPY CODE: ${currentOffer.code}`}</span>
              </motion.button>
            </div>

            {/* Barcode Section with ReactBits Animated Laser Scanner Line */}
            <div className="pt-4 border-t border-slate-100 flex flex-col items-center space-y-2 relative overflow-hidden rounded-xl p-2 bg-slate-50">
              {/* ReactBits Animated Laser Scanner Beam */}
              <motion.div
                animate={{ y: ['-100%', '300%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-[0_0_12px_rgba(14,165,233,1)] z-10 pointer-events-none"
              />

              {/* Realistic SVG Barcode */}
              <div className="h-14 w-full max-w-xs flex items-center justify-between gap-1 px-4 py-1">
                {[4, 2, 6, 1, 3, 7, 2, 5, 2, 4, 8, 1, 3, 5, 2, 7, 3, 1, 4, 6, 2, 4, 8, 3, 1, 5, 2, 6].map((w, idx) => (
                  <div
                    key={idx}
                    className="h-full bg-slate-900 rounded-sm"
                    style={{ width: `${w * 1.5}px` }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-[0.25em] font-semibold">
                * TICKET-{selectedDays}D-VISA-2026-PASS *
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Official Boarding Pass Coupon • Verified EazyGo Partner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon3;
