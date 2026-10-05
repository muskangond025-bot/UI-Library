import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, CreditCard, QrCode, Lock } from 'lucide-react';

export function PaymentOptions20({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-indigo-500/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center pb-6 border-b border-indigo-900/40 mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold block mb-1">
              20 — AWARD-STYLE EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              Next-Gen Checkout <Sparkles className="w-5 h-5 text-indigo-400" />
            </h2>
          </div>
          <ShieldCheck className="w-7 h-7 text-indigo-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div onClick={() => setSelected('card')} className={`p-6 rounded-2xl border cursor-pointer transition-all ${selected === 'card' ? 'bg-indigo-950/60 border-indigo-500 shadow-xl' : 'bg-slate-900/60 border-slate-800'}`}>
            <CreditCard className="w-6 h-6 text-indigo-400 mb-3" />
            <h3 className="font-bold text-base text-white">Smart Card Gateway</h3>
            <p className="text-xs text-slate-400 mt-1">Instant 0.2s authorization clearance</p>
          </div>
          <div onClick={() => setSelected('upi')} className={`p-6 rounded-2xl border cursor-pointer transition-all ${selected === 'upi' ? 'bg-indigo-950/60 border-indigo-500 shadow-xl' : 'bg-slate-900/60 border-slate-800'}`}>
            <QrCode className="w-6 h-6 text-indigo-400 mb-3" />
            <h3 className="font-bold text-base text-white">Instant UPI Protocol</h3>
            <p className="text-xs text-slate-400 mt-1">Zero-latency peer-to-peer transfer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default PaymentOptions20;
