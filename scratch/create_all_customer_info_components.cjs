const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '02-customer-information');

function createVariant(num, componentCode, title, description) {
  const folderName = `customer-information-${num}`;
  const folderPath = path.join(baseDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxPath = path.join(folderPath, `CustomerInformation${num}.tsx`);
  const jsonPath = path.join(folderPath, `customer-information-${num}.json`);

  fs.writeFileSync(tsxPath, componentCode, 'utf-8');

  const paddedNum = num < 10 ? `0${num}` : `${num}`;
  const jsonContent = JSON.stringify({
    id: `customer-information-${paddedNum}`,
    title: title,
    description: description,
    category: "checkout",
    subsection: "customer-information",
    variant: num,
    section: {
      settings: {
        title: title,
        description: description
      }
    }
  }, null, 2);

  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
  console.log(`Updated CustomerInformation${num}`);
}

// ---------------------------------------------------------
// VARIANT 02: Split Form
// ---------------------------------------------------------
const code2 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export function CustomerInformation2({ data }: { data?: any }) {
  const [email, setEmail] = useState('jordan.smith@example.com');
  const [name, setName] = useState('Jordan Smith');
  const [phone, setPhone] = useState('+1 (555) 987-6543');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Panel - Opposite Slide Entrance */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-5 bg-gradient-to-br from-indigo-900/50 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 1 of 3</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Customer Information</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enter your contact details to enable real-time order tracking and digital delivery receipts.
            </p>
          </div>

          <div className="relative z-10 my-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 p-4 rounded-2xl">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400">Checkout Cart</span>
              <span className="text-indigo-400 font-semibold">2 Items</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-slate-200">Total Due</span>
              <span className="text-xl font-extrabold text-white">$248.00</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>256-bit encrypted secure guest checkout</span>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Right Panel - Opposite Slide Entrance */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Contact Form</h3>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">Already have an account?</button>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  placeholder="Jordan Smith"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  placeholder="jordan@example.com"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  placeholder="+1 (555) 000-0000"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-400">All fields required</span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2 shadow-lg shadow-indigo-600/20">
              <span>Next: Shipping Address</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerInformation2;`;

createVariant(2, code2, "Split Layout Customer Section", "Dual-panel split checkout layout with opposite horizontal slide-in entrance animations.");

// ---------------------------------------------------------
// VARIANT 03: Stepper Focused
// ---------------------------------------------------------
const code3 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, User, Phone, ArrowRight } from 'lucide-react';

export function CustomerInformation3({ data }: { data?: any }) {
  const [email, setEmail] = useState('taylor.swift@example.com');
  const [name, setName] = useState('Taylor Reed');
  const [phone, setPhone] = useState('+1 (555) 345-6789');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl">
        {/* Progress Stepper with SVG Path Animation */}
        <div className="mb-10 relative">
          <div className="flex items-center justify-between relative z-10 max-w-lg mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg shadow-emerald-500/20"
              >
                1
              </motion.div>
              <span className="text-xs font-semibold text-emerald-400">Customer Info</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium text-xs flex items-center justify-center">
                2
              </div>
              <span className="text-xs text-slate-400">Shipping</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium text-xs flex items-center justify-center">
                3
              </div>
              <span className="text-xs text-slate-400">Payment</span>
            </div>
          </div>

          {/* SVG Connecting Line Drawing */}
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

        {/* Section Heading */}
        <div className="border-b border-slate-800 pb-6 mb-8 text-center sm:text-left">
          <h2 className="text-xl font-bold text-white">Step 1: Contact Information</h2>
          <p className="text-xs text-slate-400 mt-1">Please enter your checkout details to continue to delivery options.</p>
        </div>

        {/* Input Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4" /> Guest details saved
            </span>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed to Shipping <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation3;`;

createVariant(3, code3, "Stepper-Integrated Customer Form", "Checkout form integrated with an animated SVG progress line drawing between step indicators.");

// ---------------------------------------------------------
// VARIANT 04: Floating Label Form
// ---------------------------------------------------------
const code4 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export function CustomerInformation4({ data }: { data?: any }) {
  const [email, setEmail] = useState('morgan.lee@example.com');
  const [name, setName] = useState('Morgan Lee');
  const [phone, setPhone] = useState('+1 (555) 456-7890');
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
              Customer Identification
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Enter Details</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-violet-400" /> Express Checkout
          </span>
        </div>

        <div className="space-y-8">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name-input-4"
              value={name}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="name-input-4"
              className={\`absolute left-5 transition-all duration-200 pointer-events-none \${
                name || focusedField === 'name'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }\`}
            >
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email-input-4"
              value={email}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="email-input-4"
              className={\`absolute left-5 transition-all duration-200 pointer-events-none \${
                email || focusedField === 'email'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }\`}
            >
              Email Address (Receipt & Notifications)
            </label>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <input
              type="tel"
              id="phone-input-4"
              value={phone}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setPhone(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="phone-input-4"
              className={\`absolute left-5 transition-all duration-200 pointer-events-none \${
                phone || focusedField === 'phone'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }\`}
            >
              Mobile Phone
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
              <span>Save & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation4;`;

createVariant(4, code4, "Floating Label Customer Form", "Modern form design featuring animated floating input labels that smoothly transition on focus and entry.");

// ---------------------------------------------------------
// VARIANT 05: Card Stack
// ---------------------------------------------------------
const code5 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export function CustomerInformation5({ data }: { data?: any }) {
  const [email, setEmail] = useState('sam.wilson@example.com');
  const [name, setName] = useState('Sam Wilson');
  const [phone, setPhone] = useState('+1 (555) 567-8901');

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative">
        {/* Layer 3 (Deep Background Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 0.4, y: 24, scale: 0.92 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 pointer-events-none transform -rotate-2"
        />

        {/* Layer 2 (Middle Background Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 0.7, y: 12, scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute inset-0 bg-slate-850 rounded-3xl border border-slate-700 pointer-events-none transform rotate-1"
        />

        {/* Front Foreground Card */}
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
                STACKED CARD VIEW
              </span>
              <h2 className="text-xl font-bold text-white">Customer Profile</h2>
            </div>
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full text-xs font-semibold">
              Card 1 of 3
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Customer Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" /> Auto-saved
              </span>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
                <span>Next Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerInformation5;`;

createVariant(5, code5, "Layered Card Stack Customer Form", "Stacked depth layout where background card layers shift and front card settles into focal position.");

// ---------------------------------------------------------
// VARIANT 06: Full-Width Editorial
// ---------------------------------------------------------
const code6 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Check, ArrowRight } from 'lucide-react';

export function CustomerInformation6({ data }: { data?: any }) {
  const [email, setEmail] = useState('chris.evans@example.com');
  const [name, setName] = useState('Chris Evans');
  const [phone, setPhone] = useState('+1 (555) 678-9012');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
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
          {/* Column 1: Title & Editorial Watermark */}
          <motion.div variants={colVariants} className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block">
              SECTION 01 // EDITORIAL GRID
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              CUSTOMER IDENTITY & CONTACT
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We require accurate customer contact information to verify order authenticity and handle post-purchase communications seamlessly.
            </p>
            <div className="pt-4 border-t border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">STATUS: DRAFT CHECKOUT</span>
            </div>
          </motion.div>

          {/* Column 2: Main Form */}
          <motion.div variants={colVariants} className="md:col-span-5 space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <User className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <Phone className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Column 3: Summary Action Box */}
          <motion.div variants={colVariants} className="md:col-span-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-zinc-400 mb-3">Preferences</h3>
              <div className="space-y-3 text-xs text-zinc-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-rose-500 rounded" />
                  <span>Receive news & drop alerts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-rose-500 rounded" />
                  <span>SMS order updates</span>
                </label>
              </div>
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

export default CustomerInformation6;`;

createVariant(6, code6, "Full-Width Grid Editorial Form", "Spacious full-width checkout layout featuring sequential column grid reveals and editorial typography.");

// ---------------------------------------------------------
// VARIANT 07: Compact Checkout
// ---------------------------------------------------------
const code7 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight, Sparkles } from 'lucide-react';

export function CustomerInformation7({ data }: { data?: any }) {
  const [email, setEmail] = useState('pat.taylor@example.com');
  const [name, setName] = useState('Pat Taylor');
  const [phone, setPhone] = useState('+1 (555) 789-0123');
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
        {/* Animated focus indicator bar */}
        {focused !== null && (
          <motion.div
            layoutId="focusBar"
            className="absolute left-0 top-0 w-1 bg-cyan-400 h-full rounded-r"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compact Customer Info</h3>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Dense Checkout</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onFocus={() => setFocused(1)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onFocus={() => setFocused(2)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Phone</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onFocus={() => setFocused(3)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Phone className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">Quick guest checkout</span>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
            Proceed <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation7;`;

createVariant(7, code7, "Compact High-Density Customer Form", "Space-efficient ecommerce customer section with animated focus outline indicators.");

// ---------------------------------------------------------
// VARIANT 08: Premium Dark Mode
// ---------------------------------------------------------
const code8 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Crown, Shield, ArrowRight } from 'lucide-react';

export function CustomerInformation8({ data }: { data?: any }) {
  const [email, setEmail] = useState('victoria.sec@luxury.com');
  const [name, setName] = useState('Victoria Sterling');
  const [phone, setPhone] = useState('+1 (555) 890-1234');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Animated Light Sweep Effect across top border */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-500/20 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono mb-1">
              <Crown className="w-4 h-4" /> VIP PRIVATE CHECKOUT
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Client Information</h2>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            Member Status: Gold
          </span>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Client Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition"
                />
                <User className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Direct Telephone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition"
                />
                <Phone className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Primary Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition"
              />
              <Mail className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
            </div>
          </div>

          <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" /> Concierge priority dispatch enabled
            </span>
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20">
              <span>Proceed to Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation8;`;

createVariant(8, code8, "Luxury Dark Mode Customer Form", "Luxury dark layout with gold/cyan accent borders and an animated ambient light sweep.");

// ---------------------------------------------------------
// VARIANT 09: Asymmetrical Grid
// ---------------------------------------------------------
const code9 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight } from 'lucide-react';

export function CustomerInformation9({ data }: { data?: any }) {
  const [email, setEmail] = useState('derek.blake@example.com');
  const [name, setName] = useState('Derek Blake');
  const [phone, setPhone] = useState('+1 (555) 901-2345');

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Asymmetric Block 1: Top-Left Entry */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-emerald-950/40 border border-emerald-800/50 rounded-3xl p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
              ASymmetric Grid // 09
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-100 tracking-tight mb-4">
              Your Details
            </h2>
            <p className="text-xs text-emerald-300/70 leading-relaxed">
              We align customer contact verification asynchronously for fast order dispatch.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-emerald-800/40">
            <span className="text-xs font-semibold text-emerald-400">Guest Checkout Session</span>
          </div>
        </motion.div>

        {/* Asymmetric Block 2: Bottom-Right Entry */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Phone</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2">
              <span>Proceed to Shipping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerInformation9;`;

createVariant(9, code9, "Asymmetric Grid Customer Section", "Editorial asymmetric layout with staggered block entries and off-axis element alignment.");

// ---------------------------------------------------------
// VARIANT 10: Customer Profile Card
// ---------------------------------------------------------
const code10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, CheckCircle, ArrowRight, Star } from 'lucide-react';

export function CustomerInformation10({ data }: { data?: any }) {
  const [email, setEmail] = useState('sarah.connor@example.com');
  const [name, setName] = useState('Sarah Connor');
  const [phone, setPhone] = useState('+1 (555) 012-3456');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-8">
        {/* Profile Avatar Entrance Header */}
        <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-800 text-center sm:text-left">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-purple-500/30 ring-4 ring-slate-800"
          >
            SC
          </motion.div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h2 className="text-xl font-bold text-white">Welcome back, Sarah</h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-[10px] font-semibold">
                <Star className="w-3 h-3 fill-amber-400" /> VIP Member
              </span>
            </div>
            <p className="text-xs text-slate-400">Review your pre-filled customer details for fast checkout.</p>
          </div>

          <button className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700">
            Switch Account
          </button>
        </div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Customer Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Account Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle className="w-4 h-4" /> Account details verified
            </span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2 shadow-lg shadow-indigo-600/25">
              <span>Confirm & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerInformation10;`;

createVariant(10, code10, "Customer Profile & Guest Checkout", "Combined customer avatar/profile header and input form with scaled avatar reveal.");

// ---------------------------------------------------------
// VARIANT 11: Vertical Timeline
// ---------------------------------------------------------
const code11 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight } from 'lucide-react';

export function CustomerInformation11({ data }: { data?: any }) {
  const [email, setEmail] = useState('olivia.williams@example.com');
  const [name, setName] = useState('Olivia Williams');
  const [phone, setPhone] = useState('+1 (555) 123-4567');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Timeline Customer Entry
        </h2>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 space-y-8">
          {/* Animated Path Line */}
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-4 w-0.5 bg-slate-800">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-teal-400"
            />
          </div>

          {/* Timeline Step 1 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">01. Customer Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          {/* Timeline Step 2 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">02. Email for Order Receipts</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          {/* Timeline Step 3 */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">03. Mobile Contact Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Proceed to Delivery Step <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation11;`;

createVariant(11, code11, "Vertical Timeline Customer Form", "Sequential timeline form layout with SVG path drawing along step milestones.");

// ---------------------------------------------------------
// VARIANT 12: Magazine Style
// ---------------------------------------------------------
const code12 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight } from 'lucide-react';

export function CustomerInformation12({ data }: { data?: any }) {
  const [email, setEmail] = useState('harper.b@editorial.com');
  const [name, setName] = useState('Harper Bennett');
  const [phone, setPhone] = useState('+1 (555) 234-5678');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-stone-100">
        {/* Animated Oversized Numeric Watermark */}
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -right-8 -top-12 text-[140px] sm:text-[180px] font-serif font-black text-stone-900/50 select-none pointer-events-none"
        >
          012
        </motion.div>

        <div className="relative z-10 space-y-8">
          <div className="border-b border-stone-800 pb-6">
            <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase block mb-1">
              MAGAZINE EDITORIAL FORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-50 tracking-tight">
              Customer Registration
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">01 / Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">02 / Telephone</label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-stone-400 mb-2">03 / Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800 flex justify-between items-center">
              <span className="text-xs text-stone-500 font-serif italic">Designed for high fashion checkout</span>
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

export default CustomerInformation12;`;

createVariant(12, code12, "Magazine Style Customer Section", "Bold editorial layout with oversized numeric watermark typography and subtle background motion.");

// ---------------------------------------------------------
// VARIANT 13: Glass / Depth UI
// ---------------------------------------------------------
const code13 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Sparkles, ArrowRight } from 'lucide-react';

export function CustomerInformation13({ data }: { data?: any }) {
  const [email, setEmail] = useState('ethan.hunt@example.com');
  const [name, setName] = useState('Ethan Hunt');
  const [phone, setPhone] = useState('+1 (555) 345-6789');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      {/* Soft Luminous Background Blur Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Restrained Glass Container */}
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
              <Sparkles className="w-3.5 h-3.5" /> Glassmorphic UI
            </div>
            <h2 className="text-2xl font-bold text-white">Customer Information</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">256-Bit SSL</span>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
                />
                <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end">
            <button className="px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-lg shadow-blue-500/20">
              <span>Next: Shipping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation13;`;

createVariant(13, code13, "Restrained Glassmorphism Customer Form", "Multi-layered glass card with subtle background orb motion and restrained backdrop blur.");

// ---------------------------------------------------------
// VARIANT 14: Interactive Field Focus
// ---------------------------------------------------------
const code14 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight, Check } from 'lucide-react';

export function CustomerInformation14({ data }: { data?: any }) {
  const [email, setEmail] = useState('logan.paul@example.com');
  const [name, setName] = useState('Logan Paul');
  const [phone, setPhone] = useState('+1 (555) 456-7890');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const fields = [
    { id: 0, label: 'Full Name', value: name, setter: setName, icon: User },
    { id: 1, label: 'Email Address', value: email, setter: setEmail, icon: Mail },
    { id: 2, label: 'Mobile Phone', value: phone, setter: setPhone, icon: Phone },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              FIELD FOCUS SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Interactive Customer Form</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full">
            Active Field #{activeIdx + 1}
          </span>
        </div>

        <div className="space-y-6 relative">
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
            <Check className="w-4 h-4" /> Real-time active focus tracking
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue Checkout <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation14;`;

createVariant(14, code14, "Interactive Field Focus Customer Form", "Focus-centric checkout form with a sliding active indicator pill that glides between active fields.");

// ---------------------------------------------------------
// VARIANT 15: 3D-Style Form
// ---------------------------------------------------------
const code15 = `import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, User, Phone, ArrowRight, Box } from 'lucide-react';

export function CustomerInformation15({ data }: { data?: any }) {
  const [email, setEmail] = useState('mia.wong@example.com');
  const [name, setName] = useState('Mia Wong');
  const [phone, setPhone] = useState('+1 (555) 567-8901');

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
              <Box className="w-3.5 h-3.5" /> Interactive 3D Card
            </div>
            <h2 className="text-2xl font-bold text-white">Customer Information</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">Move cursor to tilt</span>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Next Stage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation15;`;

createVariant(15, code15, "Interactive 3D Perspective Form", "Layered perspective card with mouse-driven 3D tilt rotation and subtle shadow elevation.");

// ---------------------------------------------------------
// VARIANT 16: Icon-Led Form
// ---------------------------------------------------------
const code16 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

export function CustomerInformation16({ data }: { data?: any }) {
  const [email, setEmail] = useState('noah.clark@example.com');
  const [name, setName] = useState('Noah Clark');
  const [phone, setPhone] = useState('+1 (555) 678-9012');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Icon-Anchored Customer Form
        </h2>

        <div className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'name' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <User className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'email' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <Mail className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'phone' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <Phone className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onFocus={() => setFocusedInput('phone')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
            Continue to Shipping <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation16;`;

createVariant(16, code16, "Icon-Led Customer Information Form", "Icon-anchored form layout where field icons morph and animate upon input focus.");

// ---------------------------------------------------------
// VARIANT 17: Progressive Disclosure
// ---------------------------------------------------------
const code17 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Phone, ChevronDown, ArrowRight } from 'lucide-react';

export function CustomerInformation17({ data }: { data?: any }) {
  const [email, setEmail] = useState('emma.watson@example.com');
  const [name, setName] = useState('Emma Watson');
  const [phone, setPhone] = useState('+1 (555) 789-0123');
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Disclosure Checkout Form
        </h2>

        <div className="space-y-5">
          {/* Primary Required Fields */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address (Required)</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name (Required)</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
              <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          {/* Toggle Button for Secondary Fields */}
          <button
            type="button"
            onClick={() => setShowSecondary(!showSecondary)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showSecondary ? 'Hide Optional Preferences' : '+ Add phone number & notification options'}</span>
            <motion.div animate={{ rotate: showSecondary ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          {/* Secondary Fields Expanded via Accordion */}
          <AnimatePresence>
            {showSecondary && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-5 pt-2"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Phone (Optional)</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
                    />
                    <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation17;`;

createVariant(17, code17, "Progressive Disclosure Customer Form", "Clean customer form that expands secondary contact preferences via smooth accordion transition.");

// ---------------------------------------------------------
// VARIANT 18: Side Profile + Form
// ---------------------------------------------------------
const code18 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Award, ArrowRight } from 'lucide-react';

export function CustomerInformation18({ data }: { data?: any }) {
  const [email, setEmail] = useState('lucas.scott@example.com');
  const [name, setName] = useState('Lucas Scott');
  const [phone, setPhone] = useState('+1 (555) 890-1234');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-100">
        {/* Floating Perks Side Panel */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="md:col-span-5 bg-gradient-to-br from-cyan-900/40 to-slate-950 p-6 rounded-2xl border border-cyan-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Member Rewards</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Earn 250 loyalty points on this transaction by confirming your registered details.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-semibold">
            Free Express Shipping Unlocked
          </div>
        </motion.div>

        {/* Form Container */}
        <div className="md:col-span-7 space-y-5">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3">Contact Details</h2>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Phone Number</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed to Shipping <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation18;`;

createVariant(18, code18, "Side Profile & Perks Customer Section", "Split customer form with floating membership perks card and parallax side panel motion.");

// ---------------------------------------------------------
// VARIANT 19: Minimal Monochrome
// ---------------------------------------------------------
const code19 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight } from 'lucide-react';

export function CustomerInformation19({ data }: { data?: any }) {
  const [email, setEmail] = useState('nathan.drake@architect.com');
  const [name, setName] = useState('Nathan Drake');
  const [phone, setPhone] = useState('+1 (555) 901-2345');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[SYS_REF: 019]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">CUSTOMER_IDENTITY</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">MINIMAL ARCHITECTURAL</span>
        </div>

        {/* Animated Line Divider */}
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
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">01 // FULL_NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">02 // EMAIL_ADDRESS</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">03 // CONTACT_PHONE</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
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

export default CustomerInformation19;`;

createVariant(19, code19, "Minimal Monochrome Customer Form", "Architectural monochrome layout featuring animated line-drawing dividers and high-contrast typography.");

// ---------------------------------------------------------
// VARIANT 20: Award-Style Hybrid
// ---------------------------------------------------------
const code20 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export function CustomerInformation20({ data }: { data?: any }) {
  const [email, setEmail] = useState('alex.vance@award.design');
  const [name, setName] = useState('Alex Vance');
  const [phone, setPhone] = useState('+1 (555) 019-2837');

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-slate-100 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Award-Level Hybrid Showcase
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Customer Information</h2>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Guaranteed Encrypted Checkout
          </span>
        </div>

        <div className="relative z-10 mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Customer Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-4" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Phone Contact</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-4" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address for Notifications</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-4" />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Order tracking updates will be dispatched instantly</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>Proceed to Shipping Step</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation20;`;

createVariant(20, code20, "Award-Winning Hybrid Customer Form", "Luxury hybrid checkout layout featuring magnetic interactions, decorative SVG accents, and multi-stage entrance animations.");

console.log('Done writing variants 2 to 20');
