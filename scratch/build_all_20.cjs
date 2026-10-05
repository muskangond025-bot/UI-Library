const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '07-order-summary');

function createTSX(code) {
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
        <svg className="absolute left-3 top-2 bottom-4 w-0.5 h-[85%]" overflow="visible">
          <motion.line
            x1="0" y1="0" x2="0" y2="100%"
            stroke="rgb(6, 182, 212)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

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

// 8. DARK PREMIUM ORDER
variantsCode[8] = `export function CheckoutOrderSummary8({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-neutral-800/80 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block mb-1">LUXURY COLLECTION</span>
          <h2 className="text-2xl font-bold text-white">Order Summary</h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
          3 Premium Items
        </span>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.12 }}
            className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 transition-colors flex items-center gap-4"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-neutral-800" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-neutral-100 truncate">{item.name}</h4>
              <p className="text-xs text-neutral-400">{item.variant}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-neutral-400 block">Qty: {item.qty}</span>
              <span className="font-mono text-sm font-bold text-amber-400">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-3 text-sm">
        <div className="flex justify-between text-neutral-400">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Exclusive Discount</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span>Insured Shipping & Tax</span>
          <span className="font-mono text-white">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-neutral-800 text-xl font-bold text-white">
          <span>Grand Total</span>
          <span className="font-mono text-2xl text-amber-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary8;`;

// 9. CART-INSPIRED SUMMARY
variantsCode[9] = `export function CheckoutOrderSummary9({ data }: { data?: any }) {
  const [items, setItems] = useState(${JSON.stringify(itemsData)});
  const [giftWrap, setGiftWrap] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-indigo-400" /> Shopping Bag ({items.length})
        </h3>
        <span className="text-xs text-slate-400">Review Items</span>
      </div>

      <div className="space-y-4 mb-6">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-xs font-semibold text-white truncate max-w-[180px]">{item.name}</h4>
                <p className="text-[11px] text-slate-400">{item.variant}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-indigo-300 font-mono">Qty: {item.qty}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-bold text-white block">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-6 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 cursor-pointer text-slate-300">
          <input 
            type="checkbox" 
            checked={giftWrap} 
            onChange={(e) => setGiftWrap(e.target.checked)} 
            className="rounded accent-indigo-500"
          />
          <span>Add complimentary gift packaging</span>
        </label>
        <Sparkles className="w-4 h-4 text-amber-400" />
      </div>

      <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-800">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Discount (SPRING2026)</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping & Tax</span>
          <span className="font-mono">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-base font-bold text-white">
          <span>Order Total</span>
          <span className="text-xl font-mono text-indigo-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary9;`;

// 10. LARGE PRODUCT IMAGE
variantsCode[10] = `export function CheckoutOrderSummary10({ data }: { data?: any }) {
  const mainProduct = ${JSON.stringify(itemsData[0])};
  const otherProducts = ${JSON.stringify(itemsData.slice(1))};

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">FEATURED ITEM SHOWCASE</span>
      <h2 className="text-2xl font-extrabold text-white mb-6">Order Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6 relative overflow-hidden rounded-2xl border border-slate-700 shadow-xl"
        >
          <img src={mainProduct.image} alt={mainProduct.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-4 flex flex-col justify-end">
            <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded w-fit mb-1 font-mono">PRIMARY ITEM</span>
            <h3 className="text-base font-bold text-white">{mainProduct.name}</h3>
            <p className="text-xs text-slate-300">{mainProduct.variant} • {mainProduct.price}</p>
          </div>
        </motion.div>

        <div className="md:col-span-6 space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Additional Items in Order</h4>
          {otherProducts.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">{item.name}</p>
                <p className="text-[10px] text-slate-400">{item.variant}</p>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400">{item.price}</span>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono">$904.00</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Discount</span>
              <span className="font-mono">-$100.00</span>
            </div>
            <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800 text-sm">
              <span>Total Amount</span>
              <span className="font-mono text-cyan-400">$883.32</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary10;`;

// 11. PRICE-FIRST SUMMARY
variantsCode[11] = `export function CheckoutOrderSummary11({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center pb-8 border-b border-slate-800 mb-8">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">FINANCIAL BREAKDOWN OVERVIEW</span>
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight"
        >
          $883.32
        </motion.div>
        <span className="text-xs text-slate-400 mt-2 block">Grand Total Due Today</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Subtotal (3 Items)</span>
          <span className="text-lg font-mono font-bold text-white">$904.00</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
          <span className="text-xs text-emerald-300 block mb-1">Promo Discount</span>
          <span className="text-lg font-mono font-bold text-emerald-400">-$100.00</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Shipping Fee</span>
          <span className="text-lg font-mono font-bold text-white">$15.00</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Estimated Tax</span>
          <span className="text-lg font-mono font-bold text-white">$64.32</span>
        </motion.div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex justify-between items-center text-xs">
        <span className="text-slate-300 font-medium">Includes 3 products in current checkout session</span>
        <button className="text-emerald-400 font-bold hover:underline">View Product List →</button>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary11;`;

// 12. RECEIPT-INSPIRED SUMMARY
variantsCode[12] = `export function CheckoutOrderSummary12({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <motion.div 
      initial={{ opacity: 0, scaleY: 0.8, y: -20 }}
      animate={{ opacity: 1, scaleY: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto my-6 bg-stone-900 text-stone-100 p-8 rounded-t-2xl shadow-2xl border-t-4 border-amber-500 font-mono relative"
    >
      <div className="text-center pb-6 border-b border-dashed border-stone-700 mb-6">
        <h3 className="text-lg font-bold tracking-widest text-amber-400">STORE RECEIPT</h3>
        <p className="text-[10px] text-stone-400 mt-1">ORDER #ORD-8942-X • {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-4 mb-6 text-xs">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex justify-between items-start">
            <div>
              <p className="font-bold text-stone-200">{item.name}</p>
              <p className="text-[10px] text-stone-400">QTY: {item.qty} | {item.variant}</p>
            </div>
            <span className="font-bold text-amber-400">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-stone-700 pt-4 space-y-2 text-xs text-stone-300 mb-6">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>DISCOUNT (SPRING2026)</span>
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
        <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-stone-700">
          <span>TOTAL DUE</span>
          <span className="text-amber-400">$883.32</span>
        </div>
      </div>

      {/* SVG Barcode */}
      <div className="text-center pt-2">
        <svg className="w-full h-12 opacity-80" viewBox="0 0 200 40">
          <path d="M10 0 v40 M14 0 v40 M20 0 v40 M24 0 v40 M30 0 v40 M36 0 v40 M40 0 v40 M48 0 v40 M54 0 v40 M60 0 v40 M68 0 v40 M74 0 v40 M80 0 v40 M86 0 v40 M92 0 v40 M100 0 v40 M108 0 v40 M114 0 v40 M120 0 v40 M126 0 v40 M134 0 v40 M140 0 v40 M148 0 v40 M154 0 v40 M160 0 v40 M168 0 v40 M174 0 v40 M180 0 v40 M186 0 v40 M190 0 v40" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="text-[9px] text-stone-500 tracking-widest uppercase block mt-1">THANK YOU FOR YOUR PURCHASE</span>
      </div>
    </motion.div>
  );
}
export default CheckoutOrderSummary12;`;

// 13. HORIZONTAL ORDER SUMMARY
variantsCode[13] = `export function CheckoutOrderSummary13({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-5xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-indigo-400" /> Horizontal Summary Strip
        </h3>
        <span className="text-xs text-slate-400">3 Products Selected</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Horizontal Carousel Strip */}
        <div className="lg:col-span-8 flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="flex-shrink-0 w-60 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex flex-col justify-between"
            >
              <img src={item.image} alt={item.name} className="w-full h-32 rounded-xl object-cover mb-3" />
              <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
              <p className="text-[10px] text-slate-400 mb-2">{item.variant}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-700/50">
                <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">Qty: {item.qty}</span>
                <span className="font-mono text-xs font-bold text-indigo-300">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Anchored Total Card */}
        <div className="lg:col-span-4 p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Subtotal</span>
            <span className="font-mono text-white">$904.00</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>Discount</span>
            <span className="font-mono">-$100.00</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Shipping & Tax</span>
            <span className="font-mono text-white">$79.32</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-sm font-bold text-white">
            <span>Grand Total</span>
            <span className="font-mono text-xl text-indigo-400">$883.32</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary13;`;

// 14. PRODUCT + DELIVERY CONTEXT
variantsCode[14] = `export function CheckoutOrderSummary14({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      {/* Delivery Context Card */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30 flex items-center gap-4 mb-6"
      >
        <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl">
          <Truck className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">EXPRESS AIR DELIVERY</span>
          <h4 className="text-sm font-semibold text-white">Est. Arrival: Wednesday, Oct 8</h4>
          <p className="text-xs text-teal-200/70">Tracked shipping via FedEx Express</p>
        </div>
      </motion.div>

      <div className="space-y-3 mb-6">
        {items.map((item: any, idx: number) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40"
          >
            <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
              <p className="text-[11px] text-slate-400">{item.variant}</p>
            </div>
            <span className="font-mono text-sm font-bold text-teal-300">{item.price}</span>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between text-slate-300">
          <span>Items Subtotal</span>
          <span className="font-mono">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Discount Applied</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>FedEx Air Fee</span>
          <span className="font-mono">$15.00</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Estimated Tax</span>
          <span className="font-mono">$64.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-sm font-bold text-white">
          <span>Total Order Value</span>
          <span className="font-mono text-xl text-teal-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary14;`;

// 15. COLLAPSIBLE ORDER SUMMARY
variantsCode[15] = `export function CheckoutOrderSummary15({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-5 h-5 text-indigo-400" />
          <div>
            <h3 className="text-sm font-bold text-white">Order Summary (3 items)</h3>
            <p className="text-xs text-slate-400">Click to {isOpen ? 'collapse' : 'expand'} item details</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-indigo-300 text-base">$883.32</span>
          {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden p-6 border-t border-slate-800"
          >
            <div className="space-y-3 mb-6">
              {items.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 text-xs">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-white truncate max-w-[200px]">{item.name}</p>
                      <p className="text-[10px] text-slate-400">Qty: {item.qty}</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-indigo-300">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-slate-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono">$904.00</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>SPRING2026 Discount</span>
                <span className="font-mono">-$100.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping & Tax</span>
                <span className="font-mono">$79.32</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutOrderSummary15;`;

// 16. 3D PRODUCT STACK
variantsCode[16] = `export function CheckoutOrderSummary16({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">3D DEPTH PERSPECTIVE</span>
        <h2 className="text-2xl font-bold text-white">Interactive Order Cards</h2>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ rotateX: 15, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.02, rotateX: -4, rotateY: 3 }}
            className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-700/80 shadow-xl flex items-center justify-between cursor-pointer transition-all"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-4" style={{ transform: 'translateZ(10px)' }}>
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover shadow-md" />
              <div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.variant}</p>
              </div>
            </div>
            <div className="text-right" style={{ transform: 'translateZ(15px)' }}>
              <span className="font-mono text-sm font-extrabold text-purple-400">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-sm">
        <div className="flex justify-between text-slate-400">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Promo Discount</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>Shipping & Tax</span>
          <span className="font-mono text-white">$79.32</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-lg font-bold text-white">
          <span>Grand Total</span>
          <span className="font-mono text-2xl text-purple-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary16;`;

// 17. ASYMMETRIC GRID SUMMARY
variantsCode[17] = `export function CheckoutOrderSummary17({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Featured Main Item */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:col-span-7 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between"
      >
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-2">PRIMARY SELECTION</span>
          <img src={items[0].image} alt={items[0].name} className="w-full h-44 object-cover rounded-xl mb-4" />
          <h3 className="text-lg font-bold text-white">{items[0].name}</h3>
          <p className="text-xs text-slate-400">{items[0].variant}</p>
        </div>
        <div className="pt-4 mt-4 border-t border-slate-700/50 flex justify-between items-center">
          <span className="text-xs text-slate-300">Quantity: {items[0].qty}</span>
          <span className="font-mono text-base font-bold text-cyan-400">{items[0].price}</span>
        </div>
      </motion.div>

      {/* Secondary Items Stack */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="md:col-span-5 space-y-4"
      >
        <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block">ADDITIONAL ITEMS</span>
        {items.slice(1).map((it: any, idx: number) => (
          <div key={idx} className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <img src={it.image} alt={it.name} className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <p className="font-semibold text-white truncate max-w-[120px]">{it.name}</p>
                <p className="text-[10px] text-slate-400">{it.variant}</p>
              </div>
            </div>
            <span className="font-mono font-bold text-cyan-400">{it.price}</span>
          </div>
        ))}

        <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300">
          <p className="font-bold">SPRING2026 Promo Code</p>
          <p className="text-[11px] text-cyan-200/70">Applied -$100.00 discount to this order session.</p>
        </div>
      </motion.div>

      {/* Full-width Total */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="md:col-span-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div className="text-xs text-slate-400 space-y-1">
          <p>Subtotal: $904.00 • Shipping: $15.00 • Tax: $64.32</p>
          <p className="text-emerald-400">Total Savings: -$100.00</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 uppercase tracking-widest block">GRAND TOTAL</span>
          <span className="text-3xl font-mono font-extrabold text-cyan-400">$883.32</span>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutOrderSummary17;`;

// 18. VISUAL PRICE BREAKDOWN
variantsCode[18] = `export function CheckoutOrderSummary18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">CALCULATION PATH</span>
        <h2 className="text-2xl font-bold text-white">Visual Price Breakdown Flow</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Subtotal</span>
          <span className="font-mono text-sm font-bold text-white">$904.00</span>
        </div>
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center">
          <span className="text-[10px] text-emerald-300 block">Discount</span>
          <span className="font-mono text-sm font-bold text-emerald-400">-$100.00</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Shipping</span>
          <span className="font-mono text-sm font-bold text-white">$15.00</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 block">Tax</span>
          <span className="font-mono text-sm font-bold text-white">$64.32</span>
        </div>
      </div>

      {/* SVG Connecting Paths */}
      <div className="flex justify-center mb-6">
        <svg className="w-48 h-12 text-indigo-500 overflow-visible" viewBox="0 0 200 50">
          <motion.path
            d="M 10 0 Q 100 50 190 0 M 100 0 L 100 45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/40 text-center shadow-xl"
      >
        <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest block mb-1">TOTAL PAYMENT REQUIRED</span>
        <span className="text-4xl font-mono font-extrabold text-white">$883.32</span>
      </motion.div>
    </div>
  );
}
export default CheckoutOrderSummary18;`;

// 19. MAGAZINE CHECKOUT SUMMARY
variantsCode[19] = `export function CheckoutOrderSummary19({ data }: { data?: any }) {
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-8 sm:p-12 bg-neutral-900 text-neutral-100 rounded-3xl border border-neutral-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 border-b border-neutral-800 pb-6 flex justify-between items-end"
      >
        <div>
          <span className="text-xs font-sans font-bold text-amber-500 uppercase tracking-widest block mb-1">SELECTION VOL. 04</span>
          <h2 className="text-3xl font-normal italic text-white">Magazine Order Summary</h2>
        </div>
        <span className="font-sans text-xs text-neutral-400">3 CURATED PIECES</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col justify-between"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-xl mb-4 grayscale hover:grayscale-0 transition-all" />
            <div>
              <h4 className="font-sans text-xs font-bold text-white tracking-wide">{item.name}</h4>
              <p className="font-sans text-[11px] text-neutral-400 mt-1">{item.variant}</p>
            </div>
            <div className="pt-3 mt-3 border-t border-neutral-800 font-mono text-xs font-bold text-amber-400">
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 font-sans flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs text-neutral-400 space-y-1">
          <p>Includes shipping, tax, and SPRING2026 (-$100.00) promo.</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-neutral-400 font-mono uppercase tracking-widest block">GRAND TOTAL</span>
          <span className="text-3xl font-serif text-amber-400">$883.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary19;`;

// 20. AWARD-STYLE ORDER SUMMARY
variantsCode[20] = `export function CheckoutOrderSummary20({ data }: { data?: any }) {
  const [promo, setPromo] = useState('SPRING2026');
  const [applied, setApplied] = useState(true);
  const items = ${JSON.stringify(itemsData)};

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      {/* Background Glow Orb */}
      <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">256-BIT SSL ENCRYPTED</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> Premium Order Summary
          </h2>
        </div>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-full">
          3 Items
        </span>
      </div>

      <div className="space-y-4 mb-6 relative">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-slate-600 transition-all flex items-center gap-4"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-slate-700" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
              <p className="text-xs text-slate-400">{item.variant}</p>
              <span className="text-xs bg-slate-700/60 px-2 py-0.5 rounded text-slate-300 inline-block mt-1">Qty: {item.qty}</span>
            </div>
            <span className="font-mono text-sm font-bold text-indigo-300">{item.price}</span>
          </motion.div>
        ))}
      </div>

      {/* Promo Applicator */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 flex items-center gap-3">
        <Tag className="w-4 h-4 text-indigo-400" />
        <input 
          type="text" 
          value={promo} 
          onChange={(e) => setPromo(e.target.value)}
          className="bg-transparent text-xs font-mono text-white focus:outline-none flex-1 uppercase"
        />
        <button 
          onClick={() => setApplied(!applied)}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
        >
          {applied ? <><Check className="w-3.5 h-3.5" /> Applied</> : 'Apply'}
        </button>
      </div>

      <div className="space-y-2 text-sm text-slate-300 pb-6 border-b border-slate-800 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono text-white">$904.00</span>
        </div>
        {applied && (
          <div className="flex justify-between text-emerald-400">
            <span>SPRING2026 Promo Discount</span>
            <span className="font-mono">-$100.00</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Express Air Shipping</span>
          <span className="font-mono text-white">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-mono text-white">$64.32</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block">GRAND TOTAL</span>
          <span className="text-3xl font-extrabold font-mono text-white">$883.32</span>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2">
          Proceed to Checkout <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
export default CheckoutOrderSummary20;`;

// Write all 20
for (let i = 1; i <= 20; i++) {
  const folder = path.join(baseDir, `checkout-order-summary-${i}`);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, `CheckoutOrderSummary${i}.tsx`), createTSX(variantsCode[i]), 'utf-8');
}
console.log("All 20 TSX components written successfully!");
