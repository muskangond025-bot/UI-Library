import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust6({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">PROTECTION PIPELINE</span>
        <h3 className="text-xl font-bold text-white">Security Workflow</h3>
      </div>

      <div className="relative pl-8 space-y-6">
        <svg className="absolute left-3 top-2 bottom-2 w-0.5 h-[80%]" overflow="visible">
          <motion.line 
            x1="0" y1="0" x2="0" y2="100%" 
            stroke="rgb(16, 185, 129)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-500 text-black font-bold text-xs flex items-center justify-center">1</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <span className="font-bold text-white">256-Bit SSL Encryption</span>
            <p className="text-slate-400">Data encrypted prior to transmission</p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-500 text-black font-bold text-xs flex items-center justify-center">2</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-emerald-500/40 text-xs">
            <span className="font-bold text-emerald-300">Tokenized Payment Processing</span>
            <p className="text-slate-400">Card details converted to secure token</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust6;
