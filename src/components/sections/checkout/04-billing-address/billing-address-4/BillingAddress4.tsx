import React, { useState } from 'react';
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
          className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between mb-6 ${
            sameAsShipping ? 'bg-violet-950/40 border-violet-500/50' : 'bg-neutral-950 border-neutral-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
              sameAsShipping ? 'bg-violet-600 border-violet-500 text-white' : 'border-neutral-700'
            }`}>
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

export default BillingAddress4;