const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '08-discount-coupon');

function createTSX(code) {
  return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

${code}
`;
}

const variantsCode = {};

// 1. MINIMAL COUPON INPUT
variantsCode[1] = `export function CheckoutDiscountCoupon1({ data }: { data?: any }) {
  const [code, setCode] = useState('SPRING2026');
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Tag className="w-4 h-4 text-indigo-400" /> Apply Discount Code
        </h3>
        <span className="text-xs text-slate-400">Have a promo code?</span>
      </div>

      <div className="relative flex items-center mb-4">
        <input 
          type="text" 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          placeholder="Enter Coupon Code"
          className="w-full pl-4 pr-28 py-3 bg-slate-800/80 border border-slate-700 rounded-2xl text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors uppercase"
        />
        <button 
          onClick={() => setApplied(!applied)} 
          className="absolute right-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors"
        >
          {applied ? 'Applied' : 'Apply'}
        </button>
      </div>

      <AnimatePresence>
        {applied && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2 text-indigo-300 font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Code <strong className="font-mono text-white">SPRING2026</strong> applied successfully!</span>
            </div>
            <span className="font-bold text-emerald-400">-$100.00 SAVED</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutDiscountCoupon1;`;

// 2. COUPON CARD COLLECTION
variantsCode[2] = `export function CheckoutDiscountCoupon2({ data }: { data?: any }) {
  const [activeCode, setActiveCode] = useState('SPRING2026');
  const coupons = [
    { code: 'SPRING2026', discount: '$100 OFF', desc: 'Orders above $500', bg: 'from-indigo-900/60 to-slate-900' },
    { code: 'FREESHIP', discount: 'FREE EXPRESS AIR', desc: 'No minimum order', bg: 'from-teal-900/60 to-slate-900' },
    { code: 'VIP20', discount: '20% OFF ALL', desc: 'Exclusive VIP member tier', bg: 'from-purple-900/60 to-slate-900' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">AVAILABLE OFFERS</span>
          <h2 className="text-xl font-bold text-white">Select a Coupon Card</h2>
        </div>
        <span className="text-xs text-slate-400">Click to apply instantly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coupons.map((c, idx) => {
          const isSelected = activeCode === c.code;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setActiveCode(c.code)}
              className={\`p-5 rounded-2xl border cursor-pointer transition-all bg-gradient-to-b \${c.bg} \${isSelected ? 'border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500' : 'border-slate-800 hover:border-slate-700'}\`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">{c.code}</span>
                {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
              </div>
              <h3 className="text-base font-extrabold text-white mb-1">{c.discount}</h3>
              <p className="text-xs text-slate-400 mb-4">{c.desc}</p>
              <button className={\`w-full py-2 rounded-xl text-xs font-bold transition-colors \${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}\`}>
                {isSelected ? 'Applied ✓' : 'Apply Coupon'}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon2;`;

// 3. TICKET / COUPON STUB
variantsCode[3] = `export function CheckoutDiscountCoupon3({ data }: { data?: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">PROMOTIONAL TICKET STUB</span>
        <h2 className="text-xl font-bold text-white">Special Discount Voucher</h2>
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 rounded-2xl border border-amber-500/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
      >
        {/* Left Side Ticket */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
            <TicketIcon className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">SPRING PROMO</span>
            <h3 className="text-2xl font-extrabold text-white">$100 OFF VOUCHER</h3>
            <p className="text-xs text-amber-200/70">Valid on all orders above $500</p>
          </div>
        </div>

        {/* Perforation Line */}
        <div className="hidden sm:block h-16 w-px border-r-2 border-dashed border-amber-500/30" />

        {/* Right Side Action */}
        <div className="text-center sm:text-right">
          <span className="text-[10px] text-amber-300 font-mono block mb-1">COUPON CODE</span>
          <div className="px-4 py-2 bg-slate-950 rounded-xl border border-amber-500/30 text-amber-400 font-mono font-bold text-sm mb-2">
            SPRING2026
          </div>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-white mx-auto sm:ml-auto"
          >
            {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function TicketIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

export default CheckoutDiscountCoupon3;`;

// 4. SPLIT OFFER + CODE
variantsCode[4] = `export function CheckoutDiscountCoupon4({ data }: { data?: any }) {
  const [applied, setApplied] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-6 p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl border border-indigo-800/60 text-white flex flex-col justify-between shadow-2xl"
      >
        <div>
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">SPRING SAVINGS EVENT</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Save $100.00 Instantly</h2>
          <p className="text-xs text-indigo-200/80 leading-relaxed">Apply code SPRING2026 at checkout to receive flat $100 discount + free nationwide express shipping.</p>
        </div>
        <div className="pt-6 mt-6 border-t border-indigo-800/50 flex items-center gap-2 text-xs text-indigo-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Limited time promotional offer</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-6 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl"
      >
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Enter Promo Code</h3>
          <div className="space-y-4">
            <input 
              type="text" 
              defaultValue="SPRING2026" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm font-mono text-white focus:outline-none focus:border-indigo-500 uppercase"
            />
            <button 
              onClick={() => setApplied(!applied)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-xs transition-colors shadow-lg shadow-indigo-600/30"
            >
              {applied ? 'Discount Applied ✓' : 'Apply Promo Code'}
            </button>
          </div>
        </div>
        {applied && (
          <p className="text-xs text-emerald-400 font-medium mt-4">
            ✓ Coupon SPRING2026 active (-$100.00)
          </p>
        )}
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon4;`;

// 5. SAVINGS-FIRST DESIGN
variantsCode[5] = `export function CheckoutDiscountCoupon5({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">HERO SAVINGS DISPLAY</span>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl font-extrabold font-mono text-emerald-400 tracking-tight my-4"
      >
        YOU SAVE $100.00
      </motion.div>

      <p className="text-xs text-slate-400 mb-6 max-w-md mx-auto">
        Your current cart qualifies for our spring promotional discount code. Enter code below to confirm savings.
      </p>

      <div className="flex items-center gap-3 max-w-md mx-auto">
        <input 
          type="text" 
          defaultValue="SPRING2026" 
          className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm font-mono text-white focus:outline-none focus:border-emerald-500 uppercase"
        />
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold transition-colors">
          Redeem
        </button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon5;`;

// 6. HORIZONTAL COUPON CAROUSEL
variantsCode[6] = `export function CheckoutDiscountCoupon6({ data }: { data?: any }) {
  const [selected, setSelected] = useState('SPRING2026');
  const offers = [
    { code: 'SPRING2026', discount: '$100 OFF', tag: 'BEST VALUE' },
    { code: 'FREESHIP', discount: 'FREE SHIPPING', tag: 'AIR EXPRESS' },
    { code: 'WELCOME15', discount: '15% OFF', tag: 'NEW CUSTOMER' },
    { code: 'FLASH25', discount: '$25 BONUS', tag: 'FLASH DEAL' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Tag className="w-4 h-4 text-cyan-400" /> Coupon Carousel
        </h3>
        <span className="text-xs text-slate-400">Swipe or click offer</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {offers.map((o, idx) => {
          const isActive = selected === o.code;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelected(o.code)}
              className={\`flex-shrink-0 w-52 p-4 rounded-2xl border cursor-pointer transition-all bg-slate-800/60 \${isActive ? 'border-cyan-400 bg-slate-800 shadow-lg shadow-cyan-500/20' : 'border-slate-700/60 hover:border-slate-600'}\`}
            >
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold block w-fit mb-2">{o.tag}</span>
              <h4 className="text-lg font-extrabold text-white mb-1">{o.discount}</h4>
              <p className="text-xs font-mono text-slate-400 mb-3">{o.code}</p>
              <div className="text-xs font-bold text-cyan-400 flex items-center gap-1">
                {isActive ? '✓ Active' : 'Tap to Apply'}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon6;`;

// 7. STACKED COUPON CARDS
variantsCode[7] = `export function CheckoutDiscountCoupon7({ data }: { data?: any }) {
  const [unstacked, setUnstacked] = useState(false);
  const cards = [
    { code: 'SPRING2026', title: '$100 OFF SPRING PROMO', bg: 'bg-indigo-900 border-indigo-700' },
    { code: 'FREESHIP', title: 'FREE EXPRESS SHIPPING', bg: 'bg-teal-900 border-teal-700' },
    { code: 'VIP20', title: '20% EXTRA DISCOUNTS', bg: 'bg-purple-900 border-purple-700' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">INTERACTIVE STACK</span>
        <h3 className="text-xl font-bold text-white">Coupon Stack</h3>
        <button onClick={() => setUnstacked(!unstacked)} className="text-xs text-amber-400 hover:underline mt-1">
          {unstacked ? 'Collapse Stack' : 'Click to Unstack Offers'}
        </button>
      </div>

      <div className="relative min-h-[200px] flex justify-center items-center">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ y: idx * 10, rotate: (idx - 1) * -3, opacity: 0.9 }}
            animate={{ 
              y: unstacked ? idx * 70 : idx * 8, 
              rotate: unstacked ? 0 : (idx - 1) * -4,
              opacity: 1 
            }}
            transition={{ duration: 0.4 }}
            className={\`absolute w-full max-w-md p-4 rounded-2xl border text-left shadow-xl \${c.bg}\`}
            style={{ zIndex: 10 - idx }}
          >
            <div className="flex justify-between items-center text-xs text-white">
              <span className="font-mono font-bold bg-black/40 px-2 py-0.5 rounded">{c.code}</span>
              <span className="text-emerald-400 font-bold">AVAILABLE</span>
            </div>
            <h4 className="text-sm font-extrabold text-white mt-2">{c.title}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon7;`;

// 8. PREMIUM DARK COUPON
variantsCode[8] = `export function CheckoutDiscountCoupon8({ data }: { data?: any }) {
  const [selected, setSelected] = useState('SPRING2026');

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-amber-500/30 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">LUXURY MEMBER PERKS</span>
          <h3 className="text-xl font-bold text-white">Privilege Coupon</h3>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
          VIP Unlocked
        </span>
      </div>

      <motion.div 
        whileHover={{ boxShadow: '0 0 25px rgba(245, 158, 11, 0.2)' }}
        className="p-6 rounded-2xl bg-neutral-900 border border-amber-500/40 flex justify-between items-center"
      >
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">ACTIVE PROMO CODE</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">SPRING2026</h4>
          <p className="text-xs text-neutral-400 mt-1">Saves $100.00 on total purchase</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl transition-colors">
          Applied ✓
        </button>
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon8;`;

// 9. PROMO CODE + OFFER GRID
variantsCode[9] = `export function CheckoutDiscountCoupon9({ data }: { data?: any }) {
  const offers = [
    { title: '20% OFF', code: 'SPRING20', desc: 'Valid on orders over $300' },
    { title: 'FREE SHIPPING', code: 'FREESHIP', desc: 'Express nationwide delivery' },
    { title: '$50 CASHBACK', code: 'CASH50', desc: 'Instant account credit' },
    { title: 'FIRST ORDER', code: 'WELCOME10', desc: 'New customer discount' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-2">Promo Code & Offer Grid</h3>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type coupon code..." 
            className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase focus:outline-none"
          />
          <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">Apply</button>
        </div>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {offers.map((o, idx) => (
          <motion.div 
            key={idx}
            variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
            className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors flex justify-between items-center"
          >
            <div>
              <h4 className="text-sm font-extrabold text-white">{o.title}</h4>
              <p className="text-[11px] text-slate-400">{o.desc}</p>
              <span className="text-[10px] font-mono text-indigo-400 font-bold block mt-1">{o.code}</span>
            </div>
            <button className="text-xs text-indigo-400 font-bold hover:underline">Apply</button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon9;`;

// 10. SCRATCH / REVEAL CONCEPT
variantsCode[10] = `export function CheckoutDiscountCoupon10({ data }: { data?: any }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">SECRET PROMO REVEAL</span>
      <h3 className="text-xl font-bold text-white mb-4">Tap to Uncover Your Offer</h3>

      <div className="relative min-h-[140px] flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="scratch"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              onClick={() => setRevealed(true)}
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 flex items-center justify-center cursor-pointer font-bold text-white text-sm"
            >
              <Sparkles className="w-5 h-5 mr-2" /> TAP HERE TO REVEAL SECRET DISCOUNT
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <span className="text-xs font-mono text-emerald-400 font-bold block">CONGRATULATIONS!</span>
              <h2 className="text-3xl font-extrabold font-mono text-white my-1">$100 OFF</h2>
              <p className="text-xs text-slate-400">CODE: <strong className="text-cyan-400 font-mono">SPRING2026</strong></p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon10;`;

// 11. DISCOUNT PROGRESS
variantsCode[11] = `export function CheckoutDiscountCoupon11({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">DISCOUNT THRESHOLD</span>
          <h3 className="text-lg font-bold text-white">Unlock Tier 2 Discounts</h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400">75% UNLOCKED</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-4 p-0.5 border border-slate-700">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '75%' }}
          transition={{ duration: 0.8 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400 mb-6">
        <span>Current Order: $904.00</span>
        <span className="text-white font-bold">Code SPRING2026 Applied ($100 OFF)</span>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon11;`;

// 12. COUPON TIMELINE
variantsCode[12] = `export function CheckoutDiscountCoupon12({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-6">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">PROMOTIONAL TIMELINE</span>
        <h3 className="text-xl font-bold text-white">Discount Progression</h3>
      </div>

      <div className="relative pl-8 space-y-6">
        <svg className="absolute left-3 top-2 bottom-2 w-0.5 h-[80%]" overflow="visible">
          <motion.line 
            x1="0" y1="0" x2="0" y2="100%" 
            stroke="rgb(6, 182, 212)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-cyan-500 text-black font-bold text-xs flex items-center justify-center">1</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <span className="font-bold text-white">Tier 1: Free Shipping</span>
            <p className="text-slate-400">Unlocked automatically on orders over $100</p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-cyan-500 text-black font-bold text-xs flex items-center justify-center">2</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-cyan-500/40 text-xs">
            <span className="font-bold text-cyan-300">Tier 2: Code SPRING2026 ($100 OFF)</span>
            <p className="text-slate-400">Active promo code applied to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon12;`;

// 13. RECEIPT SAVINGS
variantsCode[13] = `export function CheckoutDiscountCoupon13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-6 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 font-mono shadow-2xl">
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-4">
        <h4 className="text-sm font-bold text-amber-400">RECEIPT SAVINGS SUMMARY</h4>
      </div>

      <div className="space-y-2 text-xs text-stone-300 mb-4">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$904.00</span>
        </div>

        {/* Animated Discount Row Insertion */}
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex justify-between text-emerald-400 font-bold"
        >
          <span>DISCOUNT (SPRING2026)</span>
          <span>-$100.00</span>
        </motion.div>

        <div className="flex justify-between">
          <span>SHIPPING</span>
          <span>$15.00</span>
        </div>
      </div>

      <div className="p-3 bg-stone-950 rounded-xl border border-amber-500/30 flex justify-between items-center text-sm font-bold text-white">
        <span>TOTAL SAVINGS</span>
        <span className="text-amber-400">$100.00</span>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon13;`;

// 14. FLOATING COUPON PANEL
variantsCode[14] = `export function CheckoutDiscountCoupon14({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl font-sans"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest block mb-1">FLOATING PROMO PANEL</span>
          <h3 className="text-xl font-bold text-white">Elevated Coupon Box</h3>
        </div>
        <Tag className="w-6 h-6 text-indigo-400" />
      </div>

      <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 block">Active Code</span>
          <span className="font-mono text-base font-bold text-white">SPRING2026</span>
        </div>
        <span className="text-xs font-bold text-emerald-400">-$100.00 APPLIED</span>
      </div>
    </motion.div>
  );
}
export default CheckoutDiscountCoupon14;`;

// 15. ICON-LED OFFER SELECTOR
variantsCode[15] = `export function CheckoutDiscountCoupon15({ data }: { data?: any }) {
  const [activeIcon, setActiveIcon] = useState(0);
  const categories = [
    { icon: Percent, label: '20% OFF', code: 'SPRING2026' },
    { icon: Truck, label: 'FREE AIR', code: 'FREESHIP' },
    { icon: Sparkles, label: 'VIP PERK', code: 'VIPMEM' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <h3 className="text-lg font-bold text-white mb-6 text-center">Category Offer Selector</h3>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((c, idx) => {
          const IconComponent = c.icon;
          const isSelected = activeIcon === idx;
          return (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIcon(idx)}
              className={\`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all \${isSelected ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}\`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="text-xs font-bold">{c.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center text-xs">
        Active Category Promo: <strong className="font-mono text-indigo-300">{categories[activeIcon].code}</strong>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon15;`;

// 16. EXPANDABLE COUPON DRAWER
variantsCode[16] = `export function CheckoutDiscountCoupon16({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <Tag className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-bold text-white">Have a promo code? Click to unlock</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 border-t border-slate-800 space-y-4"
          >
            <div className="flex gap-2">
              <input 
                type="text" 
                defaultValue="SPRING2026" 
                className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase"
              />
              <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">Apply Code</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutDiscountCoupon16;`;

// 17. APPLIED COUPON FOCUS
variantsCode[17] = `export function CheckoutDiscountCoupon17({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      {applied ? (
        <div>
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <Check className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">PROMO ACTIVE</span>
          <h3 className="text-2xl font-extrabold font-mono text-white mb-2">SPRING2026</h3>
          <p className="text-xs text-slate-400 mb-6">Total Discount Applied: <strong className="text-emerald-400">$100.00</strong></p>
          <button 
            onClick={() => setApplied(false)}
            className="text-xs text-rose-400 font-bold hover:underline"
          >
            Remove Coupon
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xs text-slate-400 mb-4">No active coupon code</p>
          <button 
            onClick={() => setApplied(true)}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold"
          >
            Re-Apply SPRING2026
          </button>
        </div>
      )}
    </div>
  );
}
export default CheckoutDiscountCoupon17;`;

// 18. 3D COUPON TICKET
variantsCode[18] = `export function CheckoutDiscountCoupon18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">3D PERSPECTIVE CARD</span>
        <h3 className="text-xl font-bold text-white">3D Ticket Pass</h3>
      </div>

      <motion.div 
        whileHover={{ rotateX: -6, rotateY: 5, scale: 1.02 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/40 shadow-2xl flex items-center justify-between cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          <span className="text-xs font-mono text-purple-300 font-bold block mb-1">VIP PASS</span>
          <h4 className="text-2xl font-extrabold text-white font-mono">SPRING2026</h4>
          <p className="text-xs text-purple-200/70">Flat $100.00 Discount</p>
        </div>
        <span className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold">Active</span>
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon18;`;

// 19. EDITORIAL PROMO SECTION
variantsCode[19] = `export function CheckoutDiscountCoupon19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-neutral-900 text-neutral-100 rounded-3xl border border-neutral-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 border-b border-neutral-800 pb-4"
      >
        <span className="text-xs font-sans text-amber-500 uppercase tracking-widest font-bold block mb-1">EDITORIAL OFFERS</span>
        <h2 className="text-3xl font-normal italic text-white">Unlock Your Savings</h2>
      </motion.div>

      <div className="flex gap-4 items-center">
        <input 
          type="text" 
          defaultValue="SPRING2026" 
          className="flex-1 p-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs font-mono text-white uppercase"
        />
        <button className="px-6 py-3 bg-amber-500 text-black font-sans font-bold text-xs rounded-xl">Apply</button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon19;`;

// 20. AWARD-STYLE COUPON EXPERIENCE
variantsCode[20] = `export function CheckoutDiscountCoupon20({ data }: { data?: any }) {
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">VERIFIED SAVINGS ENGINE</span>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> Award Coupon Suite
          </h2>
        </div>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-full">
          Verified Active
        </span>
      </div>

      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
        <div>
          <span className="text-xs font-mono text-indigo-400 block mb-1">PROMOTIONAL CODE</span>
          <h3 className="text-2xl font-extrabold font-mono text-white">SPRING2026</h3>
          <p className="text-xs text-slate-400">Flat $100.00 Savings Applied</p>
        </div>
        <button 
          onClick={() => setApplied(!applied)}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xs transition-all shadow-lg shadow-indigo-600/30"
        >
          {applied ? 'Applied ✓' : 'Apply Code'}
        </button>
      </div>
    </div>
  );
}
export default CheckoutDiscountCoupon20;`;

// Write all 20
for (let i = 1; i <= 20; i++) {
  const folder = path.join(baseDir, `checkout-discount-coupon-${i}`);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, `CheckoutDiscountCoupon${i}.tsx`), createTSX(variantsCode[i]), 'utf-8');
}
console.log("All 20 Discount Coupon TSX components written successfully!");
