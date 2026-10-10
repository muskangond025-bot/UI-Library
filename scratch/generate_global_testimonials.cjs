const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'global', '11-testimonials');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const avatars = {
  a1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  a2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  a3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  a4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
};

const templates = [
  // 1: Glassmorphic Bento Testimonial Grid
  {
    num: 1,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';

export function GlobalTestimonials1() {
  const reviews = [
    { name: 'Sophia Chen', role: 'Design Director', text: 'The glassmorphic aesthetics and fluid motion completely elevated our brand presentation.', rating: 5, avatar: '${avatars.a1}', bg: 'col-span-1 md:col-span-2 row-span-2' },
    { name: 'Marcus Vance', role: 'Lead Architect', text: 'Unmatched component quality and seamless responsive behavior.', rating: 5, avatar: '${avatars.a2}', bg: 'col-span-1 row-span-1' },
    { name: 'Elena Rostova', role: 'Product Strategist', text: 'Clean code architecture and striking visual impact.', rating: 5, avatar: '${avatars.a3}', bg: 'col-span-1 row-span-1' },
    { name: 'David Kim', role: 'Creative Lead', text: 'Our conversion increased significantly after integrating these master sections.', rating: 5, avatar: '${avatars.a4}', bg: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC TESTIMONIALS
            </div>
            <h2 className="text-4xl font-extrabold text-white">Loved by Industry Leaders</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              className={\`relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 \${r.bg}\`}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <Quote className="w-6 h-6 text-cyan-400 opacity-60" />
              </div>
              <p className="text-slate-200 text-base leading-relaxed font-medium my-2">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-cyan-400/40 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{r.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">{r.role}</p>
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

  // 2: High-Fashion Editorial Luxury Testimonials
  {
    num: 2,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function GlobalTestimonials2() {
  const reviews = [
    { name: 'Victoria Sterling', role: 'Vogue Curator', text: 'Sublime typography and exquisite layout balance.', avatar: '${avatars.a1}' },
    { name: 'Antoine Laurent', role: 'Art Director', text: 'Pure luxury aesthetic engineered for modern digital touchpoints.', avatar: '${avatars.a2}' },
    { name: 'Camilla Rossi', role: 'Fashion Editor', text: 'An indispensable design collection for high-end digital showcases.', avatar: '${avatars.a3}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Editorial Reviews</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Client Endorsements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between h-[360px] cursor-pointer group"
            >
              <Quote className="w-8 h-8 text-amber-800 opacity-40" />
              <p className="font-serif text-xl text-stone-900 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4 font-sans pt-4 border-t border-stone-100">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-base font-bold text-stone-950 group-hover:text-amber-800 transition-colors">{r.name}</h4>
                  <p className="text-xs font-mono text-stone-500">{r.role}</p>
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

  // 3: Neo-Brutalist Cyberpunk Testimonial Cards
  {
    num: 3,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from 'lucide-react';

export function GlobalTestimonials3() {
  const reviews = [
    { name: 'ALEX_DEV', role: 'CTO @ CYBER', text: 'Insane build quality! The raw layout speed and contrast is unmatched.', bg: 'bg-lime-400', avatar: '${avatars.a2}' },
    { name: 'SARAH_UX', role: 'Lead Designer', text: 'Thick borders, high contrast, maximum user engagement!', bg: 'bg-cyan-400', avatar: '${avatars.a1}' },
    { name: 'KAI_PROD', role: 'VP Product', text: 'Shipped our new portal in record time with these brutalist components.', bg: 'bg-fuchsia-400', avatar: '${avatars.a4}' },
    { name: 'NINA_BIO', role: 'Creative Tech', text: '10/10 performance and visual punch.', bg: 'bg-yellow-400', avatar: '${avatars.a3}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12 border-b-4 border-black pb-6">
          <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
            <Zap className="w-5 h-5 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">VERIFIED FEEDBACK</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={\`border-4 border-black \${r.bg} p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between h-[340px]\`}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
              </div>
              <p className="text-base font-black text-black leading-tight my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t-2 border-black">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <div>
                  <h4 className="text-sm font-black uppercase text-black">{r.name}</h4>
                  <p className="text-xs font-black text-black/70">{r.role}</p>
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

  // 4: 3D Tactile Claymorphic Quote Cards
  {
    num: 4,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

export function GlobalTestimonials4() {
  const reviews = [
    { name: 'Chloe Bennett', role: 'UI Lead', text: 'Soft volumes, delightful interactions, and zero layout stress.', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', avatar: '${avatars.a1}' },
    { name: 'Liam Davies', role: 'Product Owner', text: 'Extremely friendly tactile cards that boosted user trust.', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', avatar: '${avatars.a2}' },
    { name: 'Emma Watson', role: 'Brand Strategist', text: 'The pastel balance and 3D depth are absolutely gorgeous.', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', avatar: '${avatars.a3}' },
    { name: 'Noah Miller', role: 'Design Director', text: 'Our favorite component library for modern app interfaces.', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Feedback
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Customer Love</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={\`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-between h-[340px] \${r.bg}\`}
            >
              <div className="flex justify-between items-center">
                <span className={\`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm \${r.pill}\`}>VERIFIED</span>
                <Heart className="w-4 h-4 text-slate-500" />
              </div>
              <p className="text-slate-800 text-base font-bold my-2">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">{r.name}</h4>
                  <p className="text-xs font-semibold text-slate-500">{r.role}</p>
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

  // 5: Holographic Neon Cyber Feedback Deck
  {
    num: 5,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Star } from 'lucide-react';

export function GlobalTestimonials5() {
  const reviews = [
    { name: 'NEURAL_DESIGN', role: 'Cyber Architect', text: 'Holographic glow and laser precision border FX.', glow: 'from-pink-500 to-purple-500', avatar: '${avatars.a1}' },
    { name: 'MATRIX_DEV', role: 'Lead Engineer', text: 'Visual feedback metrics that command immediate attention.', glow: 'from-cyan-400 to-blue-600', avatar: '${avatars.a2}' },
    { name: 'QUANTUM_UI', role: 'Creative Director', text: 'Iridescent sheen and high contrast obsidian cards.', glow: 'from-emerald-400 to-teal-600', avatar: '${avatars.a3}' },
    { name: 'CYBER_FOUNDER', role: 'Product Lead', text: 'State-of-the-art telemetry deck for modern web platforms.', glow: 'from-yellow-400 to-amber-600', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Holographic Feedback Deck</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden p-[2px] cursor-pointer">
              <div className={\`absolute inset-0 bg-gradient-to-r \${r.glow} opacity-60 blur-sm\` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-6 h-[320px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white font-bold">5.0 ★ RATING</span>
                  <Eye className="w-4 h-4 text-pink-400" />
                </div>
                <p className="text-zinc-200 text-sm font-medium my-2">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full border border-pink-500/50 object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{r.name}</h4>
                    <p className="text-xs font-mono text-pink-400">{r.role}</p>
                  </div>
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

  // 6: Horizontal Expandable Accordion Testimonials
  {
    num: 6,
    code: `"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function GlobalTestimonials6() {
  const [active, setActive] = useState(0);
  const reviews = [
    { name: 'Isabella Cruz', role: 'Head of Product', text: 'The fluid width expansion and smooth curtain animation makes reviewing client testimonials an interactive delight.', avatar: '${avatars.a1}' },
    { name: 'Lucas Sterling', role: 'VP Engineering', text: 'Remarkable component flexibility and super clean TypeScript implementations.', avatar: '${avatars.a2}' },
    { name: 'Hannah Abbott', role: 'Creative Director', text: 'Our clients love the sleek accordion interaction and high-end typography.', avatar: '${avatars.a3}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Review Accordion</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[400px]">
          {reviews.map((r, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={\`relative rounded-3xl overflow-hidden cursor-pointer p-8 flex flex-col justify-between transition-all duration-500 \${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}\`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-200">"{r.text}"</p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-indigo-800/40">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{r.name}</h4>
                      <p className="text-xs text-indigo-400">{r.role}</p>
                    </div>
                  </div>
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

  // 7: Skeuomorphic Velvet Gold Privilege Testimonials
  {
    num: 7,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote } from 'lucide-react';

export function GlobalTestimonials7() {
  const reviews = [
    { name: 'Lord Harrington', role: 'Private Collector', text: 'Uncompromising luxury, embossed gold seals, and velvet elegance.', avatar: '${avatars.a2}' },
    { name: 'Lady Genevieve', role: 'Atelier Director', text: 'Craftsmanship worthy of royal heritage and prestige standards.', avatar: '${avatars.a1}' },
    { name: 'Baron Von Steiner', role: 'Horology Master', text: 'Refined distinction and impeccable design execution.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Endorsements
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Velvet & Gold Privilege Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-2xl p-8 shadow-2xl hover:border-amber-500 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-amber-600" />
              <p className="font-serif text-lg text-amber-100 italic">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-amber-800/30 font-sans">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-amber-500 object-cover" />
                <div>
                  <h4 className="text-sm font-serif text-amber-200">{r.name}</h4>
                  <p className="text-xs font-mono text-amber-500">{r.role}</p>
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

  // 8: Split-Tone Diagonal Testimonial Cards
  {
    num: 8,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials8() {
  const reviews = [
    { name: 'STREET_CREW', role: 'Fashion Collective', text: 'Bold contrast, crisp typography, and instant visual impact.', color: 'bg-rose-500 text-white', avatar: '${avatars.a1}' },
    { name: 'TECH_LABS', role: 'Hardware Team', text: 'Top tier layout speed and high-contrast dark accent options.', color: 'bg-blue-600 text-white', avatar: '${avatars.a2}' },
    { name: 'ECO_HOME', role: 'Interior Studio', text: 'Clean split tones that highlight testimonial content perfectly.', color: 'bg-emerald-600 text-white', avatar: '${avatars.a3}' },
    { name: 'KICKS_DROP', role: 'Sneaker Hub', text: 'Super dynamic visual cards that boosted our audience click-rate.', color: 'bg-orange-500 text-white', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-10 uppercase">Split-Tone Feedback Deck</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col h-[340px]">
              <div className={\`h-full p-6 flex flex-col justify-between \${r.color}\`}>
                <span className="text-xs font-mono opacity-80 uppercase">VERIFIED REVIEW</span>
                <p className="text-lg font-black leading-snug my-2">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/20">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-white" />
                  <div>
                    <h4 className="text-sm font-bold">{r.name}</h4>
                    <p className="text-xs opacity-80">{r.role}</p>
                  </div>
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

  // 9: Sub-Zero Ice Frost Refractive Review Deck
  {
    num: 9,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export function GlobalTestimonials9() {
  const reviews = [
    { name: 'Dr. Frost', role: 'Cryo Designer', text: 'Sub-zero glass refractions and crystal light highlights.', avatar: '${avatars.a1}' },
    { name: 'Aria Snow', role: 'Nordic Lead', text: 'Crisp chilled aesthetics that make customer reviews glow.', avatar: '${avatars.a3}' },
    { name: 'Erik Glacier', role: 'Polar Tech', text: 'Refreshing ice glass components with effortless performance.', avatar: '${avatars.a2}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Deck
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Customer Feedback</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <div className="flex gap-1 text-sky-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-sky-400" />)}
              </div>
              <p className="text-sky-100 text-lg font-medium leading-relaxed my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-sky-800/40">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-sky-400 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">{r.name}</h4>
                  <p className="text-xs font-mono text-sky-400">{r.role}</p>
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

  // 10: Retro Polaroid Customer Review Cards
  {
    num: 10,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalTestimonials10() {
  const reviews = [
    { name: 'Betty Sue', role: 'Vintage Collector', text: 'Feels like authentic polaroids! Unmatched retro charm.', rotate: '-rotate-2', avatar: '${avatars.a1}' },
    { name: 'Johnny Cash Jr.', role: 'Retro Stylist', text: 'Classic tape stickers and handwritten archive notes.', rotate: 'rotate-3', avatar: '${avatars.a2}' },
    { name: 'Daisy Miller', role: 'Analog Curator', text: 'Loved by nostalgic design enthusiasts worldwide.', rotate: '-rotate-3', avatar: '${avatars.a3}' },
    { name: 'Sammy Davis', role: '80s Vinyl Host', text: 'Instant vintage flair for any modern storefront.', rotate: 'rotate-2', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Review Archive</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={\`bg-white p-5 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all \${r.rotate}\`}
            >
              <div className="w-full h-36 bg-stone-100 overflow-hidden mb-3 border border-stone-200">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-serif text-sm italic text-stone-800 my-2">"{r.text}"</p>
              <div className="font-sans pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold text-stone-900">{r.name}</h4>
                <p className="text-[10px] font-mono text-amber-800">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 11: Isometric 3D Spatial Testimonials
  {
    num: 11,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalTestimonials11() {
  const reviews = [
    { name: 'Orion Vance', role: 'Spatial Engineer', text: 'Angled depth perspective and spatial floating cards.', avatar: '${avatars.a2}' },
    { name: 'Lyra Mercer', role: '3D Artist', text: 'Immersive spatial layout with dynamic lighting elevation.', avatar: '${avatars.a1}' },
    { name: 'Caelum Reed', role: 'VR Architect', text: 'Stunning 3D cards that make feedback pop off the screen.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Review Deck</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-8 shadow-2xl cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <p className="text-lg text-indigo-100 leading-relaxed font-medium">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-indigo-700/50">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-indigo-400 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">{r.name}</h4>
                  <p className="text-xs font-mono text-indigo-400">{r.role}</p>
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

  // 12: Minimalist Blueprint Line-Art Feedback Cards
  {
    num: 12,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalTestimonials12() {
  const reviews = [
    { code: 'REV_SPEC_01', name: 'VECTOR_SYS', role: 'ARCHITECT', text: 'Precision hairline boundaries and technical rating metrics.', avatar: '${avatars.a1}' },
    { code: 'REV_SPEC_02', name: 'LINE_ART_DEV', role: 'LEAD_ENG', text: 'Ultra-clean blueprint telemetry with zero bloat.', avatar: '${avatars.a2}' },
    { code: 'REV_SPEC_03', name: 'CAD_DESIGN', role: 'UI_SPEC', text: 'Hairline grid perfection for minimalist lovers.', avatar: '${avatars.a3}' },
    { code: 'REV_SPEC_04', name: 'BLUEPRINT_CO', role: 'CTO', text: 'Super clear specifications and verified buyer tags.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">BLUEPRINT REVIEWS INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-6 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-[320px]"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{r.code}]</span>
                <span>5.0 ★</span>
              </div>
              <p className="text-xs text-slate-300 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded border border-slate-600 object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-slate-500">{r.role}</p>
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

  // 13: Circular Radial Node Testimonial Ring
  {
    num: 13,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalTestimonials13() {
  const reviews = [
    { name: 'Stella Vance', text: 'Sublime radial ring!', avatar: '${avatars.a1}' },
    { name: 'Oliver Twist', text: 'Circular node precision!', avatar: '${avatars.a2}' },
    { name: 'Maya Lin', text: 'Spotlight customer focus!', avatar: '${avatars.a3}' },
    { name: 'Julian Ross', text: 'Smooth magnetic pull!', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Radial Testimonial Nodes
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Orbital Customer Reviews</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <p className="text-xs text-indigo-300 italic font-mono max-w-[140px]">"{r.text}"</p>
              <span className="text-sm font-bold text-slate-200">{r.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 14: Cinematic Motion Video Testimonials
  {
    num: 14,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalTestimonials14() {
  const reviews = [
    { name: 'Director Cut Review', role: 'Film Studio', text: 'High impact cinematic testimonial canvas.', avatar: '${avatars.a1}' },
    { name: 'Motion Graphic Review', role: 'VFX Agency', text: 'Embedded video thumbnail with playhead pulse.', avatar: '${avatars.a2}' },
    { name: 'Live Action Review', role: 'Media House', text: 'Clean widescreen presentation for video feedback.', avatar: '${avatars.a3}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-10">Cinematic Video Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden h-[360px] cursor-pointer border border-zinc-800 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <div className="relative z-10">
                <p className="text-lg font-bold text-white mb-2">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-amber-400" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-400">{r.name}</h4>
                    <p className="text-xs text-zinc-400 font-mono">{r.role}</p>
                  </div>
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

  // 15: Diamond Facet Prism Testimonial Cards
  {
    num: 15,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials15() {
  const reviews = [
    { name: 'Crystal Ray', role: 'Jewelry Designer', text: 'Prismatic light split and diamond facet layout.', avatar: '${avatars.a1}' },
    { name: 'Prism Tech', role: 'Refractive Studio', text: 'High-clarity feedback cards with rainbow sheen accents.', avatar: '${avatars.a3}' },
    { name: 'Facet Co.', role: 'Gemologist', text: 'Stunning geometric balance and crystal glow.', avatar: '${avatars.a2}' },
    { name: 'Diamond UI', role: 'Luxury Agency', text: 'Exclusive facet geometry for premium clients.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Review Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[320px] flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">5.0 ★ PRISM</span>
              <p className="text-sm text-cyan-100 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-cyan-400" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-slate-400">{r.role}</p>
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

  // 16: Cyber Matrix Terminal Testimonial Cards
  {
    num: 16,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials16() {
  const reviews = [
    { code: 'LOG_01', name: 'NEO_SMITH', text: 'Verified buyer telemetry logged cleanly in matrix stream.', avatar: '${avatars.a2}' },
    { code: 'LOG_02', name: 'TRINITY_SYS', text: 'Green code scanline sweep with real-time status pulses.', avatar: '${avatars.a1}' },
    { code: 'LOG_03', name: 'MORPHEUS_NET', text: '100% verified buyer trust rating confirmed.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Buyer Logs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-6 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-[300px]"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>[{r.code}]</span>
                <span>VERIFIED</span>
              </div>
              <p className="text-sm text-emerald-300 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-emerald-900">
                <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded border border-emerald-600 object-cover" />
                <h4 className="text-xs font-bold text-emerald-400">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 17: Organic Curved Sunset Fluid Testimonials
  {
    num: 17,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials17() {
  const reviews = [
    { name: 'Amber Sol', text: 'Warm sunset pebble shapes and smooth liquid waves.', bg: 'from-orange-500 to-rose-500', avatar: '${avatars.a1}' },
    { name: 'Dawn Rivers', text: 'Asymmetric organic blurs that create joyful reading.', bg: 'from-amber-500 to-orange-600', avatar: '${avatars.a3}' },
    { name: 'Golden Hour Co.', text: 'Liquid ripple gradients that soothe the customer experience.', bg: 'from-yellow-400 to-amber-600', avatar: '${avatars.a2}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-200">Organic Sunset Fluid Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={\`rounded-[40px] p-8 bg-gradient-to-br \${r.bg} text-stone-950 cursor-pointer shadow-xl h-[340px] flex flex-col justify-between\`}
            >
              <p className="text-lg font-black leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-950/20">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-stone-950 object-cover" />
                <h4 className="text-sm font-black text-stone-950">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 18: Elevated Card Deck Fan-Out Testimonials
  {
    num: 18,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalTestimonials18() {
  const reviews = [
    { name: 'Deck Review 1', text: 'Stacked playing-card deck layout with horizontal slide hover.', avatar: '${avatars.a1}' },
    { name: 'Deck Review 2', text: 'Elevated card depth shadows and responsive stack fan-out.', avatar: '${avatars.a2}' },
    { name: 'Deck Review 3', text: 'Interactive slide elevation for modern product reviews.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-indigo-400">
          <Layers className="w-5 h-5" />
          <h2 className="text-3xl font-extrabold text-white">Elevated Card Deck Reviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-indigo-500 cursor-pointer h-[320px] flex flex-col justify-between"
            >
              <p className="text-lg font-medium text-slate-200 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-indigo-500" />
                <h4 className="text-sm font-bold text-white">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 19: Modern Neumorphic Soft Inset Testimonials
  {
    num: 19,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials19() {
  const reviews = [
    { name: 'Neumorphic Review 1', text: 'Tactile dual-shadow extruded cards.', avatar: '${avatars.a1}' },
    { name: 'Neumorphic Review 2', text: 'Soft glow ring activation and inset quote depth.', avatar: '${avatars.a2}' },
    { name: 'Neumorphic Review 3', text: 'Smooth tactile button press feedback.', avatar: '${avatars.a3}' },
    { name: 'Neumorphic Review 4', text: 'Ultra-clean light grey extruded finish.', avatar: '${avatars.a4}' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-[300px]"
            >
              <p className="text-sm font-medium text-slate-700 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-300">
                <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded-full object-cover shadow-inner" />
                <h4 className="text-xs font-bold text-slate-900">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`
  },

  // 20: Flagship Omnichannel Bento Master Testimonial Suite
  {
    num: 20,
    code: `"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export function GlobalTestimonials20() {
  const reviews = [
    { name: 'Master Suite Client 1', text: 'Complete omnichannel suite integration with verified ratings and product tags.', rating: '5.0 ★', avatar: '${avatars.a1}', badge: 'FLAGSHIP' },
    { name: 'Master Suite Client 2', text: 'The ultimate testimonial solution for high-conversion e-commerce.', rating: '4.9 ★', avatar: '${avatars.a2}', badge: 'TOP RATED' },
    { name: 'Master Suite Client 3', text: 'Seamless responsive layouts and gorgeous Framer Motion stagger FX.', rating: '4.8 ★', avatar: '${avatars.a3}', badge: 'VERIFIED' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Testimonial Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Reviews</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-cyan-500 cursor-pointer h-[360px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{r.badge}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> {r.rating}</span>
              </div>
              <p className="text-lg font-medium text-slate-200 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover border border-cyan-400" />
                <h4 className="text-sm font-bold text-white">{r.name}</h4>
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
  const dirName = `global-testimonials-${t.num}`;
  const targetDir = path.join(baseDir, dirName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileName = `GlobalTestimonials${t.num}.tsx`;
  fs.writeFileSync(path.join(targetDir, fileName), t.code, 'utf8');
  console.log(`Generated ${fileName}`);
});

console.log('All 20 Global Testimonials components written successfully!');
