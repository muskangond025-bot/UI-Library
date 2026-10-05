import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">REAL-TIME MONITORING</span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" /> Live Fraud Prevention Status
          </h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
          99.99% SECURE
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
        <div className="space-y-1">
          <p className="font-bold text-white">AI Threat Detection System</p>
          <p className="text-slate-400">Zero active threats detected on this session</p>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-emerald-400"
        />
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust10;
