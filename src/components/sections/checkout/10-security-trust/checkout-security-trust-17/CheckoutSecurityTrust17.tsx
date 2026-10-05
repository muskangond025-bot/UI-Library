import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, RefreshCw, CheckCircle2, ChevronDown, Sparkles, Shield, HeartHandshake } from 'lucide-react';

export function CheckoutSecurityTrust17({ data }: { data?: any }) {
  const [tickKey, setTickKey] = useState(0);
  const [verifying, setVerifying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleReplay = () => {
    setVerifying(true);
    setTickKey((prev) => prev + 1);
    setTimeout(() => setVerifying(false), 700);
  };

  const guarantees = [
    { title: 'Damaged Item Replacement', desc: 'Instant replacement dispatched if items arrive broken.' },
    { title: 'Lost Package Coverage', desc: '100% full money-back refund for lost carrier shipments.' },
    { title: 'As-Described Guarantee', desc: 'No-hassle 30-day return policy if expectation differs.' }
  ];

  return (
    <motion.div 
      onViewportEnter={() => setTickKey((prev) => prev + 1)}
      viewport={{ once: false, amount: 0.4 }}
      className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center relative overflow-hidden"
    >
      {/* Top Header Actions */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-mono text-emerald-400 font-extrabold uppercase tracking-widest">
            AUTHENTICATED PROTECTION
          </span>
        </div>
        <button
          onClick={handleReplay}
          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold border border-slate-700 transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${verifying ? 'animate-spin' : ''}`} />
          Re-Tick Animation
        </button>
      </div>

      {/* Interactive Animated SVG Checkmark Icon */}
      <div 
        onClick={handleReplay}
        className="relative w-20 h-20 mx-auto my-4 cursor-pointer flex items-center justify-center group"
      >
        {/* Pulsing Ripple Aura Ring */}
        <motion.div
          key={`ring-${tickKey}`}
          initial={{ scale: 0.8, opacity: 0.9 }}
          animate={{ scale: [0.8, 1.4, 1.2], opacity: [0.9, 0, 0] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 border border-emerald-400/40 pointer-events-none"
        />

        {/* Outer Icon Badge Circle */}
        <motion.div 
          key={`badge-${tickKey}`}
          initial={{ scale: 0.6, rotate: -30 }}
          whileInView={{ scale: [0.6, 1.15, 1], rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 350, damping: 20 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 via-emerald-600/30 to-teal-500/20 text-emerald-400 border-2 border-emerald-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.35)] relative"
        >
          {/* SVG Animated Checkmark Path */}
          <svg className="w-10 h-10 overflow-visible" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <motion.path 
              key={`path-${tickKey}`}
              d="M4.5 12.75l4.5 4.5L19.5 6" 
              strokeWidth="3.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: [0, 1], opacity: [0, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(16, 185, 129, 0.8))"
              }}
            />
          </svg>
        </motion.div>
      </div>

      <span className="text-xs font-mono text-emerald-400 font-bold block mb-1 uppercase tracking-wider">
        BUYER PROTECTION ACTIVE
      </span>
      <h3 className="text-2xl font-extrabold text-white mb-2">100% Satisfaction Guarantee</h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto mb-5 leading-relaxed">
        If your order is damaged, lost in transit, or not as described, you are covered by our full purchase refund guarantee.
      </p>

      {/* Expandable Guarantees Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 transition-all hover:bg-emerald-500/20 cursor-pointer active:scale-95"
      >
        <HeartHandshake className="w-4 h-4" />
        <span>{showDetails ? 'Hide Coverage Policy' : 'View Covered Protection Terms'}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
      </button>

      {/* Expandable Protection Grid */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-800/80 pt-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {guarantees.map((g, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{g.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{g.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default CheckoutSecurityTrust17;
