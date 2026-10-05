import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust3({ data }: { data?: any }) {
  const tickerItems = [
    { icon: Lock, label: 'AES 256-BIT SSL ENCRYPTED', color: 'text-emerald-400' },
    { icon: ShieldCheck, label: 'PCI-DSS LEVEL 1 CERTIFIED', color: 'text-indigo-400' },
    { icon: CheckCircle2, label: '100% REFUND GUARANTEE', color: 'text-amber-400' },
    { icon: Activity, label: 'REAL-TIME FRAUD MONITOR', color: 'text-teal-400' },
    { icon: Award, label: 'VERIFIED SECURITY PARTNER', color: 'text-cyan-400' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-100 rounded-3xl border border-emerald-500/30 shadow-2xl font-sans relative overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <motion.span 
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="absolute w-4 h-4 rounded-full bg-emerald-400"
            />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            LIVE ENCRYPTED CHECKOUT SESSION
          </span>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold rounded-full">
          STATUS: PROTECTED
        </span>
      </div>

      {/* Infinite Sliding Security Ticker */}
      <div className="relative overflow-hidden py-2 rounded-2xl bg-slate-950/80 border border-slate-800/80">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap w-max"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors shadow-sm"
              >
                <motion.div 
                  animate={{ scale: [1, 1.15, 1] }} 
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                >
                  <IconComp className={`w-4 h-4 ${item.color}`} />
                </motion.div>
                <span className="text-xs font-mono font-bold text-slate-200 tracking-wide">
                  {item.label}
                </span>
                <span className="text-emerald-400 text-xs font-bold ml-1">✓</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[11px] text-slate-400 font-mono">
          🔒 Encrypted using TLS 1.3 socket protocol • Zero payment data stored locally
        </p>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust3;
