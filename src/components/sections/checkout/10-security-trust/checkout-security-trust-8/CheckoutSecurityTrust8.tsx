import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust8({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-emerald-500/30 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">VAULT PROTECTION</span>
          <h3 className="text-xl font-bold text-white">Payment Security Vault</h3>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> FULLY SECURED
        </span>
      </div>

      <motion.div 
        whileHover={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)' }}
        className="p-6 rounded-2xl bg-neutral-900 border border-emerald-500/40 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <Lock className="w-8 h-8 text-emerald-400" />
          <div>
            <h4 className="text-base font-extrabold text-white">End-to-End Encrypted</h4>
            <p className="text-xs text-neutral-400">Zero raw card storage on web servers</p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-neutral-950 px-3 py-1.5 rounded-lg border border-emerald-500/30">
          AES-256
        </span>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust8;
