const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '09-gift-card');

function createTSX(code) {
  return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

${code}
`;
}

const variantsCode = {};

// 1. PREMIUM GIFT CARD
variantsCode[1] = `export function CheckoutGiftCard1({ data }: { data?: any }) {
  const [code, setCode] = useState('GC-8842-9901');
  const [pin, setPin] = useState('4829');
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">STORED VALUE REDEMPTION</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Gift className="w-6 h-6 text-amber-400" /> Apply Digital Gift Card
          </h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-full">
          Gift Card
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Gift Card Visual Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-slate-950 shadow-xl relative overflow-hidden flex flex-col justify-between h-48 border border-amber-400/40"
        >
          <div className="flex justify-between items-start">
            <Gift className="w-7 h-7 text-slate-950" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-slate-950/20 px-2.5 py-0.5 rounded text-slate-950">
              VALUED $250.00
            </span>
          </div>

          <div>
            <div className="w-9 h-7 rounded bg-amber-200/80 border border-amber-900/30 mb-3 flex items-center justify-center text-[10px] font-mono font-bold">CHIP</div>
            <p className="font-mono font-bold text-sm tracking-widest text-slate-950">GC-8842-9901-2026</p>
            <p className="text-[10px] font-semibold text-slate-900/80 mt-1 uppercase">Store Gift Voucher • Active</p>
          </div>
        </motion.div>

        {/* Input Form */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <label className="text-xs text-slate-300 block mb-1">Gift Card Code</label>
            <input 
              type="text" 
              value={code} 
              onChange={(e) => setCode(e.target.value)} 
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase focus:outline-none focus:border-amber-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-300 block mb-1">PIN / Security Code</label>
              <input 
                type="password" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => setApplied(!applied)}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-lg shadow-amber-500/20"
              >
                {applied ? 'Applied ✓' : 'Apply Balance'}
              </button>
            </div>
          </div>

          {applied && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-300 flex justify-between items-center"
            >
              <span>Applied $100.00 from Gift Card Balance ($150.00 Remaining)</span>
              <button onClick={() => setApplied(false)} className="text-slate-400 hover:text-white underline">Remove</button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard1;`;

// 2. GIFT CARD WALLET
variantsCode[2] = `export function CheckoutGiftCard2({ data }: { data?: any }) {
  const [selected, setSelected] = useState('GC-100');
  const cards = [
    { id: 'GC-100', balance: '$100.00', number: 'GC-••••-8842', bg: 'from-amber-600 to-amber-800' },
    { id: 'GC-150', balance: '$150.00', number: 'GC-••••-3190', bg: 'from-indigo-600 to-slate-900' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">DIGITAL WALLET</span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Wallet className="w-5 h-5 text-amber-400" /> Stored Gift Cards ({cards.length})
          </h3>
        </div>
        <span className="text-xs text-slate-400">Select card to redeem</span>
      </div>

      <div className="space-y-3 mb-6">
        {cards.map((c, idx) => {
          const isSelected = selected === c.id;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setSelected(c.id)}
              className={\`p-4 rounded-2xl border cursor-pointer flex justify-between items-center bg-gradient-to-r \${c.bg} \${isSelected ? 'ring-2 ring-amber-400 border-amber-400 shadow-xl' : 'border-slate-800 opacity-80'}\`}
            >
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-amber-200" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">{c.number}</h4>
                  <p className="text-[11px] text-amber-200/80">Store Balance Available</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-mono font-extrabold text-white block">{c.balance}</span>
                <span className="text-xs text-amber-300 font-bold">{isSelected ? 'Active ✓' : 'Select'}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutGiftCard2;`;

// 3. MINIMAL REDEMPTION
variantsCode[3] = `export function CheckoutGiftCard3({ data }: { data?: any }) {
  const [applied, setApplied] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-400" /> Redeem Gift Voucher
        </h3>
        <span className="text-xs text-slate-400">Code + Security PIN</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-4">
        <input 
          type="text" 
          defaultValue="GC-8842-9901" 
          className="sm:col-span-6 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none focus:border-amber-500 uppercase"
        />
        <input 
          type="password" 
          defaultValue="4829" 
          className="sm:col-span-3 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none focus:border-amber-500"
        />
        <button 
          onClick={() => setApplied(!applied)}
          className="sm:col-span-3 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl transition-colors"
        >
          {applied ? 'Applied' : 'Redeem'}
        </button>
      </div>

      <AnimatePresence>
        {applied && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex justify-between items-center text-xs text-emerald-300"
          >
            <span>✓ Gift Card balance $100.00 applied to current checkout</span>
            <button onClick={() => setApplied(false)} className="text-slate-400 hover:text-white underline">Remove</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutGiftCard3;`;

// 4. GIFT CARD + BALANCE
variantsCode[4] = `export function CheckoutGiftCard4({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">STORED VALUE DISPLAY</span>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold font-mono text-amber-400 tracking-tight my-4"
      >
        BALANCE: $250.00
      </motion.div>

      <p className="text-xs text-slate-400 mb-6 max-w-md mx-auto">
        Available Gift Card GC-8842-9901 has $250.00 stored value ready to apply.
      </p>

      <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 max-w-md mx-auto flex justify-between items-center">
        <span className="text-xs text-slate-300 font-medium">Apply $100.00 to current order</span>
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors">
          Apply Balance
        </button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard4;`;

// 5. ENVELOPE REVEAL
variantsCode[5] = `export function CheckoutGiftCard5({ data }: { data?: any }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">GIFT ENVELOPE CONCEPT</span>
      <h3 className="text-xl font-bold text-white mb-6">Digital Gift Envelope</h3>

      <div 
        onClick={() => setOpened(!opened)}
        className="cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 border border-amber-500/40 shadow-xl relative overflow-hidden transition-all"
      >
        <motion.div 
          animate={{ rotateX: opened ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex justify-center text-amber-400"
        >
          <Gift className="w-12 h-12" />
        </motion.div>

        {!opened ? (
          <p className="text-xs text-amber-300 font-bold">Tap envelope to open gift card</p>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <span className="text-xs font-mono text-amber-400 font-bold">CARD CODE: GC-8842-9901</span>
            <h4 className="text-xl font-extrabold text-white font-mono">$250.00 GIFT BALANCE</h4>
            <button className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs mt-2">
              Apply to Order ✓
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
export default CheckoutGiftCard5;`;

// 6. SPLIT GIFT EXPERIENCE
variantsCode[6] = `export function CheckoutGiftCard6({ data }: { data?: any }) {
  const [applied, setApplied] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-5 p-8 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-slate-950 rounded-3xl border border-amber-400/50 flex flex-col justify-between shadow-2xl"
      >
        <div>
          <Gift className="w-8 h-8 mb-4 text-slate-950" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest block mb-1">STORED GIFT CARD</span>
          <h3 className="text-2xl font-extrabold font-mono text-slate-950">$250.00 VALUE</h3>
        </div>
        <div className="pt-6 border-t border-amber-900/30 font-mono text-xs font-bold text-slate-900">
          CODE: GC-8842-9901
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-7 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl"
      >
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Enter Gift Credentials</h3>
          <div className="space-y-3">
            <input 
              type="text" 
              defaultValue="GC-8842-9901" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none uppercase"
            />
            <input 
              type="password" 
              defaultValue="4829" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-xs font-mono text-white focus:outline-none"
            />
            <button 
              onClick={() => setApplied(!applied)}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-2xl transition-colors shadow-lg shadow-amber-500/20"
            >
              {applied ? 'Applied ✓' : 'Apply Gift Card Balance'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard6;`;

// 7. STACKED GIFT CARDS
variantsCode[7] = `export function CheckoutGiftCard7({ data }: { data?: any }) {
  const [unstacked, setUnstacked] = useState(false);
  const cards = [
    { code: 'GC-GOLD-250', balance: '$250.00', bg: 'bg-amber-900 border-amber-700' },
    { code: 'GC-SILVER-100', balance: '$100.00', bg: 'bg-slate-800 border-slate-700' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">FAN-OUT STACK</span>
        <h3 className="text-xl font-bold text-white">Stored Gift Cards</h3>
        <button onClick={() => setUnstacked(!unstacked)} className="text-xs text-amber-400 hover:underline mt-1">
          {unstacked ? 'Collapse Stack' : 'Click to Fan Out Cards'}
        </button>
      </div>

      <div className="relative min-h-[160px] flex justify-center items-center">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            animate={{ 
              y: unstacked ? idx * 60 : idx * 10, 
              rotate: unstacked ? 0 : (idx - 0.5) * -5,
              opacity: 1 
            }}
            className={\`absolute w-full max-w-md p-4 rounded-2xl border text-left shadow-xl \${c.bg}\`}
            style={{ zIndex: 10 - idx }}
          >
            <div className="flex justify-between items-center text-xs text-white">
              <span className="font-mono font-bold">{c.code}</span>
              <span className="text-amber-300 font-extrabold font-mono">{c.balance}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default CheckoutGiftCard7;`;

// 8. PREMIUM DARK GIFT CARD
variantsCode[8] = `export function CheckoutGiftCard8({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-amber-500/30 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">LUXURY STORE CARD</span>
          <h3 className="text-xl font-bold text-white">Digital Gift Balance</h3>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
          Active Stored Value
        </span>
      </div>

      <motion.div 
        whileHover={{ boxShadow: '0 0 25px rgba(245, 158, 11, 0.2)' }}
        className="p-6 rounded-2xl bg-neutral-900 border border-amber-500/40 flex justify-between items-center"
      >
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">CARD #GC-8842-9901</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">$250.00 STORE BALANCE</h4>
        </div>
        <button className="px-5 py-2.5 bg-amber-500 text-slate-950 font-extrabold text-xs rounded-xl hover:bg-amber-400 transition-colors">
          Apply $100.00
        </button>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard8;`;

// 9. GIFT CARD CAROUSEL
variantsCode[9] = `export function CheckoutGiftCard9({ data }: { data?: any }) {
  const [selected, setSelected] = useState(1);
  const cards = [
    { title: '$50 CARD', code: 'GC-50-2026', bg: 'from-slate-800 to-slate-900' },
    { title: '$100 CARD', code: 'GC-100-2026', bg: 'from-amber-700 to-slate-900' },
    { title: '$250 CARD', code: 'GC-250-2026', bg: 'from-indigo-800 to-slate-900' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-amber-400" /> Gift Card Carousel
        </h3>
        <span className="text-xs text-slate-400">Select stored gift card</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {cards.map((c, idx) => {
          const isActive = selected === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setSelected(idx)}
              className={\`flex-shrink-0 w-60 p-5 rounded-2xl border cursor-pointer transition-all bg-gradient-to-b \${c.bg} \${isActive ? 'border-amber-400 shadow-xl ring-2 ring-amber-400' : 'border-slate-800 opacity-70'}\`}
            >
              <Gift className="w-6 h-6 text-amber-300 mb-3" />
              <h4 className="text-lg font-extrabold text-white mb-1">{c.title}</h4>
              <p className="text-xs font-mono text-amber-200/80 mb-3">{c.code}</p>
              <span className="text-xs font-bold text-amber-400">{isActive ? '✓ Selected' : 'Tap to Select'}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutGiftCard9;`;

// 10. DIGITAL GIFT TICKET
variantsCode[10] = `export function CheckoutGiftCard10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">DIGITAL TICKET VOUCHER</span>
      <h3 className="text-xl font-bold text-white mb-6">Gift Voucher Pass</h3>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border border-amber-500/40 flex justify-between items-center"
      >
        <div className="text-left">
          <span className="text-[10px] font-mono text-amber-300 block">VOUCHER #GC-8842</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">$250.00</h4>
        </div>
        <button className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl">
          Apply to Order
        </button>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard10;`;

// 11. BALANCE PROGRESS
variantsCode[11] = `export function CheckoutGiftCard11({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">BALANCE BREAKDOWN</span>
          <h3 className="text-lg font-bold text-white">Gift Card Value Tracker</h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400">$150.00 REMAINING</span>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-4 p-0.5 border border-slate-700">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '40%' }}
          transition={{ duration: 0.8 }}
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400">
        <span>Total Balance: $250.00</span>
        <span className="text-amber-300 font-bold">Applied: $100.00</span>
      </div>
    </div>
  );
}
export default CheckoutGiftCard11;`;

// 12. GIFT CARD TIMELINE
variantsCode[12] = `export function CheckoutGiftCard12({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">REDEMPTION FLOW</span>
        <h3 className="text-xl font-bold text-white">Gift Card Progression</h3>
      </div>

      <div className="relative pl-8 space-y-6">
        <svg className="absolute left-3 top-2 bottom-2 w-0.5 h-[80%]" overflow="visible">
          <motion.line 
            x1="0" y1="0" x2="0" y2="100%" 
            stroke="rgb(245, 158, 11)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center">1</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <span className="font-bold text-white">Step 1: Enter Card Credentials</span>
            <p className="text-slate-400">GC-8842-9901 Verified</p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center">2</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/40 text-xs">
            <span className="font-bold text-amber-300">Step 2: Apply $100.00 Balance</span>
            <p className="text-slate-400">Remaining balance: $150.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard12;`;

// 13. GIFT CARD + ORDER
variantsCode[13] = `export function CheckoutGiftCard13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Gift className="w-5 h-5 text-amber-400" /> Gift Card Payment Deduction
        </h3>
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs mb-4">
        <div className="flex justify-between text-slate-400">
          <span>Order Total</span>
          <span className="font-mono text-white">$883.32</span>
        </div>
        <div className="flex justify-between text-amber-400 font-bold">
          <span>Applied Gift Card (GC-8842)</span>
          <span className="font-mono">-$100.00</span>
        </div>
        <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800 text-sm">
          <span>Remaining Payment Due</span>
          <span className="font-mono text-amber-300">$783.32</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard13;`;

// 14. EXPANDABLE GIFT CARD
variantsCode[14] = `export function CheckoutGiftCard14({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Gift className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-bold text-white">Have a Gift Card to redeem?</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 border-t border-slate-800 space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              <input type="text" defaultValue="GC-8842-9901" className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase" />
              <input type="password" defaultValue="4829" className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white" />
            </div>
            <button className="w-full py-2.5 bg-amber-500 text-slate-950 rounded-xl font-bold text-xs">Apply Gift Card</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutGiftCard14;`;

// 15. GIFT CARD PROFILE
variantsCode[15] = `export function CheckoutGiftCard15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">PROFILE GIFT VOUCHER</span>
      <h3 className="text-xl font-bold text-white mb-6">Gift Card Credentials</h3>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-slate-400 block mb-1">Cardholder Name</span>
          <span className="font-bold text-white">Alex Morgan</span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Card Number</span>
          <span className="font-mono font-bold text-amber-300">GC-8842-9901</span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Available Balance</span>
          <span className="font-mono font-bold text-emerald-400 text-sm">$250.00</span>
        </div>
        <div>
          <span className="text-slate-400 block mb-1">Status</span>
          <span className="font-bold text-emerald-400">ACTIVE ✓</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard15;`;

// 16. ICON-LED GIFT CARD
variantsCode[16] = `export function CheckoutGiftCard16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <h3 className="text-lg font-bold text-white mb-6 text-center">Icon-Guided Gift Card Entry</h3>

      <div className="space-y-4">
        <div className="relative">
          <Gift className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
          <input type="text" defaultValue="GC-8842-9901" className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
          <input type="password" defaultValue="4829" className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white" />
        </div>
        <button className="w-full py-3 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl">Apply Gift Balance</button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard16;`;

// 17. APPLIED GIFT CARD STATE
variantsCode[17] = `export function CheckoutGiftCard17({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      {applied ? (
        <div>
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <Check className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">GIFT CARD ACTIVE</span>
          <h3 className="text-2xl font-extrabold font-mono text-white mb-2">GC-••••-8842</h3>
          <p className="text-xs text-slate-400 mb-6">Applied $100.00 • Remaining Balance: <strong className="text-amber-400">$150.00</strong></p>
          <button onClick={() => setApplied(false)} className="text-xs text-rose-400 font-bold hover:underline">Remove Gift Card</button>
        </div>
      ) : (
        <button onClick={() => setApplied(true)} className="px-6 py-2.5 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold">Re-Apply Gift Card</button>
      )}
    </div>
  );
}
export default CheckoutGiftCard17;`;

// 18. 3D GIFT CARD
variantsCode[18] = `export function CheckoutGiftCard18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">3D PERSPECTIVE GIFT CARD</span>
        <h3 className="text-xl font-bold text-white">Digital Pass</h3>
      </div>

      <motion.div 
        whileHover={{ rotateX: -6, rotateY: 5, scale: 1.02 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 border border-amber-400/40 shadow-2xl flex items-center justify-between cursor-pointer text-slate-950"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          <span className="text-xs font-mono font-bold block mb-1">STORE VOUCHER</span>
          <h4 className="text-2xl font-extrabold font-mono">$250.00 BALANCE</h4>
        </div>
        <span className="px-4 py-2 bg-slate-950 text-amber-400 rounded-xl text-xs font-bold">Apply</span>
      </motion.div>
    </div>
  );
}
export default CheckoutGiftCard18;`;

// 19. EDITORIAL GIFT CARD
variantsCode[19] = `export function CheckoutGiftCard19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 border-b border-stone-800 pb-4"
      >
        <span className="text-xs font-sans text-amber-500 uppercase tracking-widest font-bold block mb-1">EXCLUSIVE GIFT</span>
        <h2 className="text-3xl font-normal italic text-white">Redeem Your Gift</h2>
      </motion.div>

      <div className="flex gap-4 items-center">
        <input type="text" defaultValue="GC-8842-9901" className="flex-1 p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs font-mono text-white uppercase" />
        <button className="px-6 py-3 bg-amber-500 text-stone-950 font-sans font-bold text-xs rounded-xl">Redeem</button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard19;`;

// 20. AWARD-STYLE GIFT CARD
variantsCode[20] = `export function CheckoutGiftCard20({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-amber-500/30 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">VIP STORED VALUE</span>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Award Digital Gift Suite
          </h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-full">
          Verified $250.00
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">CARD #GC-8842-9901</span>
          <h3 className="text-2xl font-extrabold font-mono text-white">$250.00 AVAILABLE</h3>
          <p className="text-xs text-slate-400">Applies $100.00 • $150.00 Remaining</p>
        </div>
        <button 
          onClick={() => setApplied(!applied)}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-2xl font-bold text-xs transition-all shadow-lg shadow-amber-500/20"
        >
          {applied ? 'Applied ✓' : 'Apply Balance'}
        </button>
      </div>
    </div>
  );
}
export default CheckoutGiftCard20;`;

// Write all 20
for (let i = 1; i <= 20; i++) {
  const folder = path.join(baseDir, `checkout-gift-card-${i}`);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, `CheckoutGiftCard${i}.tsx`), createTSX(variantsCode[i]), 'utf-8');
}
console.log("All 20 Gift Card TSX components written successfully!");
