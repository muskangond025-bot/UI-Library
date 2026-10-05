import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust12({ data }: { data?: any }) {
  const [unstacked, setUnstacked] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const badges = [
    { title: 'PCI-DSS LEVEL 1 COMPLIANCE', desc: 'Highest global merchant payment standard', bg: 'bg-emerald-950/90 border-emerald-500/50 hover:border-emerald-400' },
    { title: '256-BIT SSL TLS ENCRYPTION', desc: 'End-to-end encrypted web transmission', bg: 'bg-indigo-950/90 border-indigo-500/50 hover:border-indigo-400' },
    { title: 'BUYER PROTECTION PROMISE', desc: '100% Money-back refund guarantee', bg: 'bg-teal-950/90 border-teal-500/50 hover:border-teal-400' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">INTERACTIVE SECURITY STACK</span>
        <h3 className="text-xl font-bold text-white">Security Badges Stack</h3>
        <button 
          onClick={() => setUnstacked(!unstacked)} 
          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-1 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 transition-all hover:bg-emerald-500/20 active:scale-95"
        >
          {unstacked ? <><ChevronUp className="w-3.5 h-3.5" /> Collapse Badges</> : <><Layers className="w-3.5 h-3.5" /> Click Card Stack to Unstack ({badges.length})</>}
        </button>
      </div>

      <div 
        onClick={() => setUnstacked(!unstacked)}
        className="cursor-pointer py-2"
      >
        <div className="relative flex flex-col items-center w-full max-w-md mx-auto">
          {badges.map((b, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <motion.div
                key={idx}
                animate={{ 
                  marginTop: unstacked ? (idx === 0 ? 0 : 12) : (idx === 0 ? 0 : -60),
                  rotate: unstacked ? 0 : (idx - 1) * -3,
                  scale: unstacked ? 1 : 1 - idx * 0.03,
                  zIndex: unstacked ? 1 : 10 - idx
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 26,
                  delay: idx * 0.02
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (unstacked) {
                    setSelectedIdx(isSelected ? null : idx);
                  } else {
                    setUnstacked(true);
                  }
                }}
                className={`p-5 rounded-2xl border text-left shadow-xl w-full ${b.bg} ${isSelected ? 'ring-2 ring-emerald-400 border-emerald-400' : ''} transition-shadow duration-200`}
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900/60 text-emerald-400 border border-slate-700/50">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">{b.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    VERIFIED ✓
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust12;
