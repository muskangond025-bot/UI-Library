import React, { useState } from 'react';
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

export default BillingAddress8;