import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust1({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center relative overflow-hidden">
      {/* Animated Pulse Rings & Radar Ripples */}
      <div className="flex justify-center items-center my-6 relative">
        <motion.div 
          animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-20 h-20 rounded-full bg-emerald-500/30 border border-emerald-400/50"
        />
        <motion.div 
          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
          className="absolute w-20 h-20 rounded-full bg-emerald-400/20 border border-emerald-300/40"
        />

        {/* Floating Animated Shield Badge */}
        <motion.div 
          animate={{ 
            scale: [1, 1.08, 1], 
            rotate: [0, -3, 3, 0],
            boxShadow: [
              "0 0 15px rgba(16, 185, 129, 0.2)",
              "0 0 30px rgba(16, 185, 129, 0.6)",
              "0 0 15px rgba(16, 185, 129, 0.2)"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-400 relative z-10 shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldCheck className="w-8 h-8 text-emerald-300" />
          </motion.div>
        </motion.div>
      </div>

      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
        256-BIT SSL ENCRYPTION VERIFIED
      </span>
      <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">100% Bank-Grade Safe & Secure</h2>
      <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
        Your data is encrypted using military-grade AES 256-bit SSL technology. We never store full credit card details.
      </p>

      <div className="flex flex-wrap justify-center gap-3 text-xs">
        <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5 font-medium">
          <Lock className="w-3.5 h-3.5 text-emerald-400" /> PCI-DSS Level 1
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Money-Back Guarantee
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5 font-medium">
          <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> Instant Fraud Guard
        </span>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust1;
