const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'order', '06-continue-shopping');

const components = [
  // 01 — NEXT STEPS ACTION HUB
  {
    id: 1,
    name: 'OrderContinueShopping1',
    dir: 'order-continue-shopping-1',
    title: 'Next Steps Action Hub — Post-Purchase Portal',
    desc: 'Action portal offering immediate post-purchase navigation options: return to storefront, view new arrivals, or track shipment.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Compass, Sparkles, Package } from 'lucide-react';

export function OrderContinueShopping1() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl border border-slate-800 my-4 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Order Completed Successfully
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Ready to Explore More?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">Your order is being prepared. Continue browsing our latest arrivals and exclusive studio drops.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/50 transition-all shadow-xl group cursor-pointer"
          >
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Main Storefront</h3>
              <p className="text-xs text-slate-400 mt-1">Return to catalog homepage.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              Browse Store <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/50 transition-all shadow-xl group cursor-pointer"
          >
            <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">New Arrivals</h3>
              <p className="text-xs text-slate-400 mt-1">Discover this week's fresh drops.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
              Explore Drops <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-purple-500/50 transition-all shadow-xl group cursor-pointer"
          >
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl w-fit">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Order Status</h3>
              <p className="text-xs text-slate-400 mt-1">Track package fulfillment live.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
              Track Order <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping1;
`
  },
  // 02 — CATEGORY EXPLORATION GRID
  {
    id: 2,
    name: 'OrderContinueShopping2',
    dir: 'order-continue-shopping-2',
    title: 'Category Exploration Grid — Visual Tile Entrance',
    desc: 'Category grid presenting visual entry tiles for Apparel, Footwear, Accessories, and Deskware.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function OrderContinueShopping2() {
  const categories = [
    { title: 'Apparel & Outerwear', items: '120+ Items', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Footwear & Boots', items: '45+ Items', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600' },
    { title: 'Leather Accessories', items: '80+ Items', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk & Studio Essentials', items: '60+ Items', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Store Navigation</span>
          <h2 className="text-2xl font-bold text-white">Explore By Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.5 }}
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-sm text-white">{c.title}</h3>
                    <p className="text-[11px] text-cyan-400 font-mono mt-0.5">{c.items}</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.1 }} className="p-2 bg-cyan-500 text-slate-950 rounded-lg">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping2;
`
  },
  // 03 — FEATURED NEW ARRIVAL CAROUSEL
  {
    id: 3,
    name: 'OrderContinueShopping3',
    dir: 'order-continue-shopping-3',
    title: 'Featured New Arrival Carousel — Slide Motion',
    desc: 'Interactive showcase carousel featuring newly arrived product collections with smooth slide transitions.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function OrderContinueShopping3() {
  const slides = [
    { title: 'The Autumn Wool Outerwear Drop', desc: 'Hand-tailored merino wool outerwear designed for seasonal warmth.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Minimalist Studio Deskware', desc: 'Precision machined aluminum accessories for modern creators.', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800' },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Fresh Releases</span>
            <h2 className="text-2xl font-bold text-white">New Arrivals Showcase</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-white">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 items-center"
            >
              <div className="p-8 space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase">NEW THIS WEEK</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{slides[current].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{slides[current].desc}</p>
                <motion.button whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2">
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="aspect-[4/3] bg-slate-800 overflow-hidden">
                <img src={slides[current].image} alt="Slide" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping3;
`
  },
  // 04 — POST-PURCHASE REWARD CALLOUT
  {
    id: 4,
    name: 'OrderContinueShopping4',
    dir: 'order-continue-shopping-4',
    title: 'Post-Purchase Reward Callout — Points Badge Shimmer',
    desc: 'Loyalty reward points notification banner encouraging immediate next-order redemption.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Sparkles } from 'lucide-react';

export function OrderContinueShopping4() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-2xl"
        >
          <div className="space-y-2">
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-semibold inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Rewards Earned
            </span>
            <h2 className="text-2xl font-extrabold text-white">+500 Points Added To Your Account!</h2>
            <p className="text-xs text-slate-400">You earned $25.00 in loyalty credit from Order #849202. Redeem instantly on your next order.</p>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg flex items-center gap-2 shrink-0"
          >
            Redeem Points <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping4;
`
  },
  // 05 — TRENDING COLLECTION BANNER
  {
    id: 5,
    name: 'OrderContinueShopping5',
    dir: 'order-continue-shopping-5',
    title: 'Trending Collection Banner — Hero Motion',
    desc: 'Full-bleed collection teaser banner showcasing trending items with hover arrow animations.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OrderContinueShopping5() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden p-8 sm:p-12 shadow-2xl flex flex-col justify-between min-h-[260px]"
        >
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" alt="Bg" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 max-w-lg space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">FEATURED LOOKBOOK</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Explore The Minimalist Capsule</h2>
            <p className="text-xs text-slate-300">Monochrome apparel & refined studio desk accessories.</p>
          </div>

          <div className="relative z-10 pt-6">
            <motion.button 
              whileHover={{ x: 6 }} 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 shadow-lg"
            >
              Continue Shopping Capsule <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping5;
`
  },
  // 06 — SPLIT HERO CTA CONSOLE
  {
    id: 6,
    name: 'OrderContinueShopping6',
    dir: 'order-continue-shopping-6',
    title: 'Split Hero CTA Console — Dual Pane Action',
    desc: 'Dual-pane console pairing order receipt summary with a prominent Continue Shopping action button.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';

export function OrderContinueShopping6() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase">
            <CheckCircle2 className="w-4 h-4" /> Receipt Saved & Confirmed
          </div>
          <h2 className="text-3xl font-extrabold text-white">Your Order Is Placed!</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            We sent a confirmation email to your inbox. You can continue exploring our catalog or check order status anytime.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="lg:col-span-5 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
          <ShoppingBag className="w-8 h-8 text-indigo-400 mx-auto" />
          <h4 className="font-bold text-base text-white">Explore Full Catalog</h4>
          <motion.button whileTap={{ scale: 0.95 }} className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg">
            Back to Storefront <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping6;
`
  },
  // 07 — MINIMAL MONOCHROME NAVIGATION
  {
    id: 7,
    name: 'OrderContinueShopping7',
    dir: 'order-continue-shopping-7',
    title: 'Minimal Monochrome Navigation — Refined Typography',
    desc: 'High-contrast monochrome section with generous whitespace and direct category links.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping7() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-neutral-800 pb-6 flex justify-between items-end">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">06 / STOREFRONT</span>
            <h2 className="text-3xl font-light tracking-tight text-white">CONTINUE SHOPPING</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">CATALOG INDEX</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">01 / APPAREL</span>
            <p className="text-lg font-medium text-neutral-200">Outerwear & Tops</p>
            <p className="text-xs text-neutral-400">Explore Collection →</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">02 / ACCESSORIES</span>
            <p className="text-lg font-medium text-neutral-200">Leather & Knits</p>
            <p className="text-xs text-neutral-400">Explore Collection →</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">03 / STUDIO</span>
            <p className="text-lg font-medium text-neutral-200">Desk & Lighting</p>
            <p className="text-xs text-neutral-400">Explore Collection →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping7;
`
  },
  // 08 — DARK LUXURY VIP SHOPPING LOUNGE
  {
    id: 8,
    name: 'OrderContinueShopping8',
    dir: 'order-continue-shopping-8',
    title: 'Dark Luxury VIP Shopping Lounge — Gold Glow',
    desc: 'Exclusive VIP shopping lounge presentation featuring gold radial aura glow and priority access CTA.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

export function OrderContinueShopping8() {
  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
          <Crown className="w-5 h-5" />
          <span className="text-xs font-mono uppercase tracking-widest">VIP MEMBER ACCESS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white">Private Shopping Lounge</h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto">As a valued customer, explore early access to unreleased studio drops.</p>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs transition-colors shadow-lg inline-flex items-center gap-2"
        >
          Enter Private Lounge <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
export default OrderContinueShopping8;
`
  },
  // 09 — INTERACTIVE PRODUCT GRID TEASER
  {
    id: 9,
    name: 'OrderContinueShopping9',
    dir: 'order-continue-shopping-9',
    title: 'Interactive Product Grid Teaser — Hover Cards',
    desc: 'Teaser product grid showcasing upcoming collections with interactive hover card scaling.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping9() {
  const teasers = [
    { title: 'Leather Cardholder', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Catalog Teaser</span>
          <h2 className="text-2xl font-bold text-white">Continue Shopping</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teasers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 cursor-pointer shadow-xl hover:border-indigo-500/50"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-sm text-white">{t.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping9;
`
  },
  // 10 — 3D PERSPECTIVE EXPLORE CARDS
  {
    id: 10,
    name: 'OrderContinueShopping10',
    dir: 'order-continue-shopping-10',
    title: '3D Perspective Explore Cards — Tilt Motion',
    desc: '3D perspective card layout for "New In", "Best Sellers", and "Seasonal Sales".',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Tag } from 'lucide-react';

export function OrderContinueShopping10() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <h2 className="text-2xl font-bold text-white">3D Catalog Explorer</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">New Arrivals</h3>
            <p className="text-xs text-slate-400">Discover fresh arrivals added today.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 0, rotateX: -8, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Flame className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Best Sellers</h3>
            <p className="text-xs text-slate-400">Explore community top favorites.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Tag className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Seasonal Sale</h3>
            <p className="text-xs text-slate-400">Up to 40% off selected items.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping10;
`
  },
  // 11 — TABBED DESTINATION SELECTOR
  {
    id: 11,
    name: 'OrderContinueShopping11',
    dir: 'order-continue-shopping-11',
    title: 'Tabbed Destination Selector — Smooth Category Switch',
    desc: 'Category tabbed destination selector for New In, Trending, and Clearance catalog sections.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderContinueShopping11() {
  const [tab, setTab] = useState<'New In' | 'Trending' | 'Sale'>('New In');

  const content = {
    'New In': 'Discover 50+ new studio items dropped this week.',
    Trending: 'Check out top customer trending items across outerwear.',
    Sale: 'Limited seasonal discounts on studio desk accessories.',
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Catalog Sections</span>
            <h2 className="text-2xl font-bold text-white">Explore Storefront</h2>
          </div>
          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {(['New In', 'Trending', 'Sale'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={\`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all \${
                  tab === t ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }\`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2 text-sm text-slate-300"
          >
            <h3 className="font-bold text-base text-white">{tab} Section</h3>
            <p className="leading-relaxed">{content[tab]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default OrderContinueShopping11;
`
  },
  // 12 — VISUAL STOREFRONT JOURNEY
  {
    id: 12,
    name: 'OrderContinueShopping12',
    dir: 'order-continue-shopping-12',
    title: 'Visual Storefront Journey — Stepper Connector',
    desc: 'Visual flow connecting Order Complete -> Explore Collections -> Discover Deals.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping12() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">Shopping Flow</span>
          <h2 className="text-2xl font-bold text-white">Next Shopping Steps</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <span className="text-[10px] font-mono text-slate-400">01 / COMPLETE</span>
            <h4 className="font-bold text-sm text-white">Order Confirmed</h4>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.15 }} className="bg-slate-900 p-5 rounded-2xl border border-teal-500/40 text-center space-y-2 ring-1 ring-teal-500/20">
            <span className="text-[10px] font-mono text-teal-400">02 / BROWSE</span>
            <h4 className="font-bold text-sm text-white">Explore Collections</h4>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3 }} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <span className="text-[10px] font-mono text-slate-400">03 / DISCOVER</span>
            <h4 className="font-bold text-sm text-white">Unlock Rewards</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping12;
`
  },
  // 13 — EDITORIAL FASHION MAGAZINE BANNER
  {
    id: 13,
    name: 'OrderContinueShopping13',
    dir: 'order-continue-shopping-13',
    title: 'Editorial Fashion Magazine Banner — Headline Reveal',
    desc: 'Editorial fashion magazine headline presentation pairing bold typography with catalog links.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping13() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-stone-800 pb-6">
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white uppercase">READY FOR MORE?</h1>
          <p className="text-xs font-mono text-stone-400 font-sans mt-2">CONTINUE EXPLORING THE STUDIO COLLECTION</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">01 / DROP</span>
            <p className="font-bold text-white">Autumn Wool Capsule</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">02 / STUDIO</span>
            <p className="font-bold text-white">Machined Aluminum Deskware</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">03 / LEATHER</span>
            <p className="font-bold text-white">Handcrafted Leather Goods</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping13;
`
  },
  // 14 — PERSONALIZED RECOMMENDATIONS REEL
  {
    id: 14,
    name: 'OrderContinueShopping14',
    dir: 'order-continue-shopping-14',
    title: 'Personalized Recommendations Reel — Horizontal Cards',
    desc: 'Horizontal card reel displaying suggested items to continue shopping.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping14() {
  const items = [
    { title: 'Leather Cardholder', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase">Recommended Reel</span>
          <h2 className="text-2xl font-bold text-white">Continue Shopping</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2 cursor-pointer">
              <img src={item.image} alt="R" className="w-full aspect-square object-cover rounded-xl" />
              <h4 className="font-semibold text-sm text-white">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping14;
`
  },
  // 15 — DISCOUNT LOYALTY REWARD BANNER
  {
    id: 15,
    name: 'OrderContinueShopping15',
    dir: 'order-continue-shopping-15',
    title: 'Discount Loyalty Reward Banner — Copy Code Box',
    desc: 'Thank you promo code banner offering 15% discount on the customer next order with instant copy.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, Check } from 'lucide-react';

export function OrderContinueShopping15() {
  const [copied, setCopied] = useState(false);
  const code = "THANKS15";

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-950/60 to-slate-950 p-6 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase">THANK YOU PROMO</span>
            <h3 className="text-xl font-bold text-white">Take 15% Off Your Next Order</h3>
            <p className="text-xs text-slate-400">Use code at checkout on your next purchase.</p>
          </div>
          <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-purple-400">{code}</span>
            <button onClick={copy} className="text-slate-400 hover:text-white">
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping15;
`
  },
  // 16 — MULTI-BRAND CATALOG EXPLORER
  {
    id: 16,
    name: 'OrderContinueShopping16',
    dir: 'order-continue-shopping-16',
    title: 'Multi-Brand Catalog Explorer — Brand Showcase',
    desc: 'Multi-brand catalog cards encouraging continued exploration across partner brands.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping16() {
  const brands = ['STUDIO NORDIC', 'ARCHITECTURAL LAB', 'MINIMALIST KNITS'];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase">Brand Directory</span>
          <h2 className="text-2xl font-bold text-white">Explore Partner Brands</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {brands.map((b, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center cursor-pointer">
              <h4 className="font-bold text-sm text-white font-mono">{b}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping16;
`
  },
  // 17 — FLOATING ACTION HUB
  {
    id: 17,
    name: 'OrderContinueShopping17',
    dir: 'order-continue-shopping-17',
    title: 'Floating Action Hub — Levitation Motion',
    desc: 'Levitating category cards surrounding central continue shopping action button.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping17() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">CATALOG INDEX</span>
          <h2 className="text-3xl font-extrabold text-white">CONTINUE YOUR JOURNEY</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Apparel</h4>
          </motion.div>

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Accessories</h4>
          </motion.div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Studio Deskware</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping17;
`
  },
  // 18 — VISUAL LOOKBOOK TEASER
  {
    id: 18,
    name: 'OrderContinueShopping18',
    dir: 'order-continue-shopping-18',
    title: 'Visual Lookbook Teaser — Grid Motion',
    desc: 'Mini lookbook grid showcasing seasonal outfits & direct shop links.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping18() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-stone-800 pb-4">
          <span className="text-xs font-mono uppercase text-amber-400 font-sans">LOOKBOOK</span>
          <h2 className="text-3xl font-light text-white">SEASONAL OUTFITS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" alt="L" className="w-full aspect-video object-cover rounded-lg" />
            <h4 className="font-serif text-lg text-white mt-3">The Monochrome Capsule</h4>
          </div>
          <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" alt="L" className="w-full aspect-video object-cover rounded-lg" />
            <h4 className="font-serif text-lg text-white mt-3">Studio Workspaces</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping18;
`
  },
  // 19 — HEADLINE MOMENT HERO BANNER
  {
    id: 19,
    name: 'OrderContinueShopping19',
    dir: 'order-continue-shopping-19',
    title: 'Headline Moment Hero Banner — Text Gradient Motion',
    desc: 'Bold "YOUR JOURNEY IS JUST BEGINNING." headline banner with gradient text motion.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping19() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">STOREFRONT PORTAL</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">YOUR JOURNEY IS<br/>JUST BEGINNING.</h2>
        </motion.div>
        <button className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors">
          Continue Shopping Now
        </button>
      </div>
    </section>
  );
}
export default OrderContinueShopping19;
`
  },
  // 20 — AWARD-STYLE POST-PURCHASE EXPERIENCE
  {
    id: 20,
    name: 'OrderContinueShopping20',
    dir: 'order-continue-shopping-20',
    title: 'Award-Style Post-Purchase Experience — Ultimate Navigation',
    desc: 'Ultimate post-purchase continue shopping section combining reward badge, category tabs, 3D card tilt, promo code copy micro-interaction, and viewport animations.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, ArrowRight, Tag, Copy, Check } from 'lucide-react';

export function OrderContinueShopping20() {
  const [copied, setCopied] = useState(false);
  const code = "THANKS15";

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      <motion.div 
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Post-Purchase Hub
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Navigation Portal</h2>
            </div>
          </div>
          
          <div className="bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800 flex items-center gap-3">
            <span className="text-xs text-zinc-400">Next Order Code:</span>
            <span className="font-mono text-xs font-bold text-amber-400">{code}</span>
            <button onClick={copy} className="text-zinc-400 hover:text-white">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </motion.div>

        {/* Hero CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="bg-zinc-900/60 p-8 rounded-3xl border border-amber-500/20 text-center space-y-4 shadow-xl"
        >
          <h1 className="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
            CONTINUE SHOPPING THE STUDIO
          </h1>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">Explore exclusive new drops, limited capsules, and member rewards.</p>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Explore Catalog <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping20;
`
  }
];

// Write components and json
components.forEach(comp => {
  const targetFolder = path.join(baseDir, comp.dir);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Write TSX
  const tsxPath = path.join(targetFolder, `${comp.name}.tsx`);
  fs.writeFileSync(tsxPath, comp.code, 'utf8');

  // Write JSON
  const jsonPath = path.join(targetFolder, `${comp.dir}.json`);
  const jsonContent = {
    id: comp.dir,
    title: comp.title,
    category: "order-continue-shopping",
    description: comp.desc
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');

  console.log(`Generated ${comp.name} with animations & JSON metadata.`);
});

console.log('Successfully created all 20 Order Continue Shopping variants!');
