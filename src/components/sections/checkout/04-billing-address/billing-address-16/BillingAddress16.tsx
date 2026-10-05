import React, { useState } from 'react';
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

export default BillingAddress16;