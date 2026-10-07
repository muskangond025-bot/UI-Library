import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, Tag, Star, ArrowRight, Gift } from 'lucide-react';

const LUXURY_VOUCHERS = [
  {
    id: 1,
    brand: 'BEAUTY BY CHERIE',
    title: 'Holiday Voucher',
    discount: '40% OFF',
    sub: 'Give the gift of style! Explore luxury fashion & beauty collections.',
    valid: 'Valid Until March 2026',
    code: 'LUXURY40',
    bg: 'bg-gradient-to-br from-[#3b0910] via-[#59101b] to-[#250408]',
    border: 'border-amber-400/40',
    textColor: 'text-amber-100',
    circleBg: 'bg-amber-400/20 text-amber-200',
    badge: '40% OFF VOUCHER',
  },
  {
    id: 2,
    brand: 'GLAMOUR & SPA',
    title: 'Nails & Beauty Pass',
    discount: '30% OFF',
    sub: 'Use this voucher for premium salon treatments & luxury cosmetics.',
    valid: 'Valid Until April 2026',
    code: 'GLAMOUR30',
    bg: 'bg-gradient-to-br from-[#FAF6F0] via-[#F3ECE0] to-[#E8DCB8]',
    border: 'border-[#59101b]/30',
    textColor: 'text-[#3b0910]',
    circleBg: 'bg-[#59101b] text-white',
    badge: '30% OFF VOUCHER',
  },
  {
    id: 3,
    brand: 'ROYAL ESSENCE',
    title: 'Executive Perfume Gift',
    discount: '50% OFF',
    sub: 'Exclusive member voucher for signature fragrance collections.',
    valid: 'Valid Until May 2026',
    code: 'ESSENCE50',
    bg: 'bg-gradient-to-br from-[#4A0E17] via-[#731929] to-[#360810]',
    border: 'border-amber-300/40',
    textColor: 'text-amber-100',
    circleBg: 'bg-amber-300/20 text-amber-200',
    badge: '50% OFF VOUCHER',
  },
  {
    id: 4,
    brand: 'HAUTE COUTURE',
    title: 'VIP Salon Voucher',
    discount: '25% OFF',
    sub: 'Applicable across all haute couture fashion & styling services.',
    valid: 'Valid Until June 2026',
    code: 'VIPSTYLE25',
    bg: 'bg-gradient-to-br from-[#FFF9F2] via-[#F5EAD9] to-[#E4D1B9]',
    border: 'border-[#731929]/30',
    textColor: 'text-[#4A0E17]',
    circleBg: 'bg-[#731929] text-white',
    badge: '25% OFF VOUCHER',
  },
];

export function OffersCoupon2() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const copyCode = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#180407] text-white rounded-3xl border border-[#4A0E17] shadow-2xl relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#731929]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#731929]/30 border border-[#731929] text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Design: Luxury Stacked Voucher Deck • Animation: Scroll-Triggered Fan-Out Spread</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 tracking-tight">
            Luxury Gift Voucher Collection
          </h2>
          <p className="text-amber-100/70 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Scroll into view to watch the single stacked voucher deck spread smoothly into 4 luxury gift cards. Hover or click to copy promo code!
          </p>
        </div>

        {/* Scroll Spreading Voucher Cards Stack */}
        <div className="w-full max-w-2xl mx-auto relative pt-4 pb-8 min-h-[620px] sm:min-h-[560px]">
          {LUXURY_VOUCHERS.map((voucher, idx) => {
              const isDark = voucher.bg.includes('from-[#3b0910]') || voucher.bg.includes('from-[#4A0E17]');
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={voucher.id}
                  initial={{ y: 0, rotate: 0, scale: 0.95 }}
                  whileInView={{
                    y: idx * 135,
                    rotate: idx % 2 === 0 ? -2 : 2,
                    scale: 1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 14,
                    delay: idx * 0.12,
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    zIndex: isHovered ? 40 : 10 + idx,
                  }}
                  className={`w-full absolute top-0 p-6 sm:p-8 rounded-3xl border-2 ${voucher.border} ${voucher.bg} shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 text-left overflow-hidden ${
                    isHovered ? 'scale-105 shadow-[0_25px_60px_rgba(115,25,41,0.6)]' : ''
                  }`}
                >
                  {/* Decorative Background Curved Oval Overlay */}
                  <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 pointer-events-none" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                    {/* Left Column: Voucher Branding & Text */}
                    <div className="space-y-3 max-w-md">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest opacity-80">
                          {voucher.brand}
                        </span>
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      </div>

                      <h3 className={`text-2xl sm:text-3xl font-serif font-bold ${voucher.textColor}`}>
                        {voucher.title}
                      </h3>

                      <p className={`text-xs sm:text-sm font-sans opacity-90 leading-relaxed ${voucher.textColor}`}>
                        {voucher.sub}
                      </p>

                      <div className="text-[11px] font-mono opacity-70 tracking-wider pt-1">
                        {voucher.valid}
                      </div>
                    </div>

                    {/* Right Column: Discount & Copy Code CTA */}
                    <div className="flex flex-col items-start sm:items-end justify-between space-y-4 w-full sm:w-auto">
                      {/* Big Discount Badge Circle */}
                      <div className={`px-6 py-4 rounded-2xl ${voucher.circleBg} shadow-lg text-center font-serif font-black`}>
                        <span className="text-xs font-mono font-bold block uppercase tracking-widest">DISCOUNT</span>
                        <span className="text-3xl sm:text-4xl leading-none">{voucher.discount}</span>
                      </div>

                      {/* Code Button */}
                      <button
                        onClick={() => copyCode(voucher.id, voucher.code)}
                        className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                          isDark
                            ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                            : 'bg-[#4A0E17] hover:bg-[#731929] text-white'
                        }`}
                      >
                        {copiedId === voucher.id ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>COPIED!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{voucher.code}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon2;
