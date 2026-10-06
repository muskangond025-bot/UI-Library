const fs = require('fs');
const path = require('path');

const baseDir = 'c:/UI Library/src/components/sections/offers/01-offers-hero';

const variants = [
  {
    num: 1,
    id: 'offers-hero-01',
    compName: 'OffersHero1',
    heading: 'Cinematic Deal Reel — Horizontal Camera Pan',
    description: 'Large campaign visual with oversized discount typography over a cinematic horizontal panning image backdrop.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface OffersHeroProps {
  data?: any;
  section?: any;
}

export function OffersHero1({ data, section }: OffersHeroProps) {
  const settings = section?.settings || data || {};
  const eyebrow = settings.eyebrow || 'LIMITED-TIME OFFER';
  const title = settings.title || 'UP TO 50% OFF';
  const description = settings.description || 'Discover selected luxury styles at exclusive prices for a limited time.';
  const code = settings.code || 'DEAL50';
  const validUntil = settings.validUntil || 'ENDS 30 SEPTEMBER';
  const primaryCta = settings.primaryCta || 'SHOP THE DEAL';
  const secondaryCta = settings.secondaryCta || 'VIEW ALL OFFERS';
  const bgImage = settings.bgImage || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80';

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl">
      {/* Background Pan Image */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.img
          src={bgImage}
          alt="Campaign Background"
          className="w-[120%] h-full object-cover max-w-none"
          animate={{ x: ['0%', '-12%', '0%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col justify-center min-h-[540px]">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 uppercase"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Coupon and Validity */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/60 px-4 py-2 rounded-xl text-xs font-mono text-amber-300">
              <Tag className="w-4 h-4 text-amber-400" />
              <span>USE CODE: <strong className="text-white text-sm font-bold tracking-wider">{code}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{validUntil}</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <span>{primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-all">
              {secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero1;
`
  },
  {
    num: 2,
    id: 'offers-hero-02',
    compName: 'OffersHero2',
    heading: 'Split Offer Stage — Sliding Divider',
    description: 'Two-column promotional layout featuring an interactive vertical sliding divider that responds to pointer position.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Percent, Flame } from 'lucide-react';

export function OffersHero2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data || {};
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(20, Math.min(80, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[500px] bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 select-none shadow-2xl"
    >
      {/* Left Stage */}
      <div 
        className="absolute inset-y-0 left-0 bg-neutral-900 p-8 md:p-14 flex flex-col justify-center z-10 transition-all duration-75"
        style={{ width: \`\${sliderPos}%\` }}
      >
        <div className="max-w-md space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">
            <Flame className="w-3.5 h-3.5" />
            <span>FLASH OFFER STAGE</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            FLAT <span className="text-red-500">40% OFF</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
            Unlock premium seasonal releases with direct checkout vouchers. Move slider to reveal campaign details.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2">
              <span>SHOP DEAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="px-3.5 py-2.5 bg-neutral-800 rounded-lg text-xs font-mono text-neutral-300">
              CODE: <strong className="text-white">SPLIT40</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Right Stage (Visual Image) */}
      <div 
        className="absolute inset-y-0 right-0 bg-cover bg-center transition-all duration-75"
        style={{ 
          width: \`\${100 - sliderPos}%\`,
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/40" />
        <div className="absolute bottom-8 right-8 bg-neutral-900/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-neutral-700 text-right">
          <div className="text-xs text-neutral-400 uppercase font-semibold">Featured Edit</div>
          <div className="text-lg font-bold text-white">Autumn Minimalist</div>
        </div>
      </div>

      {/* Sliding Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-red-500 z-20 cursor-ew-resize shadow-[0_0_15px_rgba(239,68,68,0.8)]"
        style={{ left: \`\${sliderPos}%\` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-lg">
          ↔
        </div>
      </div>
    </div>
  );
}

export default OffersHero2;
`
  },
  {
    num: 3,
    id: 'offers-hero-03',
    compName: 'OffersHero3',
    heading: 'Giant Discount Number — Scale & Clip Morph',
    description: 'Massive 50% discount numeral acting as the main visual anchor with clip-path reveal and scale morph transitions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowUpRight, Zap } from 'lucide-react';

export function OffersHero3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data || {};

  return (
    <div className="relative w-full py-16 md:py-24 px-6 bg-emerald-950 text-white rounded-3xl overflow-hidden border border-emerald-800/80 shadow-2xl">
      {/* Background Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        {/* Giant Numeral Column */}
        <div className="lg:col-span-7 flex justify-center lg:justify-start select-none">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.95, 1.02, 0.95], opacity: 1 }}
            transition={{ 
              scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.6 }
            }}
            className="relative font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-emerald-200 via-teal-300 to-emerald-600 text-[11rem] sm:text-[16rem] lg:text-[18rem]"
          >
            50<span className="text-7xl sm:text-9xl text-emerald-400 font-bold">%</span>
            <span className="block text-2xl sm:text-4xl tracking-widest text-emerald-300 uppercase -mt-8 font-extrabold">OFF EVERYTHING</span>
          </motion.div>
        </div>

        {/* Supporting Details */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>MEGA SAVINGS SEASON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Elevate Your Style For Half The Price.
          </h2>

          <p className="text-emerald-200/80 text-sm leading-relaxed">
            Take advantage of site-wide price drops on all essential collections. Discount applied instantly at checkout.
          </p>

          <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 inline-block text-left w-full">
            <div className="text-xs text-emerald-400 uppercase font-medium">Coupon Voucher</div>
            <div className="text-lg font-mono font-bold text-white tracking-widest mt-0.5">CODE: GIANT50</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/20">
              <span>CLAIM OFFER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero3;
`
  },
  {
    num: 4,
    id: 'offers-hero-04',
    compName: 'OffersHero4',
    heading: 'Offer Marquee — Continuous Motion Banner',
    description: 'High-energy banner with continuous horizontal marquee rows of live deals and promo tags without document overflow.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, Flame } from 'lucide-react';

export function OffersHero4({ data, section }: { data?: any; section?: any }) {
  const marqueeItems = ['50% OFF SITEWIDE', 'CODE: MARQUEE60', 'FREE SHIPPING ON ₹999+', 'LIMITED TIME DEALS', 'FLASH SALE LIVE NOW'];

  return (
    <div className="relative w-full py-16 bg-zinc-950 text-white rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Top Marquee Track */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-zinc-800 py-3 bg-zinc-900/60 mb-8 select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="inline-flex items-center gap-8"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-300 uppercase">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>{item}</span>
              <span className="text-zinc-600">//</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Focus Card */}
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase rounded-full">
          EXCLUSIVE PROMOTION
        </span>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
          EXPLORE UNBEATABLE <span className="text-orange-500">SAVINGS TODAY</span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
          Shop top-rated categories with instant savings up to 60% off during our seasonal promotional highlight.
        </p>

        <div className="pt-2 flex justify-center items-center gap-4">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
            <span>SHOP THE MARQUEE SALE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Marquee Track */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-zinc-800 py-3 bg-zinc-900/60 mt-8 select-none">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="inline-flex items-center gap-8"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-400 uppercase">
              <Tag className="w-3.5 h-3.5 text-zinc-500" />
              <span>{item}</span>
              <span className="text-zinc-700 font-normal">●</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OffersHero4;
`
  }
];

// We will add remaining variants 5..20 in next steps
console.log("Script base initialized");
