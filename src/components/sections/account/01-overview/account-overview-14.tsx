import React from 'react';
import { motion, Variants } from 'framer-motion';

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
};

export function AccountOverview14() {
  return (
    <div className="w-full bg-white text-black p-8 md:p-16 min-h-[700px] flex items-center font-sans">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            01 / ACCOUNT HOME
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black">
            ALEX MORGAN
          </h1>
          <p className="text-xs font-mono text-neutral-500">GOLD MEMBER • 1,250 POINTS</p>
        </div>

        {/* Thin Rule */}
        <motion.div
          variants={lineReveal}
          initial="hidden"
          animate="visible"
          className="w-full h-px bg-black origin-left"
        />

        {/* Typography-First Account Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'ORDERS', val: '12', desc: 'Active order #DH-28491' },
            { label: 'WISHLIST', val: '08', desc: 'Saved products' },
            { label: 'ADDRESSES', val: '03', desc: 'Verified delivery hubs' },
            { label: 'REWARDS', val: '1,250', desc: '$25 voucher ready' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider">{item.label}</span>
              <div className="text-4xl font-light text-black tracking-tight">{item.val}</div>
              <p className="text-xs text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Another Thin Rule */}
        <motion.div
          variants={lineReveal}
          initial="hidden"
          animate="visible"
          className="w-full h-px bg-neutral-200 origin-left"
        />

        <div className="flex flex-col md:flex-row justify-between text-xs font-mono text-neutral-500 gap-4">
          <span>ACCOUNT OVERVIEW SNAPSHOT</span>
          <span>PREFERENCES & SECURITY VERIFIED</span>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview14;
