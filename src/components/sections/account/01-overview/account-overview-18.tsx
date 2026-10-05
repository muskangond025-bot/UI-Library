import React from 'react';
import { motion, Variants } from 'framer-motion';

const magRevealLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
};

const magRevealRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
};

export function AccountOverview18() {
  return (
    <div className="w-full bg-[#0d0d0f] text-neutral-100 p-8 md:p-16 min-h-[720px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Magazine Masthead */}
        <div className="border-b border-neutral-800 pb-6 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
              ISSUE N° 10 • PRIVATE CLIENT
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">THE ACCOUNT DIGEST</h1>
          </div>
          <span className="text-xs font-mono text-neutral-500">OCTOBER 2026</span>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Profile Hero */}
          <motion.div
            variants={magRevealLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-mono text-neutral-400">CUSTOMER PROFILE SPOTLIGHT</span>
            <h2 className="text-3xl font-serif text-white leading-snug">
              Alex Morgan,<br />
              <span className="italic text-neutral-400 font-light">Gold Tier Patron & Collector</span>
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-serif">
              Welcome to your bespoke account summary. Here you can monitor your active luxury dispatches, review saved collections, and manage VIP concierge preferences.
            </p>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl flex justify-between items-center">
              <div>
                <span className="text-xs font-mono text-amber-400">REWARD BALANCE</span>
                <p className="text-2xl font-serif text-white">1,250 Points Available</p>
              </div>
              <button className="px-4 py-2 bg-amber-400 text-black text-xs font-bold uppercase rounded-lg">
                Redeem
              </button>
            </div>
          </motion.div>

          {/* Magazine Side Columns */}
          <motion.div
            variants={magRevealRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase">DIGEST SUMMARY</span>
              <div className="space-y-3 text-sm font-serif">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Completed Orders</span>
                  <span className="font-sans font-bold">12</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Saved Wishlist Items</span>
                  <span className="font-sans font-bold">08</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Delivery Hubs</span>
                  <span className="font-sans font-bold">03</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview18;
