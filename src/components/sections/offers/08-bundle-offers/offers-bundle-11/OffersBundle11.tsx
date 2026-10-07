import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, Play, Shield, Code, Cpu, Download } from 'lucide-react';

export function OffersBundle11() {
  const [executing, setExecuting] = useState(false);
  const [executed, setExecuted] = useState(false);

  const handleRunInstall = () => {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setExecuted(true);
    }, 1800);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-950 text-emerald-400 rounded-3xl border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Matrix Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#052e16_1px,transparent_1px),linear-gradient(to_bottom,#052e16_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30 shadow-inner">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>DEVELOPER CLI TERMINAL BUNDLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-mono">
          sudo bundle --install pro-kit
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
          Developer stack bundle! Get IDE Pro License + AI Copilot Unlimited + Cloud Server Instance at 35% package discount.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-slate-900/90 rounded-2xl border border-emerald-500/40 shadow-2xl overflow-hidden text-left"
        >
          {/* Top Mac-style Control Header */}
          <div className="bg-slate-950 px-4 py-3 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-emerald-400" /> bash — dev-bundle-installer — 80x24
            </span>
            <div className="text-[10px] text-emerald-500/70 uppercase">v2.4.0-stable</div>
          </div>

          {/* Terminal Console Content */}
          <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm font-mono leading-relaxed">
            {/* Command Input */}
            <div className="flex items-start gap-2 text-slate-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span>
                <span className="text-purple-400 font-bold">sudo</span> bundle install --package=<span className="text-amber-300">"dev-pro-stack"</span> --discount=<span className="text-emerald-400">"35%"</span>
              </span>
            </div>

            {/* Package Dependency Matrix */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-500/20 space-y-2.5">
              <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold border-b border-slate-800 pb-1.5 flex justify-between">
                <span>BUNDLE DEPENDENCY</span>
                <span>REGULAR PRICE</span>
              </div>
              <div className="flex justify-between items-center text-slate-200">
                <span className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> @dev/ide-pro-annual
                </span>
                <span className="text-slate-400 line-through">$199.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-200">
                <span className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> @ai/copilot-unlimited
                </span>
                <span className="text-slate-400 line-through">$120.00</span>
              </div>
              <div className="flex justify-between items-center text-slate-200">
                <span className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> @cloud/high-cpu-node
                </span>
                <span className="text-slate-400 line-through">$180.00</span>
              </div>
            </div>

            {/* Price Output Breakdown */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 border-t border-slate-800">
              <div>
                <div className="text-slate-500 text-xs">Total Separately: <span className="line-through">$499.00</span></div>
                <div className="text-emerald-400 font-bold text-lg sm:text-xl flex items-center gap-2">
                  <span>Stack Price: $324.35</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-normal">SAVE $174.65</span>
                </div>
              </div>
            </div>

            {/* Execution Logs */}
            {executing && (
              <div className="space-y-1 text-slate-400 text-xs animate-pulse">
                <div>[INFO] Fetching package manifests from registry...</div>
                <div>[INFO] Verifying GPG signatures... OK</div>
                <div>[INFO] Unpacking dev-pro-stack (35% package discount applied)...</div>
              </div>
            )}

            {executed && (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" /> SUCCESS: Dev Pro Stack Bundle successfully activated!
                </div>
                <div className="text-slate-400">License keys & credentials dispatched to your terminal environment.</div>
              </div>
            )}

            {/* Action Trigger */}
            <div className="pt-2">
              <button
                onClick={handleRunInstall}
                disabled={executing || executed}
                className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {executing ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin" />
                    <span>EXECUTING INSTALLATION...</span>
                  </>
                ) : executed ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>BUNDLE INSTALLED (LICENSED)</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>EXECUTE STACK INSTALL ($324.35)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle11;
