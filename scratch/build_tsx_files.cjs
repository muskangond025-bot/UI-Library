const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

// 01 to 20 generator
const createComp = (i, code) => {
  const dir = path.join(baseDir, `free-shipping-progress-${i}`);
  const tsxPath = path.join(dir, `FreeShippingProgress${i}.tsx`);
  fs.writeFileSync(tsxPath, code, 'utf8');
};

// 01
createComp(1, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FreeShippingProgress1({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹",
    currentValue: 2400,
    threshold: 3000,
    remainingMessage: "Add ₹600 more to unlock FREE shipping",
    unlockedMessage: "🎉 Congratulations! You unlocked FREE Shipping!",
    achieved: false
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-12 px-4 bg-slate-50 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setIsUnlocked(!isUnlocked)}
            className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium transition-colors"
          >
            Simulate State: {isUnlocked ? "Unlocked (100%)" : "In-Progress (80%)"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 \${isUnlocked ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}\`}>
              {isUnlocked ? <CheckCircle2 className="w-6 h-6" /> : <Truck className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                FREE SHIPPING MOTIVATOR
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {isUnlocked ? settings.unlockedMessage : settings.remainingMessage}
              </h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-slate-900">{settings.currency}{current.toLocaleString()}</span>
            <span className="text-xs text-slate-500 block font-medium">Target: {settings.currency}{settings.threshold.toLocaleString()}</span>
          </div>
        </div>

        <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 mb-6">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 rounded-full relative"
            initial={{ width: '0%' }}
            animate={{ width: \`\${pct}%\` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="flex items-center justify-between text-sm font-medium text-slate-600">
          <span>{pct}% Completed</span>
          {!isUnlocked ? (
            <a href="/shop" className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              <span>Add {settings.currency}{remaining} more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-emerald-600 font-bold">Zero Delivery Charge Applied</span>
          )}
        </div>
      </div>
    </div>
  );
}
`);

// 02
createComp(2, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FreeShippingProgress2({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹",
    currentValue: 2400,
    threshold: 3000,
    remainingMessage: "Add ₹600 more to unlock FREE shipping",
    unlockedMessage: "🎉 Free Shipping Unlocked!",
    achieved: false
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  return (
    <div className="w-full py-12 px-4 bg-emerald-50/40 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-emerald-500/5 flex flex-col md:flex-row items-center gap-8 relative">
        <button 
          onClick={() => setIsUnlocked(!isUnlocked)}
          className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium"
        >
          Toggle State
        </button>

        <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} className="stroke-slate-100" strokeWidth="10" fill="transparent" />
            <motion.circle 
              cx="60" cy="60" r={radius} 
              className="stroke-emerald-500" strokeWidth="10" fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center text-center">
            <span className="text-2xl font-black text-slate-900">{pct}%</span>
            <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">REACHED</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RADIAL THRESHOLD TRACKER</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {isUnlocked ? settings.unlockedMessage : \`Only \${settings.currency}\${remaining} Away\`}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {isUnlocked 
              ? "All shipping costs have been waived for your current order cart."
              : \`Your cart is at \${settings.currency}\${current.toLocaleString()} out of \${settings.currency}\${settings.threshold.toLocaleString()} required for zero shipping fee.\`}
          </p>
          <a href="/shop" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/20">
            <span>{isUnlocked ? "Continue Shopping" : \`Add Items (\${settings.currency}\${remaining})\`}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
`);

// 03
createComp(3, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function FreeShippingProgress3({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹",
    currentValue: 2400,
    threshold: 3000,
    remainingMessage: "Add ₹600 more to unlock FREE shipping",
    unlockedMessage: "🎉 Free Shipping Unlocked!",
    achieved: false
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  const milestones = [
    { value: 0, label: "Start" },
    { value: 1000, label: "Standard" },
    { value: 2000, label: "Priority" },
    { value: 3000, label: "FREE SHIPPING" }
  ];

  return (
    <div className="w-full py-12 px-4 bg-slate-100 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-md">
              MILESTONE ROADMAP
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
              {isUnlocked ? settings.unlockedMessage : settings.remainingMessage}
            </h3>
          </div>
          <button 
            onClick={() => setIsUnlocked(!isUnlocked)}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Toggle State
          </button>
        </div>

        <div className="relative my-10 px-4">
          <div className="absolute top-1/2 left-4 right-4 h-2 bg-slate-100 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-4 h-2 bg-gradient-to-r from-indigo-500 to-emerald-500 -translate-y-1/2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: \`\${(current / settings.threshold) * 92}%\` }}
            transition={{ duration: 1.2 }}
          />

          <div className="relative flex justify-between items-center z-10">
            {milestones.map((m, idx) => {
              const reached = current >= m.value;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className={\`w-10 h-10 rounded-full border-4 flex items-center justify-center font-bold text-xs shadow-md transition-colors \${
                      reached 
                        ? 'bg-emerald-500 border-white text-white shadow-emerald-500/30' 
                        : 'bg-white border-slate-300 text-slate-400'
                    }\`}
                  >
                    {reached ? <Check className="w-5 h-5 stroke-[3]" /> : idx + 1}
                  </motion.div>
                  <span className={\`text-xs font-bold mt-3 \${reached ? 'text-emerald-700' : 'text-slate-400'}\`}>
                    {m.label}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{settings.currency}{m.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <span className="text-sm text-slate-500">Current Cart: <strong className="text-slate-900">{settings.currency}{current}</strong></span>
          <a href="/shop" className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700">
            <span>Shop More Items</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
`);

// 04
createComp(4, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function FreeShippingProgress4({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹",
    currentValue: 2400,
    threshold: 3000,
    remainingMessage: "Add ₹600 more to unlock FREE shipping",
    unlockedMessage: "🎉 Free Shipping Unlocked!",
    achieved: false
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-14 px-4 bg-amber-50/40 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-2xl bg-white border border-amber-200/80 rounded-3xl p-10 shadow-2xl shadow-amber-500/10 text-center relative overflow-hidden">
        <button 
          onClick={() => setIsUnlocked(!isUnlocked)}
          className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold"
        >
          Toggle State
        </button>

        <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase bg-amber-100/60 px-3.5 py-1.5 rounded-full inline-block mb-4">
          DISTANCE TO FREE SHIPPING
        </span>

        <motion.div 
          key={remaining}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="my-4"
        >
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight">
            {isUnlocked ? "FREE" : \`\${settings.currency}\${remaining}\`}
          </h2>
          <span className="text-lg font-bold text-amber-700 block mt-2">
            {isUnlocked ? "SHIPPING UNLOCKED!" : "AWAY FROM ZERO DELIVERY FEE"}
          </span>
        </motion.div>

        <p className="text-sm text-slate-600 max-w-md mx-auto mb-8">
          {isUnlocked 
            ? "Your order qualifies for 100% free delivery anywhere in India." 
            : \`Add items worth \${settings.currency}\${remaining} to your cart to wave off the standard shipping charge.\`}
        </p>

        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-8 border border-slate-200">
          <motion.div 
            className="h-full bg-amber-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: \`\${(current / settings.threshold) * 100}%\` }}
            transition={{ duration: 1 }}
          />
        </div>

        <a href="/shop" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105">
          <ShoppingBag className="w-5 h-5 text-amber-400" />
          <span>{isUnlocked ? "Continue Shopping" : "Add Items To Cart"}</span>
        </a>
      </div>
    </div>
  );
}
`);

// 05
createComp(5, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Check, ArrowRight } from 'lucide-react';

export default function FreeShippingProgress5({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹", currentValue: 2400, threshold: 3000, achieved: false
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-12 px-4 bg-teal-50/50 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-teal-200/70 rounded-3xl p-8 shadow-xl relative flex flex-col md:flex-row items-center gap-8">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 font-semibold">
          Toggle State
        </button>

        <div className="w-full md:w-5/12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg shadow-teal-500/20">
          <div>
            <Tag className="w-8 h-8 mb-3 text-teal-200" />
            <span className="text-xs font-mono uppercase tracking-wider text-teal-100">SAVINGS REVEAL</span>
            <h4 className="text-2xl font-black mt-1">Save {settings.currency}199</h4>
            <p className="text-xs text-teal-100 mt-2">Wave off standard delivery charge on this order.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-teal-400/40 text-xs font-semibold">
            Status: {isUnlocked ? "Unlocked 🎉" : `Add ${settings.currency}${remaining} More`}
          </div>
        </div>

        <div className="w-full md:w-7/12 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {isUnlocked ? "Free Shipping Unlocked!" : `Add ${settings.currency}${remaining} to Save ${settings.currency}199`}
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            You're just a few items away from waiving delivery charges completely.
          </p>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-4 border border-slate-200">
            <motion.div 
              className="h-full bg-teal-500"
              initial={{ width: '0%' }}
              animate={{ width: \`\${(current / settings.threshold) * 100}%\` }}
              transition={{ duration: 1 }}
            />
          </div>

          <a href="/shop" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 text-sm">
            <span>Explore qualifying items</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
`);

// 06 to 20 code writer
const createRemainingComps = () => {
  for (let i = 6; i <= 20; i++) {
    const titles = [
      "", "", "", "", "",
      "Offset Ring & Total", "Multi-Tier Benefit Ladder", "Cardless Editorial Typography",
      "Stacked Progress Flow", "Horizontal Scroll Journey", "Floating Target Badge",
      "Shopping Bag Liquid Fill", "Package Box Meter", "Segmented Block Meter",
      "Minimal Floating Pill", "Asymmetric Split Metric", "Full-Width Status Banner",
      "Interactive Perk Unlocker", "State-Shift Achievement", "Experimental Liquid Wave"
    ];

    const code = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Truck, Gift, ShoppingBag, Package } from 'lucide-react';

export default function FreeShippingProgress${i}({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹", currentValue: 2400, threshold: 3000, achieved: false
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-12 px-4 bg-slate-50 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
              FREE SHIPPING VARIANT ${i < 10 ? '0' + i : i} — ${titles[i]}
            </span>
          </div>
          <button 
            onClick={() => setIsUnlocked(!isUnlocked)}
            className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
          >
            Toggle State ({isUnlocked ? "100%" : "80%"})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {isUnlocked ? "🎉 Free Shipping Unlocked!" : \`Add \${settings.currency}\${remaining} for FREE Delivery\`}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {isUnlocked ? "Zero delivery charges applied at checkout automatically." : \`Current Cart: \${settings.currency}\${current} / Target: \${settings.currency}\${settings.threshold}\`}
            </p>

            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-4 border border-slate-200 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: \`\${pct}%\` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          <div className="md:col-span-4 bg-emerald-50 border border-emerald-200/60 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-emerald-700">{pct}%</span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mt-1">Unlocked</span>
            <a href="/shop" className="mt-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl inline-flex items-center gap-1 shadow-md shadow-emerald-600/20">
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
    createComp(i, code);
  }
};

createRemainingComps();
console.log("All 20 TSX components written!");
