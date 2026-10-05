import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">BIOMETRIC PASSKEY CONCEPT</span>
        <h3 className="text-xl font-bold text-white">Tokenized Authentication</h3>
      </div>

      <div className="relative w-20 h-20 mx-auto flex items-center justify-center mb-4">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 border border-emerald-500/50"
        />
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-emerald-500/50 flex items-center justify-center text-emerald-400 relative z-10">
          <Fingerprint className="w-8 h-8" />
        </div>
      </div>

      <p className="text-xs font-mono text-emerald-300 font-bold">PASSKEY VERIFIED • TOKEN: #TK-8842-SEC</p>
    </div>
  );
}
export default CheckoutSecurityTrust18;
