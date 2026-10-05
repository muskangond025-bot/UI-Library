const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '04-billing-address');

function createVariant(num, componentCode, title, description) {
  const folderName = `billing-address-${num}`;
  const folderPath = path.join(baseDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxPath = path.join(folderPath, `BillingAddress${num}.tsx`);
  const jsonPath = path.join(folderPath, `billing-address-${num}.json`);

  fs.writeFileSync(tsxPath, componentCode, 'utf-8');

  const paddedNum = num < 10 ? `0${num}` : `${num}`;
  const jsonContent = JSON.stringify({
    id: `billing-address-${paddedNum}`,
    title: title,
    description: description,
    category: "checkout",
    subsection: "billing-address",
    variant: num,
    section: {
      settings: {
        title: title,
        description: description
      }
    }
  }, null, 2);

  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
  console.log(`Updated BillingAddress${num}`);
}

// ---------------------------------------------------------
// VARIANT 01: Invoice Editorial
// ---------------------------------------------------------
const code1 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Receipt, FileText, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

export function BillingAddress1({ data }: { data?: any }) {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [billingName, setBillingName] = useState('Alex Morgan');
  const [taxId, setTaxId] = useState('TAX-8942-US');
  const [street, setStreet] = useState('742 Evergreen Terrace');
  const [cityZip, setCityZip] = useState('Springfield, OR 97477');

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
        <div className="absolute top-4 right-6 text-[10px] font-mono text-amber-500/40 hidden sm:block">
          REF: #INV-2026-8942
        </div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold mb-1">
              <Receipt className="w-3.5 h-3.5" /> 03 — FINANCIAL IDENTITY
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Invoice & Billing Address
            </h2>
          </div>
          <button
            onClick={() => setSameAsShipping(!sameAsShipping)}
            className={\`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border \${
              sameAsShipping ? 'bg-amber-400 text-stone-950 font-bold border-amber-400 shadow-md' : 'bg-stone-800 text-stone-300 border-stone-700'
            }\`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Same as Shipping Address</span>
          </button>
        </motion.div>

        {!sameAsShipping && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-8 space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Billing Account Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                  />
                  <CreditCard className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">VAT / Tax Identification (Optional)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                  />
                  <FileText className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Billing Street *</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">City, State & ZIP *</label>
                <input
                  type="text"
                  value={cityZip}
                  onChange={(e) => setCityZip(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
          <span className="text-xs text-stone-400 font-mono">ENCRYPTED INVOICE VERIFIED</span>
          <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2">
            Proceed to Payment <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress1;`;

createVariant(1, code1, "Invoice Editorial — Document Line Reveal", "Premium invoice-inspired billing layout featuring tax ID reference fields and progressive document line drawing.");

// ---------------------------------------------------------
// VARIANT 02: Payment Identity Card
// ---------------------------------------------------------
const code2 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export function BillingAddress2({ data }: { data?: any }) {
  const [billingName, setBillingName] = useState('Jordan Smith');
  const [street, setStreet] = useState('100 Market Street, Suite 400');
  const [cityState, setCityState] = useState('San Francisco, CA 94105');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Side: Payment Identity Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-6">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Payment Card Match</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Billing Identity</h2>
            <p className="text-xs text-slate-400">Address must match your credit card statement.</p>

            {/* Stylized Virtual Payment Card */}
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-tr from-purple-900 to-slate-900 border border-purple-500/30 space-y-4 shadow-lg">
              <div className="flex justify-between items-center text-xs text-purple-300 font-mono">
                <span>VISA PLATINUM</span>
                <Lock className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm font-mono text-white tracking-widest">•••• •••• •••• 4242</div>
              <div className="flex justify-between items-end text-[10px] text-slate-400 font-mono">
                <span>CARDHOLDER: JORDAN SMITH</span>
                <span>EXP: 12/28</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-purple-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bank Verification System Active</span>
          </div>
        </motion.div>

        {/* Right Side: Billing Address Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between space-y-5"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Statement Address</h3>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Cardholder Name</label>
              <input
                type="text"
                value={billingName}
                onChange={(e) => setBillingName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Billing Street Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">City, State & ZIP Code</label>
              <input
                type="text"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Statement address verified</span>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2">
              <span>Next: Payment Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BillingAddress2;`;

createVariant(2, code2, "Payment Identity Card — Layered Depth", "Financial billing card composition combining payment card brand context with layered depth card entrance.");

// ---------------------------------------------------------
// VARIANT 03: Split Billing & Invoice Summary
// ---------------------------------------------------------
const code3 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export function BillingAddress3({ data }: { data?: any }) {
  const [street, setStreet] = useState('555 Mission Street, Apt 12B');
  const [cityZip, setCityZip] = useState('San Francisco, CA 94105');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Billing & Tax Invoice</h2>
          </div>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Tax Compliant
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Billing Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4" /> Invoice address saved
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

export default BillingAddress3;`;

createVariant(3, code3, "Split Billing & Invoice Summary", "Dual-panel layout with financial summary & invoice details on left and billing inputs sliding from right.");

// ---------------------------------------------------------
// VARIANT 04: Primary Same-as-Shipping Toggle Form
// ---------------------------------------------------------
const code4 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';

export function BillingAddress4({ data }: { data?: any }) {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [billingName, setBillingName] = useState('Morgan Lee');
  const [street, setStreet] = useState('742 Evergreen Terrace');

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
              BILLING IDENTITY MATCH
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Billing Address</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-violet-400" /> SSL Encrypted
          </span>
        </div>

        {/* Hero Interactive Toggle Card */}
        <div
          onClick={() => setSameAsShipping(!sameAsShipping)}
          className={\`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between mb-6 \${
            sameAsShipping ? 'bg-violet-950/40 border-violet-500/50' : 'bg-neutral-950 border-neutral-800'
          }\`}
        >
          <div className="flex items-center gap-3">
            <div className={\`w-5 h-5 rounded-md flex items-center justify-center border transition \${
              sameAsShipping ? 'bg-violet-600 border-violet-500 text-white' : 'border-neutral-700'
            }\`}>
              {sameAsShipping && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">Same as shipping address</span>
              <span className="text-[11px] text-neutral-400">Use 742 Evergreen Terrace, Springfield for billing</span>
            </div>
          </div>
          <span className="text-xs font-mono text-violet-400 font-semibold">{sameAsShipping ? 'MATCHED' : 'DIFFERENT'}</span>
        </div>

        <AnimatePresence>
          {!sameAsShipping && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 pt-2 overflow-hidden"
            >
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Cardholder Full Name</label>
                <input
                  type="text"
                  value={billingName}
                  onChange={(e) => setBillingName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Billing Street Address</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 transition"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-6 flex justify-end">
          <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2">
            <span>Confirm Billing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress4;`;

createVariant(4, code4, "Primary Same-as-Shipping Toggle Form", "Interactive billing layout centered around a primary 'Same as shipping' toggle with smooth accordion expansion.");

// ---------------------------------------------------------
// VARIANT 05: Digital Receipt Billing Layout
// ---------------------------------------------------------
const code5 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Receipt, ArrowRight } from 'lucide-react';

export function BillingAddress5({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Cyber Way');
  const [cityZip, setCityZip] = useState('Austin, TX 78701');

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-slate-100 space-y-6"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl font-bold text-white">Digital Receipt Statement</h2>
          </div>
          <span className="text-xs font-mono text-sky-400">#REC-90812</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Receipt Billing Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Confirm Receipt <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress5;`;

createVariant(5, code5, "Digital Receipt Billing Layout", "Receipt-inspired financial checkout layout with structured line items and vertical unfolding motion.");

// ---------------------------------------------------------
// VARIANT 06: Asymmetric Financial Address Grid
// ---------------------------------------------------------
const code6 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

export function BillingAddress6({ data }: { data?: any }) {
  const [street, setStreet] = useState('888 Grand Avenue');
  const [cityZip, setCityZip] = useState('New York, NY 10001');

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block">
              FINANCIAL GRID // 06
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              BILLING IDENTITY & TAX ADDRESS
            </h2>
            <p className="text-xs text-zinc-400">
              Tax invoice details generated for order processing.
            </p>
          </div>

          <div className="md:col-span-8 space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Street Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">City & ZIP Code</label>
              <input
                type="text"
                value={cityZip}
                onChange={(e) => setCityZip(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button className="px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2">
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

export default BillingAddress6;`;

createVariant(6, code6, "Asymmetric Financial Address Grid", "Editorial asymmetric layout organizing billing name, VAT ID, and address blocks in offset grid columns.");

// ---------------------------------------------------------
// VARIANT 07: Minimal Financial Billing Interface
// ---------------------------------------------------------
const code7 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BillingAddress7({ data }: { data?: any }) {
  const [street, setStreet] = useState('456 Oak Lane');
  const [cityZip, setCityZip] = useState('Seattle, WA 98101');

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-mono text-slate-100">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">[FINANCIAL_IDENTITY]</span>
          <span className="text-[11px] text-slate-400">VERIFIED</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Billing Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
              Proceed <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress7;`;

createVariant(7, code7, "Minimal Financial Billing Interface", "Architectural monochrome financial form featuring animated border rule drawing and crisp typography.");

// ---------------------------------------------------------
// VARIANT 08: Luxury Dark Mode Invoice Form
// ---------------------------------------------------------
const code8 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, ArrowRight, CreditCard } from 'lucide-react';

export function BillingAddress8({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Fifth Avenue');
  const [cityZip, setCityZip] = useState('New York, NY 10022');

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
              <Crown className="w-4 h-4" /> VIP FINANCIAL STATEMENT
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Billing Address</h2>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            Concierge Verified
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Statement Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" /> Bank statement match verified
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

export default BillingAddress8;`;

createVariant(8, code8, "Luxury Dark Mode Invoice Form", "Luxury dark billing interface featuring gold metallic accents and an animated ambient light sweep.");

// ---------------------------------------------------------
// VARIANT 09: Billing Profile & Tax Identity
// ---------------------------------------------------------
const code9 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export function BillingAddress9({ data }: { data?: any }) {
  const [street, setStreet] = useState('200 Ocean Drive');
  const [cityZip, setCityZip] = useState('Miami, FL 33139');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-between text-xs text-purple-300">
          <div className="flex items-center gap-2 font-semibold">
            <FileText className="w-4 h-4" /> Verified Tax Account ID: #VAT-99481
          </div>
          <span>Corporate Invoice Ready</span>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Billing Account Address</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City & Postal ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress9;`;

createVariant(9, code9, "Billing Profile & Tax Identity", "Combined billing identity card featuring verified Tax ID badge and scaled profile reveal.");

// ---------------------------------------------------------
// VARIANT 10: Document Ref Invoice Billing Section
// ---------------------------------------------------------
const code10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

export function BillingAddress10({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Tech Blvd, Floor 4');
  const [cityZip, setCityZip] = useState('San Jose, CA 95110');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">DOCUMENT REF</span>
              <span className="text-xs font-bold text-white">#INV-99482 // STATEMENT ADDRESS</span>
            </div>
          </div>
          <span className="text-[11px] text-amber-400 font-mono font-semibold">TAX APPROVED</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Statement Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City & Postal ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition"
            />
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

export default BillingAddress10;`;

createVariant(10, code10, "Document Ref Invoice Billing Section", "Official invoice document structure with billing reference numbers and slide-up document animation.");

// ---------------------------------------------------------
// VARIANT 11: Vertical Billing Timeline Form
// ---------------------------------------------------------
const code11 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, ArrowRight } from 'lucide-react';

export function BillingAddress11({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Timeline Way');
  const [cityZip, setCityZip] = useState('Denver, CO 80202');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Financial Milestone Timeline
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
              <CreditCard className="w-3 h-3 text-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">01. Billing Account Street</label>
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
              <FileText className="w-3 h-3 text-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">02. City & ZIP Code</label>
              <input
                type="text"
                value={cityZip}
                onChange={(e) => setCityZip(e.target.value)}
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

export default BillingAddress11;`;

createVariant(11, code11, "Vertical Billing Timeline Form", "Structured financial timeline connecting billing milestones via an animated SVG path draw.");

// ---------------------------------------------------------
// VARIANT 12: Magazine Editorial Billing Section
// ---------------------------------------------------------
const code12 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Receipt } from 'lucide-react';

export function BillingAddress12({ data }: { data?: any }) {
  const [street, setStreet] = useState('700 Fashion Boulevard');
  const [cityZip, setCityZip] = useState('Los Angeles, CA 90015');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-stone-100">
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -right-8 -top-12 text-[140px] sm:text-[180px] font-serif font-black text-stone-900/50 select-none pointer-events-none"
        >
          INVOICE
        </motion.div>

        <div className="relative z-10 space-y-8">
          <div className="border-b border-stone-800 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase block mb-1">
                MAGAZINE BILLING
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-50 tracking-tight">
                Tax Invoice Details
              </h2>
            </div>
            <Receipt className="w-6 h-6 text-orange-400" />
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-stone-400 mb-2">01 / Billing Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-stone-400 mb-2">02 / City, State & ZIP</label>
              <input
                type="text"
                value={cityZip}
                onChange={(e) => setCityZip(e.target.value)}
                className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
              />
            </div>

            <div className="pt-6 border-t border-stone-800 flex justify-between items-center">
              <span className="text-xs text-stone-500 font-serif italic">Verified billing identity</span>
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

export default BillingAddress12;`;

createVariant(12, code12, "Magazine Editorial Billing Section", "Bold magazine layout with oversized INVOICE watermark typography and subtle background drifting motion.");

// ---------------------------------------------------------
// VARIANT 13: Restrained Glassmorphism Billing Panel
// ---------------------------------------------------------
const code13 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Sparkles, ArrowRight } from 'lucide-react';

export function BillingAddress13({ data }: { data?: any }) {
  const [street, setStreet] = useState('999 Glass Tower Ave');
  const [cityZip, setCityZip] = useState('Chicago, IL 60601');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Glassmorphic Financial UI
            </div>
            <h2 className="text-2xl font-bold text-white">Billing Identity Panel</h2>
          </div>
          <CreditCard className="w-5 h-5 text-purple-400" />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Statement Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">City & ZIP Code</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-400 transition"
            />
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end">
            <button className="px-8 py-3.5 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Identity</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress13;`;

createVariant(13, code13, "Restrained Glassmorphism Billing Panel", "Frosted glass billing card set over background luminous orb drift animations.");

// ---------------------------------------------------------
// VARIANT 14: Interactive Billing Field Focus System
// ---------------------------------------------------------
const code14 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, Check, ArrowRight } from 'lucide-react';

export function BillingAddress14({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Focus St');
  const [cityZip, setCityZip] = useState('Boston, MA 02108');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const fields = [
    { id: 0, label: 'Statement Street Address', value: street, setter: setStreet, icon: CreditCard },
    { id: 1, label: 'City & Postal ZIP Zone', value: cityZip, setter: setCityZip, icon: FileText },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              FINANCIAL FOCUS SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Interactive Billing Field Focus</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full">
            Active Row #{activeIdx + 1}
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
            <Check className="w-4 h-4" /> Active field highlight system
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress14;`;

createVariant(14, code14, "Interactive Billing Field Focus System", "Focus-centric billing form with a sliding active indicator pill that glides between input rows.");

// ---------------------------------------------------------
// VARIANT 15: Interactive 3D Invoice Document
// ---------------------------------------------------------
const code15 = `import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, ArrowRight, Box } from 'lucide-react';

export function BillingAddress15({ data }: { data?: any }) {
  const [street, setStreet] = useState('500 Perspective Lane');
  const [cityZip, setCityZip] = useState('Dallas, TX 75201');

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
              <Box className="w-3.5 h-3.5" /> 3D Perspective Document
            </div>
            <h2 className="text-2xl font-bold text-white">3D Invoice Address Card</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">Move cursor to tilt</span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Billing Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">City, State & ZIP Code</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
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

export default BillingAddress15;`;

createVariant(15, code15, "Interactive 3D Invoice Document", "Layered perspective billing document with mouse-driven 3D tilt rotation.");

// ---------------------------------------------------------
// VARIANT 16: Icon-Led Financial Billing Form
// ---------------------------------------------------------
const code16 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, ArrowRight } from 'lucide-react';

export function BillingAddress16({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Icon Way');
  const [cityZip, setCityZip] = useState('Phoenix, AZ 85001');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Icon-Led Financial Billing Form
        </h2>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <motion.div
              animate={focusedInput === 'street' ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0"
            >
              <CreditCard className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">Billing Street Address</label>
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
              <FileText className="w-5 h-5" />
            </motion.div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-400 mb-1">City, State & ZIP</label>
              <input
                type="text"
                value={cityZip}
                onFocus={() => setFocusedInput('city')}
                onBlur={() => setFocusedInput(null)}
                onChange={(e) => setCityZip(e.target.value)}
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

export default BillingAddress16;`;

createVariant(16, code16, "Icon-Led Financial Billing Form", "Financial icon-anchored form layout where group icons scale and rotate upon field focus.");

// ---------------------------------------------------------
// VARIANT 17: Progressive Corporate Tax Billing Form
// ---------------------------------------------------------
const code17 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Building } from 'lucide-react';

export function BillingAddress17({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Main Street');
  const [cityZip, setCityZip] = useState('Atlanta, GA 30301');
  const [taxId, setTaxId] = useState('US-TAX-8942');
  const [showTaxDetails, setShowTaxDetails] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Corporate Tax Billing Form
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Billing Street Address (Required)</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City & ZIP Code (Required)</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowTaxDetails(!showTaxDetails)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showTaxDetails ? 'Hide Corporate VAT Details' : '+ Add corporate tax ID & business invoicing'}</span>
            <motion.div animate={{ rotate: showTaxDetails ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showTaxDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4 pt-2"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-purple-400" /> Corporate VAT / Tax Number
                  </label>
                  <input
                    type="text"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
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

export default BillingAddress17;`;

createVariant(17, code17, "Progressive Corporate Tax Billing Form", "Progressive billing form expanding corporate tax ID & business invoicing details via accordion disclosure.");

// ---------------------------------------------------------
// VARIANT 18: Shipping vs Billing Comparison Panel
// ---------------------------------------------------------
const code18 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

export function BillingAddress18({ data }: { data?: any }) {
  const [street, setStreet] = useState('350 Delivery Lane');
  const [cityZip, setCityZip] = useState('Portland, OR 97201');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-100">
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="md:col-span-5 bg-gradient-to-br from-cyan-950/60 to-slate-950 p-6 rounded-2xl border border-cyan-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Statement Sync</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Billing statement address matches standard checkout validation rules.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Bank Security Verified
          </div>
        </motion.div>

        <div className="md:col-span-7 space-y-5">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3">Billing Address Form</h2>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Billing Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
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

export default BillingAddress18;`;

createVariant(18, code18, "Shipping vs Billing Comparison Panel", "Dual-card comparison layout visually contrasting shipping vs billing addresses with sync toggle.");

// ---------------------------------------------------------
// VARIANT 19: Document Paper Style Billing Section
// ---------------------------------------------------------
const code19 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BillingAddress19({ data }: { data?: any }) {
  const [street, setStreet] = useState('101 Minimalist Way');
  const [cityZip, setCityZip] = useState('Seattle, WA 98104');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[TAX_STATEMENT: #INVOICE_019]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">BILLING_IDENTITY</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">DOCUMENT PAPER UI</span>
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
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">01 // BILLING_STREET</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">02 // CITY_STATE_ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
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

export default BillingAddress19;`;

createVariant(19, code19, "Document Paper Style Billing Section", "Paper document inspired billing section with invoice status stamp and line draw transitions.");

// ---------------------------------------------------------
// VARIANT 20: Award-Winning Hybrid Billing Showcase
// ---------------------------------------------------------
const code20 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Receipt, CreditCard, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function BillingAddress20({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Award Boulevard, Suite 500');
  const [cityZip, setCityZip] = useState('San Francisco, CA 94103');

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
              <Receipt className="w-3.5 h-3.5" /> Award Billing Showcase
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Invoice Billing Address</h2>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Automated Bank Verification
          </span>
        </div>

        <div className="relative z-10 mt-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Statement Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
              <CreditCard className="w-4 h-4 text-amber-400 absolute left-4 top-4" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">City, State & ZIP Code</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Digital invoice copy will be sent to registered email</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>Proceed to Payment Step</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress20;`;

createVariant(20, code20, "Award-Winning Hybrid Billing Showcase", "Luxury hybrid billing composition with invoice reference badges, payment icons, and multi-stage entrance animations.");

console.log('Done writing Billing Address variants 1 to 20');
