const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'order', '03-delivery-information');

const components = [
  // 01 — DELIVERY TIMELINE
  {
    id: 1,
    name: 'OrderDeliveryInformation1',
    dir: 'order-delivery-information-1',
    title: 'Delivery Timeline — Animated SVG Journey',
    desc: 'Horizontal interactive delivery journey where an animated SVG path draws progressively across shipment stages from confirmed to delivered.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck, Package, Clock, MapPin, ShieldCheck } from 'lucide-react';

export function OrderDeliveryInformation1() {
  const stages = [
    { label: 'Order Confirmed', time: 'Oct 12, 09:30 AM', completed: true },
    { label: 'Processing', time: 'Oct 12, 02:15 PM', completed: true },
    { label: 'Shipped', time: 'Oct 13, 08:45 AM', completed: true, active: true },
    { label: 'Out for Delivery', time: 'Expected Oct 14', completed: false },
    { label: 'Delivered', time: 'Expected Oct 14', completed: false },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> On Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Delivery Information</h2>
            <p className="text-slate-400 text-sm mt-1">Tracking ID: <span className="font-mono text-emerald-400">DH-TRK-28491</span></p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 flex items-center gap-4 shadow-lg">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg"
            >
              <Truck className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estimated Arrival</p>
              <p className="text-xl font-bold text-white">Oct 14, 2026</p>
              <p className="text-xs text-slate-400">Standard Delivery (3-5 Days)</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline SVG Route */}
        <div className="relative py-6">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '60%' }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-3 bg-slate-800/40 md:bg-transparent p-4 md:p-0 rounded-xl border border-slate-800 md:border-none"
              >
                <div className={\`relative flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm border-2 shadow-lg transition-all \${
                  stage.active
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 ring-4 ring-emerald-500/20 scale-110'
                    : stage.completed
                    ? 'bg-slate-800 text-emerald-400 border-emerald-500'
                    : 'bg-slate-900 text-slate-500 border-slate-700'
                }\`}>
                  {stage.completed && !stage.active ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx * 0.2 + 0.2 }}>
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  ) : stage.active ? (
                    <Truck className="w-5 h-5 animate-pulse" />
                  ) : (
                    idx + 1
                  )}
                </div>
                <div>
                  <p className={\`text-sm font-semibold \${stage.active ? 'text-emerald-400' : 'text-slate-200'}\`}>
                    {stage.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{stage.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carrier Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Carrier</span>
            <p className="font-semibold text-slate-200 flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-400" /> DripExpress Global
            </p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Shipping Speed</span>
            <p className="font-semibold text-slate-200 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" /> Standard Ground (3-5 Days)
            </p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Destination</span>
            <p className="font-semibold text-slate-200 flex items-center gap-2 truncate">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" /> San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation1;
`
  },
  // 02 — ETA HERO
  {
    id: 2,
    name: 'OrderDeliveryInformation2',
    dir: 'order-delivery-information-2',
    title: 'ETA Hero — Typography Date Reveal',
    desc: 'Impactful ETA-focused delivery card featuring large typography reveal motion and sleek metadata panels.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Truck, Info } from 'lucide-react';

export function OrderDeliveryInformation2() {
  return (
    <section className="w-full bg-gradient-to-br from-zinc-950 via-slate-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl border border-zinc-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-widest"
          >
            <Truck className="w-3.5 h-3.5" /> In Transit — DripExpress
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-zinc-400 font-mono"
          >
            Estimated Arrival Window
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500"
          >
            12–15 OCT
          </motion.div>
          <p className="text-sm text-zinc-400 font-light">Your package is moving smoothly across our express fulfillment network.</p>
        </div>

        {/* Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl"
        >
          <div className="space-y-1">
            <span className="text-xs text-zinc-400 uppercase font-mono">Carrier Partner</span>
            <p className="text-lg font-semibold text-zinc-100">DripExpress Priority</p>
            <p className="text-xs text-zinc-400">Tracking: <span className="font-mono text-amber-400">DH-TRK-28491</span></p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs text-zinc-400 uppercase font-mono">Delivery Method</span>
            <p className="text-lg font-semibold text-zinc-100">Express Air (2 Days)</p>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <Shield className="w-3 h-3" /> Fully Insured Package
            </p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs text-zinc-400 uppercase font-mono">Last Known Location</span>
            <p className="text-lg font-semibold text-zinc-100">Sort Facility — Chicago</p>
            <p className="text-xs text-zinc-400">Departed hub at 06:40 AM</p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Signature required upon arrival for secure release.</span>
          </div>
          <button className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors">
            Manage Preferences <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation2;
`
  },
  // 03 — DELIVERY CARD
  {
    id: 3,
    name: 'OrderDeliveryInformation3',
    dir: 'order-delivery-information-3',
    title: 'Delivery Card — Layered Stagger Entrance',
    desc: 'Layered delivery card structure presenting detailed shipping status, carrier specs, and tracking code.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, Truck, Copy, ExternalLink, Calendar, MapPin } from 'lucide-react';

export function OrderDeliveryInformation3() {
  const [copied, setCopied] = React.useState(false);
  const trackId = "DH-TRK-28491";

  const handleCopy = () => {
    navigator.clipboard.writeText(trackId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          {/* Card Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/20">
                <PackageCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Delivery Details</h3>
                <p className="text-xs text-slate-400">Order #849202 • Standard Ground</p>
              </div>
            </div>
            <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700/50 flex items-center gap-3">
              <span className="text-xs text-slate-400">Tracking:</span>
              <span className="font-mono font-bold text-indigo-400 text-sm">{trackId}</span>
              <motion.button whileTap={{ scale: 0.9 }} onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                <Copy className="w-3.5 h-3.5" />
              </motion.button>
              {copied && <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-slate-800">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Expected Arrival</span>
                  <p className="text-lg font-semibold text-white">12–15 October, 2026</p>
                  <p className="text-xs text-emerald-400">On Schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Carrier & Speed</span>
                  <p className="text-base font-medium text-slate-200">DripExpress Ground</p>
                  <p className="text-xs text-slate-400">Estimated 3–5 Business Days</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Destination Summary</span>
                  <p className="text-base font-medium text-slate-200">San Francisco Hub</p>
                  <p className="text-xs text-slate-400">742 Evergreen Terrace, SF, CA</p>
                </div>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-400 block">Special Handling</span>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Contactless Delivery • Gate Code #4920</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-between items-center text-xs">
            <span className="text-slate-400">Need changes? Update before dispatch.</span>
            <button className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">
              Tracking Portal <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation3;
`
  },
  // 04 — SPLIT DELIVERY
  {
    id: 4,
    name: 'OrderDeliveryInformation4',
    dir: 'order-delivery-information-4',
    title: 'Split Delivery — Dual Pane Motion',
    desc: 'Split two-column layout separating the visual delivery journey timeline from comprehensive carrier metadata.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Truck, Check } from 'lucide-react';

export function OrderDeliveryInformation4() {
  const steps = [
    { title: 'Order Processed', date: 'Oct 12', done: true },
    { title: 'Package Dispatched', date: 'Oct 13', done: true },
    { title: 'In Transit', date: 'Oct 14', active: true },
    { title: 'Final Arrival', date: 'Oct 15', done: false },
  ];

  return (
    <section className="w-full bg-zinc-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-zinc-800 my-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Pane: Journey */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-zinc-100">Delivery Journey</h3>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                On Schedule
              </span>
            </div>

            <div className="space-y-6 relative pl-6 border-l-2 border-zinc-800">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={\`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 \${
                    step.active
                      ? 'bg-emerald-500 border-emerald-400 ring-4 ring-emerald-500/20'
                      : step.done
                      ? 'bg-emerald-400 border-emerald-400'
                      : 'bg-zinc-900 border-zinc-700'
                  }\`}>
                    {step.done && <Check className="w-2.5 h-2.5 text-zinc-950 stroke-[3]" />}
                  </div>
                  <div>
                    <p className={\`text-sm font-semibold \${step.active ? 'text-emerald-400' : 'text-zinc-200'}\`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-zinc-500">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <span>Tracking Ref: <strong className="font-mono text-zinc-200">DH-TRK-28491</strong></span>
            <span>DripExpress Carrier</span>
          </div>
        </motion.div>

        {/* Right Pane: Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 bg-zinc-950/40 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 flex flex-col justify-between shadow-xl"
        >
          <div>
            <span className="text-xs text-emerald-400 font-mono tracking-wider uppercase block mb-1">Expected Window</span>
            <h2 className="text-3xl font-extrabold text-white mb-6">12–15 October 2026</h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Standard Express Ground</p>
                  <p className="text-xs text-zinc-400">Direct warehouse transit (3-5 business days)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Delivery Address</p>
                  <p className="text-xs text-zinc-400">742 Evergreen Terrace, San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Contactless Delivery Enabled</p>
                  <p className="text-xs text-zinc-400">Driver authorized to leave package at front door.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation4;
`
  },
  // 05 — MAP-INSPIRED DELIVERY
  {
    id: 5,
    name: 'OrderDeliveryInformation5',
    dir: 'order-delivery-information-5',
    title: 'Map-Inspired Delivery — Animated SVG Route Draw',
    desc: 'Abstract geometric map UI featuring an animated SVG route path connecting fulfillment origin to destination.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Package, Clock } from 'lucide-react';

export function OrderDeliveryInformation5() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Visual Route Map</span>
            <h2 className="text-2xl font-bold text-white">Transit Logistics View</h2>
          </div>
          <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            REF: <span className="text-cyan-400">DH-TRK-28491</span>
          </div>
        </div>

        {/* Abstract Map Canvas */}
        <div className="relative bg-slate-900/90 rounded-2xl border border-slate-800 p-6 overflow-hidden min-h-[260px] flex items-center justify-center">
          {/* SVG Route */}
          <svg className="absolute inset-0 w-full h-full stroke-slate-800 fill-none" strokeWidth="2">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Curved Path */}
            <motion.path
              d="M 80,180 C 250,50 450,220 720,100"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Map Markers */}
          <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-center gap-6 px-4 sm:px-12">
            <div className="flex items-center gap-3 bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 shadow-xl">
              <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Origin Hub</p>
                <p className="text-sm font-semibold text-white">Chicago Fulfillment Center</p>
              </div>
            </div>

            <div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-full font-mono text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur">
              <Navigation className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} /> In Transit Across US
            </div>

            <div className="flex items-center gap-3 bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 shadow-xl">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Destination</p>
                <p className="text-sm font-semibold text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Estimated Delivery</span>
            <p className="text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" /> Oct 12–15, 2026
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Carrier</span>
            <p className="text-base font-bold text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-cyan-400" /> DripExpress Air
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Shipping Speed</span>
            <p className="text-base font-bold text-white">Standard (3-5 Days)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation5;
`
  },
  // 06 — PACKAGE JOURNEY
  {
    id: 6,
    name: 'OrderDeliveryInformation6',
    dir: 'order-delivery-information-6',
    title: 'Package Journey — Dynamic Stage Indicator',
    desc: 'Package journey visualization tracking physical milestone nodes with custom motion indicators.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Home, ShieldCheck } from 'lucide-react';

export function OrderDeliveryInformation6() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Package Journey</h3>
            <p className="text-xs text-slate-400 mt-0.5">Carrier: DripExpress • Tracking ID: DH-TRK-28491</p>
          </div>
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold rounded-full">
            In Transit
          </span>
        </div>

        {/* Dynamic Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/60 relative overflow-hidden"
          >
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit mb-3">
              <Package className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-400">Step 1</p>
            <p className="text-sm font-bold text-white">Packed</p>
            <p className="text-xs text-emerald-400 mt-1">Oct 12, 09:00 AM</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/60 relative overflow-hidden"
          >
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-400">Step 2</p>
            <p className="text-sm font-bold text-white">Dispatched</p>
            <p className="text-xs text-emerald-400 mt-1">Oct 13, 02:30 PM</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/80 p-5 rounded-2xl border border-blue-500/40 relative overflow-hidden ring-2 ring-blue-500/20"
          >
            <motion.div
              animate={{ scale: [0.95, 1.1, 0.95] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl w-fit mb-3"
            >
              <Truck className="w-5 h-5" />
            </motion.div>
            <p className="text-xs text-blue-400 font-semibold">Active</p>
            <p className="text-sm font-bold text-white">In Transit</p>
            <p className="text-xs text-slate-400 mt-1">En Route to Hub</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 opacity-60"
          >
            <div className="p-2.5 bg-slate-800 text-slate-500 rounded-xl w-fit mb-3">
              <Home className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-500">Step 4</p>
            <p className="text-sm font-bold text-slate-400">Delivered</p>
            <p className="text-xs text-slate-500 mt-1">Expected Oct 15</p>
          </motion.div>
        </div>

        {/* ETA Highlight */}
        <div className="bg-gradient-to-r from-blue-950/40 to-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-mono">Estimated Delivery Date</span>
            <p className="text-2xl font-bold text-white">12–15 October 2026</p>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Guaranteed Standard Ground Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation6;
`
  },
  // 07 — MINIMAL MONOCHROME DELIVERY
  {
    id: 7,
    name: 'OrderDeliveryInformation7',
    dir: 'order-delivery-information-7',
    title: 'Minimal Monochrome Delivery — Clean Layout',
    desc: 'High-contrast monochrome typography layout focused on spatial elegance and clean stage reveal.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation7() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-800 pb-8"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">Delivery Information</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">Expected Oct 12–15</h2>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            REF / DH-TRK-28491
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-2">
          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">Carrier</span>
            <p className="text-base font-medium text-neutral-200">DripExpress Ground</p>
            <p className="text-xs text-neutral-400">Standard 3–5 Business Days</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">Current Status</span>
            <p className="text-base font-medium text-neutral-200">Dispatched & In Transit</p>
            <p className="text-xs text-neutral-400">Chicago Sort Facility</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">Destination</span>
            <p className="text-base font-medium text-neutral-200">San Francisco, CA</p>
            <p className="text-xs text-neutral-400">94107 Address Verified</p>
          </div>
        </div>

        {/* Minimal Timeline */}
        <div className="space-y-4 pt-6 border-t border-neutral-900">
          <span className="text-xs font-mono text-neutral-500 uppercase block">Logistics Milestones</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
              <span className="text-neutral-500 block">01 CONFIRMED</span>
              <span className="text-neutral-300">Oct 12 09:30</span>
            </div>
            <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
              <span className="text-neutral-500 block">02 PROCESSED</span>
              <span className="text-neutral-300">Oct 12 14:20</span>
            </div>
            <div className="p-3 bg-neutral-100 text-neutral-950 font-bold rounded">
              <span className="text-neutral-700 block">03 IN TRANSIT</span>
              <span>Oct 13 08:45</span>
            </div>
            <div className="p-3 bg-neutral-900/40 rounded border border-neutral-900 text-neutral-600">
              <span className="block">04 ARRIVAL</span>
              <span>Oct 14-15</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation7;
`
  },
  // 08 — DARK LUXURY DELIVERY
  {
    id: 8,
    name: 'OrderDeliveryInformation8',
    dir: 'order-delivery-information-8',
    title: 'Dark Luxury Delivery — Glowing Ambient Panel',
    desc: 'Luxury dark theme card with gold typography accents and ambient glow movement.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, MapPin } from 'lucide-react';

export function OrderDeliveryInformation8() {
  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      {/* Glow effect */}
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-900/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Concierge Express</span>
              <h3 className="text-2xl font-serif tracking-wide text-white">Private Delivery Service</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-amber-400/80">TRACKING NUMBER</p>
            <p className="text-sm font-mono font-bold text-amber-200">DH-TRK-28491</p>
          </div>
        </div>

        {/* ETA Hero Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-stone-900/60 backdrop-blur border border-amber-500/20 rounded-2xl p-8 text-center space-y-3"
        >
          <span className="text-xs uppercase font-mono text-amber-400 tracking-widest">Guaranteed White-Glove Arrival</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-100">October 12–15, 2026</h2>
          <p className="text-xs text-stone-400 max-w-md mx-auto">Hand-handled transit with signature requirement and scheduled arrival slot.</p>
        </motion.div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400/70 block mb-1">CARRIER PARTNER</span>
            <p className="font-semibold text-white">DripExpress Priority Air</p>
            <p className="text-xs text-stone-400 mt-1">Dedicated Vault Shipping</p>
          </div>
          <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400/70 block mb-1">SECURITY PROTOCOL</span>
            <p className="font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Tamper-Evident Sealed
            </p>
            <p className="text-xs text-stone-400 mt-1">Insured up to $10,000</p>
          </div>
          <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400/70 block mb-1">DESTINATION</span>
            <p className="font-semibold text-white flex items-center gap-1.5 truncate">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> San Francisco, CA
            </p>
            <p className="text-xs text-stone-400 mt-1">742 Evergreen Terrace</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation8;
`
  },
  // 09 — DELIVERY METHOD SELECTOR
  {
    id: 9,
    name: 'OrderDeliveryInformation9',
    dir: 'order-delivery-information-9',
    title: 'Delivery Method Selector — Interactive Tabs',
    desc: 'Interactive selector UI displaying Standard, Express, and Overnight options with sliding pill indicator.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Check } from 'lucide-react';

export function OrderDeliveryInformation9() {
  const [selected, setSelected] = useState('standard');

  const options = [
    { id: 'standard', name: 'Standard Delivery', speed: '3–5 Business Days', eta: '12–15 Oct', price: 'Free', carrier: 'DripExpress Ground' },
    { id: 'express', name: 'Express Air', speed: '2 Business Days', eta: '13–14 Oct', price: '$12.00', carrier: 'DripExpress Air' },
    { id: 'nextday', name: 'Overnight Priority', speed: 'Next Day Morning', eta: '13 Oct', price: '$24.00', carrier: 'DripExpress Priority' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Method Overview</span>
          <h2 className="text-2xl font-bold text-white">Delivery Information & Method</h2>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((opt) => (
            <motion.div
              key={opt.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(opt.id)}
              className={\`cursor-pointer p-5 rounded-2xl border transition-all relative overflow-hidden \${
                selected === opt.id
                  ? 'bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xl'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }\`}
            >
              {selected === opt.id && (
                <span className="absolute top-3 right-3 p-1 bg-indigo-500 text-slate-950 rounded-full">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <span className="text-xs font-mono text-slate-400 uppercase block mb-1">{opt.speed}</span>
              <h3 className="text-lg font-bold text-white">{opt.name}</h3>
              <p className="text-xl font-extrabold text-indigo-400 mt-2">{opt.eta}</p>
              <p className="text-xs text-slate-400 mt-2">{opt.carrier}</p>
            </motion.div>
          ))}
        </div>

        {/* Active Selection Details */}
        <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Tracking Reference</p>
              <p className="font-mono text-sm font-bold text-white">DH-TRK-28491</p>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            Selected Option: <strong className="text-white uppercase font-mono">{selected}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation9;
`
  },
  // 10 — ESTIMATED DELIVERY WINDOW
  {
    id: 10,
    name: 'OrderDeliveryInformation10',
    dir: 'order-delivery-information-10',
    title: 'Estimated Delivery Window — Calendar Highlight',
    desc: 'Calendar date window interface visually highlighting arrival timeframe across an interactive date ribbon.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function OrderDeliveryInformation10() {
  const dates = [
    { day: 'MON', date: '12', month: 'OCT', status: 'Range Start', active: true },
    { day: 'TUE', date: '13', month: 'OCT', status: 'Expected', active: true },
    { day: 'WED', date: '14', month: 'OCT', status: 'Expected', active: true },
    { day: 'THU', date: '15', month: 'OCT', status: 'Range End', active: true },
    { day: 'FRI', date: '16', month: 'OCT', status: 'Backup', active: false },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Calendar Schedule</span>
            <h2 className="text-2xl font-bold text-white">Delivery Window Highlight</h2>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 border border-slate-700">
            TRACK: DH-TRK-28491
          </div>
        </div>

        {/* Date Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {dates.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={\`p-4 rounded-xl text-center border transition-all \${
                d.active
                  ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/20'
                  : 'bg-slate-950/40 border-slate-800 opacity-50'
              }\`}
            >
              <span className="text-xs font-mono text-slate-400 block">{d.day}</span>
              <span className="text-2xl font-black text-white block my-1">{d.date}</span>
              <span className="text-[10px] font-mono text-emerald-400 block uppercase">{d.month}</span>
              <span className="text-[10px] text-slate-400 block mt-2">{d.status}</span>
            </motion.div>
          ))}
        </div>

        {/* Details Footer */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span>Estimated Window: <strong>12–15 October 2026</strong></span>
          </div>
          <span className="text-slate-400">Carrier: DripExpress Ground (3-5 Days)</span>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation10;
`
  },
  // 11 — VERTICAL DELIVERY JOURNEY
  {
    id: 11,
    name: 'OrderDeliveryInformation11',
    dir: 'order-delivery-information-11',
    title: 'Vertical Delivery Journey — Drawing Path',
    desc: 'Vertical milestone journey with animated drawing connector line tracing warehouse dispatch to door drop.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Warehouse, Truck, Building2, Home } from 'lucide-react';

export function OrderDeliveryInformation11() {
  const steps = [
    { title: 'Warehouse Fulfillment', desc: 'Package packed & labeled at Chicago Hub', date: 'Oct 12, 09:30 AM', icon: Warehouse, status: 'completed' },
    { title: 'In Transit Across Hubs', desc: 'Departed sorting facility on flight DE-842', date: 'Oct 13, 04:15 PM', icon: Truck, status: 'active' },
    { title: 'Local Sorting Hub', desc: 'Arriving at San Francisco Regional Hub', date: 'Expected Oct 14', icon: Building2, status: 'pending' },
    { title: 'Final Doorstep Delivery', desc: 'Contactless delivery to front porch', date: 'Expected Oct 15', icon: Home, status: 'pending' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Vertical Logistics Timeline</span>
          <h2 className="text-2xl font-bold text-white">Delivery Journey Stages</h2>
        </div>

        <div className="relative pl-6 space-y-8 border-l-2 border-slate-800">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                className="relative pl-4"
              >
                <div className={\`absolute -left-[37px] top-0 p-2 rounded-full border-2 \${
                  s.status === 'active'
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 ring-4 ring-cyan-500/20'
                    : s.status === 'completed'
                    ? 'bg-slate-800 text-cyan-400 border-cyan-500'
                    : 'bg-slate-900 text-slate-600 border-slate-800'
                }\`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    {s.status === 'active' && (
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">Active Stage</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                  <span className="text-[11px] font-mono text-slate-500 mt-1 block">{s.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation11;
`
  },
  // 12 — PACKAGE CARD
  {
    id: 12,
    name: 'OrderDeliveryInformation12',
    dir: 'order-delivery-information-12',
    title: 'Package Card — Unfolding Details',
    desc: 'Package shipment card featuring unfold animation, weight specs, and carrier tracking barcode visual.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';

export function OrderDeliveryInformation12() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
        >
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-teal-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Shipment Package #1</h3>
                <p className="text-xs text-slate-400">Weight: 2.4 lbs • DripExpress Parcel</p>
              </div>
            </div>
            <span className="font-mono text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
              DH-TRK-28491
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Estimated Arrival</span>
              <p className="text-lg font-bold text-white">Oct 12–15, 2026</p>
              <p className="text-teal-400 mt-0.5">Standard Ground (3-5 Days)</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Delivery Destination</span>
              <p className="text-sm font-semibold text-white">San Francisco, CA</p>
              <p className="text-slate-400 mt-0.5">742 Evergreen Terrace</p>
            </div>
          </div>

          {/* Barcode Mock */}
          <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
            <div className="font-mono text-xs tracking-widest text-slate-500">
              ||||| |||| |||||| ||| ||||||| ||
            </div>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              Official Carrier Data <ArrowRight className="w-3 h-3 text-teal-400" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation12;
`
  },
  // 13 — DELIVERY + INSTRUCTIONS
  {
    id: 13,
    name: 'OrderDeliveryInformation13',
    dir: 'order-delivery-information-13',
    title: 'Delivery + Instructions — Drop Preference Panel',
    desc: 'Combined delivery panel with interactive contactless preferences, gate code details, and delivery instructions.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DoorOpen, Bell, Check } from 'lucide-react';

export function OrderDeliveryInformation13() {
  const [leaveAtDoor, setLeaveAtDoor] = useState(true);
  const [ringBell, setRingBell] = useState(false);

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">Courier Instructions</span>
            <h2 className="text-2xl font-bold text-white">Delivery Info & Drop Preferences</h2>
          </div>
          <div className="bg-slate-900 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 border border-slate-800">
            REF: DH-TRK-28491
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Info */}
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <span className="text-xs text-slate-400 uppercase font-mono">Carrier & ETA</span>
            <h3 className="text-2xl font-bold text-white">Oct 12–15, 2026</h3>
            <p className="text-xs text-violet-400 font-medium">DripExpress Standard Ground (3-5 Days)</p>
            <p className="text-xs text-slate-400">Destination: 742 Evergreen Terrace, San Francisco, CA</p>
          </div>

          {/* Preferences */}
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <span className="text-xs text-slate-400 uppercase font-mono">Drop Preferences</span>

            <div
              onClick={() => setLeaveAtDoor(!leaveAtDoor)}
              className={\`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all \${
                leaveAtDoor ? 'bg-violet-950/40 border-violet-500/50' : 'bg-slate-950 border-slate-800'
              }\`}
            >
              <div className="flex items-center gap-3">
                <DoorOpen className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Leave at Front Door</p>
                  <p className="text-xs text-slate-400">Contactless drop authorized</p>
                </div>
              </div>
              {leaveAtDoor && <Check className="w-4 h-4 text-violet-400" />}
            </div>

            <div
              onClick={() => setRingBell(!ringBell)}
              className={\`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all \${
                ringBell ? 'bg-violet-950/40 border-violet-500/50' : 'bg-slate-950 border-slate-800'
              }\`}
            >
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Ring Doorbell</p>
                  <p className="text-xs text-slate-400">Notify upon arrival</p>
                </div>
              </div>
              {ringBell && <Check className="w-4 h-4 text-violet-400" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation13;
`
  },
  // 14 — EDITORIAL DELIVERY
  {
    id: 14,
    name: 'OrderDeliveryInformation14',
    dir: 'order-delivery-information-14',
    title: 'Editorial Delivery — High Contrast Reveal',
    desc: 'Editorial fashion-forward layout featuring bold clip-path title text reveal motion.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation14() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-b border-stone-800 pb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-light tracking-tighter uppercase text-stone-100"
          >
            ON ITS WAY.
          </motion.h1>
          <p className="text-xs font-sans font-mono tracking-widest text-stone-400 uppercase mt-2">
            EXPECTED ARRIVAL / OCTOBER 12–15
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          <div>
            <span className="text-xs font-mono text-stone-500 uppercase block mb-1">01 / CARRIER</span>
            <p className="text-lg font-medium text-stone-200">DripExpress Ground</p>
            <p className="text-xs text-stone-400">Standard 3–5 Business Days</p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500 uppercase block mb-1">02 / REFERENCE</span>
            <p className="text-lg font-mono text-amber-400">DH-TRK-28491</p>
            <p className="text-xs text-stone-400">Verified Shipment ID</p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500 uppercase block mb-1">03 / DESTINATION</span>
            <p className="text-lg font-medium text-stone-200">San Francisco, CA</p>
            <p className="text-xs text-stone-400">742 Evergreen Terrace</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation14;
`
  },
  // 15 — DELIVERY PROGRESS
  {
    id: 15,
    name: 'OrderDeliveryInformation15',
    dir: 'order-delivery-information-15',
    title: 'Delivery Progress — Travelling Indicator',
    desc: 'Linear delivery progress visualization with animated Travelling node along status path.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation15() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">Delivery Progress</span>
            <h2 className="text-2xl font-bold text-white">October 12–15 Arrival</h2>
          </div>
          <span className="font-mono text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            TRK: DH-TRK-28491
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative py-4">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '65%' }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 to-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-xs">
            <div className="text-left">
              <span className="font-semibold text-sky-400 block">Dispatched</span>
              <span className="text-slate-400">Oct 12</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-white block">In Transit</span>
              <span className="text-slate-400">Oct 13–14</span>
            </div>
            <div className="text-right">
              <span className="font-semibold text-slate-500 block">Delivered</span>
              <span className="text-slate-400">Oct 15</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <span className="text-slate-400">Carrier Partner</span>
            <p className="text-sm font-bold text-white">DripExpress Standard Ground (3-5 Days)</p>
          </div>
          <button className="px-4 py-2 bg-sky-500 text-slate-950 font-bold rounded-xl hover:bg-sky-400 transition-colors">
            View Live Tracking
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation15;
`
  },
  // 16 — 3D PACKAGE EXPERIENCE
  {
    id: 16,
    name: 'OrderDeliveryInformation16',
    dir: 'order-delivery-information-16',
    title: '3D Package Experience — Controlled Perspective Depth',
    desc: 'Perspective-tilted card showcasing depth shadows and subtle 3D hover orientation.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

export function OrderDeliveryInformation16() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ rotateX: 15, rotateY: -10, opacity: 0 }}
          whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
          viewport={{ once: false }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6"
        >
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/20">
                <Box className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">3D Parcel Manifest</span>
                <h3 className="text-2xl font-bold text-white">Express Shipment</h3>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">TRACKING ID</span>
              <span className="font-mono text-sm font-bold text-blue-400">DH-TRK-28491</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Estimated Arrival</span>
              <p className="text-2xl font-extrabold text-white">12–15 OCT</p>
              <p className="text-xs text-emerald-400 mt-1">DripExpress Ground (3-5 Days)</p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Destination</span>
              <p className="text-base font-bold text-white">San Francisco, CA</p>
              <p className="text-xs text-slate-400 mt-1">742 Evergreen Terrace</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation16;
`
  },
  // 17 — CARRIER FOCUSED
  {
    id: 17,
    name: 'OrderDeliveryInformation17',
    dir: 'order-delivery-information-17',
    title: 'Carrier Focused — Brand Dominance',
    desc: 'Logistics partner focus layout emphasizing DripExpress carrier specs, SLA badge, and tracking reference.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export function OrderDeliveryInformation17() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-gradient-to-r from-blue-950/60 to-slate-950 p-6 sm:p-8 rounded-2xl border border-blue-500/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl"
        >
          <div className="space-y-2">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold inline-flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Certified Partner
            </span>
            <h2 className="text-3xl font-extrabold text-white">DripExpress Ground</h2>
            <p className="text-xs text-slate-400">Guaranteed 3–5 Business Day Delivery Window</p>
          </div>
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-right">
            <span className="text-[10px] font-mono text-slate-400 block">TRACKING ID</span>
            <span className="font-mono text-base font-bold text-blue-400">DH-TRK-28491</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Expected Delivery</span>
            <p className="text-base font-bold text-white">Oct 12–15, 2026</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Shipping Speed</span>
            <p className="text-base font-bold text-white">Standard Ground</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Protection</span>
            <p className="text-base font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Insured Shipment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation17;
`
  },
  // 18 — DELIVERY DASHBOARD
  {
    id: 18,
    name: 'OrderDeliveryInformation18',
    dir: 'order-delivery-information-18',
    title: 'Delivery Dashboard — Modular Grid Entry',
    desc: 'Compact dashboard grid displaying ETA, carrier metrics, destination summary, and instructions in distinct panels.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Truck, Calendar, MapPin } from 'lucide-react';

export function OrderDeliveryInformation18() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Delivery Dashboard</h3>
          </div>
          <span className="font-mono text-xs text-indigo-400">DH-TRK-28491</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-lg"
          >
            <Calendar className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-slate-400 uppercase font-mono block">ETA Window</span>
            <p className="text-xl font-bold text-white">Oct 12–15</p>
            <p className="text-xs text-emerald-400">On Schedule</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-lg"
          >
            <Truck className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-slate-400 uppercase font-mono block">Carrier</span>
            <p className="text-xl font-bold text-white">DripExpress</p>
            <p className="text-xs text-slate-400">Standard Ground (3-5 Days)</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-lg"
          >
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-slate-400 uppercase font-mono block">Destination</span>
            <p className="text-sm font-bold text-white truncate">San Francisco, CA</p>
            <p className="text-xs text-slate-400">742 Evergreen Terrace</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation18;
`
  },
  // 19 — MAGAZINE DELIVERY
  {
    id: 19,
    name: 'OrderDeliveryInformation19',
    dir: 'order-delivery-information-19',
    title: 'Magazine Delivery — Oversized Editorial Layout',
    desc: 'Magazine-style composition pairing bold typography, generous whitespace, and shipping status data.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation19() {
  return (
    <section className="w-full bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 rounded-2xl border border-zinc-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-sans">Vol. 2026 Logistics Issue</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-white">ARRIVING OCT 12–15</h2>
          </div>
          <div className="font-mono text-xs text-amber-400 font-sans">
            REF // DH-TRK-28491
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">01 / Carrier</span>
            <p className="font-bold text-white">DripExpress Ground</p>
            <p className="text-xs text-zinc-400">Standard 3–5 Business Days</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">02 / Status</span>
            <p className="font-bold text-emerald-400">In Transit</p>
            <p className="text-xs text-zinc-400">Chicago Hub Departure</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">03 / Destination</span>
            <p className="font-bold text-white">San Francisco, CA</p>
            <p className="text-xs text-zinc-400">742 Evergreen Terrace</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation19;
`
  },
  // 20 — AWARD-STYLE DELIVERY EXPERIENCE
  {
    id: 20,
    name: 'OrderDeliveryInformation20',
    dir: 'order-delivery-information-20',
    title: 'Award-Style Delivery Experience — Ultimate Luxury UI',
    desc: 'Showcase delivery experience blending SVG route drawing, ETA hero display, white-glove carrier status, and micro-interactions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, MapPin, Truck, Award, CheckCircle2 } from 'lucide-react';

export function OrderDeliveryInformation20() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      {/* Subtle Background Glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800/80 pb-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Premium Dispatch
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Delivery Experience</h2>
            </div>
          </div>
          <div className="bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800 text-right">
            <span className="text-[10px] font-mono text-zinc-400 block">TRACKING ID</span>
            <span className="font-mono text-sm font-bold text-amber-400">DH-TRK-28491</span>
          </div>
        </motion.div>

        {/* Hero ETA Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-zinc-900/80 via-zinc-900/50 to-zinc-900/80 p-8 rounded-3xl border border-amber-500/20 text-center space-y-4 shadow-xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Guaranteed Delivery Window</span>
          <h1 className="text-4xl sm:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
            12–15 OCTOBER 2026
          </h1>
          <p className="text-xs text-zinc-400">Carrier: DripExpress Standard Ground (3-5 Days)</p>
        </motion.div>

        {/* SVG Route Visualization */}
        <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 space-y-4">
          <span className="text-xs font-mono text-zinc-400 uppercase">Live Route Status</span>
          
          <div className="relative py-4">
            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '65%' }}
                viewport={{ once: false }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
              />
            </div>

            <div className="flex justify-between items-center mt-4 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Chicago Hub</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Truck className="w-4 h-4 animate-bounce" />
                <span>In Transit</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block mb-1 font-mono">SERVICE SLA</span>
            <p className="font-bold text-white">White-Glove Handling</p>
          </div>
          <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block mb-1 font-mono">PROTECTION</span>
            <p className="font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Full Parcel Insurance
            </p>
          </div>
          <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block mb-1 font-mono">DELIVERY TYPE</span>
            <p className="font-bold text-white">Contactless Porch Drop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation20;
`
  }
];

// Write components and json
components.forEach(comp => {
  const targetFolder = path.join(baseDir, comp.dir);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Write TSX
  const tsxPath = path.join(targetFolder, `${comp.name}.tsx`);
  fs.writeFileSync(tsxPath, comp.code, 'utf8');

  // Write JSON
  const jsonPath = path.join(targetFolder, `${comp.dir}.json`);
  const jsonContent = {
    id: comp.dir,
    title: comp.title,
    category: "order-delivery-information",
    description: comp.desc
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');

  console.log(`Updated ${comp.name} with view-triggered animations & JSON metadata.`);
});

console.log('Successfully updated all 20 Delivery Information variants with scroll-triggered animations!');
