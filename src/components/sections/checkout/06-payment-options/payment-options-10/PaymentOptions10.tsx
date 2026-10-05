import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export function PaymentOptions10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative">
        <div className="flex items-center gap-4 pb-6 border-b border-emerald-500/20 mb-8">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-1">
              10 — SECURITY GUARANTEE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Bank-Grade Security Checkout
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-slate-950/80 border border-emerald-500/20 rounded-2xl">
            <h4 className="font-semibold text-sm text-emerald-400 mb-1 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> 256-Bit SSL Shield
            </h4>
            <p className="text-xs text-slate-400">Your connection is fully encrypted with hardware-level protection.</p>
          </div>
          <div className="p-5 bg-slate-950/80 border border-emerald-500/20 rounded-2xl">
            <h4 className="font-semibold text-sm text-emerald-400 mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Zero Storage Guarantee
            </h4>
            <p className="text-xs text-slate-400">Full card numbers and security codes are never stored on server.</p>
          </div>
        </div>

        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
          <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs" />
          <button className="w-full py-3 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl">Authorize Encrypted Payment</button>
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions10;
