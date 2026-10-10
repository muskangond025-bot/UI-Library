const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '10-promotional-cards');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const images = {
  fashion: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
  tech: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
  home: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
  beauty: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  jewelry: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
  shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
  gaming: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
};

const templates = [
  // 1: Glassmorphic Bento Promo Cards
  {
    num: 1,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Tag, Zap } from 'lucide-react';

export function GlobalPromotionalCards1() {
  const cards = [
    { title: 'Cyber Flash Sale', off: '30% OFF', code: 'CYBER30', img: '${images.tech}', bg: 'col-span-1 md:col-span-2 row-span-2' },
    { title: 'Velvet Apparel', off: '20% OFF', code: 'LUX20', img: '${images.fashion}', bg: 'col-span-1 row-span-1' },
    { title: 'Smart Living', off: '25% OFF', code: 'HOME25', img: '${images.home}', bg: 'col-span-1 row-span-1' },
    { title: 'Exclusive Kicks', off: '40% OFF', code: 'DROP40', img: '${images.shoes}', bg: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC PROMO BENTO
            </div>
            <h2 className="text-4xl font-extrabold text-white">Curated Promotional Offers</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              className={\`relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 \${c.bg}\`}
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 flex justify-between items-center">
                <span className="px-3 py-1 bg-cyan-500 text-slate-950 text-xs font-extrabold rounded-full">{c.off}</span>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">USE CODE: {c.code}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 2: High-Fashion Editorial Luxury Cards
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalPromotionalCards2() {
  const cards = [
    { title: 'Autumn Atelier Offer', off: 'Save 20%', code: 'ATELIER20', img: '${images.fashion}' },
    { title: 'High Jewelry Privilege', off: 'Save 15%', code: 'JEWEL15', img: '${images.jewelry}' },
    { title: 'Monochrome Footwear', off: 'Save 30%', code: 'KICKS30', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Privilege Index</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Editorial Promotional Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-stone-200 flex flex-col justify-between h-[420px] cursor-pointer group"
            >
              <div className="h-56 rounded-xl overflow-hidden relative mb-4">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 text-stone-900 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  {c.off}
                </div>
              </div>
              <div className="font-sans">
                <span className="text-xs font-mono text-amber-800">CODE: {c.code}</span>
                <h3 className="font-serif text-2xl text-stone-950 mt-1 mb-4 group-hover:text-amber-800 transition-colors">{c.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600">
                  Claim Offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 3: Neo-Brutalist Cyberpunk Promo Cards
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards3() {
  const cards = [
    { title: 'HARDWARE DROP', off: '50% OFF', code: 'DROP50', bg: 'bg-lime-400', img: '${images.gaming}' },
    { title: 'AUDIO MATRIX', off: '35% OFF', code: 'AUDIO35', bg: 'bg-cyan-400', img: '${images.tech}' },
    { title: 'CYBER STREET', off: '40% OFF', code: 'CYBER40', bg: 'bg-fuchsia-400', img: '${images.fashion}' },
    { title: 'SNEAKER CODE', off: '25% OFF', code: 'KICKS25', bg: 'bg-yellow-400', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12 border-b-4 border-black pb-6">
          <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
            <Zap className="w-5 h-5 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">FLASH PROMO CARDS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={\`border-4 border-black \${c.bg} p-5 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between h-[360px]\`}
            >
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-xs font-black px-3 py-1 rounded">{c.off}</span>
                <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="w-full h-36 border-2 border-black rounded-lg overflow-hidden bg-white my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-black/70">USE: {c.code}</span>
                <h3 className="text-xl font-black uppercase text-black">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 4: 3D Tactile Claymorphic Voucher Cards
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export function GlobalPromotionalCards4() {
  const cards = [
    { title: 'Beauty Glow Pass', off: 'FLAT $30 OFF', code: 'GLOW30', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', img: '${images.beauty}' },
    { title: 'Home Comfort Voucher', off: 'FLAT $50 OFF', code: 'NEST50', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', img: '${images.home}' },
    { title: 'Jewelry Gift Card', off: 'FLAT $100 OFF', code: 'GIFT100', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', img: '${images.jewelry}' },
    { title: 'Active Club Voucher', off: 'FLAT $40 OFF', code: 'CLUB40', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Vouchers
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Reward Cards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={\`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-between h-[380px] \${c.bg}\`}
            >
              <div className="flex justify-between items-center">
                <span className={\`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm \${c.pill}\`}>{c.off}</span>
                <Heart className="w-4 h-4 text-slate-500" />
              </div>
              <div className="w-full h-40 rounded-2xl overflow-hidden border-2 border-white shadow-md my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-500">PROMO: {c.code}</span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 5: Holographic Neon Cyber Discount Deck
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export function GlobalPromotionalCards5() {
  const cards = [
    { title: 'NEON KICKS', off: '40% DISCOUNT', code: 'NEON40', img: '${images.shoes}', glow: 'from-pink-500 to-purple-500' },
    { title: 'CYBER WEAR', off: '25% DISCOUNT', code: 'CYBER25', img: '${images.fashion}', glow: 'from-cyan-400 to-blue-600' },
    { title: 'VR GEAR', off: '30% DISCOUNT', code: 'VR30', img: '${images.gaming}', glow: 'from-emerald-400 to-teal-600' },
    { title: 'SMART SOUND', off: '35% DISCOUNT', code: 'SOUND35', img: '${images.tech}', glow: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Holographic Cyber Passes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden p-[2px] cursor-pointer">
              <div className={\`absolute inset-0 bg-gradient-to-r \${c.glow} opacity-60 blur-sm\` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-5 h-[340px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white font-bold">{c.off}</span>
                  <Eye className="w-4 h-4 text-pink-400" />
                </div>
                <div className="w-full h-36 rounded-xl overflow-hidden border border-white/10 my-3">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-mono text-pink-400">KEY: {c.code}</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{c.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 6: Horizontal Split Accordion Promo Cards
  {
    num: 6,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards6() {
  const [active, setActive] = useState(0);
  const cards = [
    { title: 'Luxury Apparel Pass', off: '30% OFF', code: 'LUXURY30', img: '${images.fashion}', desc: 'Exclusive VIP discount on all couture items.' },
    { title: 'Tech Hardware Pass', off: '25% OFF', code: 'TECH25', img: '${images.tech}', desc: 'Instant savings on next-gen electronics.' },
    { title: 'Jewelry Reserve Pass', off: '40% OFF', code: 'JEWEL40', img: '${images.jewelry}', desc: 'Prestige access to diamond collections.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Promo Accordion</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[440px]">
          {cards.map((c, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={\`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 \${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}\`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-600 rounded-full text-white">{c.off}</span>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="text-xs font-mono text-indigo-400">CODE: {c.code}</span>
                  <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                  {isSel && <p className="text-sm text-slate-300 mt-2">{c.desc}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`
  },

  // 7: Skeuomorphic Velvet Gold Privilege Cards
  {
    num: 7,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function GlobalPromotionalCards7() {
  const cards = [
    { title: 'Gold Velvet Privilege', off: '$150 VOUCHER', code: 'GOLD150', img: '${images.jewelry}' },
    { title: 'Royal Horology Pass', off: '$200 VOUCHER', code: 'ROYAL200', img: '${images.tech}' },
    { title: 'Velvet Apparel Card', off: '$100 VOUCHER', code: 'VELVET100', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Privilege Cards
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Vouchers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-6 shadow-2xl hover:border-amber-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-amber-400 font-bold">{c.off}</span>
                <span className="text-xs text-amber-600 font-mono">NO. 0{idx + 1}</span>
              </div>
              <div className="w-full h-40 rounded-xl overflow-hidden border border-amber-700/30 my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-500">KEY: {c.code}</span>
                <h3 className="text-2xl font-serif text-amber-100 mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 8: Split-Tone Diagonal Flash Sale Cards
  {
    num: 8,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalPromotionalCards8() {
  const cards = [
    { title: 'STREET DROP PROMO', off: 'FLAT 40% OFF', code: 'STREET40', color: 'bg-rose-500 text-white', img: '${images.fashion}' },
    { title: 'SMART TECH FLASH', off: 'FLAT 30% OFF', code: 'SMART30', color: 'bg-blue-600 text-white', img: '${images.tech}' },
    { title: 'HOME DECOR DEAL', off: 'FLAT 25% OFF', code: 'DECOR25', color: 'bg-emerald-600 text-white', img: '${images.home}' },
    { title: 'KICKS FLASH SALE', off: 'FLAT 35% OFF', code: 'KICKS35', color: 'bg-orange-500 text-white', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase">Split-Tone Flash Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-[380px] group">
              <div className="h-1/2 w-full overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className={\`h-1/2 p-6 flex flex-col justify-between \${c.color}\`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>{c.off}</span>
                  <span>{c.code}</span>
                </div>
                <h3 className="text-xl font-black uppercase leading-tight">{c.title}</h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  Redeem Code <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 9: Sub-Zero Ice Frost Refractive Promo Deck
  {
    num: 9,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards9() {
  const cards = [
    { title: 'Arctic Gear Pass', off: 'SAVE $45', code: 'ICE45', img: '${images.sports}' },
    { title: 'Frosted Tech Pass', off: 'SAVE $60', code: 'FROST60', img: '${images.tech}' },
    { title: 'Sub-Zero Jewels Pass', off: 'SAVE $80', code: 'COLD80', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Deck
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Discount Vouchers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-sky-400 font-bold">{c.off}</span>
                <ArrowUpRight className="w-5 h-5 text-sky-400" />
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-sky-500/20 my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-300">CODE: {c.code}</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 10: Retro Polaroid Ticket Promo Cards
  {
    num: 10,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalPromotionalCards10() {
  const cards = [
    { title: 'Denim Vintage Ticket', off: '25% OFF', code: 'DENIM25', img: '${images.fashion}', rotate: '-rotate-2' },
    { title: 'Retro Audio Ticket', off: '30% OFF', code: 'AUDIO30', img: '${images.tech}', rotate: 'rotate-3' },
    { title: 'Classic Kicks Ticket', off: '20% OFF', code: 'KICKS20', img: '${images.shoes}', rotate: '-rotate-3' },
    { title: 'Analog Home Ticket', off: '35% OFF', code: 'HOME35', img: '${images.home}', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Coupon Tickets</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={\`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all duration-300 \${c.rotate}\`}
            >
              <div className="w-full h-48 bg-stone-100 overflow-hidden mb-3 border border-stone-200">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="font-sans flex justify-between items-center text-xs font-bold">
                <span className="text-amber-800">{c.off}</span>
                <span className="font-mono text-stone-500">{c.code}</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-sans mt-1">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 11: Isometric 3D Spatial Promo Cards
  {
    num: 11,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalPromotionalCards11() {
  const cards = [
    { title: 'Spatial Gear Voucher', off: '30% OFF', code: 'SPATIAL30', img: '${images.tech}' },
    { title: 'Spatial Apparel Pass', off: '25% OFF', code: 'SPATIAL25', img: '${images.fashion}' },
    { title: 'Spatial Living Pass', off: '40% OFF', code: 'SPATIAL40', img: '${images.home}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Promo Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-indigo-500/30">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-indigo-400">
                  <span>{c.off}</span>
                  <span>{c.code}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 12: Minimalist Blueprint Line-Art Spec Cards
  {
    num: 12,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalPromotionalCards12() {
  const cards = [
    { code: 'VOUCHER_01', off: 'SAVE 30%', title: 'APPAREL WIREFRAME CARD', img: '${images.fashion}' },
    { code: 'VOUCHER_02', off: 'SAVE 25%', title: 'COMPUTATIONAL TECH CARD', img: '${images.tech}' },
    { code: 'VOUCHER_03', off: 'SAVE 40%', title: 'INTERIOR WIREFRAME CARD', img: '${images.home}' },
    { code: 'VOUCHER_04', off: 'SAVE 35%', title: 'TIMEPIECE WIREFRAME CARD', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT VOUCHER INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-5 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{c.code}]</span>
                <span>{c.off}</span>
              </div>
              <div className="w-full h-36 border border-slate-800 rounded overflow-hidden my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 13: Circular Orbital Wheel Promo Ring
  {
    num: 13,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalPromotionalCards13() {
  const cards = [
    { title: 'Fashion Pass', off: '30% OFF', img: '${images.fashion}' },
    { title: 'Tech Pass', off: '25% OFF', img: '${images.tech}' },
    { title: 'Living Pass', off: '40% OFF', img: '${images.home}' },
    { title: 'Jewelry Pass', off: '35% OFF', img: '${images.jewelry}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Orbital Promo Ring
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Radial Promotional Nodes</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs font-mono text-indigo-400 font-bold">{c.off}</span>
              <span className="text-sm font-bold text-slate-200">{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 14: Cinematic Motion Video Promo Cards
  {
    num: 14,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalPromotionalCards14() {
  const cards = [
    { title: 'Cinematic Fashion Promo', off: 'FLAT 30% OFF', img: '${images.fashion}' },
    { title: 'Motion Tech Promo', off: 'FLAT 25% OFF', img: '${images.tech}' },
    { title: 'Live Gaming Promo', off: 'FLAT 40% OFF', img: '${images.gaming}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-10">Cinematic Video Promo Cards</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden h-[380px] cursor-pointer border border-zinc-800">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-amber-400 font-bold">{c.off}</span>
                <h3 className="text-2xl font-bold text-white">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 15: Diamond Facet Prism Promo Cards
  {
    num: 15,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards15() {
  const cards = [
    { title: 'Jewelry Prism Pass', off: '30% OFF', img: '${images.jewelry}' },
    { title: 'Prism Fashion Pass', off: '25% OFF', img: '${images.fashion}' },
    { title: 'Crystal Living Pass', off: '40% OFF', img: '${images.home}' },
    { title: 'Diamond Tech Pass', off: '35% OFF', img: '${images.tech}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Promo Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <div className="flex justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>{c.off}</span>
                <span>PRISM</span>
              </div>
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 my-2">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-cyan-300">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 16: Cyber Matrix Terminal Promo Cards
  {
    num: 16,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards16() {
  const cards = [
    { code: 'SYS_KEY_01', off: '50% DECRYPTED', title: 'HARDWARE_PROMO_CARD', img: '${images.tech}' },
    { code: 'SYS_KEY_02', off: '35% DECRYPTED', title: 'WEARABLE_PROMO_CARD', img: '${images.fashion}' },
    { code: 'SYS_KEY_03', off: '40% DECRYPTED', title: 'FOOTWEAR_PROMO_CARD', img: '${images.shoes}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Decrypted Promos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-5 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>{c.code}</span>
                <span>[{c.off}]</span>
              </div>
              <div className="w-full h-36 border border-emerald-900 rounded overflow-hidden my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
              </div>
              <h3 className="text-lg font-bold text-emerald-300">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 17: Organic Curved Sunset Fluid Cards
  {
    num: 17,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards17() {
  const cards = [
    { title: 'Sunset Apparel Pass', off: 'SAVE 30%', img: '${images.fashion}', bg: 'from-orange-500 to-rose-500' },
    { title: 'Warm Living Pass', off: 'SAVE 25%', img: '${images.home}', bg: 'from-amber-500 to-orange-600' },
    { title: 'Golden Jewels Pass', off: 'SAVE 40%', img: '${images.jewelry}', bg: 'from-yellow-400 to-amber-600' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Fluid Promo</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={\`rounded-[40px] p-6 bg-gradient-to-br \${c.bg} text-stone-950 cursor-pointer shadow-xl h-[380px] flex flex-col justify-between\`}
            >
              <span className="text-xs font-bold uppercase tracking-wider bg-stone-950/20 px-3 py-1 rounded-full w-max text-stone-950">{c.off}</span>
              <div className="w-full h-44 rounded-[30px] overflow-hidden my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-stone-950">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 18: Elevated Card Deck Fan-Out Promo Cards
  {
    num: 18,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function GlobalPromotionalCards18() {
  const cards = [
    { title: 'Deck Apparel Voucher', off: '30% DISCOUNT', img: '${images.fashion}' },
    { title: 'Deck Tech Voucher', off: '25% DISCOUNT', img: '${images.tech}' },
    { title: 'Deck Sports Voucher', off: '40% DISCOUNT', img: '${images.sports}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Promos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-indigo-500 cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-700">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs text-indigo-400 font-mono font-bold">{c.off}</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{c.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 19: Modern Neumorphic Soft Inset Promo Cards
  {
    num: 19,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalPromotionalCards19() {
  const cards = [
    { title: 'Neumorphic Tech Pass', off: 'SAVE $30', img: '${images.tech}' },
    { title: 'Neumorphic Home Pass', off: 'SAVE $50', img: '${images.home}' },
    { title: 'Neumorphic Kicks Pass', off: 'SAVE $40', img: '${images.shoes}' },
    { title: 'Neumorphic Style Pass', off: 'SAVE $35', img: '${images.fashion}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Promo Cards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-[340px]"
            >
              <div className="w-full h-36 rounded-2xl overflow-hidden shadow-inner border border-slate-300">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500">{c.off}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Master Promo Suite
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards20() {
  const cards = [
    { title: 'Omnichannel VIP Card', off: 'FLAT 40% OFF', rating: '4.9 ★', img: '${images.fashion}', badge: 'FLAGSHIP' },
    { title: 'Cyber Tech Pass', off: 'FLAT 35% OFF', rating: '5.0 ★', img: '${images.tech}', badge: 'TOP RATED' },
    { title: 'Living Suite Voucher', off: 'FLAT 30% OFF', rating: '4.8 ★', img: '${images.home}', badge: 'BEST SELLER' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Master Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Promo Suite</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-cyan-500 cursor-pointer h-[400px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{c.badge}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> {c.rating}</span>
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700 my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-cyan-400 font-mono font-bold">{c.off}</span>
                  <h3 className="text-2xl font-black text-white mt-0.5">{c.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  }
];

templates.forEach(t => {
  const dirName = `global-promotional-cards-${t.num}`;
  const targetDir = path.join(baseDir, dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileName = `GlobalPromotionalCards${t.num}.tsx`;
  fs.writeFileSync(path.join(targetDir, fileName), t.code, 'utf8');
  console.log(`Generated ${fileName}`);
});

console.log('All 20 Global Promotional Cards components written successfully!');
