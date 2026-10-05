import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export function AccountCouponsOffers5() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Micro Interaction</span>
          <h2 className="text-3xl font-extrabold text-white">Coupon Code Copy Experience</h2>
        </div>

        <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <span className="text-5xl font-black text-emerald-400 tracking-tight block">₹500 OFF</span>
          <p className="text-xs text-slate-400">Applicable on orders above ₹2,499</p>

          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
            <code className="text-xl font-mono font-black text-white tracking-widest">SAVE500</code>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className={'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ' + (copied ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-600 hover:bg-indigo-500 text-white')}
            >
              {copied ? <><Check className="w-4 h-4" /> CODE COPIED</> : <><Copy className="w-4 h-4" /> COPY CODE</>}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers5;
