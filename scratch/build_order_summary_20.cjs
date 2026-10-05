const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const subcatDir = path.join(rootDir, 'src', 'components', 'sections', 'order', '02-order-summary');

if (!fs.existsSync(subcatDir)) {
  fs.mkdirSync(subcatDir, { recursive: true });
}

// Map of 20 unique Order Summary variants
const variants = [
  // 01 — CLASSIC PREMIUM SUMMARY
  {
    num: 1,
    id: 'order-summary-1',
    compName: 'OrderSummary1',
    title: 'CLASSIC PREMIUM SUMMARY — STAGGERED ROW REVEAL',
    desc: 'Clean structured product list with itemized pricing panel and staggered row entrance motion.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Tag, ShieldCheck, ArrowRight } from 'lucide-react';

export function OrderSummary1({ data }: { data?: any }) {
  const items = [
    { name: 'Minimalist Leather Tote', color: 'Cognac Brown', qty: 1, price: '₹2,999' },
    { name: 'Organic Cotton Tee', color: 'Off-White', qty: 2, price: '₹1,400' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans"
    >
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-400" />
          Order Summary (3 items)
        </h3>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          SAVINGS APPLIED
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {items.map((it, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.15 }}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs"
          >
            <div>
              <h4 className="font-bold text-white">{it.name}</h4>
              <span className="text-[10px] text-slate-400 font-mono">Variant: {it.color} • Qty: {it.qty}</span>
            </div>
            <span className="font-mono font-bold text-emerald-400">{it.price}</span>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
        <div className="flex justify-between"><span>Subtotal:</span><span>₹4,399</span></div>
        <div className="flex justify-between text-emerald-400"><span>Coupon Discount (SUMMER20):</span><span>-₹400</span></div>
        <div className="flex justify-between"><span>Shipping Fee:</span><span>FREE</span></div>
        <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-slate-800">
          <span>GRAND TOTAL:</span><span className="text-emerald-400">₹3,999</span>
        </div>
      </div>
    </motion.div>
  );
}
export default OrderSummary1;`
  },

  // 02 — EDITORIAL ORDER SUMMARY
  {
    num: 2,
    id: 'order-summary-2',
    compName: 'OrderSummary2',
    title: 'EDITORIAL ORDER SUMMARY — TYPOGRAPHY CLIP REVEAL',
    desc: 'Oversized editorial typography reveal paired with an asymmetric product breakdown.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary2({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="mb-8 border-b border-stone-800 pb-4"
      >
        <span className="text-xs font-sans text-emerald-400 uppercase tracking-widest font-bold block mb-1">SELECTED CART</span>
        <h2 className="text-3xl sm:text-5xl font-normal italic text-white">Order Breakdown</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs mb-6">
        <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
          <span className="text-[10px] text-stone-400 font-mono block mb-2">ITEMIZED LIST</span>
          <p className="font-bold text-white text-sm">Monochrome Wool Blazer (x1)</p>
          <p className="text-stone-400 mt-1">₹6,499</p>
        </div>
        <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
          <span className="text-[10px] text-stone-400 font-mono block mb-2">PRICE CALCULATION</span>
          <p className="text-stone-300">Subtotal: ₹6,499</p>
          <p className="text-emerald-400 font-bold mt-1">Final Total: ₹6,499</p>
        </div>
      </div>
    </div>
  );
}
export default OrderSummary2;`
  },

  // 03 — SPLIT SUMMARY
  {
    num: 3,
    id: 'order-summary-3',
    compName: 'OrderSummary3',
    title: 'SPLIT SUMMARY — DUAL COLUMN ENTRANCE',
    desc: 'Products presented on the left column with financial breakdown entering independently on the right.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary3({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800"
      >
        <span className="text-xs font-mono text-emerald-400 uppercase font-bold block mb-3">PRODUCT SELECTION</span>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
          <h4 className="font-bold text-white">Wireless Noise-Canceling Headphones</h4>
          <span className="text-emerald-400 font-mono font-bold block mt-1">₹8,999</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 font-mono text-xs flex flex-col justify-between"
      >
        <span className="text-slate-400 block mb-2">FINANCIAL BREAKDOWN</span>
        <div className="space-y-1.5 text-slate-300">
          <div className="flex justify-between"><span>Items Subtotal:</span><span>₹8,999</span></div>
          <div className="flex justify-between text-emerald-400"><span>VIP Discount:</span><span>-₹1,000</span></div>
          <div className="flex justify-between font-bold text-white text-sm pt-2 border-t border-slate-800">
            <span>TOTAL:</span><span className="text-emerald-400">₹7,999</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default OrderSummary3;`
  },

  // 04 — PRODUCT-FIRST SUMMARY
  {
    num: 4,
    id: 'order-summary-4',
    compName: 'OrderSummary4',
    title: 'PRODUCT-FIRST SUMMARY — CLIP-PATH REVEAL',
    desc: 'Large product iconography and image placement dominates visual hierarchy.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export function OrderSummary4({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
      <motion.div 
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="w-32 h-32 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0"
      >
        <Package className="w-14 h-14 stroke-[2]" />
      </motion.div>
      <div className="text-center sm:text-left flex-1 font-sans">
        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest block mb-1">FEATURED ITEM SUMMARY</span>
        <h3 className="text-xl font-bold text-white">Smart Fitness Watch Pro</h3>
        <p className="text-xs text-slate-400 my-1">Midnight Black • Silicone Strap • Qty: 1</p>
        <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
          <span className="text-slate-400">Total Order Cost:</span>
          <span className="text-emerald-400 font-bold text-sm">₹5,499</span>
        </div>
      </div>
    </div>
  );
}
export default OrderSummary4;`
  },

  // 05 — PRICE-FIRST SUMMARY
  {
    num: 5,
    id: 'order-summary-5',
    compName: 'OrderSummary5',
    title: 'PRICE-FIRST SUMMARY — PROGRESSIVE PRICE REVEAL',
    desc: 'Grand total and savings breakdown positioned as the hero visual element.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary5({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center font-sans shadow-2xl">
      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">TOTAL AMOUNT PAYABLE</span>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono mb-2"
      >
        ₹3,499
      </motion.h2>
      <span className="text-xs font-mono text-teal-300 font-bold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block mb-6">
        YOU SAVE ₹800 TODAY
      </span>
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-left space-y-1.5 text-slate-300">
        <div className="flex justify-between"><span>Base Price:</span><span>₹4,299</span></div>
        <div className="flex justify-between text-emerald-400"><span>Instant Savings:</span><span>-₹800</span></div>
        <div className="flex justify-between"><span>Delivery:</span><span>FREE</span></div>
      </div>
    </div>
  );
}
export default OrderSummary5;`
  },

  // 06 — RECEIPT SUMMARY
  {
    num: 6,
    id: 'order-summary-6',
    compName: 'OrderSummary6',
    title: 'RECEIPT SUMMARY — VERTICAL RECEIPT DRAW',
    desc: 'Digital receipt structure with itemized rows revealing vertically with perforated line aesthetic.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary6({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-mono shadow-2xl"
    >
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-4">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">PRE-CHECKOUT RECEIPT</h4>
        <span className="text-[10px] text-stone-400">ITEMIZED SUMMARY</span>
      </div>
      <div className="space-y-2 text-xs text-stone-300 mb-6">
        <div className="flex justify-between"><span>1x Leather Backpack</span><span>₹4,999</span></div>
        <div className="flex justify-between"><span>1x Card Holder</span><span>₹999</span></div>
        <div className="flex justify-between text-emerald-400"><span>Discount Code:</span><span>-₹1,000</span></div>
        <div className="flex justify-between font-bold text-white text-sm pt-3 border-t border-stone-800">
          <span>FINAL TOTAL:</span><span className="text-emerald-400">₹4,998</span>
        </div>
      </div>
    </motion.div>
  );
}
export default OrderSummary6;`
  },

  // 07 — HORIZONTAL PRODUCT SUMMARY
  {
    num: 7,
    id: 'order-summary-7',
    compName: 'OrderSummary7',
    title: 'HORIZONTAL PRODUCT SUMMARY — HORIZONTAL SLIDE REVEAL',
    desc: 'Products arranged horizontally with side slide reveal interaction.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export function OrderSummary7({ data }: { data?: any }) {
  const items = [
    { title: 'Canvas Sneakers', price: '₹2,499' },
    { title: 'Cotton Socks Pack', price: '₹499' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">HORIZONTAL ITEM CAROUSEL</span>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {items.map((it, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.2 }}
            className="p-4 rounded-2xl bg-slate-950 border border-slate-800 min-w-[220px] flex-shrink-0 text-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 mb-2">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white">{it.title}</h4>
            <span className="font-mono text-emerald-400 font-bold block mt-1">{it.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default OrderSummary7;`
  },

  // 08 — STACKED PRODUCT CARDS
  {
    num: 8,
    id: 'order-summary-8',
    compName: 'OrderSummary8',
    title: 'STACKED PRODUCT CARDS — CARD STACK DEPTH',
    desc: 'Products presented as layered card deck stacked in position with depth.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary8({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 space-y-2 font-sans">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 text-xs flex justify-between items-center shadow-lg"
      >
        <div>
          <h4 className="font-bold">Over-Ear Studio Headphones</h4>
          <span className="text-slate-400">Qty: 1</span>
        </div>
        <span className="font-mono font-bold text-emerald-400">₹7,999</span>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.15 }}
        className="p-5 bg-slate-950 text-slate-300 rounded-2xl border border-slate-800 text-xs flex justify-between items-center"
      >
        <span>Estimated Taxes & Shipping</span>
        <span className="font-mono font-bold text-white">FREE</span>
      </motion.div>
    </div>
  );
}
export default OrderSummary8;`
  },

  // 09 — COMPACT CHECKOUT SUMMARY
  {
    num: 9,
    id: 'order-summary-9',
    compName: 'OrderSummary9',
    title: 'COMPACT CHECKOUT SUMMARY — DENSE USABILITY',
    desc: 'Dense, highly usable checkout summary with inline item insertion & price transition.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary9({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-lg mx-auto my-6 p-5 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 font-sans text-xs">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3 font-bold">
        <span>SUMMARY (2 ITEMS)</span>
        <span className="font-mono text-emerald-400">₹2,999</span>
      </div>
      <div className="space-y-1.5 text-slate-400 font-mono">
        <div className="flex justify-between"><span>Items Total:</span><span>₹3,499</span></div>
        <div className="flex justify-between text-emerald-400"><span>Discount:</span><span>-₹500</span></div>
      </div>
    </div>
  );
}
export default OrderSummary9;`
  },

  // 10 — ASYMMETRIC GRID
  {
    num: 10,
    id: 'order-summary-10',
    compName: 'OrderSummary10',
    title: 'ASYMMETRIC GRID — EDITORIAL LAYOUT REVEAL',
    desc: 'Editorial grid with intentionally different column sizes and independent section reveal.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="sm:col-span-2 p-6 bg-slate-900 rounded-3xl border border-slate-800 text-white"
      >
        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-2">PRIMARY ITEM</span>
        <h3 className="text-lg font-bold">Mechanical Wireless Keyboard</h3>
        <p className="text-slate-400 mt-1 font-mono">₹4,200</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.15 }}
        className="p-6 bg-slate-950 rounded-3xl border border-slate-800 font-mono text-slate-300 flex flex-col justify-center"
      >
        <span className="text-[10px] text-slate-500 block mb-1">PAYABLE TOTAL</span>
        <span className="text-2xl font-bold text-emerald-400">₹4,200</span>
      </motion.div>
    </div>
  );
}
export default OrderSummary10;`
  },

  // 11 — COLLAPSIBLE SUMMARY
  {
    num: 11,
    id: 'order-summary-11',
    compName: 'OrderSummary11',
    title: 'COLLAPSIBLE SUMMARY — HEIGHT TRANSITION',
    desc: 'Expandable product detail accordion with smooth height & layout transition.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function OrderSummary11({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans text-xs">
      <div 
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer py-1"
      >
        <span className="font-bold flex items-center gap-2">
          ORDER SUMMARY ({open ? 'Collapse' : 'Expand 2 items'})
          <ChevronDown className={"w-4 h-4 transition-transform " + (open ? "rotate-180" : "")} />
        </span>
        <span className="font-mono text-emerald-400 font-bold text-sm">₹3,999</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pt-4 border-t border-slate-800 mt-4 font-mono text-slate-300 space-y-2"
          >
            <div className="flex justify-between"><span>1x Leather Wallet</span><span>₹2,499</span></div>
            <div className="flex justify-between"><span>1x Key Organizer</span><span>₹1,500</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default OrderSummary11;`
  },

  // 12 — SAVINGS-CENTRIC SUMMARY
  {
    num: 12,
    id: 'order-summary-12',
    compName: 'OrderSummary12',
    title: 'SAVINGS-CENTRIC SUMMARY — SAVINGS HIGHLIGHT',
    desc: 'Visually highlights subtotal, coupon discount, total savings, and final payable amount.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary12({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-2">TOTAL SAVINGS APPLIED</span>
      <h2 className="text-3xl font-black text-teal-300 font-mono mb-4">YOU SAVE ₹1,200</h2>
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1.5 text-left text-slate-300">
        <div className="flex justify-between"><span>Original Total:</span><span className="line-through text-slate-500">₹5,199</span></div>
        <div className="flex justify-between text-emerald-400 font-bold"><span>Final Checkout Total:</span><span>₹3,999</span></div>
      </div>
    </div>
  );
}
export default OrderSummary12;`
  },

  // 13 — TIMELINE SUMMARY
  {
    num: 13,
    id: 'order-summary-13',
    compName: 'OrderSummary13',
    title: 'TIMELINE SUMMARY — CONNECTOR LINE DRAW',
    desc: 'Vertical order timeline structure with animated SVG connector lines.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-mono text-xs relative">
      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4">ORDER CALCULATION TIMELINE</span>
      <div className="space-y-4 relative pl-6 border-l-2 border-slate-800">
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}>
          <h4 className="font-bold text-white">Itemized Subtotal</h4>
          <p className="text-slate-400">₹4,500</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 0.15 }}>
          <h4 className="font-bold text-emerald-400">Discount Code</h4>
          <p className="text-emerald-400">-₹500</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 0.3 }}>
          <h4 className="font-bold text-white">Final Total Payable</h4>
          <p className="text-lg font-bold text-emerald-400">₹4,000</p>
        </motion.div>
      </div>
    </div>
  );
}
export default OrderSummary13;`
  },

  // 14 — DARK LUXURY SUMMARY
  {
    num: 14,
    id: 'order-summary-14',
    compName: 'OrderSummary14',
    title: 'DARK LUXURY SUMMARY — AMBIENT LIGHT MOTION',
    desc: 'Premium dark ecommerce summary composition with subtle depth & light movement.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary14({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 relative group">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600/30 to-teal-500/20 blur-xl pointer-events-none" 
      />
      <div className="w-full p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl relative font-sans text-center">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">LUXURY ORDER SELECTION</span>
        <h3 className="text-2xl font-bold text-white mb-4">Total Amount: ₹6,999</h3>
        <p className="text-xs text-slate-400 font-mono">Includes Tax & Express Insured Courier</p>
      </div>
    </div>
  );
}
export default OrderSummary14;`
  },

  // 15 — IMAGE + INFORMATION STACK
  {
    num: 15,
    id: 'order-summary-15',
    compName: 'OrderSummary15',
    title: 'IMAGE + INFORMATION STACK — SEPARATE ENTRANCE',
    desc: 'Distinctive image and information stacked composition with separate entrance timing.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
          <span className="font-mono text-emerald-400 font-bold block mb-1">SELECTED PRODUCT</span>
          <p className="font-bold text-white text-sm">Designer Sunglasses</p>
          <span className="text-slate-400">Qty: 1</span>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.15 }} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono flex flex-col justify-center">
          <span className="text-slate-400">PAYABLE AMOUNT</span>
          <span className="text-xl font-bold text-emerald-400">₹3,299</span>
        </motion.div>
      </div>
    </div>
  );
}
export default OrderSummary15;`
  },

  // 16 — 3D PRODUCT SUMMARY
  {
    num: 16,
    id: 'order-summary-16',
    compName: 'OrderSummary16',
    title: '3D PRODUCT SUMMARY — PERSPECTIVE PARALLAX',
    desc: 'Layered product order cards using CSS perspective 3D depth and parallax hover tilt.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-lg mx-auto my-6 [perspective:1000px]">
      <motion.div 
        initial={{ rotateX: 20, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, type: 'spring' }}
        whileHover={{ rotateY: 4, scale: 1.02 }}
        className="p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl text-center cursor-pointer font-sans"
      >
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">PERSPECTIVE CARD</span>
        <h3 className="text-2xl font-bold text-white mb-1">Order Summary</h3>
        <p className="text-xs font-mono text-slate-400">Total Payable: <strong className="text-emerald-400">₹5,999</strong></p>
      </motion.div>
    </div>
  );
}
export default OrderSummary16;`
  },

  // 17 — PRICE CALCULATION VISUAL
  {
    num: 17,
    id: 'order-summary-17',
    compName: 'OrderSummary17',
    title: 'PRICE CALCULATION VISUAL — GEOMETRIC PATH FLOW',
    desc: 'Visual calculation relationship (Products → Subtotal → Discount → Tax → Total) with progress line.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary17({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center font-mono text-xs">
      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-6">PRICE CALCULATION FLOW</span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">Items: ₹5,000</div>
        <span className="text-emerald-400 font-bold">→</span>
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400">Discount: -₹1,000</div>
        <span className="text-emerald-400 font-bold">→</span>
        <div className="p-3 bg-emerald-950 rounded-xl border border-emerald-500/40 text-emerald-300 font-bold">TOTAL: ₹4,000</div>
      </div>
    </div>
  );
}
export default OrderSummary17;`
  },

  // 18 — MINIMAL MONOCHROME
  {
    num: 18,
    id: 'order-summary-18',
    compName: 'OrderSummary18',
    title: 'MINIMAL MONOCHROME — PROGRESSIVE RULE DRAW',
    desc: 'Strong typography, clean whitespace, and thin rules drawing progressively.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-black text-white rounded-2xl border border-zinc-800 font-mono text-center relative">
      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="h-0.5 bg-emerald-400 mx-auto mb-6" />
      <h3 className="text-xl font-extrabold mb-4">ORDER SUMMARY</h3>
      <div className="text-xs text-zinc-300 space-y-1 mb-6 text-left max-w-xs mx-auto border-l-2 border-emerald-400 pl-4">
        <p>SUBTOTAL: ₹4,999</p>
        <p>SHIPPING: FREE</p>
        <p>TOTAL: ₹4,999</p>
      </div>
      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.3 }} className="h-0.5 bg-zinc-800 mx-auto" />
    </div>
  );
}
export default OrderSummary18;`
  },

  // 19 — MAGAZINE CHECKOUT
  {
    num: 19,
    id: 'order-summary-19',
    compName: 'OrderSummary19',
    title: 'MAGAZINE CHECKOUT — EDITORIAL MOTION REVEAL',
    desc: 'Premium editorial ecommerce composition with staggered text block timing.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSummary19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-serif">
      <span className="text-xs font-sans font-bold text-emerald-400 uppercase tracking-widest block mb-2">EDITORIAL SUMMARY</span>
      <h2 className="text-3xl sm:text-5xl font-normal italic text-white mb-4">Selected Items</h2>
      <p className="font-sans text-xs text-stone-400 max-w-md">1x Leather Jacket • Grand Total: <strong className="text-white font-mono">₹8,999</strong></p>
    </div>
  );
}
export default OrderSummary19;`
  },

  // 20 — AWARD-STYLE ORDER SUMMARY
  {
    num: 20,
    id: 'order-summary-20',
    compName: 'OrderSummary20',
    title: 'AWARD-STYLE ORDER SUMMARY — ULTIMATE MOMENT',
    desc: 'The ultimate order summary combining editorial typography, asymmetric layout, price hierarchy, SVG, and interactive tabs.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';

export function OrderSummary20({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest block mb-2">ULTIMATE ORDER SUMMARY</span>
      <h2 className="text-3xl font-extrabold text-white mb-4">Grand Total: ₹4,999</h2>

      <div className="flex justify-center gap-2 mb-6">
        {['items', 'pricing', 'guarantee'].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={"px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer " + (activeTab === t ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20" : "bg-slate-900 text-slate-400 hover:text-white")}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'items' && (
          <motion.div key="items" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            <div className="flex justify-between py-1 text-slate-300"><span>1x Premium Denim Jacket</span><span className="font-mono font-bold text-emerald-400">₹4,999</span></div>
          </motion.div>
        )}
        {activeTab === 'pricing' && (
          <motion.div key="pricing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
            <div className="flex justify-between py-1"><span>Subtotal:</span><span>₹5,999</span></div>
            <div className="flex justify-between py-1 text-emerald-400"><span>Discount:</span><span>-₹1,000</span></div>
            <div className="flex justify-between py-1 font-bold text-white border-t border-slate-800 pt-2"><span>Payable Total:</span><span className="text-emerald-400">₹4,999</span></div>
          </motion.div>
        )}
        {activeTab === 'guarantee' && (
          <motion.div key="guarantee" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <p>100% Price Protection & 30-Day Money Back Refund Guarantee Included.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default OrderSummary20;`
  }
];

// Write all component files and json files
variants.forEach(v => {
  const folder = path.join(subcatDir, v.id);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const tsxPath = path.join(folder, `${v.compName}.tsx`);
  const jsonPath = path.join(folder, `${v.id}.json`);

  const jsonContent = JSON.stringify({
    id: v.id,
    name: v.title,
    description: v.desc,
    category: 'order-summary',
    componentName: v.compName,
    meta: {
      id: v.id,
      name: v.title,
      description: v.desc,
      category: 'order-summary',
      componentName: v.compName
    }
  }, null, 2);

  fs.writeFileSync(tsxPath, v.code, 'utf-8');
  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
});

console.log('Successfully generated all 20 Order Summary UI components!');
