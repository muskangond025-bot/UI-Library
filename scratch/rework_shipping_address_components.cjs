const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '03-shipping-address');

function createVariant(num, componentCode, title, description) {
  const folderName = `shipping-address-${num}`;
  const folderPath = path.join(baseDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxPath = path.join(folderPath, `ShippingAddress${num}.tsx`);
  const jsonPath = path.join(folderPath, `shipping-address-${num}.json`);

  fs.writeFileSync(tsxPath, componentCode, 'utf-8');

  const paddedNum = num < 10 ? `0${num}` : `${num}`;
  const jsonContent = JSON.stringify({
    id: `shipping-address-${paddedNum}`,
    title: title,
    description: description,
    category: "checkout",
    subsection: "shipping-address",
    variant: num,
    section: {
      settings: {
        title: title,
        description: description
      }
    }
  }, null, 2);

  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
  console.log(`Reworked ShippingAddress${num}`);
}

// ---------------------------------------------------------
// VARIANT 01: Editorial Location Map Grid
// ---------------------------------------------------------
const code1 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Globe, ArrowRight, Home, Briefcase } from 'lucide-react';

export function ShippingAddress1({ data }: { data?: any }) {
  const [addressType, setAddressType] = useState<'home' | 'office'>('home');
  const [street, setStreet] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Springfield');
  const [stateZip, setStateZip] = useState('OR 97477');
  const [country, setCountry] = useState('United States');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
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
        {/* Vector Coordinates Accent Background */}
        <div className="absolute top-4 right-6 text-[10px] font-mono text-amber-500/30 pointer-events-none select-none hidden sm:block">
          LAT: 37.7749° N // LONG: 122.4194° W
        </div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold mb-1">
              <Compass className="w-3.5 h-3.5" /> 02 — LOCATION DISPATCH
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Delivery Address Grid
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-stone-800/80 p-1.5 rounded-full border border-stone-700/50">
            <button
              onClick={() => setAddressType('home')}
              className={\`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 \${
                addressType === 'home' ? 'bg-amber-400 text-stone-950 font-semibold shadow-md' : 'text-stone-400 hover:text-stone-200'
              }\`}
            >
              <Home className="w-3.5 h-3.5" /> Residential Villa
            </button>
            <button
              onClick={() => setAddressType('office')}
              className={\`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 \${
                addressType === 'office' ? 'bg-amber-400 text-stone-950 font-semibold shadow-md' : 'text-stone-400 hover:text-stone-200'
              }\`}
            >
              <Briefcase className="w-3.5 h-3.5" /> Corporate HQ
            </button>
          </div>
        </motion.div>

        <div className="mt-8 space-y-6">
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Primary Street Destination *</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
              />
              <MapPin className="w-4 h-4 text-amber-400 absolute left-4 top-3.5" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">City Jurisdiction *</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                />
                <Navigation className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">State / Postal Code *</label>
              <input
                type="text"
                value={stateZip}
                onChange={(e) => setStateZip(e.target.value)}
                className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Territory / Region *</label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition appearance-none"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
                <Globe className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
            <span className="text-xs text-stone-400 flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> GPS Address Validated
            </span>
            <button className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              Proceed to Shipping Methods <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress1;`;

createVariant(1, code1, "Editorial Location Map Grid", "Location-centric shipping layout with vector coordinate grid background and pulsing map pin reveal.");

// ---------------------------------------------------------
// VARIANT 02: Split Delivery Route & Dispatch Panel
// ---------------------------------------------------------
const code2 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Truck, ArrowRight, Package, CheckCircle2 } from 'lucide-react';

export function ShippingAddress2({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Market Street, Suite 400');
  const [city, setCity] = useState('San Francisco');
  const [stateZip, setStateZip] = useState('CA 94105');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Side: Animated SVG Delivery Route Panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Truck className="w-3.5 h-3.5" />
              <span>Route Dispatch Engine</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Delivery Route</h2>
            <p className="text-xs text-slate-400">Fulfillment Center ➔ Destination Pin</p>

            {/* SVG Animated Route Line */}
            <div className="my-8 relative h-28 bg-slate-950/80 rounded-2xl border border-slate-800 p-4 flex items-center justify-between overflow-hidden">
              <div className="flex flex-col items-center gap-1 relative z-10">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                  <Package className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">HUB_SF</span>
              </div>

              {/* Dashed Animated Path */}
              <div className="flex-1 px-4 relative">
                <svg className="w-full h-4 overflow-visible">
                  <line x1="0" y1="8" x2="100%" y2="8" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                  <motion.line
                    x1="0"
                    y1="8"
                    x2="100%"
                    y2="8"
                    stroke="#818cf8"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <div className="flex flex-col items-center gap-1 relative z-10">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-indigo-300">DEST</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed 2-Day Priority Carrier</span>
          </div>
        </motion.div>

        {/* Right Side: Shipping Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Destination Address</h3>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Street Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">City</label>
                <div className="relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">State & ZIP Code</label>
                <input
                  type="text"
                  value={stateZip}
                  onChange={(e) => setStateZip(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Carrier rates updated</span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2">
              <span>Next: Delivery Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ShippingAddress2;`;

createVariant(2, code2, "Split Delivery Route & Dispatch Panel", "Dual-panel layout with animated SVG delivery route path on left and location fields on right.");

// ---------------------------------------------------------
// VARIANT 03: Milestone Stepper Shipping Location
// ---------------------------------------------------------
const code3 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check, ArrowRight, Home, Briefcase, Warehouse } from 'lucide-react';

export function ShippingAddress3({ data }: { data?: any }) {
  const [street, setStreet] = useState('555 Mission Street, Apt 12B');
  const [city, setCity] = useState('San Francisco');
  const [stateZip, setStateZip] = useState('CA 94105');
  const [locationType, setLocationType] = useState('home');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl">
        {/* Milestone Stepper */}
        <div className="mb-10 relative">
          <div className="flex items-center justify-between relative z-10 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs text-slate-400">Cart Identification</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg shadow-emerald-500/20"
              >
                2
              </motion.div>
              <span className="text-xs font-semibold text-emerald-400">Shipping Location</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium text-xs flex items-center justify-center">
                3
              </div>
              <span className="text-xs text-slate-400">Payment Method</span>
            </div>
          </div>

          <div className="absolute top-4 left-0 w-full flex justify-center px-24 pointer-events-none">
            <svg className="w-full h-1 overflow-visible">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="0"
                y1="0"
                x2="50%"
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

        {/* Location Type Selection Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setLocationType('home')}
            className={\`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 \${
              locationType === 'home' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <Home className="w-4 h-4" />
            <span className="text-xs font-semibold">Residential</span>
          </button>
          <button
            type="button"
            onClick={() => setLocationType('office')}
            className={\`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 \${
              locationType === 'office' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-semibold">Office HQ</span>
          </button>
          <button
            type="button"
            onClick={() => setLocationType('warehouse')}
            className={\`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 \${
              locationType === 'warehouse' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }\`}
          >
            <Warehouse className="w-4 h-4" />
            <span className="text-xs font-semibold">Hub Locker</span>
          </button>
        </div>

        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">State & ZIP Code</label>
              <input
                type="text"
                value={stateZip}
                onChange={(e) => setStateZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4" /> Milestone Location Verified
            </span>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress3;`;

createVariant(3, code3, "Milestone Stepper Shipping Location", "Logistic milestone progress header connected to interactive address type destination cards.");

// ---------------------------------------------------------
// VARIANT 04: Floating Location Badge Shipping Form
// ---------------------------------------------------------
const code4 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Navigation, Compass } from 'lucide-react';

export function ShippingAddress4({ data }: { data?: any }) {
  const [street, setStreet] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Springfield');
  const [zip, setZip] = useState('97477');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-neutral-100 shadow-2xl"
      >
        <div className="mb-10 flex justify-between items-end border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">
              FLOATING LOCATION SYSTEM
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Delivery Destination</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-violet-400" /> Lat/Long Geocoded
          </span>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <input
              type="text"
              id="street-input-4"
              value={street}
              onFocus={() => setFocusedField('street')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setStreet(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="street-input-4"
              className={\`absolute left-5 transition-all duration-200 pointer-events-none \${
                street || focusedField === 'street'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }\`}
            >
              Street Address & Unit
            </label>
            <MapPin className="w-4 h-4 text-neutral-600 absolute right-5 top-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="city-input-4"
                value={city}
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setCity(e.target.value)}
                className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                placeholder=" "
              />
              <label
                htmlFor="city-input-4"
                className={\`absolute left-5 transition-all duration-200 pointer-events-none \${
                  city || focusedField === 'city'
                    ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                    : 'top-4 text-sm text-neutral-500'
                }\`}
              >
                City Jurisdiction
              </label>
              <Navigation className="w-4 h-4 text-neutral-600 absolute right-5 top-5" />
            </div>

            <div className="relative">
              <input
                type="text"
                id="zip-input-4"
                value={zip}
                onFocus={() => setFocusedField('zip')}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setZip(e.target.value)}
                className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                placeholder=" "
              />
              <label
                htmlFor="zip-input-4"
                className={\`absolute left-5 transition-all duration-200 pointer-events-none \${
                  zip || focusedField === 'zip'
                    ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                    : 'top-4 text-sm text-neutral-500'
                }\`}
              >
                Postal Code
              </label>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
              <span>Confirm Location</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress4;`;

createVariant(4, code4, "Floating Location Badge Shipping Form", "Modern floating label address form with interactive destination badges and focus-gliding pin indicators.");

// ---------------------------------------------------------
// VARIANT 05: Destination Package Label Stack
// ---------------------------------------------------------
const code5 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, ArrowRight, Barcode, PackageCheck } from 'lucide-react';

export function ShippingAddress5({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Cyber Way');
  const [city, setCity] = useState('Austin');
  const [stateZip, setStateZip] = useState('TX 78701');

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
              <div className="flex items-center gap-2 text-sky-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-1">
                <Barcode className="w-4 h-4" /> SHIP_LABEL_45902
              </div>
              <h2 className="text-xl font-bold text-white">Shipping Package Label</h2>
            </div>
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full text-xs font-semibold flex items-center gap-1">
              <PackageCheck className="w-3.5 h-3.5" /> Priority Air
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Delivery Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
                <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">Destination City</label>
                <div className="relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                  />
                  <Building className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">State & Postal ZIP</label>
                <input
                  type="text"
                  value={stateZip}
                  onChange={(e) => setStateZip(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">WEIGHT: 1.4 LBS</span>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
                <span>Confirm Parcel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ShippingAddress5;`;

createVariant(5, code5, "Destination Package Label Stack", "Ecommerce shipping label stack layout featuring stylized package barcode vector and stacked depth entries.");

// ---------------------------------------------------------
// VARIANT 06: Asymmetric Logistics Address Grid
// ---------------------------------------------------------
const code6 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';

export function ShippingAddress6({ data }: { data?: any }) {
  const [street, setStreet] = useState('888 Grand Avenue');
  const [city, setCity] = useState('New York');
  const [zip, setZip] = useState('10001');
  const [instructions, setInstructions] = useState('Leave with doorman');

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
              ASYMMETRIC LOGISTICS GRID
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              COURIER DISPATCH COORDINATES
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Organized geographic coordinates optimized for last-mile delivery.
            </p>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-5 space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Street Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <MapPin className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Postal ZIP</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-zinc-400 mb-2">Gate Instructions</h3>
              <input
                type="text"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-100 rounded focus:outline-none"
              />
            </div>

            <button className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
              <span>Submit Address</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress6;`;

createVariant(6, code6, "Asymmetric Logistics Address Grid", "Logistics-focused asymmetric layout organizing country, postal zone, street, and gate instructions in offset blocks.");

// ---------------------------------------------------------
// VARIANT 07: Compact Dispatch Shipping Dashboard
// ---------------------------------------------------------
const code7 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';

export function ShippingAddress7({ data }: { data?: any }) {
  const [street, setStreet] = useState('456 Oak Lane');
  const [city, setCity] = useState('Seattle');
  const [zip, setZip] = useState('98101');
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden"
      >
        {focused !== null && (
          <motion.div
            layoutId="focusBarDispatch"
            className="absolute left-0 top-0 w-1 bg-cyan-400 h-full rounded-r"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compact Dispatch Dashboard</h3>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Address Auto-Validated
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Physical Location</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onFocus={() => setFocused(1)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <MapPin className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">City Jurisdiction</label>
            <div className="relative">
              <input
                type="text"
                value={city}
                onFocus={() => setFocused(2)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Navigation className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Postal Zone</label>
            <input
              type="text"
              value={zip}
              onFocus={() => setFocused(3)}
              onBlur={() => setFocused(null)}
              onChange={(e) => setZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">COURIER: EXPRESS AIR</span>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
            Proceed <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress7;`;

createVariant(7, code7, "Compact Dispatch Shipping Dashboard", "High-density courier dispatch layout with inline address validation and animated focus tracking.");

// ---------------------------------------------------------
// VARIANT 08: Luxury Dark Location & Vector Compass
// ---------------------------------------------------------
const code8 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Shield, ArrowRight, Navigation } from 'lucide-react';

export function ShippingAddress8({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Fifth Avenue');
  const [city, setCity] = useState('New York');
  const [zip, setZip] = useState('10022');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Animated Light Sweep Effect */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-500/20 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono mb-1">
              <Compass className="w-4 h-4 animate-spin-slow" /> VIP DISPATCH DESTINATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Shipping Address</h2>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            Latitude: 40.7637° N
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Street Residence / Suite</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
              />
              <MapPin className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">City Jurisdiction</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
                />
                <Navigation className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Postal ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" /> Concierge priority courier assigned
            </span>
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              <span>Proceed to Courier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress8;`;

createVariant(8, code8, "Luxury Dark Location & Vector Compass", "Luxury dark shipping section featuring a rotating golden vector compass rose and glowing border light sweep.");

// ---------------------------------------------------------
// VARIANT 09: Location Matrix & Address Destination
// ---------------------------------------------------------
const code9 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Warehouse, Hotel, MapPin, ArrowRight } from 'lucide-react';

export function ShippingAddress9({ data }: { data?: any }) {
  const [selectedMatrix, setSelectedMatrix] = useState('home');
  const [street, setStreet] = useState('200 Ocean Drive');
  const [city, setCity] = useState('Miami');
  const [zip, setZip] = useState('33139');

  const matrixItems = [
    { id: 'home', label: 'Home Villa', icon: Home },
    { id: 'work', label: 'Work HQ', icon: Briefcase },
    { id: 'locker', label: 'Parcel Locker', icon: Warehouse },
    { id: 'hotel', label: 'Concierge Hotel', icon: Hotel },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Location Type Matrix</h2>

        {/* 4-Way Location Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {matrixItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedMatrix === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMatrix(item.id)}
                className={\`p-4 rounded-2xl border text-left transition flex flex-col justify-between h-24 \${
                  isSelected ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 ring-1 ring-emerald-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                }\`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress9;`;

createVariant(9, code9, "Location Matrix & Address Destination", "4-way location type matrix (Home, Office, Locker, Hotel) with animated active card selection.");

// ---------------------------------------------------------
// VARIANT 10: Fulfillment Route & Address Switcher
// ---------------------------------------------------------
const code10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, Truck } from 'lucide-react';

export function ShippingAddress10({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Tech Blvd, Floor 4');
  const [city, setCity] = useState('San Jose');
  const [zip, setZip] = useState('95110');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        {/* Fulfillment Route Header */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">FULFILLMENT ORIGIN</span>
              <span className="text-xs font-bold text-white">Central Hub #04 ➔ Target Pin</span>
            </div>
          </div>
          <span className="text-[11px] text-amber-400 font-mono font-semibold">ETA: 48 Hrs</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Destination Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">City Jurisdiction</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition"
                />
                <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Postal ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Save & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress10;`;

createVariant(10, code10, "Fulfillment Route & Address Switcher", "Fulfillment origin-to-destination route banner with a sliding address type indicator.");

// ---------------------------------------------------------
// VARIANT 11: Vertical Delivery Route Timeline
// ---------------------------------------------------------
const code11 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';

export function ShippingAddress11({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Timeline Way');
  const [city, setCity] = useState('Denver');
  const [zip, setZip] = useState('80202');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Vertical Delivery Route Timeline
        </h2>

        <div className="relative pl-6 sm:pl-10 space-y-8">
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-4 w-0.5 bg-slate-800">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-teal-400"
            />
          </div>

          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <MapPin className="w-3 h-3 text-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">01. Street Location</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <Navigation className="w-3 h-3 text-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">02. City & Region</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">03. Postal Zone</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
              />
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

export default ShippingAddress11;`;

createVariant(11, code11, "Vertical Delivery Route Timeline", "Vertical logistics timeline connecting address milestones via an animated SVG path draw.");

// ---------------------------------------------------------
// VARIANT 12: Magazine Logistics & Watermark
// ---------------------------------------------------------
const code12 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';

export function ShippingAddress12({ data }: { data?: any }) {
  const [street, setStreet] = useState('700 Fashion Boulevard');
  const [city, setCity] = useState('Los Angeles');
  const [zip, setZip] = useState('90015');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-stone-100">
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -right-8 -top-12 text-[140px] sm:text-[180px] font-serif font-black text-stone-900/50 select-none pointer-events-none"
        >
          DESTINATION
        </motion.div>

        <div className="relative z-10 space-y-8">
          <div className="border-b border-stone-800 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase block mb-1">
                MAGAZINE LOGISTICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-50 tracking-tight">
                Delivery Destination
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-orange-400" /> FedEx Express
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-stone-400 mb-2">01 / Street Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">02 / City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">03 / Postal ZIP</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                />
              </div>
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

export default ShippingAddress12;`;

createVariant(12, code12, "Magazine Logistics & Destination Watermark", "Editorial magazine shipping section with oversized destination watermark typography and carrier selection badges.");

// ---------------------------------------------------------
// VARIANT 13: Glassmorphic Destination Radar Form
// ---------------------------------------------------------
const code13 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Radar } from 'lucide-react';

export function ShippingAddress13({ data }: { data?: any }) {
  const [street, setStreet] = useState('999 Glass Tower Ave');
  const [city, setCity] = useState('Chicago');
  const [zip, setZip] = useState('60601');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      {/* Background Radar Rings */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/20 rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-100"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium mb-2">
              <Radar className="w-3.5 h-3.5" /> Destination Radar
            </div>
            <h2 className="text-2xl font-bold text-white">Glassmorphic Shipping Form</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">GPS LOCKED</span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
              />
              <MapPin className="w-4 h-4 text-blue-400 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end">
            <button className="px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Location</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress13;`;

createVariant(13, code13, "Glassmorphic Destination Radar Form", "Restrained glass card layout set over pulsing background radar distance rings and coordinate pins.");

// ---------------------------------------------------------
// VARIANT 14: Gliding Location Pin Focus System
// ---------------------------------------------------------
const code14 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowRight, Check } from 'lucide-react';

export function ShippingAddress14({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Focus St');
  const [city, setCity] = useState('Boston');
  const [zip, setZip] = useState('02108');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const fields = [
    { id: 0, label: 'Street Address', value: street, setter: setStreet, icon: MapPin },
    { id: 1, label: 'City Jurisdiction', value: city, setter: setCity, icon: Navigation },
    { id: 2, label: 'ZIP Zone', value: zip, setter: setZip, icon: Compass },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              LOCATION PIN SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Gliding Location Pin Focus</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Pin Row #{activeIdx + 1}
          </span>
        </div>

        <div className="space-y-6">
          {fields.map((field) => {
            const Icon = field.icon;
            const isActive = activeIdx === field.id;
            return (
              <div
                key={field.id}
                onFocus={() => setActiveIdx(field.id)}
                className={\`p-4 rounded-2xl border transition-all duration-300 relative \${
                  isActive ? 'bg-slate-950 border-lime-400/80 shadow-lg shadow-lime-400/5' : 'bg-slate-950/40 border-slate-800'
                }\`}
              >
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">{field.label}</label>
                <div className="relative">
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-100 focus:outline-none pl-8 py-1"
                  />
                  <Icon className={\`w-4 h-4 absolute left-0 top-1.5 transition \${isActive ? 'text-lime-400' : 'text-slate-500'}\`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-lime-400 flex items-center gap-1 font-medium">
            <Check className="w-4 h-4" /> Map pin tracking active
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress14;`;

createVariant(14, code14, "Gliding Location Pin Focus System", "Location-centric shipping form where a map pin badge glides between active input rows.");

// ---------------------------------------------------------
// VARIANT 15: 3D Perspective Shipping Box Card
// ---------------------------------------------------------
const code15 = `import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, Box } from 'lucide-react';

export function ShippingAddress15({ data }: { data?: any }) {
  const [street, setStreet] = useState('500 Perspective Lane');
  const [city, setCity] = useState('Dallas');
  const [zip, setZip] = useState('75201');

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
              <Box className="w-3.5 h-3.5" /> 3D Parcel Box
            </div>
            <h2 className="text-2xl font-bold text-white">Shipping Container Address</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">Move cursor to tilt box</span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <MapPin className="w-4 h-4 text-cyan-400 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">City Jurisdiction</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                />
                <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Postal ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Seal Parcel & Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress15;`;

createVariant(15, code15, "3D Perspective Shipping Box Card", "Layered perspective shipping box composition with mouse-driven 3D tilt rotation.");

// ---------------------------------------------------------
// VARIANT 16: Icon-Led Logistics Address Form
// ---------------------------------------------------------
const code16 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowRight } from 'lucide-react';

export function ShippingAddress16({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Icon Way');
  const [city, setCity] = useState('Phoenix');
  const [zip, setZip] = useState('85001');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Icon-Led Logistics Form
        </h2>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'street' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <MapPin className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Street Address</label>
              <input
                type="text"
                value={street}
                onFocus={() => setFocusedInput('street')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'city' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <Navigation className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">City Jurisdiction</label>
              <input
                type="text"
                value={city}
                onFocus={() => setFocusedInput('city')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'zip' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <Compass className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Postal ZIP Zone</label>
              <input
                type="text"
                value={zip}
                onFocus={() => setFocusedInput('zip')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>
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

export default ShippingAddress16;`;

createVariant(16, code16, "Icon-Led Logistics Address Form", "Logistics-anchored form with custom icon badges that scale and rotate upon field focus.");

// ---------------------------------------------------------
// VARIANT 17: Progressive Delivery Access Disclosure
// ---------------------------------------------------------
const code17 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, ArrowRight, Key } from 'lucide-react';

export function ShippingAddress17({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Main Street');
  const [city, setCity] = useState('Atlanta');
  const [gateCode, setGateCode] = useState('#4589');
  const [showAccessNotes, setShowAccessNotes] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Delivery Access Disclosure
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address (Required)</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City (Required)</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowAccessNotes(!showAccessNotes)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showAccessNotes ? 'Hide Gate Access & Delivery Notes' : '+ Add gate code & courier instructions'}</span>
            <motion.div animate={{ rotate: showAccessNotes ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showAccessNotes && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4 pt-2"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-purple-400" /> Gate Access Code
                  </label>
                  <input
                    type="text"
                    value={gateCode}
                    onChange={(e) => setGateCode(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
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

export default ShippingAddress17;`;

createVariant(17, code17, "Progressive Delivery Access Disclosure", "Progressive shipping form expanding gate codes and delivery instructions via accordion disclosure.");

// ---------------------------------------------------------
// VARIANT 18: Parallax Delivery Arrival & Shipping Form
// ---------------------------------------------------------
const code18 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, Truck } from 'lucide-react';

export function ShippingAddress18({ data }: { data?: any }) {
  const [street, setStreet] = useState('350 Delivery Lane');
  const [city, setCity] = useState('Portland');
  const [zip, setZip] = useState('97201');

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
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Estimated Arrival</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dispatch schedule calculates delivery for <strong className="text-white">Thursday, Oct 5th</strong> via Express.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-semibold">
            GPS tracking link sent via SMS
          </div>
        </motion.div>

        <div className="md:col-span-7 space-y-5">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3">Destination Coordinates</h2>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">City</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                />
                <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
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

export default ShippingAddress18;`;

createVariant(18, code18, "Parallax Delivery Arrival & Shipping Form", "Split shipping form with a floating delivery arrival panel featuring parallax motion.");

// ---------------------------------------------------------
// VARIANT 19: Architectural Coordinate Shipping Form
// ---------------------------------------------------------
const code19 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ShippingAddress19({ data }: { data?: any }) {
  const [street, setStreet] = useState('101 Minimalist Way');
  const [city, setCity] = useState('Seattle');
  const [zip, setZip] = useState('98104');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[LAT/LONG: 47.6062° N, 122.3321° W]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">DESTINATION_COORDINATES</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">LOGISTICS ARCHITECTURE</span>
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

        <div className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">01 // STREET_LOCATION</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">02 // CITY_JURISDICTION</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">03 // POSTAL_ZONE</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
              />
            </div>
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

export default ShippingAddress19;`;

createVariant(19, code19, "Architectural Coordinate Shipping Form", "Architectural monochrome address form featuring animated coordinate line dividers and location stamp.");

// ---------------------------------------------------------
// VARIANT 20: Award-Winning Hybrid Logistics Showcase
// ---------------------------------------------------------
const code20 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function ShippingAddress20({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Award Boulevard, Suite 500');
  const [city, setCity] = useState('San Francisco');
  const [zip, setZip] = useState('94103');

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
              <Compass className="w-3.5 h-3.5" /> Award Logistics Showcase
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Delivery Location</h2>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Automated GPS Verification
          </span>
        </div>

        <div className="relative z-10 mt-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Street Location</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
              <MapPin className="w-4 h-4 text-amber-400 absolute left-4 top-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">City Jurisdiction</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-4" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Postal ZIP Zone</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Guaranteed priority dispatch via Express Courier</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>Proceed to Courier</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress20;`;

createVariant(20, code20, "Award-Winning Hybrid Logistics Showcase", "Luxury hybrid shipping composition with SVG compass decoration, location pills, and multi-stage entrance animations.");

console.log('Rework complete for Shipping Address variants 1 to 20');
