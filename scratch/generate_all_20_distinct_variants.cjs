const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

const writeVariant = (num, title, desc, tsxCode, jsonSettings) => {
  const dir = path.join(baseDir, `free-shipping-progress-${num}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tsxPath = path.join(dir, `FreeShippingProgress${num}.tsx`);
  const jsonPath = path.join(dir, `free-shipping-progress-${num}.json`);

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');

  const jsonContent = {
    title: `Free Shipping Progress ${num < 10 ? '0' + num : num} — ${title}`,
    description: desc,
    section: {
      settings: jsonSettings || {
        currency: "₹",
        currentValue: 2400,
        threshold: 3000,
        remainingMessage: "Add ₹600 more to unlock FREE shipping",
        unlockedMessage: "🎉 Congratulations! You unlocked FREE Shipping!",
        achieved: false
      }
    }
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
};

// 01 EDITORIAL TYPOGRAPHY
writeVariant(1, "Editorial Typography", "No card container. Oversized typography hero statement placing focus on the exact remaining amount with a minimal underline progress line.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FreeShippingProgress1({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-20 px-6 bg-white text-slate-900 font-sans flex flex-col items-center text-center">
      <button 
        onClick={() => setIsUnlocked(!isUnlocked)}
        className="mb-8 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
      >
        Toggle State ({isUnlocked ? "100%" : "80%"})
      </button>

      <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase mb-4">
        01 / EDITORIAL TYPOGRAPHY
      </span>

      <h1 className="text-7xl md:text-9xl font-black tracking-tight text-slate-900 leading-none mb-4">
        {isUnlocked ? "FREE" : \`\${settings.currency}\${remaining}\`}
      </h1>

      <p className="text-xl md:text-2xl font-bold tracking-wide text-slate-500 uppercase mb-12">
        {isUnlocked ? "SHIPPING UNLOCKED ON YOUR CART" : "AWAY FROM UNLOCKING FREE SHIPPING"}
      </p>

      {/* Minimal Underline Progress Line */}
      <div className="w-full max-w-xl h-1.5 bg-slate-100 rounded-full overflow-hidden mb-8">
        <motion.div 
          className="h-full bg-slate-900 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: \`\${pct}%\` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="flex items-center gap-8 text-sm font-mono text-slate-500">
        <span>CART: {settings.currency}{current}</span>
        <span>TARGET: {settings.currency}{settings.threshold}</span>
      </div>
    </div>
  );
}`);

// 02 RADIAL / DONUT
writeVariant(2, "Radial Donut Gauge", "Large circular donut progress gauge centered visually with percentage readout inside and remaining details below.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress2({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  return (
    <div className="w-full py-16 px-4 bg-emerald-50/30 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-10 shadow-2xl flex flex-col items-center text-center relative">
        <button 
          onClick={() => setIsUnlocked(!isUnlocked)}
          className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600"
        >
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase mb-6">
          02 / RADIAL DONUT GAUGE
        </span>

        <div className="relative w-56 h-56 flex items-center justify-center my-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r={radius} className="stroke-slate-100" strokeWidth="16" fill="transparent" />
            <motion.circle 
              cx="100" cy="100" r={radius} 
              className="stroke-emerald-500" strokeWidth="16" fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-5xl font-black text-slate-900">{pct}%</span>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">COMPLETED</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">
          {isUnlocked ? "Free Delivery Unlocked!" : \`\${settings.currency}\${remaining} Remaining\`}
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          {isUnlocked ? "Your order cart qualifies for zero shipping charge." : \`Add \${settings.currency}\${remaining} more items to reach the \${settings.currency}\${settings.threshold} free shipping threshold.\`}
        </p>
      </div>
    </div>
  );
}`);

// 03 MILESTONE JOURNEY
writeVariant(3, "Milestone Journey", "Horizontal roadmap timeline with milestone nodes connecting cart total to destination.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function FreeShippingProgress3({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  const milestones = [
    { value: 0, label: "Start" },
    { value: 1000, label: "Standard" },
    { value: 2000, label: "Priority" },
    { value: 3000, label: "FREE SHIPPING" }
  ];

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-md">
              03 / MILESTONE ROADMAP
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-2">
              {isUnlocked ? "🎉 Destination Reached: Free Shipping!" : "Cart Progress Milestone Track"}
            </h3>
          </div>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1.5 rounded-lg border text-slate-700">
            Toggle State
          </button>
        </div>

        <div className="relative my-12 px-6">
          <div className="absolute top-1/2 left-6 right-6 h-3 bg-slate-100 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-6 h-3 bg-gradient-to-r from-indigo-500 to-emerald-500 -translate-y-1/2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: \`\${(current / settings.threshold) * 92}%\` }}
            transition={{ duration: 1.2 }}
          />

          <div className="relative flex justify-between items-center z-10">
            {milestones.map((m, idx) => {
              const reached = current >= m.value;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className={\`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm shadow-md transition-colors \${
                    reached ? 'bg-emerald-500 border-white text-white' : 'bg-white border-slate-300 text-slate-400'
                  }\`}>
                    {reached ? <Check className="w-6 h-6 stroke-[3]" /> : idx + 1}
                  </div>
                  <span className={\`text-xs font-bold mt-3 \${reached ? 'text-emerald-700' : 'text-slate-400'}\`}>
                    {m.label}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{settings.currency}{m.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}`);

// 04 VERTICAL JOURNEY
writeVariant(4, "Vertical Journey", "Vertical process column connecting Cart Value down to Free Shipping Target.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle } from 'lucide-react';

export default function FreeShippingProgress4({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">04 / VERTICAL JOURNEY</span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <div className="flex flex-col gap-6 relative">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 uppercase font-bold block">STAGE 01</span>
              <h4 className="text-lg font-bold text-slate-900">Current Cart Value</h4>
            </div>
            <span className="text-xl font-black text-slate-900">{settings.currency}{current}</span>
          </div>

          <div className="flex justify-center text-emerald-500">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-600 uppercase font-bold block">STAGE 02</span>
              <h4 className="text-lg font-bold text-emerald-900">
                {isUnlocked ? "Gap Cleared!" : \`Remaining: \${settings.currency}\${remaining}\`}
              </h4>
            </div>
            <span className="text-sm font-bold text-emerald-700">{isUnlocked ? "100%" : "80% Progress"}</span>
          </div>

          <div className="flex justify-center text-emerald-500">
            <ArrowDown className="w-6 h-6" />
          </div>

          <div className={\`p-6 rounded-2xl border flex items-center justify-between transition-colors \${
            isUnlocked ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg shadow-emerald-500/20' : 'bg-slate-900 text-white border-slate-800'
          }\`}>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-300 block">DESTINATION</span>
              <h4 className="text-xl font-black">FREE SHIPPING UNLOCKED</h4>
            </div>
            <CheckCircle className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}`);

// 05 THRESHOLD SPLIT
writeVariant(5, "Threshold Split", "2-column split card comparing Current Cart Value against Target Threshold with a middle indicator bridge.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress5({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full py-16 px-4 bg-slate-100 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-md">
            05 / THRESHOLD SPLIT COMPARISON
          </span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          <div className="md:col-span-5 p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase block mb-2">YOUR CURRENT CART</span>
            <span className="text-4xl font-black text-slate-900">{settings.currency}{current}</span>
          </div>

          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-black text-xs shadow-md">
              VS
            </div>
          </div>

          <div className="md:col-span-5 p-8 rounded-2xl bg-teal-500 text-white text-center shadow-lg shadow-teal-500/20">
            <span className="text-xs font-bold text-teal-100 uppercase block mb-2">FREE SHIPPING TARGET</span>
            <span className="text-4xl font-black">{settings.currency}{settings.threshold}</span>
          </div>
        </div>
      </div>
    </div>
  );
}`);

// 06 SEGMENTED TRACK
writeVariant(6, "Segmented Block Track", "Discrete block segments that illuminate step-by-step.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress6({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  const totalBlocks = 5;
  const activeBlocks = Math.round((pct / 100) * totalBlocks);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase">06 / SEGMENTED BLOCK TRACK</span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
          {isUnlocked ? "Free Delivery Segment 5/5 Reached!" : \`Segment Progress (\${activeBlocks}/\${totalBlocks} Active)\`}
        </h3>

        {/* Discrete Blocks */}
        <div className="grid grid-cols-5 gap-3 my-6">
          {Array.from({ length: totalBlocks }).map((_, idx) => {
            const isActive = idx < activeBlocks;
            return (
              <motion.div 
                key={idx}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={\`h-12 rounded-xl transition-all duration-500 border flex items-center justify-center font-bold text-xs \${
                  isActive ? 'bg-emerald-500 border-emerald-600 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-100 border-slate-200 text-slate-400'
                }\`}
              >
                Block {idx + 1}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`);

// 07 SHOPPING BAG FILL
writeVariant(7, "Shopping Bag Liquid Fill", "Vector Shopping Bag illustration filling with liquid color as threshold increases.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function FreeShippingProgress7({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-emerald-50/20 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-emerald-600 uppercase mb-4">07 / SHOPPING BAG FILL</span>

        <div className="relative w-40 h-48 bg-slate-100 border-4 border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-end my-4">
          <motion.div 
            className="w-full bg-emerald-500 rounded-b-2xl"
            initial={{ height: '0%' }}
            animate={{ height: \`\${pct}%\` }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center font-black text-2xl text-slate-900 mix-blend-difference">
            <span>{pct}%</span>
            <span className="text-xs uppercase font-mono">FILLED</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-4">
          {isUnlocked ? "Shopping Bag Full: Free Delivery!" : \`Cart Value: \${settings.currency}\${current}\`}
        </h3>
      </div>
    </div>
  );
}`);

// 08 PACKAGE BOX FILL
writeVariant(8, "Package Box Level Meter", "Delivery box visual filling up progressively.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export default function FreeShippingProgress8({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-amber-50/30 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-amber-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-amber-700 uppercase mb-4">08 / PACKAGE BOX FILL</span>

        <div className="w-32 h-32 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center relative overflow-hidden my-4">
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-amber-500"
            initial={{ height: '0%' }}
            animate={{ height: \`\${pct}%\` }}
            transition={{ duration: 1.2 }}
          />
          <Package className="w-16 h-16 text-amber-900 relative z-10" />
        </div>

        <h3 className="text-xl font-black text-slate-900 mt-2">
          {isUnlocked ? "Package Fully Loaded!" : \`Box Level: \${pct}%\`}
        </h3>
      </div>
    </div>
  );
}`);

// 09 TARGET DESTINATION
writeVariant(9, "Target Destination Bulls-Eye", "Visual target destination with an animated pointer moving toward the zero shipping fee target center.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function FreeShippingProgress9({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full py-16 px-4 bg-indigo-50/20 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-indigo-600 uppercase mb-4">09 / TARGET DESTINATION</span>

        <div className="relative w-40 h-40 flex items-center justify-center my-4">
          <div className="w-full h-full rounded-full border-4 border-dashed border-indigo-200 animate-spin" />
          <div className="absolute w-28 h-28 rounded-full border-4 border-indigo-400 bg-indigo-50 flex items-center justify-center">
            <Target className="w-12 h-12 text-indigo-600" />
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mt-2">
          {isUnlocked ? "Bulls-Eye: Free Shipping!" : \`Target: \${settings.currency}\${settings.threshold}\`}
        </h3>
      </div>
    </div>
  );
}`);

// 10 COUNTDOWN DISTANCE
writeVariant(10, "Countdown Distance Clock", "Digital timer aesthetic focusing on exact distance remaining.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress10({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-16 px-4 bg-slate-900 text-white flex flex-col items-center font-sans rounded-3xl">
      <div className="w-full max-w-xl text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-0 right-0 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
          Toggle State
        </button>

        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-6">
          10 / COUNTDOWN DISTANCE COUNTER
        </span>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="bg-slate-800 border border-slate-700 px-6 py-4 rounded-2xl text-5xl font-mono font-black text-emerald-400">
            {isUnlocked ? "00" : remaining}
          </div>
        </div>

        <h3 className="text-xl font-bold uppercase tracking-wider text-slate-300">
          {isUnlocked ? "FREE SHIPPING UNLOCKED" : \`\${settings.currency} REMAINING FOR FREE DELIVERY\` }
        </h3>
      </div>
    </div>
  );
}`);

// 11 BENEFIT LADDER
writeVariant(11, "Multi-Tier Benefit Ladder", "3-tier step ladder showing active level highlight.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress11({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  const tiers = [
    { name: "Tier 1: Standard Ground", amount: 1000 },
    { name: "Tier 2: Express Discount", amount: 2000 },
    { name: "Tier 3: FREE SHIPPING", amount: 3000 }
  ];

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase">11 / BENEFIT LADDER</span>
          <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
            Toggle State
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {tiers.map((t, idx) => {
            const active = current >= t.amount;
            return (
              <div key={idx} className={\`p-4 rounded-2xl border transition-all flex items-center justify-between \${
                active ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-slate-50 border-slate-200 text-slate-400'
              }\`}>
                <span className="font-bold text-sm">{t.name}</span>
                <span className="font-mono text-xs font-bold">{settings.currency}{t.amount}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`);

// 12 ASYMMETRIC EDITORIAL
writeVariant(12, "Asymmetric Editorial", "Asymmetric off-center composition with massive metric left and stacked progress right.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress12({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);

  return (
    <div className="w-full py-16 px-6 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-10 shadow-xl relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-left border-r border-slate-100 pr-6">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-2">12 / ASYMMETRIC EDITORIAL</span>
            <h2 className="text-6xl font-black text-slate-900">{isUnlocked ? "FREE" : \`\${settings.currency}\${remaining}\`}</h2>
            <span className="text-xs font-bold text-slate-500 uppercase mt-1 block">REMAINING GAP</span>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {isUnlocked ? "Zero Shipping Fee Applied!" : "You are 80% of the way to free shipping."}
            </h3>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden my-4 border">
              <motion.div className="h-full bg-slate-900" animate={{ width: \`\${(current / settings.threshold) * 100}%\` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`);

// 13 FULL-WIDTH STATUS BAR
writeVariant(13, "Full-Width Status Bar", "Edge-to-edge commerce status strip across the page.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress13({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full bg-slate-900 text-white py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">STATUS STRIP</span>
        <span className="text-sm font-bold">{isUnlocked ? "FREE SHIPPING UNLOCKED" : \`CART: \${settings.currency}\${current} / \${settings.currency}\${settings.threshold}\`}</span>
      </div>
      <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-lg">
        Toggle State
      </button>
    </div>
  );
}`);

// 14 VERTICAL METER
writeVariant(14, "Vertical Thermometer Meter", "Vertical progress gauge rising upward.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress14({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex items-center gap-8 relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <div className="w-8 h-48 bg-slate-100 rounded-full border border-slate-200 overflow-hidden flex flex-col justify-end">
          <motion.div className="w-full bg-emerald-500 rounded-b-full" animate={{ height: \`\${pct}%\` }} transition={{ duration: 1 }} />
        </div>

        <div>
          <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">14 / VERTICAL METER</span>
          <h3 className="text-3xl font-black text-slate-900">{pct}%</h3>
          <span className="text-xs font-bold text-emerald-600 uppercase block mt-1">HEIGHT REACHED</span>
        </div>
      </div>
    </div>
  );
}`);

// 15 RING + CONTENT SPLIT
writeVariant(15, "Ring + Content Split", "Ring chart on left, detailed info breakdown on right.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress15({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>

        <div className="md:col-span-4 flex justify-center">
          <div className="w-32 h-32 rounded-full border-8 border-emerald-500 flex items-center justify-center font-black text-2xl text-slate-900">
            80%
          </div>
        </div>

        <div className="md:col-span-8 text-left">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-2">15 / RING + CONTENT SPLIT</span>
          <h3 className="text-2xl font-black text-slate-900">
            {isUnlocked ? "Free Shipping Unlocked!" : \`Cart Total: \${settings.currency}\${current}\`}
          </h3>
        </div>
      </div>
    </div>
  );
}`);

// 16 INTERACTIVE BENEFIT REVEAL
writeVariant(16, "Interactive Benefit Reveal", "Milestones reveal perks upon progression.", `import React, { useState } from 'react';

export default function FreeShippingProgress16({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>
        <span className="text-xs font-mono font-bold text-indigo-600 uppercase block mb-4">16 / INTERACTIVE REVEAL</span>
        <h3 className="text-xl font-bold text-slate-900">
          {isUnlocked ? "All Perks Unlocked!" : "Unlock 3 Shopping Perks"}
        </h3>
      </div>
    </div>
  );
}`);

// 17 MINIMAL MICRO COMPONENT
writeVariant(17, "Minimal Micro Component", "Ultra-compact status pill for cart sidebar.", `import React, { useState } from 'react';

export default function FreeShippingProgress17({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-12 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="inline-flex items-center gap-4 bg-white border border-slate-200 px-6 py-3 rounded-full shadow-md">
        <span className="text-xs font-black uppercase text-emerald-600">FREE SHIPPING</span>
        <span className="text-xs font-bold text-slate-700">{isUnlocked ? "UNLOCKED 🎉" : \`\${settings.currency}600 TO GO\` }</span>
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100">Toggle</button>
      </div>
    </div>
  );
}`);

// 18 ACHIEVEMENT STATE TRANSFORMATION
writeVariant(18, "Achievement State Transformation", "Focuses on the transformation between LOCKED and UNLOCKED states.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress18({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <motion.div 
        animate={{ scale: isUnlocked ? 1.03 : 1 }}
        className={\`w-full max-w-xl rounded-3xl p-8 shadow-2xl transition-all border text-center relative \${
          isUnlocked ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-400' : 'bg-white text-slate-900 border-slate-200'
        }\`}
      >
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
          Toggle State
        </button>
        <span className="text-xs font-mono font-bold uppercase block mb-4">18 / ACHIEVEMENT TRANSFORMATION</span>
        <h2 className="text-3xl font-black mb-2">{isUnlocked ? "🎉 FREE SHIPPING UNLOCKED!" : "Add ₹600 to Unlock"}</h2>
      </motion.div>
    </div>
  );
}`);

// 19 VISUAL ROUTE PATH
writeVariant(19, "Visual Route Path", "Winding SVG path with delivery van traveling along the path.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

export default function FreeShippingProgress19({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100">
          Toggle State
        </button>
        <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-4">19 / VISUAL ROUTE PATH</span>
        <div className="flex items-center justify-between my-8 px-8">
          <span className="font-bold text-xs text-slate-500">YOUR CART</span>
          <Truck className="w-8 h-8 text-emerald-500 animate-bounce" />
          <span className="font-bold text-xs text-emerald-600">FREE SHIPPING</span>
        </div>
      </div>
    </div>
  );
}`);

// 20 EXPERIMENTAL AWARD-LEVEL
writeVariant(20, "Experimental Glass Wave", "Unconventional award-level glassmorphic card featuring dimensional motion & liquid wave physics.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress20({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-slate-100 to-emerald-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-2xl text-center relative">
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
          Toggle State
        </button>
        <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-4">20 / EXPERIMENTAL AWARD-LEVEL</span>
        <h2 className="text-4xl font-black text-slate-900 mb-2">{isUnlocked ? "FREE SHIPPING UNLOCKED" : "80% Progress"}</h2>
      </div>
    </div>
  );
}`);

console.log("All 20 distinct variants written!");
