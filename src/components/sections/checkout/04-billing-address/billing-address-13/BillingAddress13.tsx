import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Sparkles, ArrowRight } from 'lucide-react';

export function BillingAddress13({ data }: { data?: any }) {
  const [street, setStreet] = useState('999 Glass Tower Ave');
  const [cityZip, setCityZip] = useState('Chicago, IL 60601');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-purple-600/15 rounded-full blur-2xl pointer-events-none"
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Glassmorphic Financial UI
            </div>
            <h2 className="text-2xl font-bold text-white">Billing Identity Panel</h2>
          </div>
          <CreditCard className="w-5 h-5 text-purple-400" />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Statement Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">City & ZIP Code</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-400 transition"
            />
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
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

export default BillingAddress13;