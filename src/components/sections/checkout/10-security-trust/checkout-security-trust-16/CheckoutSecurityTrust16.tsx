import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Lock, Sparkles, ExternalLink, Activity, Server, Zap } from 'lucide-react';

export function CheckoutSecurityTrust16({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number | null>(null);

  const seals = [
    { name: 'VISA SECURE', code: 'V-8821', status: 'VERIFIED ONLINE', detail: '3D Secure 2.0 biometric challenge verification active.' },
    { name: 'MASTERCARD ID', code: 'MC-3912', status: 'IDENTITY CHECK', detail: 'Real-time tokenized card identity protection enabled.' },
    { name: 'AMEX SAFEKEY', code: 'AX-9004', status: 'SAFEKEY 2.0', detail: 'Automated fraud risk engine analyzing checkout signature.' },
    { name: 'NORTON VERIFIED', code: 'NT-5501', status: 'DAILY SCANNED', detail: 'Zero malware & active site integrity certificate verified.' },
    { name: 'SSL 256-BIT', code: 'SSL-256', status: 'TLS 1.3 ACTIVE', detail: '256-bit elliptic curve cryptography session in progress.' },
    { name: 'PCI CERTIFIED', code: 'PCI-DSS1', status: 'LEVEL 1 COMPLIANT', detail: 'Highest level global payment card industry compliance.' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative overflow-hidden">
      {/* Laser Scanning Line Animation */}
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30 pointer-events-none z-10"
      />

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
          <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
          <span>REAL-TIME AUDIT MATRIX</span>
        </div>
        <h3 className="text-xl font-extrabold text-white">Security Seal Matrix</h3>
        <p className="text-xs text-slate-400 mt-1">Click any seal to view active verification details</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {seals.map((s, idx) => {
          const isSelected = selected === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(isSelected ? null : idx)}
              className={`p-4 rounded-2xl border text-center transition-all cursor-pointer relative ${
                isSelected 
                  ? 'bg-slate-900 border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-950/80' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400">{s.code}</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-white mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{s.name}</span>
              </div>

              <span className="text-[10px] font-mono font-semibold text-emerald-400 block bg-emerald-500/10 py-0.5 px-2 rounded border border-emerald-500/20">
                {s.status}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Seal Detail Drawer */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-left flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                    ACTIVE SEAL VERIFICATION: {seals[selected].name}
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                    VALID
                  </span>
                </div>
                <p className="text-xs text-slate-200">{seals[selected].detail}</p>
              </div>
              <button 
                onClick={() => setSelected(null)}
                className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutSecurityTrust16;
