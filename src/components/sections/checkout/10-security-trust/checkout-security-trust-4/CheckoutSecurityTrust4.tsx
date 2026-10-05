import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust4({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-5 p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl border border-indigo-800/60 text-white flex flex-col justify-between shadow-2xl"
      >
        <div>
          <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-1">CERTIFIED PROTECTION</span>
          <h3 className="text-2xl font-extrabold mb-2">Checkout Protection Guarantee</h3>
          <p className="text-xs text-indigo-200/80 leading-relaxed">Transactions are protected by AES 256-bit encryption and backed by our money-back guarantee.</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-7 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl"
      >
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Our Trust Commitments</h4>
        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Full refund if your item does not arrive or is damaged</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Encrypted zero-knowledge payment transmission</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>24/7 dedicated customer support response team</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust4;
