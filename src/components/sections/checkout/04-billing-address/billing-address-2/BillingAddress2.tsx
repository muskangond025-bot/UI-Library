import React, { useState } from 'react';
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

export default BillingAddress2;