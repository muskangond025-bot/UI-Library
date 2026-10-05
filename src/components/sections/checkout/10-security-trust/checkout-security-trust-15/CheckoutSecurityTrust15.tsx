import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, Award, Key, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export function CheckoutSecurityTrust15({ data }: { data?: any }) {
  const [active, setActive] = useState(0);
  const items = [
    { 
      icon: Lock, 
      label: 'SSL 256-BIT', 
      tag: 'TLS 1.3 ENCRYPTION',
      desc: 'Military-grade 256-Bit SSL/TLS socket transmission safeguarding credit card data at rest and in transit.',
      metrics: ['2048-Bit RSA Keys', 'SHA-256 Signature', 'PFS Enabled']
    },
    { 
      icon: ShieldCheck, 
      label: 'BUYER PROTECT', 
      tag: '100% MONEY BACK',
      desc: 'Complete purchase coverage with zero-liability protection and guaranteed 30-day quick refund resolution.',
      metrics: ['Dispute Resolution', 'Full Refund Guarantee', 'Fraud Reimbursement']
    },
    { 
      icon: Award, 
      label: 'PCI LEVEL 1', 
      tag: 'TOP MERCHANT RATING',
      desc: 'Certified highest tier payment processing security validated by annual third-party independent audits.',
      metrics: ['Annual On-Site Audit', 'Vulnerability Scanning', 'ISO 27001 Certified']
    }
  ];

  const IconActive = items[active].icon;

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative overflow-hidden">
      <div className="text-center mb-6">
        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
          INTERACTIVE SECURITY SYSTEM
        </span>
        <h3 className="text-xl font-bold text-white">Icon-Led Security Category Selector</h3>
      </div>

      {/* Interactive Tabs Row */}
      <div className="grid grid-cols-3 gap-3 mb-6 relative">
        {items.map((it, idx) => {
          const IconComp = it.icon;
          const isSelected = active === idx;
          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(idx)}
              className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2.5 transition-colors cursor-pointer relative overflow-hidden ${
                isSelected 
                  ? 'bg-slate-900 border-emerald-500/80 text-emerald-400 shadow-lg shadow-emerald-950/50' 
                  : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {/* Animated Glowing Underline / Background Highlight */}
              {isSelected && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent border-b-2 border-emerald-400 pointer-events-none"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <motion.div 
                animate={isSelected ? { scale: [1, 1.2, 1], rotate: [0, -10, 0] } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className={`p-3 rounded-xl ${isSelected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800/60 text-slate-400'}`}
              >
                <IconComp className="w-5 h-5 stroke-[2.5]" />
              </motion.div>

              <span className="text-xs font-extrabold tracking-wide uppercase">{it.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Dynamic Animated Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-left relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-wider">
                {items[active].tag}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              VERIFIED ACTIVE ✓
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            {items[active].desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {items[active].metrics.map((m, mIdx) => (
              <span 
                key={mIdx}
                className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default CheckoutSecurityTrust15;
