const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const subcatDir = path.join(rootDir, 'src', 'components', 'sections', 'order', '01-order-success');

if (!fs.existsSync(subcatDir)) {
  fs.mkdirSync(subcatDir, { recursive: true });
}

// Map of variant index to implementation and JSON data
const variants = [
  // 01 — PREMIUM CONFIRMATION
  {
    num: 1,
    id: 'order-success-1',
    compName: 'OrderSuccess1',
    title: 'PREMIUM CONFIRMATION — STAGGERED REVEAL',
    desc: 'Large success message with order reference and next steps revealed with staggered entrance physics.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShoppingBag, PackageCheck, Mail, MapPin } from 'lucide-react';

export function OrderSuccess1({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800/80 shadow-2xl font-sans relative overflow-hidden">
      <div className="text-center mb-8">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          <PackageCheck className="w-10 h-10 stroke-[2.2]" />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20"
        >
          ORDER CONFIRMED ✓
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl font-extrabold text-white mt-3 mb-2"
        >
          Thank You For Your Order!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto"
        >
          We've received your order and sent a confirmation email to <span className="text-slate-200 font-semibold">muskan@example.com</span>.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-8 text-xs font-mono"
      >
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
          <span className="text-[10px] text-slate-500 block mb-1">ORDER NUMBER</span>
          <span className="text-emerald-400 font-bold text-sm">#DH-28491</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
          <span className="text-[10px] text-slate-500 block mb-1">TOTAL AMOUNT</span>
          <span className="text-white font-bold text-sm">₹4,999</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-850">
          <span className="text-[10px] text-slate-500 block mb-1">ESTIMATED DELIVERY</span>
          <span className="text-teal-400 font-bold text-sm">3–5 Business Days</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer">
          <ShoppingBag className="w-4 h-4" />
          Continue Shopping
        </button>
        <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer">
          View Order Status
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </button>
      </motion.div>
    </div>
  );
}
export default OrderSuccess1;`
  },

  // 02 — ANIMATED SUCCESS CHECK
  {
    num: 2,
    id: 'order-success-2',
    compName: 'OrderSuccess2',
    title: 'ANIMATED SUCCESS CHECK — SVG DRAW PATH',
    desc: 'Large custom SVG checkmark progressive drawing path animation as visual centerpiece.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Mail, ArrowRight } from 'lucide-react';

export function OrderSuccess2({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [0.9, 1.1, 1], opacity: [0.5, 1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 rounded-full bg-emerald-500/20 pointer-events-none"
        />
        <svg className="w-24 h-24 overflow-visible" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="none" />
          <motion.circle 
            cx="50" cy="50" r="44" 
            className="text-emerald-400" 
            strokeWidth="6" 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
          <motion.path 
            d="M30 52 L44 66 L70 36" 
            className="text-emerald-400" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            stroke="currentColor" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
      </div>

      <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-1">
        PAYMENT SUCCESSFUL
      </span>
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Order Confirmed!</h3>
      
      <p className="text-xs text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
        Your order <strong className="text-emerald-400 font-mono">#DH-28491</strong> for <strong className="text-white">₹4,999</strong> is placed. Estimated delivery: <span className="text-teal-300 font-medium">Oct 12–15</span>.
      </p>

      <div className="flex gap-3 justify-center">
        <button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer">
          Track Package
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-700 transition-all cursor-pointer">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess2;`
  },

  // 03 — EDITORIAL SUCCESS
  {
    num: 3,
    id: 'order-success-3',
    compName: 'OrderSuccess3',
    title: 'EDITORIAL SUCCESS — TYPOGRAPHY CLIP REVEAL',
    desc: 'Oversized luxury typography reveal with refined order metadata below.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OrderSuccess3({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 font-serif shadow-2xl relative overflow-hidden">
      <div className="mb-8 border-b border-stone-800 pb-6">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-sans font-extrabold text-emerald-400 uppercase tracking-widest block mb-2">
            TRANSACTION COMPLETE
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal italic text-white tracking-tight leading-none">
            ORDER CONFIRMED
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs mb-8">
        <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
          <span className="text-[10px] text-stone-500 uppercase font-mono block mb-1">REFERENCE</span>
          <p className="text-base font-bold text-white font-mono">ORDER #DH-28491</p>
          <p className="text-stone-400 mt-1">Receipt emailed to muskan@example.com</p>
        </div>
        <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
          <span className="text-[10px] text-stone-500 uppercase font-mono block mb-1">ESTIMATED DISPATCH</span>
          <p className="text-base font-bold text-emerald-400">OCTOBER 12–15, 2026</p>
          <p className="text-stone-400 mt-1">Total Paid: ₹4,999 via Express Checkout</p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-stone-800 font-sans text-xs">
        <span className="text-stone-400">Questions? Contact Concierge 24/7</span>
        <button className="px-5 py-2.5 rounded-xl bg-white text-stone-950 font-bold hover:bg-stone-200 transition-colors flex items-center gap-2 cursor-pointer">
          Continue Shopping <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess3;`
  },

  // 04 — ORDER TIMELINE
  {
    num: 4,
    id: 'order-success-4',
    compName: 'OrderSuccess4',
    title: 'ORDER TIMELINE — PROGRESS LINE ANIMATION',
    desc: 'Visual order timeline (Confirmed → Processing → Shipped → Delivered) with SVG progress line draw to confirmed stage.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Truck, PackageCheck, ArrowRight } from 'lucide-react';

export function OrderSuccess4({ data }: { data?: any }) {
  const steps = [
    { title: 'Order Confirmed', time: 'Just now', active: true },
    { title: 'Processing', time: 'Est. 12 hours', active: false },
    { title: 'Shipped', time: 'Est. Oct 13', active: false },
    { title: 'Delivered', time: 'Est. Oct 15', active: false }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">LIVE ORDER TRACKER</span>
          <h3 className="text-xl font-bold text-white">Order Status: Confirmed</h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          #DH-28491
        </span>
      </div>

      <div className="relative my-8 px-4">
        <div className="absolute top-5 left-8 right-8 h-1 bg-slate-800 z-0" />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '25%' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-5 left-8 h-1 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)] z-0"
        />

        <div className="grid grid-cols-4 gap-2 relative z-10 text-center">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className={"w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 " + (st.active ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30" : "bg-slate-900 border-slate-700 text-slate-500")}
              >
                {st.active ? <CheckCircle2 className="w-5 h-5 stroke-[2.5]" /> : <Clock className="w-4 h-4" />}
              </motion.div>
              <h4 className={"text-xs font-bold " + (st.active ? "text-white" : "text-slate-400")}>{st.title}</h4>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5">{st.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
        <span className="text-slate-300">Total Paid: <strong className="text-white">₹4,999</strong> • Shipping Address Verified</span>
        <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold border border-slate-700 transition-all cursor-pointer">
          Track Delivery
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess4;`
  },

  // 05 — DELIVERY FOCUSED
  {
    num: 5,
    id: 'order-success-5',
    compName: 'OrderSuccess5',
    title: 'DELIVERY FOCUSED — ESTIMATED DATE TRANSITION',
    desc: 'Oversized estimated arrival date window transition as primary hero element.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

export function OrderSuccess5({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-2">
        ORDER #DH-28491 CONFIRMED
      </span>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="my-6 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-inner"
      >
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">EXPECTED ARRIVAL WINDOW</span>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
          OCT 12–15
        </h2>
        <span className="text-xs text-slate-400 mt-2 block flex items-center justify-center gap-1.5">
          <Truck className="w-4 h-4 text-emerald-400" /> Express Air Courier Shipment
        </span>
      </motion.div>

      <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
        We've dispatched tracking info to <strong className="text-white">muskan@example.com</strong>. Total: <span className="text-emerald-400 font-mono font-bold">₹4,999</span>.
      </p>

      <div className="flex gap-3 justify-center">
        <button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess5;`
  },

  // 06 — PREMIUM DARK SUCCESS
  {
    num: 6,
    id: 'order-success-6',
    compName: 'OrderSuccess6',
    title: 'PREMIUM DARK SUCCESS — LAYERED DEPTH RISE',
    desc: 'Luxury dark confirmation panel with glowing ambient aura, refined hierarchy and micro-interactions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Package, Sparkles } from 'lucide-react';

export function OrderSuccess6({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 relative group">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600/30 to-teal-600/20 blur-xl pointer-events-none" />
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl relative font-sans text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest block mb-1">
          PURCHASE VERIFIED ✓
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">Order Successfully Placed</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
          Order #DH-28491 (₹4,999) has been authorized. Email sent to muskan@example.com.
        </p>
        <div className="pt-4 border-t border-slate-800 flex justify-center gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer">
            View Order Summary
          </button>
        </div>
      </motion.div>
    </div>
  );
}
export default OrderSuccess6;`
  },

  // 07 — MINIMAL MONOCHROME
  {
    num: 7,
    id: 'order-success-7',
    compName: 'OrderSuccess7',
    title: 'MINIMAL MONOCHROME — PROGRESSIVE RULE DRAW',
    desc: 'Extremely clean monochrome layout with thin rules progressively drawing around content.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess7({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-black text-white rounded-2xl border border-zinc-800 font-mono text-center relative">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
        className="h-0.5 bg-emerald-400 mx-auto mb-6"
      />
      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">SYSTEM STATE: SUCCESS</span>
      <h3 className="text-2xl font-extrabold text-white mb-4">ORDER #DH-28491</h3>
      <div className="text-xs text-zinc-300 space-y-1 mb-6 text-left max-w-xs mx-auto border-l-2 border-emerald-400 pl-4">
        <p>STATUS: CONFIRMED</p>
        <p>TOTAL: ₹4,999</p>
        <p>DELIVERY: OCT 12–15</p>
        <p>EMAIL: muskan@example.com</p>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-0.5 bg-zinc-800 mx-auto"
      />
    </div>
  );
}
export default OrderSuccess7;`
  },

  // 08 — ORDER RECEIPT
  {
    num: 8,
    id: 'order-success-8',
    compName: 'OrderSuccess8',
    title: 'ORDER RECEIPT — VERTICAL RECEIPT REVEAL',
    desc: 'Digital receipt layout revealing vertically with itemized total and confirmation stamp.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Download } from 'lucide-react';

export function OrderSuccess8({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="w-full max-w-md mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-mono shadow-2xl relative"
    >
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-4">
        <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
        <h4 className="text-base font-bold text-white uppercase">OFFICIAL RECEIPT</h4>
        <span className="text-[10px] text-stone-400 block">ORDER #DH-28491</span>
      </div>
      <div className="space-y-2 text-xs mb-6 text-stone-300">
        <div className="flex justify-between"><span>Items Subtotal:</span><span>₹4,499</span></div>
        <div className="flex justify-between"><span>Tax & Shipping:</span><span>₹500</span></div>
        <div className="flex justify-between font-bold text-white pt-2 border-t border-stone-800">
          <span>TOTAL PAID:</span><span className="text-emerald-400">₹4,999</span>
        </div>
      </div>
      <div className="text-center">
        <button className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-emerald-400 border border-stone-700 inline-flex items-center gap-2 cursor-pointer">
          <Download className="w-3.5 h-3.5" /> Download PDF Receipt
        </button>
      </div>
    </motion.div>
  );
}
export default OrderSuccess8;`
  },

  // 09 — PRODUCT CELEBRATION
  {
    num: 9,
    id: 'order-success-9',
    compName: 'OrderSuccess9',
    title: 'PRODUCT CELEBRATION — SCALE IMAGE REVEAL',
    desc: 'Prominent product preview image scaling into view alongside order success badge.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, ArrowRight } from 'lucide-react';

export function OrderSuccess9({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans flex flex-col sm:flex-row items-center gap-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-36 h-36 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-xl"
      >
        <PackageCheck className="w-16 h-16" />
      </motion.div>
      <div className="text-center sm:text-left">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">ORDER CONFIRMED</span>
        <h3 className="text-2xl font-extrabold text-white mb-2">Order #DH-28491</h3>
        <p className="text-xs text-slate-300 mb-4">Your items have been reserved and are preparing for shipment. Total: <span className="text-white font-bold">₹4,999</span>.</p>
        <button className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer">
          Track Package
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess9;`
  },

  // 10 — CONFIRMATION CARD STACK
  {
    num: 10,
    id: 'order-success-10',
    compName: 'OrderSuccess10',
    title: 'CONFIRMATION CARD STACK — DEPTH LAYERING',
    desc: 'Layered cards (Success, Details, Next Steps) sliding into place with spring physics.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function OrderSuccess10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 space-y-3 font-sans">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-emerald-950/90 text-emerald-300 rounded-2xl border border-emerald-500/40 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          <div>
            <h4 className="font-bold text-white text-sm">Order Confirmed!</h4>
            <span className="text-xs text-emerald-300 font-mono">#DH-28491</span>
          </div>
        </div>
        <span className="text-xs font-mono font-bold bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">VERIFIED ✓</span>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="p-6 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 text-xs flex justify-between items-center"
      >
        <span>Estimated Delivery: <strong className="text-white">Oct 12–15</strong></span>
        <span className="font-mono text-emerald-400 font-bold">Total: ₹4,999</span>
      </motion.div>
    </div>
  );
}
export default OrderSuccess10;`
  },

  // 11 — CONFETTI / CELEBRATION
  {
    num: 11,
    id: 'order-success-11',
    compName: 'OrderSuccess11',
    title: 'CONFETTI / CELEBRATION — GEOMETRIC PARTICLE MOTION',
    desc: 'Tasteful geometric particle motion celebrating successful checkout completion.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function OrderSuccess11({ data }: { data?: any }) {
  const particles = [
    { x: -40, y: -50, color: 'bg-emerald-400' },
    { x: 40, y: -45, color: 'bg-teal-300' },
    { x: -60, y: 30, color: 'bg-cyan-400' },
    { x: 60, y: 35, color: 'bg-emerald-300' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl text-center relative overflow-hidden">
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
          className={"absolute w-3 h-3 rounded-full " + p.color + " left-1/2 top-1/3 pointer-events-none"}
        />
      ))}
      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">CELEBRATING SUCCESS</span>
      <h3 className="text-2xl font-bold text-white mb-2">Order Placed Successfully!</h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto">Order #DH-28491 (₹4,999) has been placed.</p>
    </div>
  );
}
export default OrderSuccess11;`
  },

  // 12 — SUCCESS + NEXT STEPS
  {
    num: 12,
    id: 'order-success-12',
    compName: 'OrderSuccess12',
    title: 'SUCCESS + NEXT STEPS — SEQUENTIAL ACTION REVEAL',
    desc: 'Sequential action reveal (View Order, Track Order, Continue Shopping).',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Eye, Truck } from 'lucide-react';

export function OrderSuccess12({ data }: { data?: any }) {
  const actions = [
    { icon: Eye, label: 'View Order Details', desc: 'Review items & invoice' },
    { icon: Truck, label: 'Track Shipment', desc: 'Real-time courier updates' },
    { icon: ShoppingBag, label: 'Continue Shopping', desc: 'Explore new arrivals' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center font-sans">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">ORDER #DH-28491 CONFIRMED</span>
      <h3 className="text-2xl font-bold text-white mb-6">What would you like to do next?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {actions.map((act, idx) => {
          const IconComp = act.icon;
          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left hover:border-emerald-500/40 transition-all cursor-pointer"
            >
              <IconComp className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-0.5">{act.label}</h4>
              <span className="text-[10px] text-slate-400 block">{act.desc}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
export default OrderSuccess12;`
  },

  // 13 — ORDER NUMBER HERO
  {
    num: 13,
    id: 'order-success-13',
    compName: 'OrderSuccess13',
    title: 'ORDER NUMBER HERO — TYPOGRAPHIC REVEAL',
    desc: 'Order reference #DH-28491 as hero text with typographic reveal motion.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 text-center font-mono shadow-2xl">
      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">SUCCESSFULLY REGISTERED</span>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight my-2"
      >
        #DH-28491
      </motion.h1>
      <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2">Order Confirmed • Total ₹4,999 • Delivery Oct 12–15</p>
    </div>
  );
}
export default OrderSuccess13;`
  },

  // 14 — DELIVERY ROUTE
  {
    num: 14,
    id: 'order-success-14',
    compName: 'OrderSuccess14',
    title: 'DELIVERY ROUTE — SVG ROUTE PATH DRAW',
    desc: 'Abstract delivery route concept drawing SVG path from Order → Warehouse → Delivery.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, CheckCircle2 } from 'lucide-react';

export function OrderSuccess14({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans text-center">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">DELIVERY ROUTE INITIATED</span>
      <div className="relative flex items-center justify-between max-w-md mx-auto my-6">
        <div className="absolute left-6 right-6 top-5 h-0.5 bg-slate-800 z-0" />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 1.2 }}
          className="absolute left-6 top-5 h-0.5 bg-emerald-400 z-0"
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs"><CheckCircle2 className="w-5 h-5" /></div>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 font-bold">Order Placed</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center"><Package className="w-5 h-5" /></div>
          <span className="text-[10px] text-slate-400 font-mono mt-1">Warehouse</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-500 border border-slate-700 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
          <span className="text-[10px] text-slate-500 font-mono mt-1">Delivery</span>
        </div>
      </div>
      <p className="text-xs text-slate-400">Order #DH-28491 is confirmed. Total ₹4,999.</p>
    </div>
  );
}
export default OrderSuccess14;`
  },

  // 15 — CIRCULAR SUCCESS
  {
    num: 15,
    id: 'order-success-15',
    compName: 'OrderSuccess15',
    title: 'CIRCULAR SUCCESS — PROGRESS RING DRAW',
    desc: 'Circular confirmation ring drawing around checkmark and order reference.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
      <div className="relative w-36 h-36 mx-auto mb-4 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" className="text-slate-850" strokeWidth="6" stroke="currentColor" fill="none" />
          <motion.circle 
            cx="50" cy="50" r="42" 
            className="text-emerald-400" 
            strokeWidth="6" 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">✓</span>
          <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold">CONFIRMED</span>
        </div>
      </div>
      <h4 className="text-lg font-bold text-white mb-1">Order #DH-28491</h4>
      <p className="text-xs text-slate-400">₹4,999 • Arriving Oct 12–15</p>
    </div>
  );
}
export default OrderSuccess15;`
  },

  // 16 — SPLIT SUCCESS
  {
    num: 16,
    id: 'order-success-16',
    compName: 'OrderSuccess16',
    title: 'SPLIT SUCCESS — DUAL PANEL ENTRANCE',
    desc: 'Left confirmation message and Right order details entering from opposite directions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function OrderSuccess16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 flex flex-col justify-center"
      >
        <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-2" />
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-1">SUCCESS</span>
        <h3 className="text-2xl font-bold text-white">Order Confirmed!</h3>
        <p className="text-xs text-slate-400 mt-2">Thank you for your purchase.</p>
      </motion.div>

      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-xs font-mono flex flex-col justify-center space-y-2"
      >
        <div><span className="text-slate-500">REF:</span> <strong className="text-emerald-400">#DH-28491</strong></div>
        <div><span className="text-slate-500">TOTAL:</span> <strong className="text-white">₹4,999</strong></div>
        <div><span className="text-slate-500">DELIVERY:</span> <strong className="text-teal-400">Oct 12–15</strong></div>
      </motion.div>
    </div>
  );
}
export default OrderSuccess16;`
  },

  // 17 — 3D SUCCESS CARD
  {
    num: 17,
    id: 'order-success-17',
    compName: 'OrderSuccess17',
    title: '3D SUCCESS CARD — PERSPECTIVE TILT REVEAL',
    desc: 'Layered confirmation card with CSS perspective 3D tilt and smooth spring rotation.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function OrderSuccess17({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-lg mx-auto my-6 [perspective:1000px]">
      <motion.div 
        initial={{ rotateX: 20, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl text-center"
      >
        <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">SECURE TRANSACTION</span>
        <h3 className="text-2xl font-bold text-white mb-2">Order #DH-28491</h3>
        <p className="text-xs text-slate-400">₹4,999 • Estimated delivery Oct 12–15</p>
      </motion.div>
    </div>
  );
}
export default OrderSuccess17;`
  },

  // 18 — MAGAZINE CELEBRATION
  {
    num: 18,
    id: 'order-success-18',
    compName: 'OrderSuccess18',
    title: 'MAGAZINE CELEBRATION — STAGGERED BLOCK REVEAL',
    desc: 'Magazine editorial layout with staggered text block reveal timings.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderSuccess18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-serif">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs font-sans text-emerald-400 font-bold uppercase tracking-widest block mb-2"
      >
        VOLUME 2026 // ISSUE #DH-28491
      </motion.span>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-5xl font-normal italic text-white mb-4"
      >
        Your Order Is Complete.
      </motion.h2>
      <p className="font-sans text-xs text-stone-400 max-w-md">Total Paid ₹4,999. Email sent to muskan@example.com.</p>
    </div>
  );
}
export default OrderSuccess18;`
  },

  // 19 — FUTURE / DIGITAL SUCCESS
  {
    num: 19,
    id: 'order-success-19',
    compName: 'OrderSuccess19',
    title: 'FUTURE DIGITAL SUCCESS — HUD MATRIX INTERFACE',
    desc: 'Futuristic HUD interface with geometric SVG scanner, restrained glow, and matrix depth.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity } from 'lucide-react';

export function OrderSuccess19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-emerald-400 rounded-3xl border border-emerald-500/40 font-mono shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
      <div className="flex justify-between items-center pb-3 border-b border-emerald-500/30 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>ORDER PROTOCOL // COMPLETE</span>
        </div>
        <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">STATUS: 200 OK</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">REF: #DH-28491</h3>
      <p className="text-xs text-slate-300">TOTAL: ₹4,999 • ARRIVAL: OCT 12–15</p>
    </div>
  );
}
export default OrderSuccess19;`
  },

  // 20 — AWARD-STYLE ORDER SUCCESS
  {
    num: 20,
    id: 'order-success-20',
    compName: 'OrderSuccess20',
    title: 'AWARD-STYLE ORDER SUCCESS — ULTIMATE MOMENT',
    desc: 'The ultimate ecommerce final moment combining custom SVG success animation, delivery visualization, micro-interactions, and next steps.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Truck, ShoppingBag, ArrowRight, Sparkles, ShieldCheck, Mail } from 'lucide-react';

export function OrderSuccess20({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative overflow-hidden">
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.35)]">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>
        <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
          ORDER PLACED SUCCESSFULLY ✓
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3 mb-1">Order #DH-28491</h2>
        <p className="text-xs text-slate-400">Total Charged: <span className="text-white font-bold">₹4,999</span> • Email sent to <span className="text-slate-200">muskan@example.com</span></p>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {['summary', 'delivery', 'support'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={"px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer " + (activeTab === tab ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20" : "bg-slate-900 text-slate-400 hover:text-white")}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'summary' && (
          <motion.div key="summary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            <div className="flex justify-between py-1 text-slate-300"><span>Order Reference:</span><span className="font-mono font-bold text-white">#DH-28491</span></div>
            <div className="flex justify-between py-1 text-slate-300"><span>Payment Method:</span><span>Credit Card (Encrypted)</span></div>
            <div className="flex justify-between py-1 text-slate-300"><span>Total Paid:</span><span className="font-mono font-bold text-emerald-400">₹4,999</span></div>
          </motion.div>
        )}
        {activeTab === 'delivery' && (
          <motion.div key="delivery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <p className="mb-1"><strong className="text-white">Estimated Arrival:</strong> Oct 12–15, 2026</p>
            <p><strong className="text-white">Carrier:</strong> Express Air Courier (Tracking Active)</p>
          </motion.div>
        )}
        {activeTab === 'support' && (
          <motion.div key="support" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <p>24/7 VIP Customer Support • Contact: support@example.com</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex gap-3 justify-center">
        <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all active:scale-95">
          <ShoppingBag className="w-4 h-4" /> Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess20;`
  }
];

// Write all files
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
    category: 'order-success',
    componentName: v.compName,
    meta: {
      id: v.id,
      name: v.title,
      description: v.desc,
      category: 'order-success',
      componentName: v.compName
    }
  }, null, 2);

  fs.writeFileSync(tsxPath, v.code, 'utf-8');
  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
});

console.log('Successfully generated all 20 Order Success UI components!');
