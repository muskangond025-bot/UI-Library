const fs = require('fs');
const path = require('path');

const baseDir = 'c:/UI Library/src/components/sections/offers/01-offers-hero';

const variants = [
  // VARIANT 1
  {
    num: 1,
    id: 'offers-hero-01',
    compName: 'OffersHero1',
    heading: 'Cinematic Deal Reel — Horizontal Camera Pan',
    description: 'Large campaign visual with oversized discount typography over a cinematic horizontal panning image backdrop.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, Clock, Sparkles } from 'lucide-react';

export function OffersHero1({ data, section }: { data?: any; section?: any }) {
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
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.img
          src={bgImage}
          alt="Campaign Background"
          className="w-[125%] h-full object-cover max-w-none"
          animate={{ x: ['0%', '-12%', '0%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

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

  // VARIANT 2
  {
    num: 2,
    id: 'offers-hero-02',
    compName: 'OffersHero2',
    heading: 'Split Offer Stage — Sliding Divider',
    description: 'Two-column promotional layout featuring an interactive vertical sliding divider that responds to pointer position.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

export function OffersHero2({ data, section }: { data?: any; section?: any }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(25, Math.min(75, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[500px] bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 select-none shadow-2xl"
    >
      <div 
        className="absolute inset-y-0 left-0 bg-neutral-900 p-8 md:p-14 flex flex-col justify-center z-10 transition-all duration-75"
        style={{ width: sliderPos + '%' }}
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

      <div 
        className="absolute inset-y-0 right-0 bg-cover bg-center transition-all duration-75"
        style={{ 
          width: (100 - sliderPos) + '%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/40" />
        <div className="absolute bottom-8 right-8 bg-neutral-900/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-neutral-700 text-right">
          <div className="text-xs text-neutral-400 uppercase font-semibold">Featured Edit</div>
          <div className="text-lg font-bold text-white">Autumn Minimalist</div>
        </div>
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-red-500 z-20 cursor-ew-resize shadow-[0_0_15px_rgba(239,68,68,0.8)]"
        style={{ left: sliderPos + '%' }}
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

  // VARIANT 3
  {
    num: 3,
    id: 'offers-hero-03',
    compName: 'OffersHero3',
    heading: 'Giant Discount Number — Scale & Clip Morph',
    description: 'Massive 50% discount numeral acting as the main visual anchor with clip-path reveal and scale morph transitions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export function OffersHero3({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 md:py-24 px-6 bg-emerald-950 text-white rounded-3xl overflow-hidden border border-emerald-800/80 shadow-2xl">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
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

  // VARIANT 4
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
  },

  // VARIANT 5
  {
    num: 5,
    id: 'offers-hero-05',
    compName: 'OffersHero5',
    heading: 'Ticket Offer Hero — SVG Edge Draw',
    description: 'Oversized luxury voucher ticket composition featuring an interactive SVG border edge draw on hover.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy, Check, ArrowRight } from 'lucide-react';

export function OffersHero5({ data, section }: { data?: any; section?: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('TICKET50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full py-16 px-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl flex items-center justify-center">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl p-8 md:p-12 border border-amber-500/30 overflow-hidden shadow-2xl group">
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800" />
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl">
          <motion.rect
            x="2" y="2" width="99.5%" height="99.5%" rx="24"
            fill="none"
            stroke="#f59e0b" strokeWidth="2"
            strokeDasharray="400"
            initial={{ strokeDashoffset: 400 }}
            whileHover={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <Ticket className="w-4 h-4" />
              <span>OFFICIAL VIP VOUCHER</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
              SAVE <span className="text-amber-400">FLAT 50%</span> OFF
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Valid on all new arrivals, luxury apparel, and limited drops. Redeem at checkout before September 30.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                <span>REDEEM TICKET</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-dashed border-slate-800 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center items-center text-center space-y-3">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">COUPON CODE</div>
            <div className="px-5 py-3 bg-slate-900 rounded-xl border border-slate-700 text-lg font-mono font-bold text-amber-400 tracking-wider">
              TICKET50
            </div>
            <button 
              onClick={handleCopy}
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'CLICK TO COPY CODE'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero5;
`
  },

  // VARIANT 6
  {
    num: 6,
    id: 'offers-hero-06',
    compName: 'OffersHero6',
    heading: '3D Deal Object — Cursor Tilt',
    description: 'Physical-style promotional card utilizing CSS 3D perspective transform and smooth mouse position tracking tilt.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export function OffersHero6({ data, section }: { data?: any; section?: any }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y * 0.04, y: x * 0.04 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full py-20 px-6 bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-3xl perspective-1000"
      >
        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            rotateX: rotate.x,
            rotateY: rotate.y
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-8 sm:p-14 rounded-3xl border border-indigo-500/40 shadow-[0_25px_50px_-12px_rgba(79,70,229,0.35)] space-y-6"
        >
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>3D SPATIAL PROMO</span>
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              VERIFIED OFFER
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none">
              FLAT <span className="text-indigo-400">45% OFF</span>
            </h1>
            <p className="text-slate-300 text-base max-w-lg font-light">
              Interactive 3D spatial promotional card. Move cursor over card to experience real-time tilt reaction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2">
              <span>EXPLORE 3D DEALS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="px-4 py-3 bg-slate-900/90 rounded-xl border border-slate-700 text-xs font-mono text-indigo-300">
              CODE: <strong className="text-white">TILT45</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OffersHero6;
`
  },

  // VARIANT 7
  {
    num: 7,
    id: 'offers-hero-07',
    compName: 'OffersHero7',
    heading: 'Image Portal Offer — Portal Scale Transition',
    description: 'Architectural image frame portal with smooth scale and distortion transitions on user interaction.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function OffersHero7({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 px-6 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTAL COLLECTION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            THE ARCHIVE <br/><span className="text-amber-400">50% OFF EDIT</span>
          </h1>
          <p className="text-stone-400 text-sm leading-relaxed">
            Step through our curated seasonal portal. Discover luxury attire and footwear with limited-run pricing.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
              <span>ENTER PORTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-t-full border-4 border-amber-500/30 overflow-hidden shadow-2xl group cursor-pointer">
            <motion.img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
              alt="Portal Edit"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-stone-900/80 backdrop-blur-md border border-stone-700 text-center">
              <div className="text-xs text-amber-400 font-bold uppercase tracking-widest">SEASONAL PASS</div>
              <div className="text-lg font-extrabold text-white">CODE: PORTAL50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero7;
`
  },

  // VARIANT 8
  {
    num: 8,
    id: 'offers-hero-08',
    compName: 'OffersHero8',
    heading: 'Stacked Deal Cards — Depth Separation',
    description: 'Multi-layered promotional card stack (50% OFF, 30% OFF, 20% OFF) that fans out in 3D depth on hover.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

export function OffersHero8({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-wider rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>TIERED STACK OFFER</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            STACK MORE, <br/><span className="text-violet-400">SAVE UP TO 50%</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Choose your promotional tier. Unlock higher discounts as your cart value grows across selected categories.
          </p>
          <button className="px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-violet-500/25">
            <span>CLAIM STACKED SAVINGS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-6 flex justify-center py-6">
          <div className="relative w-72 sm:w-80 h-72 cursor-pointer group">
            <motion.div 
              className="absolute inset-0 bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-lg flex flex-col justify-between -rotate-6 transition-transform duration-500 group-hover:-translate-x-8 group-hover:-translate-y-4 group-hover:-rotate-12"
            >
              <div className="text-xs text-slate-400 uppercase font-bold">TIER 03</div>
              <div className="text-3xl font-black text-slate-300">20% OFF</div>
              <div className="text-xs text-slate-500 font-mono">ON ₹1,999+</div>
            </motion.div>

            <motion.div 
              className="absolute inset-0 bg-slate-900 rounded-2xl p-6 border border-violet-500/40 shadow-xl flex flex-col justify-between rotate-3 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-6"
            >
              <div className="text-xs text-violet-400 uppercase font-bold">TIER 02</div>
              <div className="text-4xl font-black text-violet-300">30% OFF</div>
              <div className="text-xs text-slate-400 font-mono">ON ₹3,999+</div>
            </motion.div>

            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-900 rounded-2xl p-6 border border-violet-400 shadow-2xl flex flex-col justify-between transition-transform duration-500 group-hover:scale-105"
            >
              <div className="text-xs text-violet-200 uppercase font-bold">TOP TIER 01</div>
              <div>
                <div className="text-5xl font-black text-white">50% OFF</div>
                <div className="text-xs text-violet-200 mt-1 font-mono">CODE: STACK50</div>
              </div>
              <div className="text-xs text-violet-300 font-medium">ON ORDERS ABOVE ₹5,999</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero8;
`
  },

  // VARIANT 9
  {
    num: 9,
    id: 'offers-hero-09',
    compName: 'OffersHero9',
    heading: 'Offer Countdown Visual — Digit Flip Motion',
    description: 'Urgency-driven campaign hero with mechanical digit-flip style timer blocks for flash sales.',
    code: `import React, { useState, useEffect } from 'react';
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
`
  },

  // VARIANT 10
  {
    num: 10,
    id: 'offers-hero-10',
    compName: 'OffersHero10',
    heading: 'Editorial Deal Cover — Typographic Letter Motion',
    description: 'Luxury magazine cover layout featuring staggered typographic letter reveals and editorial typography hierarchy.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function OffersHero10({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-neutral-800 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 text-xs tracking-widest uppercase text-neutral-400 font-mono">
          <span>THE DEAL EDIT // VOL. 24</span>
          <span>AUTUMN PROMOTION</span>
          <span>50% OFF CURATION</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif tracking-tighter text-white uppercase leading-none">
            THE DEALS <span className="italic font-normal text-amber-300">ISSUE.</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            An curated compilation of signature silhouettes and seasonal staples available at exclusive 50% promotional pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">01 / DISCOUNT</div>
            <div className="text-2xl font-bold text-white">FLAT 50% REDUCTION</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">02 / CODE</div>
            <div className="text-2xl font-mono font-bold text-white">EDIT50</div>
          </div>
          <div className="flex items-end justify-start sm:justify-end">
            <button className="px-6 py-3 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
              <span>VIEW EDITORIAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero10;
`
  },

  // VARIANT 11
  {
    num: 11,
    id: 'offers-hero-11',
    compName: 'OffersHero11',
    heading: 'Cursor Spotlight Offer — Radial Light Tracking',
    description: 'Dark-mode luxury deal banner featuring an interactive cursor-driven radial spotlight.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OffersHero11({ data, section }: { data?: any; section?: any }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl select-none"
    >
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-80"
        style={{
          background: 'radial-gradient(600px circle at ' + pos.x + 'px ' + pos.y + 'px, rgba(236,72,153,0.18), transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SPOTLIGHT DEALS</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-tight">
          ILLUMINATE YOUR <span className="text-pink-500">SAVINGS // 50% OFF</span>
        </h1>

        <p className="text-slate-400 text-base max-w-xl mx-auto font-light">
          Move your cursor over the spotlight canvas to uncover hidden campaign vouchers and promotional offers.
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <button className="px-8 py-4 bg-pink-500 hover:bg-pink-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-pink-500/25 flex items-center gap-2">
            <span>UNLOCK SPOTLIGHT OFFER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="px-5 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-mono text-pink-300">
            CODE: <strong className="text-white">SPOTLIGHT50</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero11;
`
  },

  // VARIANT 12
  {
    num: 12,
    id: 'offers-hero-12',
    compName: 'OffersHero12',
    heading: 'Radial Offer — Orbital Rotational Hierarchy',
    description: 'Central discount badge surrounded by orbiting promotional micro-cards for validity, category, and promo code.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersHero12({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-24 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center min-h-[520px]">
      <div className="relative z-10 text-center space-y-4 max-w-md">
        <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 shadow-[0_0_50px_rgba(6,182,212,0.4)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-2">
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">FLAT</span>
            <span className="text-4xl font-black text-white">50%</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">OFF</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">ORBITAL PROMOTION</h2>
        <p className="text-slate-400 text-xs leading-relaxed">
          Comprehensive site-wide discount hub with automated category vouchers.
        </p>
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2">
          <span>CLAIM DEALS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-dashed border-cyan-500/20 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          CODE: RADIAL50
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          FREE SHIPPING
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          ENDS 30 SEPT
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-cyan-500/40 px-3 py-1.5 rounded-full text-[10px] font-mono text-cyan-300 shadow-md">
          VIP ACCESS
        </div>
      </motion.div>
    </div>
  );
}

export default OffersHero12;
`
  },

  // VARIANT 13
  {
    num: 13,
    id: 'offers-hero-13',
    compName: 'OffersHero13',
    heading: 'Product Reveal Deal — Image Scale & Crop Shift',
    description: 'Featured item showcase hero where image crop and scale adjust dynamically on user interaction.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

export function OffersHero13({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>FEATURED PRODUCT REVEAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            SIGNATURE DROP <br/><span className="text-emerald-400">FLAT 50% OFF</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Direct discount allocation on luxury timepieces and leather accessories. Hover over product frame to trigger detail crop expansion.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
              <span>SHOP PRODUCT REVEAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-700 group shadow-2xl cursor-pointer">
            <motion.img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
              alt="Featured Reveal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex justify-between items-center">
              <div>
                <div className="text-xs text-emerald-400 font-bold uppercase">LUXURY CHRONO</div>
                <div className="text-sm font-bold text-white">WAS ₹14,999 → NOW ₹7,499</div>
              </div>
              <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-bold rounded-lg">50% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero13;
`
  },

  // VARIANT 14
  {
    num: 14,
    id: 'offers-hero-14',
    compName: 'OffersHero14',
    heading: 'Deal Scanner — Restrained Light Scan',
    description: 'Cyber-minimalist offer hero featuring a controlled horizontal light scanner line passing across deal stats.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

export function OffersHero14({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-8 bg-zinc-950 text-white rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl">
      <motion.div
        animate={{ y: ['0%', '100%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] opacity-75 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest">
          <Cpu className="w-3.5 h-3.5" />
          <span>SYSTEM SCANNER ACTIVE</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none font-mono">
          SCAN RESULT: <span className="text-teal-400">50% DISCOUNT</span>
        </h1>

        <p className="text-zinc-400 text-sm max-w-lg mx-auto font-mono">
          [VERIFIED] Promotional algorithm active. Flat 50% discount automatically indexed for all qualifying cart items.
        </p>

        <div className="pt-2 flex justify-center items-center gap-4">
          <button className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-teal-400/20 flex items-center gap-2">
            <span>EXECUTE CHECKOUT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero14;
`
  },

  // VARIANT 15
  {
    num: 15,
    id: 'offers-hero-15',
    compName: 'OffersHero15',
    heading: 'Asymmetric Editorial Deal — Offset Layer Parallax',
    description: 'Asymmetric grid with multi-depth parallax layers moving at differential speeds on pointer shift.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersHero15({ data, section }: { data?: any; section?: any }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.03;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.03;
    setOffset({ x, y });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-neutral-950 text-white rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div 
          style={{ x: offset.x * -1, y: offset.y * -1 }}
          className="lg:col-span-7 space-y-6 z-10"
        >
          <span className="text-xs text-amber-400 font-mono uppercase tracking-widest font-bold">ASYMMETRIC PARALLAX</span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            SAVINGS IN <br/><span className="text-amber-400">HIGH MOTION // 50%</span>
          </h1>
          <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
            Multi-layered editorial composition with offset parallax movement. Unlock flat 50% off sitewide.
          </p>
          <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2">
            <span>EXPLORE PARALLAX OFFER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div 
          style={{ x: offset.x * 1.5, y: offset.y * 1.5 }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full h-80 rounded-3xl bg-neutral-900 border border-neutral-700 p-8 flex flex-col justify-between shadow-2xl">
            <div className="text-xs text-neutral-400 font-mono">PARALLAX LAYER 02</div>
            <div className="text-4xl font-black text-white">CODE: ASYM50</div>
            <div className="text-xs text-amber-400 font-bold uppercase">APPLIED AT CHECKOUT</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OffersHero15;
`
  },

  // VARIANT 16
  {
    num: 16,
    id: 'offers-hero-16',
    compName: 'OffersHero16',
    heading: 'Magnetic CTA Hero — Pointer Radius Tracking',
    description: 'Minimalist hero centered around a magnetic primary CTA button that reacts smoothly to cursor proximity.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Magnet } from 'lucide-react';

export function OffersHero16({ data, section }: { data?: any; section?: any }) {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btnBox = e.currentTarget.querySelector('button')?.getBoundingClientRect();
    if (!btnBox) return;

    const btnCenterX = btnBox.left + btnBox.width / 2;
    const btnCenterY = btnBox.top + btnBox.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < 140) {
      setBtnPos({ x: (e.clientX - btnCenterX) * 0.35, y: (e.clientY - btnCenterY) * 0.35 });
    } else {
      setBtnPos({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl text-center select-none"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
          <Magnet className="w-3.5 h-3.5" />
          <span>MAGNETIC CTA INTERACTION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
          ATTRACT YOUR <span className="text-blue-400">50% DISCOUNT</span>
        </h1>

        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Hover your mouse near the CTA button below to experience magnetic attraction effect.
        </p>

        <div className="pt-6 flex justify-center">
          <motion.button
            animate={{ x: btnPos.x, y: btnPos.y }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="px-10 py-5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/30 flex items-center gap-3 cursor-pointer"
          >
            <span>MAGNETIC CHECKOUT</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero16;
`
  },

  // VARIANT 17
  {
    num: 17,
    id: 'offers-hero-17',
    compName: 'OffersHero17',
    heading: 'Liquid Offer — Blob Deformation',
    description: 'Organic promotional card featuring dynamic liquid SVG shape deformation morphing behind discount metrics.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight } from 'lucide-react';

export function OffersHero17({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <motion.svg
          viewBox="0 0 200 200"
          className="w-96 h-96 fill-purple-600 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M44.7,-53.4C56.9,-42.2,65.1,-26.8,66.8,-10.6C68.5,5.6,63.7,22.6,54.1,36.5C44.5,50.4,30.1,61.2,13.7,64.7C-2.7,68.2,-21.1,64.4,-36.8,55.1C-52.5,45.8,-65.5,31,-68.8,13.9C-72.1,-3.2,-65.7,-22.6,-54.6,-35.8C-43.5,-49,-27.7,-56.1,-11.7,-58.3C4.3,-60.5,20.3,-57.8,32.5,-53.4Z" transform="translate(100 100)" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest">
          <Droplets className="w-3.5 h-3.5" />
          <span>FLUID PROMOTION</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-tight">
          LIQUID DEALS <br/><span className="text-purple-400">UP TO 70% OFF</span>
        </h1>

        <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
          Dynamic promotional shape deformation backdrop. Redeem instant fluid discount code during checkout.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button className="px-8 py-4 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2">
            <span>SHOP FLUID DEALS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero17;
`
  },

  // VARIANT 18
  {
    num: 18,
    id: 'offers-hero-18',
    compName: 'OffersHero18',
    heading: 'Offer Path — SVG Stepped Path Draw',
    description: 'Customer journey offer hero with a progressive SVG path connecting Discover → Save → Shop stages.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersHero18({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs text-sky-400 font-mono uppercase tracking-widest font-bold">SAVINGS JOURNEY</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            3 STEPS TO <span className="text-sky-400">50% OFF</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">1</div>
            <h3 className="text-lg font-bold text-white uppercase">DISCOVER DEALS</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Browse curated seasonal items across fashion and tech.</p>
          </div>

          <div className="bg-slate-900 border border-sky-500/40 p-6 rounded-2xl space-y-3 shadow-lg shadow-sky-500/10">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-sm">2</div>
            <h3 className="text-lg font-bold text-white uppercase">CLAIM VOUCHER</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Code <strong className="text-white font-mono">PATH50</strong> copied to your clipboard.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">3</div>
            <h3 className="text-lg font-bold text-white uppercase">REDEEM & SAVE</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Apply code at checkout for immediate 50% discount.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
            <span>START SAVINGS PATH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OffersHero18;
`
  },

  // VARIANT 19
  {
    num: 19,
    id: 'offers-hero-19',
    compName: 'OffersHero19',
    heading: 'Full-Bleed Deal Portal — Viewport Portal Open',
    description: 'Immersive full-bleed campaign background with interactive glassmorphism overlay frame.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';

export function OffersHero19({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full min-h-[540px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=80"
        alt="Full Bleed Portal"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/60" />

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative z-10 max-w-2xl mx-6 p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/20 text-center space-y-6 shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>FULL BLEED PORTAL</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          OVERLAY DEALS <br/><span className="text-amber-300">50% REDUCTION</span>
        </h1>

        <p className="text-slate-200 text-sm max-w-md mx-auto leading-relaxed">
          Full bleed backdrop with glassmorphic center card. Experience total visual clarity while exploring deal highlights.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button className="px-8 py-4 bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2">
            <span>EXPLORE FULL BLEED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default OffersHero19;
`
  },

  // VARIANT 20
  {
    num: 20,
    id: 'offers-hero-20',
    compName: 'OffersHero20',
    heading: 'Award-Style Deals Hero — Multilayered Kinetic Experience',
    description: 'Flagship editorial offers hero combining kinetic typography, glass depth layers, live badge counters, and magnetic CTAs.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function OffersHero20({ data, section }: { data?: any; section?: any }) {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btnBox = e.currentTarget.querySelector('button')?.getBoundingClientRect();
    if (!btnBox) return;

    const btnCenterX = btnBox.left + btnBox.width / 2;
    const btnCenterY = btnBox.top + btnBox.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < 120) {
      setBtnPos({ x: (e.clientX - btnCenterX) * 0.3, y: (e.clientY - btnCenterY) * 0.3 });
    } else {
      setBtnPos({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl select-none"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>AWARD-WINNING CAMPAIGN HERO</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> GUARANTEED BEST PRICE
            </span>
            <span>//</span>
            <span>LIMITED STOCK</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none">
              THE ULTIMATE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                50% OFF OFFER
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Synthesizing kinetic typography, glass depth layers, and magnetic interaction into our premier promotional hero.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                animate={{ x: btnPos.x, y: btnPos.y }}
                transition={{ type: 'spring', stiffness: 220, damping: 15 }}
                className="px-9 py-4.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-amber-500/25 flex items-center gap-3 cursor-pointer"
              >
                <span>CLAIM FLAGSHIP OFFER</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="px-5 py-3.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-mono text-amber-300">
                CODE: <strong className="text-white text-sm font-bold">FLAGSHIP50</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs p-6 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-700 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-bold uppercase">PROMO METRICS</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">99.8%</div>
                <div className="text-xs text-slate-400 font-medium">Customer Satisfaction</div>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between text-xs font-mono text-slate-400">
                <span>REDEEMED: 1,420</span>
                <span>REMAINING: 80</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero20;
`
  }
];

// Write files
variants.forEach(v => {
  const dirNum = String(v.num).padStart(2, '0');
  const targetDir = path.join(baseDir, 'offers-hero-' + dirNum);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Write TSX
  const tsxPath = path.join(targetDir, v.compName + '.tsx');
  fs.writeFileSync(tsxPath, v.code, 'utf8');

  // Write JSON
  const jsonPath = path.join(targetDir, 'offers-hero-' + dirNum + '.json');
  const jsonContent = JSON.stringify({
    heading: v.heading,
    description: v.description
  }, null, 2);
  fs.writeFileSync(jsonPath, jsonContent, 'utf8');

  console.log('Generated ' + v.compName + ' and offers-hero-' + dirNum + '.json');
});

console.log('All 20 Offers Hero variants generated successfully!');
