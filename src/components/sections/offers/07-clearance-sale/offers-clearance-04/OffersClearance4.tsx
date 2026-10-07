import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export function OffersClearance4() {
  const [copied, setCopied] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const couponCode = 'SUDOCLEAR90';

  const handleExecute = () => {
    setUnlocked(true);
  };

  const copyCode = () => {
    if (!unlocked) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#040905] text-emerald-400 rounded-3xl border border-emerald-900/60 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Matrix Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b_1px,transparent_1px),linear-gradient(to_bottom,#064e3b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>DEVELOPER CLI TERMINAL CONSOLE THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-teal-300 tracking-tight font-mono">
          Developer CLI Console Clearance
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Execute root clearance command in terminal prompt below to unlock 90% developer discount code.
        </p>
      </div>

      {/* Main Terminal Window */}
      <div className="w-full max-w-xl relative z-10">
        <div className="relative bg-slate-950 rounded-2xl border-2 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.25)] space-y-5 text-left overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="bg-emerald-950/80 px-4 py-3 border-b border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-emerald-300 font-bold ml-2">bash -- root@clearance:~</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400/70 uppercase">v2.4.0 CLI</span>
          </div>

          {/* Terminal Body Content */}
          <div className="p-6 sm:p-8 space-y-4 font-mono text-xs sm:text-sm">
            <div className="text-emerald-500/80">
              <p># Clearance System Liquidation Protocol</p>
              <p># Status: ALL WAREHOUSE OVERSTOCK READY FOR EXTRACTION</p>
            </div>

            <div className="space-y-1">
              <p className="text-white font-bold flex items-center gap-2">
                <span className="text-emerald-400">$</span> sudo clearance --unlock-discount 90 --force
              </p>
              {unlocked && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-300"
                >
                  [OK] Command executed. Discount 90% unlocked successfully.
                </motion.p>
              )}
            </div>

            {/* Output Box */}
            <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-1 shadow-inner">
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
                ROOT PROMO CIPHER
              </span>
              <div className="text-2xl sm:text-4xl font-black text-white tracking-widest">
                {unlocked ? couponCode : '• • • • • • • •'}
              </div>
            </div>

            {/* Terminal Actions */}
            <div className="pt-2 font-sans">
              {!unlocked ? (
                <button
                  onClick={handleExecute}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 active:scale-95 transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>EXECUTE ROOT CLEARANCE COMMAND</span>
                </button>
              ) : (
                <button
                  onClick={copyCode}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 active:scale-95 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'CLI CIPHER COPIED!' : `COPY CIPHER: ${couponCode}`}</span>
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Root CLI Authentication Clearance Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance4;
