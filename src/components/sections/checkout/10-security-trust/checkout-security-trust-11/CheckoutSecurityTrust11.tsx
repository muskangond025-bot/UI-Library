import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust11({ data }: { data?: any }) {
  const [score, setScore] = useState(100);
  const [scanning, setScanning] = useState(false);

  const handleRescan = () => {
    setScanning(true);
    setScore(0);
    setTimeout(() => {
      setScore(100);
      setScanning(false);
    }, 1200);
  };

  const checkItems = [
    { label: '256-Bit SSL Encryption', status: 'VERIFIED' },
    { label: 'PCI-DSS Level 1 Gateway', status: 'VERIFIED' },
    { label: 'AI Real-Time Fraud Shield', status: 'VERIFIED' },
    { label: 'Money-Back Refund Protection', status: 'VERIFIED' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6 flex justify-between items-center pb-4 border-b border-slate-800">
        <div className="text-left">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">LIVE SAFETY METER</span>
          <h3 className="text-xl font-bold text-white">Security Rating Scanner</h3>
        </div>
        <button 
          onClick={handleRescan}
          disabled={scanning}
          className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-400 border border-slate-700 transition-colors flex items-center gap-1.5"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin' : ''}`} />
          {scanning ? 'Scanning...' : 'Re-Scan Session'}
        </button>
      </div>

      {/* Animated SVG Ring Meter */}
      <div className="relative w-44 h-44 mx-auto flex items-center justify-center mb-6">
        <svg className="w-full h-full transform -rotate-90 overflow-visible" viewBox="0 0 100 100">
          {/* Background Track Circle */}
          <circle 
            cx="50" cy="50" r="42" 
            className="text-slate-800" 
            strokeWidth="8" 
            stroke="currentColor" 
            fill="none" 
          />
          {/* Animated Glowing Stroke Path */}
          <motion.circle 
            cx="50" cy="50" r="42" 
            className="text-emerald-400"
            strokeWidth="8" 
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="none" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: score / 100 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.7))"
            }}
          />
        </svg>

        {/* Center Score Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            key={score}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-extrabold font-mono text-white tracking-tight"
          >
            {score}%
          </motion.span>
          <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest mt-0.5">
            {scanning ? 'VERIFYING...' : 'PROTECTED'}
          </span>
        </div>
      </div>

      {/* Verified Safety Checks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {checkItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">{item.label}</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust11;
