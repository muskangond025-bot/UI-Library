const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '07-order-summary');

function createTSX(variantNum, code) {
  return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Tag, Truck, ShieldCheck, Check, ChevronDown, ChevronUp, 
  ArrowRight, Lock, RefreshCw, Sparkles, Clock, CreditCard, Edit3, 
  ExternalLink, Layers, Info, Percent, Trash2, ArrowUpRight, Box, Package
} from 'lucide-react';

${code}
`;
}

const itemsData = [
  { id: '1', name: 'Aura Studio Wireless Headphones', variant: 'Matte Black / ANC', price: '$299.00', priceNum: 299, qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80' },
  { id: '2', name: 'Minimalist Leather Backpack', variant: 'Cognac Brown / Leather', price: '$185.00', priceNum: 185, qty: 1, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80' },
  { id: '3', name: 'Chronos Titanium Watch', variant: 'Midnight Blue / 42mm', price: '$420.00', priceNum: 420, qty: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80' }
];

const variantsCode = {};

// 1. PREMIUM ORDER CARD
variantsCode[1] = `export function CheckoutOrderSummary1({ data }: { data?: any }) {
  const items = data?.items || ${JSON.stringify(itemsData)};
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-slate-100 shadow-2xl backdrop-blur-xl font-sans">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
            PREMIUM CHECKOUT • ORDER #ORD-2026-98
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-400" /> Order Summary
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          3 Items
        </span>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } }
        }}
        className="space-y-4 mb-6"
      >
        {items.map((item: any, idx: number) => (
          <motion.div 
            key={item.id || idx}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-slate-700" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
              <p className="text-xs text-slate-400">{item.variant}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs bg-slate-700/60 px-2 py-0.5 rounded text-slate-300">Qty: {item.qty}</span>
              </div>
            </div>
            <span className="text-sm font-bold text-indigo-300">{item.price}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between mb-6 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-indigo-300 font-medium">
          <Tag className="w-4 h-4 text-indigo-400" />
          <span>Promo Code Applied: <strong className="font-mono text-white">SPRING2026</strong></span>
        </div>
        <span className="font-bold text-emerald-400">-$100.00</span>
      </div>

      <div className="space-y-2 text-sm text-slate-300 border-b border-slate-800 pb-6 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping (Express Air)</span>
          <span className="font-mono text-emerald-400">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-mono text-white">$64.32</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 mb-6">
        <div>
          <span className="text-xs text-slate-400 block uppercase tracking-wider">Grand Total</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">$883.32</span>
        </div>
        <button className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
          <Edit3 className="w-3.5 h-3.5" /> Edit Cart
        </button>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary1;`;

// 2. EDITORIAL ORDER SUMMARY
variantsCode[2] = `export function CheckoutOrderSummary2({ data }: { data?: any }) {
  const items = [
    { num: '01', name: 'AURA WIRELESS HEADPHONES', variant: 'MATTE BLACK / ANC', price: '$299.00', qty: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80' },
    { num: '02', name: 'LEATHER CARRYALL BACKPACK', variant: 'COGNAC BROWN', price: '$185.00', qty: 1, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80' },
    { num: '03', name: 'TITANIUM CHRONO WATCH', variant: '42MM MIDNIGHT', price: '$420.00', qty: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 sm:p-12 bg-stone-900 text-stone-100 border border-stone-800 font-serif shadow-2xl rounded-xl">
      <div className="flex items-baseline justify-between border-b border-stone-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-sans tracking-widest uppercase text-amber-500 font-bold block mb-1">ISSUE 2026 // COLLECTION</span>
          <h2 className="text-2xl sm:text-4xl font-normal text-stone-100 italic">Order Selection Overview</h2>
        </div>
        <span className="font-sans text-xs text-stone-400 tracking-wider">3 ITEMS SELECTED</span>
      </div>

      <div className="space-y-8 mb-12">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="grid grid-cols-12 gap-4 items-center border-b border-stone-800/60 pb-6"
          >
            <div className="col-span-2 font-mono text-2xl text-stone-600 font-light">{item.num}</div>
            <div className="col-span-3 sm:col-span-2">
              <img src={item.image} alt={item.name} className="w-full h-20 object-cover rounded grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="col-span-5 sm:col-span-6 font-sans">
              <h3 className="text-sm sm:text-base font-semibold tracking-wide text-stone-200">{item.name}</h3>
              <p className="text-xs text-stone-400 font-mono mt-1">{item.variant} • QTY: {item.qty}</p>
            </div>
            <div className="col-span-2 text-right font-mono text-sm sm:text-base font-bold text-amber-400">
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pt-4 font-sans">
        <div className="text-xs text-stone-400 space-y-1">
          <p className="font-mono text-stone-300">SHIPPING: EXPRESS AIR (TRACKED)</p>
          <p className="font-mono text-stone-300">PROMO APPLIED: SPRING2026 (-$100.00)</p>
          <p className="text-stone-500 pt-2">All prices include applicable taxes and international customs clearance.</p>
        </div>
        <div className="p-6 bg-stone-950 border border-stone-800 rounded-lg text-right">
          <span className="text-xs font-mono tracking-widest text-stone-400 uppercase block mb-1">TOTAL AMOUNT</span>
          <span className="text-3xl sm:text-4xl font-serif text-stone-100">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary2;`;

// 3. COMPACT CHECKOUT SUMMARY
variantsCode[3] = `export function CheckoutOrderSummary3({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-md mx-auto my-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl font-sans text-slate-100">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-cyan-400" /> Summary (3)
        </h3>
        <button className="text-xs text-cyan-400 hover:underline">Edit</button>
      </div>

      <div className="space-y-3 mb-4">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-slate-200 truncate max-w-[160px]">{item.name}</p>
                <p className="text-[10px] text-slate-400">Qty: {item.qty}</p>
              </div>
            </div>
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="font-mono font-bold text-white"
            >
              {item.price}
            </motion.span>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Discount</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-mono">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span className="font-mono">$64.32</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-sm font-bold text-white">
          <span>Total</span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-lg font-mono text-cyan-400"
          >
            $883.32
          </motion.span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary3;`;

// 4. SPLIT PRODUCT + TOTAL
variantsCode[4] = `export function CheckoutOrderSummary4({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-5xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      {/* Left Product Panel */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 rounded-3xl text-slate-100"
      >
        <h3 className="text-lg font-bold mb-4 text-white flex items-center justify-between border-b border-slate-800 pb-3">
          <span>Order Items</span>
          <span className="text-xs text-slate-400 font-normal">3 Selected</span>
        </h3>
        <div className="space-y-4">
          {items.map((item: any, idx: number) => (
            <div key={idx} className="flex gap-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-800 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.variant}</p>
                <p className="text-xs text-slate-300 mt-1">Quantity: <strong className="text-white">{item.qty}</strong></p>
              </div>
              <div className="text-right font-mono font-bold text-indigo-400 text-sm">{item.price}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Total Panel */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-800/60 p-6 sm:p-8 rounded-3xl text-white flex flex-col justify-between shadow-2xl"
      >
        <div>
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">FINANCIAL BREAKDOWN</span>
          <h3 className="text-xl font-extrabold mb-6">Payment Summary</h3>

          <div className="space-y-3 text-sm text-indigo-100/80 mb-6">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span className="font-mono text-white">$904.00</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Coupon SPRING2026</span>
              <span className="font-mono">-$100.00</span>
            </div>
            <div className="flex justify-between">
              <span>Express Shipping</span>
              <span className="font-mono text-white">$15.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span className="font-mono text-white">$64.32</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-indigo-800/60">
          <div className="flex justify-between items-baseline mb-4">
            <span className="text-sm uppercase tracking-wider text-indigo-200">Total Due</span>
            <span className="text-3xl font-mono font-extrabold text-white">$883.32</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-indigo-300 bg-indigo-900/50 p-3 rounded-xl border border-indigo-700/40">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutOrderSummary4;`;

// 5. PRODUCT STACK
variantsCode[5] = `export function CheckoutOrderSummary5({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-zinc-900 text-zinc-100 rounded-3xl border border-zinc-800 shadow-2xl font-sans">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">UNSTACKING ORDER CARDS</span>
        <h2 className="text-2xl font-extrabold text-white">Your Order Stack</h2>
      </div>

      {/* Layered Visual Stack */}
      <div className="relative mb-10 space-y-3">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ y: 20 + idx * 10, rotate: (idx - 1) * -3, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
            className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/70 flex items-center justify-between hover:border-amber-400/50 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-xs text-zinc-400">{item.variant}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded mr-3">Qty {item.qty}</span>
              <span className="font-mono font-bold text-amber-400 text-sm">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 text-sm">
        <div className="flex justify-between text-zinc-400">
          <span>Subtotal</span>
          <span className="font-mono text-zinc-200">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Promo Savings</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-zinc-400">
          <span>Shipping & Tax</span>
          <span className="font-mono text-zinc-200">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-zinc-800 text-lg font-bold text-white">
          <span>Grand Total</span>
          <span className="font-mono text-2xl text-amber-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary5;`;

// 6. TIMELINE ORDER SUMMARY
variantsCode[6] = `export function CheckoutOrderSummary6({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-8">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">TIMELINE FLOW</span>
        <h2 className="text-2xl font-bold text-white">Order Summary Timeline</h2>
      </div>

      <div className="relative pl-8 space-y-8">
        {/* Animated Line */}
        <svg className="absolute left-3 top-2 bottom-4 w-0.5 h-[85%]" overflow="visible">
          <motion.line
            x1="0" y1="0" x2="0" y2="100%"
            stroke="rgb(6, 182, 212)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        {/* Step 1: Products */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 text-xs font-bold">1</span>
          <h4 className="text-sm font-bold text-white mb-2">Order Products (3)</h4>
          <div className="space-y-2">
            {items.map((it: any, i: number) => (
              <div key={i} className="flex justify-between items-center text-xs bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <span className="text-slate-200 truncate max-w-[220px]">{it.name}</span>
                <span className="font-mono text-cyan-300 font-semibold">{it.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step 2: Shipping */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-300 text-xs font-bold">2</span>
          <div className="flex justify-between items-center text-xs bg-slate-900 p-3 rounded-xl border border-slate-800">
            <div>
              <p className="font-bold text-white">Express Air Shipping</p>
              <p className="text-[10px] text-slate-400">Guaranteed 2-day delivery</p>
            </div>
            <span className="font-mono text-emerald-400 font-bold">$15.00</span>
          </div>
        </motion.div>

        {/* Step 3: Promo & Tax */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-300 text-xs font-bold">3</span>
          <div className="flex justify-between items-center text-xs bg-slate-900 p-3 rounded-xl border border-slate-800">
            <div>
              <p className="font-bold text-white">SPRING2026 Promo & Tax</p>
              <p className="text-[10px] text-slate-400">Discount -$100.00 | Tax $64.32</p>
            </div>
            <span className="font-mono text-emerald-400 font-bold">-$35.68</span>
          </div>
        </motion.div>

        {/* Step 4: Final Total */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="relative">
          <span className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold text-xs shadow-lg shadow-cyan-500/50">✓</span>
          <div className="bg-gradient-to-r from-cyan-950 to-slate-900 p-4 rounded-2xl border border-cyan-500/40 flex justify-between items-center">
            <span className="text-sm font-bold text-white uppercase tracking-wider">Grand Total</span>
            <span className="text-2xl font-mono font-extrabold text-cyan-400">$883.32</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary6;`;

// 7. MINIMAL MONOCHROME
variantsCode[7] = `export function CheckoutOrderSummary7({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-black text-white border border-neutral-800 font-mono shadow-2xl">
      <div className="flex justify-between items-center pb-4 mb-6">
        <span className="text-xs uppercase tracking-widest text-neutral-400">[ORDER_SUMMARY_V07]</span>
        <span className="text-xs text-neutral-500">3 ITEMS</span>
      </div>

      <div className="space-y-6 mb-8">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-neutral-200">{item.name}</span>
              <span className="font-bold">{item.price}</span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500">
              <span>{item.variant}</span>
              <span>QTY: {item.qty}</span>
            </div>

            {/* Progressive Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="h-px bg-neutral-800 w-full origin-left"
            />
          </div>
        ))}
      </div>

      <div className="space-y-2 text-xs text-neutral-400 mb-6">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$904.00</span>
        </div>
        <div className="flex justify-between text-neutral-200">
          <span>DISCOUNT [SPRING2026]</span>
          <span>-$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>SHIPPING</span>
          <span>$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>TAX</span>
          <span>$64.32</span>
        </div>
      </div>

      <div className="p-4 bg-white text-black flex justify-between items-center font-bold text-base sm:text-lg">
        <span>TOTAL DUE</span>
        <span>$883.32</span>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary7;`;

// Write 3 through 7
for (let i = 1; i <= 7; i++) {
  const folder = path.join(baseDir, `checkout-order-summary-${i}`);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, `CheckoutOrderSummary${i}.tsx`), createTSX(i, variantsCode[i]), 'utf-8');
}
console.log("Written 1-7!");
