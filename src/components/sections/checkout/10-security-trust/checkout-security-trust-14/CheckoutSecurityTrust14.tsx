import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, CheckCircle2, ChevronDown, Activity, Sparkles } from 'lucide-react';

export function CheckoutSecurityTrust14({ data }: { data?: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 relative group">
      {/* Background Glowing Ambient Aura */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600/30 via-teal-500/20 to-cyan-500/30 blur-xl pointer-events-none"
      />

      {/* Floating Animated Card */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full p-6 sm:p-7 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl font-sans relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Radar Pulsing Rings around Lock Icon */}
              <motion.span 
                animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl bg-emerald-500/40 pointer-events-none"
              />
              <div className="p-3.5 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] relative">
                <Lock className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ELEVATED SECURITY BANNER
                </span>
                <span className="flex items-center gap-1 text-[10px] text-teal-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE PROTECTED
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                256-Bit End-to-End Encrypted Session
              </h4>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-emerald-400 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95 self-end sm:self-center"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>{expanded ? 'Hide Details' : 'Verify Certificate'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Live Metrics */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-800/80 pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">ENCRYPTION HANDSHAKE</span>
                  <p className="font-mono font-bold text-emerald-400">TLS 1.3 / AES-GCM-256</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">LATENCY PING</span>
                  <p className="font-mono font-bold text-teal-400">14 ms (Direct Mesh Node)</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">FRAUD RISK SCORE</span>
                  <p className="font-mono font-bold text-cyan-400">0.001% (Zero Threat)</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust14;
