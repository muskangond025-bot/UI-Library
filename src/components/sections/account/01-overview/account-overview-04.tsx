import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Star, Compass, Sparkles } from 'lucide-react';

const clipText = {
  hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' }
  }
};

const moduleReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.6 }
  })
};

export function AccountOverview4() {
  return (
    <div className="w-full bg-neutral-950 text-neutral-100 p-8 md:p-16 min-h-[720px] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Large Editorial Title with Clip Path Reveal */}
        <div className="space-y-4 border-b border-neutral-800 pb-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              EDITORIAL ACCOUNT PORTAL
            </span>
          </div>

          <motion.div variants={clipText} initial="hidden" animate="visible">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white leading-none">
              HELLO ALEX,<br />
              <span className="italic font-light text-neutral-400">WELCOME BACK.</span>
            </h1>
          </motion.div>
        </div>

        {/* Asymmetric Account Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Spotlight Column */}
          <motion.div
            custom={1}
            variants={moduleReveal}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase">CURRENT STATUS</span>
                <h3 className="text-2xl font-serif text-white mt-1">Gold tier collector</h3>
              </div>
              <span className="p-3 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Star className="w-5 h-5" />
              </span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Your curated account summary for October. You have accumulated 1,250 points, 12 completed orders, and 8 saved items in your private collection.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
              <div>
                <span className="text-xs text-neutral-500">ORDERS</span>
                <p className="text-2xl font-serif text-white">12</p>
              </div>
              <div>
                <span className="text-xs text-neutral-500">WISHLIST</span>
                <p className="text-2xl font-serif text-white">08</p>
              </div>
              <div>
                <span className="text-xs text-neutral-500">REWARDS</span>
                <p className="text-2xl font-serif text-amber-400">1,250</p>
              </div>
            </div>

            <button className="w-full py-4 bg-neutral-100 hover:bg-white text-neutral-950 rounded-2xl font-semibold text-sm transition-colors flex items-center justify-center gap-2">
              <span>EXPLORE CUSTOMER ESSENTIALS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Secondary Asymmetric Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              custom={2}
              variants={moduleReveal}
              initial="hidden"
              animate="visible"
              className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-amber-400">RECENT DELIVERIES</span>
                <ArrowDownRight className="w-4 h-4 text-neutral-500" />
              </div>
              <h4 className="text-lg font-serif text-white">#DH-28491 — Minimalist Watch</h4>
              <p className="text-xs text-neutral-400 mt-1">Estimated delivery: Tomorrow, 2:00 PM</p>
            </motion.div>

            <motion.div
              custom={3}
              variants={moduleReveal}
              initial="hidden"
              animate="visible"
              className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-neutral-400">ADDRESS BOOK</span>
                <Compass className="w-4 h-4 text-neutral-500" />
              </div>
              <h4 className="text-lg font-serif text-white">3 Saved Addresses</h4>
              <p className="text-xs text-neutral-400 mt-1">Default: 742 Evergreen Terrace, New York</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview4;
