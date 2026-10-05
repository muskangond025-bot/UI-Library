const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '05-delivery-options');

function createVariant(num, componentCode, title, description) {
  const folderName = `delivery-options-${num}`;
  const folderPath = path.join(baseDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxPath = path.join(folderPath, `DeliveryOptions${num}.tsx`);
  const jsonPath = path.join(folderPath, `delivery-options-${num}.json`);

  fs.writeFileSync(tsxPath, componentCode, 'utf-8');

  const paddedNum = num < 10 ? `0${num}` : `${num}`;
  const jsonContent = JSON.stringify({
    id: `delivery-options-${paddedNum}`,
    title: title,
    description: description,
    category: "checkout",
    subsection: "delivery-options",
    variant: num,
    section: {
      settings: {
        title: title,
        description: description
      }
    }
  }, null, 2);

  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
  console.log(`Updated DeliveryOptions${num}`);
}

// ---------------------------------------------------------
// VARIANT 01: Editorial Carrier Matrix
// ---------------------------------------------------------
const code1 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ShieldCheck, ArrowRight, Clock, Check } from 'lucide-react';

export function DeliveryOptions1({ data }: { data?: any }) {
  const [selectedOption, setSelectedOption] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Ground', time: '3 - 5 Business Days', price: 'Free', icon: Truck },
    { id: 'express', name: 'Priority Express Air', time: '1 - 2 Business Days', price: '$14.99', icon: Zap },
    { id: 'overnight', name: 'VIP Overnight Courier', time: 'Next Day by 10:30 AM', price: '$29.99', icon: Clock },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100 shadow-2xl relative overflow-hidden"
      >
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold block mb-1">
              04 — SHIPPING SPEED MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Select Delivery Method
            </h2>
          </div>
          <span className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono rounded-full">
            FREE RETURNS INCLUDED
          </span>
        </motion.div>

        <div className="mt-8 space-y-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedOption === opt.id;
            return (
              <motion.div
                key={opt.id}
                variants={itemVariants}
                onClick={() => setSelectedOption(opt.id)}
                className={\`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between \${
                  isSelected ? 'bg-stone-950 border-amber-400/80 shadow-lg shadow-amber-400/5' : 'bg-stone-950/50 border-stone-800 hover:border-stone-700'
                }\`}
              >
                <div className="flex items-center gap-4">
                  <div className={\`w-10 h-10 rounded-xl flex items-center justify-center border transition \${
                    isSelected ? 'bg-amber-400 text-stone-950 border-amber-400' : 'bg-stone-800 text-stone-400 border-stone-700'
                  }\`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      {opt.name}
                      {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">{opt.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={\`text-sm font-bold \${isSelected ? 'text-amber-400' : 'text-stone-200'}\`}>{opt.price}</span>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={itemVariants} className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> On-time delivery guarantee active
            </span>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              <span>Continue to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions1;`;

createVariant(1, code1, "Editorial Carrier Matrix — Staggered Reveal", "Editorial delivery method selector with carrier price pills and staggered option reveal.");

// ---------------------------------------------------------
// VARIANT 02: Split Dispatch Estimator & Speed Cards
// ---------------------------------------------------------
const code2 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function DeliveryOptions2({ data }: { data?: any }) {
  const [selectedOption, setSelectedOption] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Delivery', price: 'Free', eta: 'Thursday, Oct 5' },
    { id: 'express', name: 'Express Air Courier', price: '$14.99', eta: 'Tomorrow, Oct 3' },
    { id: 'sameday', name: 'Same-Day Dispatch', price: '$24.99', eta: 'Today by 7:00 PM' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Side: Dispatch Context */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Calendar className="w-3.5 h-3.5" />
              <span>Real-Time ETA Dispatch</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Estimated Arrival</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Order prepared at San Francisco Fulfillment Hub #04.
            </p>

            <div className="my-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                <Truck className="w-4 h-4" /> Selected Speed ETA
              </div>
              <div className="text-xl font-bold text-white">
                {options.find(o => o.id === selectedOption)?.eta}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Courier Tracking Included</span>
          </div>
        </motion.div>

        {/* Right Side: Speed Selector */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Choose Shipping Tier</h3>

            <div className="space-y-3">
              {options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
                      isSelected ? 'bg-indigo-950/40 border-indigo-500' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }\`}
                  >
                    <div>
                      <span className="text-xs font-bold text-white block">{opt.name}</span>
                      <span className="text-[11px] text-slate-400">{opt.eta}</span>
                    </div>
                    <span className={\`text-xs font-bold \${isSelected ? 'text-indigo-400' : 'text-slate-300'}\`}>{opt.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">All options fully insured</span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2">
              <span>Next: Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DeliveryOptions2;`;

createVariant(2, code2, "Split Dispatch Estimator & Speed Cards", "Dual-panel layout with live dispatch ETA context on left and delivery speed radio options on right.");

// ---------------------------------------------------------
// VARIANT 03: Stepper-Integrated Delivery Options
// ---------------------------------------------------------
const code3 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Truck, Zap, Clock } from 'lucide-react';

export function DeliveryOptions3({ data }: { data?: any }) {
  const [selectedOption, setSelectedOption] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Shipping', price: 'Free', icon: Truck },
    { id: 'express', name: 'Express Air Dispatch', price: '$14.99', icon: Zap },
    { id: 'sameDay', name: 'Same Day Courier', price: '$24.99', icon: Clock },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl">
        {/* Stepper Header */}
        <div className="mb-10 relative">
          <div className="flex items-center justify-between relative z-10 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs text-slate-400">Address</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg shadow-emerald-500/20"
              >
                3
              </motion.div>
              <span className="text-xs font-semibold text-emerald-400">Delivery Method</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium text-xs flex items-center justify-center">
                4
              </div>
              <span className="text-xs text-slate-400">Payment</span>
            </div>
          </div>

          <div className="absolute top-4 left-0 w-full flex justify-center px-24 pointer-events-none">
            <svg className="w-full h-1 overflow-visible">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="0"
                y1="0"
                x2="66%"
                y2="0"
                stroke="#10b981"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedOption === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                className={\`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between \${
                  isSelected ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-300'
                }\`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{opt.name}</span>
                </div>
                <span className="text-xs font-bold">{opt.price}</span>
              </div>
            );
          })}

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <Check className="w-4 h-4" /> Shipping method selected
            </span>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed to Payment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions3;`;

createVariant(3, code3, "Stepper-Integrated Delivery Options", "Delivery option selector connected to an active checkout stepper with animated SVG progress line.");

// ---------------------------------------------------------
// VARIANT 04: Floating Badge Delivery Selector
// ---------------------------------------------------------
const code4 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export function DeliveryOptions4({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const tiers = [
    { id: 'standard', title: 'Economy Ground', price: 'Free', desc: '3-5 Days' },
    { id: 'express', title: 'Priority Air', price: '$14.99', desc: '1-2 Days' },
    { id: 'overnight', title: 'VIP Overnight', price: '$29.99', desc: 'Next Morning' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-neutral-100 shadow-2xl"
      >
        <div className="mb-8 flex justify-between items-center border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">
              FLOATING BADGE TIERS
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Choose Delivery Speed</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-violet-400" /> Instant Dispatch
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {tiers.map((t) => {
            const isSelected = selected === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={\`p-5 rounded-2xl border cursor-pointer transition flex flex-col justify-between h-36 \${
                  isSelected ? 'bg-violet-950/50 border-violet-500 text-white shadow-lg shadow-violet-600/10' : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }\`}
              >
                <div>
                  <span className="text-xs font-bold block">{t.title}</span>
                  <span className="text-[11px] text-neutral-500">{t.desc}</span>
                </div>
                <span className={\`text-base font-extrabold \${isSelected ? 'text-violet-400' : 'text-neutral-300'}\`}>{t.price}</span>
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex justify-end">
          <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
            <span>Confirm Speed & Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions4;`;

createVariant(4, code4, "Floating Badge Delivery Selector", "Modern shipping speed selector featuring floating tier badges and glowing focus states.");

// ---------------------------------------------------------
// VARIANT 05: Layered Shipping Speed Stack
// ---------------------------------------------------------
const code5 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export function DeliveryOptions5({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 0.4, y: 24, scale: 0.92 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 pointer-events-none transform -rotate-2"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 0.7, y: 12, scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute inset-0 bg-slate-850 rounded-3xl border border-slate-700 pointer-events-none transform rotate-1"
        />

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl z-10 text-slate-100"
        >
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
            <div>
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block mb-1">
                STACKED SHIPPING OPTIONS
              </span>
              <h2 className="text-xl font-bold text-white">Delivery Speed Stack</h2>
            </div>
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full text-xs font-semibold">
              3 Tier Options
            </span>
          </div>

          <div className="space-y-4">
            <div
              onClick={() => setSelected('standard')}
              className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
                selected === 'standard' ? 'bg-sky-500/10 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
              }\`}
            >
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-sky-400" />
                <div>
                  <span className="text-xs font-bold block">Standard Ground</span>
                  <span className="text-[11px] text-slate-400">3-5 Business Days</span>
                </div>
              </div>
              <span className="text-xs font-bold">Free</span>
            </div>

            <div
              onClick={() => setSelected('express')}
              className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
                selected === 'express' ? 'bg-sky-500/10 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
              }\`}
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-sky-400" />
                <div>
                  <span className="text-xs font-bold block">Priority Air Courier</span>
                  <span className="text-[11px] text-slate-400">1-2 Business Days</span>
                </div>
              </div>
              <span className="text-xs font-bold">$14.99</span>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Guaranteed Dispatch
              </span>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
                <span>Confirm Selection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DeliveryOptions5;`;

createVariant(5, code5, "Layered Shipping Speed Stack", "Stacked card layout where shipping options shift depth positions upon active selection.");

// ---------------------------------------------------------
// VARIANT 06: Asymmetric Courier Grid & Slot Selector
// ---------------------------------------------------------
const code6 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, Calendar, Leaf } from 'lucide-react';

export function DeliveryOptions6({ data }: { data?: any }) {
  const [selectedSpeed, setSelectedSpeed] = useState('express');
  const [ecoOffset, setEcoOffset] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div variants={colVariants} className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block">
              ASYMMETRIC COURIER GRID
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              SHIPPING SPEED & DISPATCH SLOTS
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Select your preferred delivery speed tier and carbon offset options.
            </p>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-5 space-y-4">
            <div
              onClick={() => setSelectedSpeed('standard')}
              className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
                selectedSpeed === 'standard' ? 'bg-zinc-950 border-rose-500' : 'bg-zinc-950/50 border-zinc-800'
              }\`}
            >
              <div>
                <span className="text-xs font-bold text-zinc-100 block">Ground Delivery</span>
                <span className="text-[11px] text-zinc-400">3 - 5 Days</span>
              </div>
              <span className="text-xs font-bold text-rose-400">Free</span>
            </div>

            <div
              onClick={() => setSelectedSpeed('express')}
              className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
                selectedSpeed === 'express' ? 'bg-zinc-950 border-rose-500' : 'bg-zinc-950/50 border-zinc-800'
              }\`}
            >
              <div>
                <span className="text-xs font-bold text-zinc-100 block">Express Air</span>
                <span className="text-[11px] text-zinc-400">1 - 2 Days</span>
              </div>
              <span className="text-xs font-bold text-rose-400">$14.99</span>
            </div>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-zinc-400 mb-3">Eco Offset</h3>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-300">
                <input
                  type="checkbox"
                  checked={ecoOffset}
                  onChange={(e) => setEcoOffset(e.target.checked)}
                  className="accent-rose-500 rounded"
                />
                <span className="flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" /> Carbon Neutral (+$1.00)
                </span>
              </label>
            </div>

            <button className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions6;`;

createVariant(6, code6, "Asymmetric Courier Grid & Slot Selector", "Asymmetric layout organizing shipping speed, time slot picker, and carbon-neutral options in offset blocks.");

// ---------------------------------------------------------
// VARIANT 07: Compact High-Density Delivery List
// ---------------------------------------------------------
const code7 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Zap, Clock } from 'lucide-react';

export function DeliveryOptions7({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Ground', time: '3-5 Days', price: 'Free', icon: Truck },
    { id: 'express', name: 'Express Air', time: '1-2 Days', price: '$14.99', icon: Zap },
    { id: 'sameday', name: 'Same-Day Courier', time: 'Today', price: '$24.99', icon: Clock },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compact Delivery Tiers</h3>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Quick Selection</span>
        </div>

        <div className="space-y-3">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selected === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={\`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between \${
                  isSelected ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
                }\`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={\`w-4 h-4 \${isSelected ? 'text-cyan-400' : 'text-slate-500'}\`} />
                  <span className="text-xs font-semibold">{opt.name} ({opt.time})</span>
                </div>
                <span className={\`text-xs font-bold \${isSelected ? 'text-cyan-400' : 'text-slate-300'}\`}>{opt.price}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">CARRIER: FEDEX / UPS</span>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
            Proceed <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions7;`;

createVariant(7, code7, "Compact High-Density Delivery List", "Space-efficient shipping tier list with a gliding active selection bar.");

// ---------------------------------------------------------
// VARIANT 08: Luxury Dark Mode Concierge Delivery
// ---------------------------------------------------------
const code8 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, ArrowRight, Sparkles } from 'lucide-react';

export function DeliveryOptions8({ data }: { data?: any }) {
  const [selected, setSelected] = useState('concierge');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-500/20 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono mb-1">
              <Crown className="w-4 h-4" /> VIP CONCIERGE DISPATCH
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Delivery Service Tier</h2>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            Priority Air Status
          </span>
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('concierge')}
            className={\`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'concierge' ? 'bg-amber-500/10 border-amber-400 text-amber-50' : 'bg-slate-900/60 border-amber-500/20 text-slate-300'
            }\`}
          >
            <div>
              <span className="text-sm font-serif font-bold text-amber-200 block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Private Concierge Hand-Delivery
              </span>
              <span className="text-xs text-amber-200/60">Dedicated courier with white-glove arrival</span>
            </div>
            <span className="text-sm font-bold text-amber-400">$39.99</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'express' ? 'bg-amber-500/10 border-amber-400 text-amber-50' : 'bg-slate-900/60 border-amber-500/20 text-slate-300'
            }\`}
          >
            <div>
              <span className="text-sm font-serif font-bold text-amber-200 block">Priority Express Air</span>
              <span className="text-xs text-amber-200/60">Next-day afternoon arrival</span>
            </div>
            <span className="text-sm font-bold text-amber-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" /> Fully insured transit guarantee
            </span>
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              <span>Proceed to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions8;`;

createVariant(8, code8, "Luxury Dark Mode Concierge Delivery", "Luxury dark shipping section featuring gold metallic accents and an animated ambient light sweep.");

// ---------------------------------------------------------
// VARIANT 09: Courier vs Store Pickup Selector
// ---------------------------------------------------------
const code9 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

export function DeliveryOptions9({ data }: { data?: any }) {
  const [method, setMethod] = useState<'courier' | 'pickup'>('courier');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Delivery Type Selector</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => setMethod('courier')}
            className={\`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between h-36 \${
              method === 'courier' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <div className="flex items-center justify-between">
              <Truck className="w-6 h-6" />
              {method === 'courier' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Home Courier Dispatch</span>
              <span className="text-xs text-slate-400">Delivered directly to your door ($4.99)</span>
            </div>
          </div>

          <div
            onClick={() => setMethod('pickup')}
            className={\`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between h-36 \${
              method === 'pickup' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <div className="flex items-center justify-between">
              <Store className="w-6 h-6" />
              {method === 'pickup' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">In-Store / Locker Pickup</span>
              <span className="text-xs text-slate-400">Ready in 2 hours at Downtown Hub (Free)</span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions9;`;

createVariant(9, code9, "Courier vs Store Pickup Selector", "Interactive choice between home courier dispatch and local store pickup with animated tab switcher.");

// ---------------------------------------------------------
// VARIANT 10: Fulfillment Timeline & Arrival Date Selector
// ---------------------------------------------------------
const code10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Truck } from 'lucide-react';

export function DeliveryOptions10({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">FULFILLMENT TIMELINE</span>
              <span className="text-xs font-bold text-white">Estimated Arrival Window</span>
            </div>
          </div>
          <span className="text-[11px] text-amber-400 font-mono font-semibold">SCHEDULE CONFIRMED</span>
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'standard' ? 'bg-amber-400/10 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Standard Ground (Thursday, Oct 5)</span>
            <span className="text-xs font-bold text-amber-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'express' ? 'bg-amber-400/10 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Express Air (Tomorrow, Oct 3)</span>
            <span className="text-xs font-bold text-amber-400">$14.99</span>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions10;`;

createVariant(10, code10, "Fulfillment Timeline & Arrival Date Selector", "Fulfillment timeline connecting dispatch milestones to selectable delivery speed tiers.");

// ---------------------------------------------------------
// VARIANT 11: Vertical Delivery Tier Timeline
// ---------------------------------------------------------
const code11 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Clock, ArrowRight } from 'lucide-react';

export function DeliveryOptions11({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Vertical Shipping Speed Timeline
        </h2>

        <div className="relative pl-6 sm:pl-10 space-y-6">
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-4 w-0.5 bg-slate-800">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-teal-400"
            />
          </div>

          <div
            onClick={() => setSelected('standard')}
            className="relative cursor-pointer"
          >
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <Truck className="w-3 h-3 text-teal-400" />
            </div>
            <div className={\`p-4 rounded-xl border transition \${
              selected === 'standard' ? 'bg-slate-950 border-teal-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }\`}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">01. Standard Ground (3-5 Days)</span>
                <span className="text-xs font-bold text-teal-400">Free</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => setSelected('express')}
            className="relative cursor-pointer"
          >
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <Zap className="w-3 h-3 text-teal-400" />
            </div>
            <div className={\`p-4 rounded-xl border transition \${
              selected === 'express' ? 'bg-slate-950 border-teal-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }\`}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">02. Priority Express Air (1-2 Days)</span>
                <span className="text-xs font-bold text-teal-400">$14.99</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Proceed <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions11;`;

createVariant(11, code11, "Vertical Delivery Tier Timeline", "Vertical shipping timeline connecting delivery tiers with animated SVG path line draw.");

// ---------------------------------------------------------
// VARIANT 12: Magazine Editorial Courier Section
// ---------------------------------------------------------
const code12 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';

export function DeliveryOptions12({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-stone-100">
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -right-8 -top-12 text-[140px] sm:text-[180px] font-serif font-black text-stone-900/50 select-none pointer-events-none"
        >
          EXPRESS
        </motion.div>

        <div className="relative z-10 space-y-8">
          <div className="border-b border-stone-800 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase block mb-1">
                MAGAZINE COURIER
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-50 tracking-tight">
                Shipping Options
              </h2>
            </div>
            <Truck className="w-6 h-6 text-orange-400" />
          </div>

          <div className="space-y-4">
            <div
              onClick={() => setSelected('standard')}
              className={\`p-4 border cursor-pointer transition flex items-center justify-between \${
                selected === 'standard' ? 'border-orange-400 bg-stone-900/80 text-white' : 'border-stone-800 text-stone-400'
              }\`}
            >
              <span className="text-xs font-mono uppercase">01 / Ground Shipping (3-5 Days)</span>
              <span className="text-xs font-mono font-bold text-orange-400">Free</span>
            </div>

            <div
              onClick={() => setSelected('express')}
              className={\`p-4 border cursor-pointer transition flex items-center justify-between \${
                selected === 'express' ? 'border-orange-400 bg-stone-900/80 text-white' : 'border-stone-800 text-stone-400'
              }\`}
            >
              <span className="text-xs font-mono uppercase">02 / Express Air Courier (1-2 Days)</span>
              <span className="text-xs font-mono font-bold text-orange-400">$14.99</span>
            </div>

            <div className="pt-6 border-t border-stone-800 flex justify-between items-center">
              <span className="text-xs text-stone-500 font-serif italic">Courier dispatch ready</span>
              <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-stone-950 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2">
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions12;`;

createVariant(12, code12, "Magazine Editorial Courier Section", "Bold magazine layout with oversized EXPRESS watermark typography and carrier selection badges.");

// ---------------------------------------------------------
// VARIANT 13: Glassmorphic Delivery Speed Panel
// ---------------------------------------------------------
const code13 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Truck } from 'lucide-react';

export function DeliveryOptions13({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-100"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Glassmorphic Courier
            </div>
            <h2 className="text-2xl font-bold text-white">Delivery Method Panel</h2>
          </div>
          <Truck className="w-5 h-5 text-blue-400" />
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'standard' ? 'bg-slate-950 border-blue-400 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-blue-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'express' ? 'bg-slate-950 border-blue-400 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-blue-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Speed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions13;`;

createVariant(13, code13, "Glassmorphic Delivery Speed Panel", "Frosted glass shipping card set over background luminous orb drift animations.");

// ---------------------------------------------------------
// VARIANT 14: Gliding Selection Shipping Tier System
// ---------------------------------------------------------
const code14 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Clock, ArrowRight, Check } from 'lucide-react';

export function DeliveryOptions14({ data }: { data?: any }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const tiers = [
    { id: 0, label: 'Standard Ground Delivery', price: 'Free', time: '3-5 Business Days', icon: Truck },
    { id: 1, label: 'Priority Express Air Courier', price: '$14.99', time: '1-2 Business Days', icon: Zap },
    { id: 2, label: 'VIP Same-Day Delivery', price: '$24.99', time: 'Today by 7:00 PM', icon: Clock },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              SELECTION SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Gliding Shipping Tier System</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full">
            Selected Tier #{activeIdx + 1}
          </span>
        </div>

        <div className="space-y-4">
          {tiers.map((t) => {
            const Icon = t.icon;
            const isActive = activeIdx === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIdx(t.id)}
                className={\`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between \${
                  isActive ? 'bg-slate-950 border-lime-400/80 shadow-lg shadow-lime-400/5 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
                }\`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={\`w-5 h-5 \${isActive ? 'text-lime-400' : 'text-slate-500'}\`} />
                  <div>
                    <span className="text-xs font-bold block">{t.label}</span>
                    <span className="text-[11px] text-slate-400">{t.time}</span>
                  </div>
                </div>
                <span className={\`text-xs font-bold \${isActive ? 'text-lime-400' : 'text-slate-300'}\`}>{t.price}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-lime-400 flex items-center gap-1 font-medium">
            <Check className="w-4 h-4" /> Active selection gliding system
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions14;`;

createVariant(14, code14, "Gliding Selection Shipping Tier System", "Focus-centric shipping tier list with a gliding active selection pill.");

// ---------------------------------------------------------
// VARIANT 15: 3D Perspective Shipping Tier Card
// ---------------------------------------------------------
const code15 = `import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Truck, ArrowRight, Box } from 'lucide-react';

export function DeliveryOptions15({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-4, 4]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-100"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-2">
              <Box className="w-3.5 h-3.5" /> 3D Parcel Tier
            </div>
            <h2 className="text-2xl font-bold text-white">Shipping Options Container</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">Tilt interactive</span>
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'standard' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-cyan-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'express' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-cyan-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Speed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions15;`;

createVariant(15, code15, "3D Perspective Shipping Tier Card", "Layered perspective shipping speed composition with mouse-driven 3D tilt rotation.");

// ---------------------------------------------------------
// VARIANT 16: Icon-Led Shipping Speed Badges
// ---------------------------------------------------------
const code16 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Flame, ArrowRight } from 'lucide-react';

export function DeliveryOptions16({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Ground', price: 'Free', icon: Truck },
    { id: 'express', name: 'Priority Express', price: '$14.99', icon: Zap },
    { id: 'sameday', name: 'Same Day Dispatch', price: '$24.99', icon: Flame },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Icon-Led Shipping Speed Selector
        </h2>

        <div className="space-y-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selected === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className="flex items-center gap-4 cursor-pointer"
              >
                <motion.div
                  animate={isSelected ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
                  className={\`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition \${
                    isSelected ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-slate-950 border-slate-800 text-slate-500'
                  }\`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <div className={\`flex-1 p-4 rounded-xl border flex items-center justify-between transition \${
                  isSelected ? 'bg-slate-950 border-indigo-500 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
                }\`}>
                  <span className="text-xs font-semibold">{opt.name}</span>
                  <span className="text-xs font-bold text-indigo-400">{opt.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions16;`;

createVariant(16, code16, "Icon-Led Shipping Speed Badges", "Logistics icon-anchored form layout where tier icons scale and rotate upon selection.");

// ---------------------------------------------------------
// VARIANT 17: Progressive Delivery Preferences Disclosure
// ---------------------------------------------------------
const code17 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Clock } from 'lucide-react';

export function DeliveryOptions17({ data }: { data?: any }) {
  const [selectedSpeed, setSelectedSpeed] = useState('express');
  const [showPreferences, setShowPreferences] = useState(false);
  const [timeSlot, setTimeSlot] = useState('morning');

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Delivery Preferences
        </h2>

        <div className="space-y-4">
          <div
            onClick={() => setSelectedSpeed('standard')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selectedSpeed === 'standard' ? 'bg-slate-950 border-purple-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-purple-400">Free</span>
          </div>

          <div
            onClick={() => setSelectedSpeed('express')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selectedSpeed === 'express' ? 'bg-slate-950 border-purple-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-purple-400">$14.99</span>
          </div>

          <button
            type="button"
            onClick={() => setShowPreferences(!showPreferences)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showPreferences ? 'Hide Delivery Preferences' : '+ Specify delivery time window & signature requirements'}</span>
            <motion.div animate={{ rotate: showPreferences ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-3 pt-2"
              >
                <label className="block text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" /> Preferred Delivery Window
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                >
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions17;`;

createVariant(17, code17, "Progressive Delivery Preferences Disclosure", "Progressive shipping form expanding time slot preferences & signature options via accordion disclosure.");

// ---------------------------------------------------------
// VARIANT 18: Parallax Courier Arrival & Option Panel
// ---------------------------------------------------------
const code18 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, Calendar } from 'lucide-react';

export function DeliveryOptions18({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-100">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="md:col-span-5 bg-gradient-to-br from-cyan-950/60 to-slate-950 p-6 rounded-2xl border border-cyan-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Arrival Preview</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Arriving by <strong className="text-white">Thursday, Oct 5th</strong> via Express.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-semibold">
            Real-time courier dispatch enabled
          </div>
        </motion.div>

        <div className="md:col-span-7 space-y-4">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3">Shipping Method</h2>

          <div
            onClick={() => setSelected('standard')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'standard' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-cyan-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'express' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }\`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-cyan-400">$14.99</span>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions18;`;

createVariant(18, code18, "Parallax Courier Arrival & Option Panel", "Split shipping options layout with a floating delivery arrival panel featuring parallax motion.");

// ---------------------------------------------------------
// VARIANT 19: Architectural Monochrome Delivery Tiers
// ---------------------------------------------------------
const code19 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function DeliveryOptions19({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[DISPATCH_SPEED: EXP_01]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">DELIVERY_TIERS</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">ARCHITECTURAL</span>
        </div>

        <div className="relative w-full h-px bg-zinc-900 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full bg-zinc-200"
          />
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={\`p-4 border cursor-pointer transition flex justify-between items-center \${
              selected === 'standard' ? 'border-zinc-200 bg-zinc-900 text-zinc-100' : 'border-zinc-800 text-zinc-400'
            }\`}
          >
            <span className="text-xs uppercase">01 // GROUND_DELIVERY (3-5 DAYS)</span>
            <span className="text-xs font-bold">FREE</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-4 border cursor-pointer transition flex justify-between items-center \${
              selected === 'express' ? 'border-zinc-200 bg-zinc-900 text-zinc-100' : 'border-zinc-800 text-zinc-400'
            }\`}
          >
            <span className="text-xs uppercase">02 // EXPRESS_AIR (1-2 DAYS)</span>
            <span className="text-xs font-bold">$14.99</span>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex justify-end">
            <button className="px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2">
              <span>PROCEED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions19;`;

createVariant(19, code19, "Architectural Monochrome Delivery Tiers", "Architectural monochrome shipping layout featuring animated line-drawing dividers and uppercase typography.");

// ---------------------------------------------------------
// VARIANT 20: Award-Winning Hybrid Delivery Showcase
// ---------------------------------------------------------
const code20 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export function DeliveryOptions20({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-slate-100 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Award Delivery Showcase
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Delivery Speed Options</h2>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Carrier Insurance Active
          </span>
        </div>

        <div className="relative z-10 mt-8 space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={\`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'standard' ? 'bg-slate-950/90 border-indigo-500 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }\`}
          >
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-indigo-400" />
              <div>
                <span className="text-xs font-bold block">Standard Ground Courier</span>
                <span className="text-[11px] text-slate-400">3-5 Business Days</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={\`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between \${
              selected === 'express' ? 'bg-slate-950/90 border-indigo-500 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }\`}
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-indigo-400" />
              <div>
                <span className="text-xs font-bold block">Priority Express Air</span>
                <span className="text-[11px] text-slate-400">1-2 Business Days</span>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Tracking code generated immediately after checkout</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>Proceed to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions20;`;

createVariant(20, code20, "Award-Winning Hybrid Delivery Showcase", "Luxury hybrid delivery options composition with carrier badges, time slot selectors, and multi-stage entrance animations.");

console.log('Done writing Delivery Options variants 1 to 20');
