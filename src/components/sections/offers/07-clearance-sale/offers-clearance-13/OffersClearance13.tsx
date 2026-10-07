import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Waves, Sparkles, Copy, Check, ShieldCheck } from 'lucide-react';

export function OffersClearance13() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'LIQUID80OFF';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#030914] text-white rounded-3xl border border-cyan-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Morphing Liquid Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          borderRadius: ['40% 60% 70% 30%', '60% 30% 50% 70%', '40% 60% 70% 30%'],
          rotate: [0, 180, 360],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          borderRadius: ['60% 30% 50% 70%', '40% 60% 70% 30%', '60% 30% 50% 70%'],
          rotate: [360, 180, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-indigo-500/30 via-fuchsia-600/30 to-pink-500/30 blur-3xl pointer-events-none"
      />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Waves className="w-3.5 h-3.5 text-cyan-400" />
          <span>LIQUID FLUID MESH GRADIENT THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-indigo-300 tracking-tight">
          Liquid Mesh Fluid Clearance
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Organic morphing fluid liquid backdrop featuring 80% instant liquidation price drop.
        </p>
      </div>

      {/* Main Fluid Glass Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="relative bg-slate-900/70 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 border border-white/20 shadow-[0_30px_70px_rgba(6,182,212,0.25)] space-y-6 text-left overflow-hidden group"
        >
          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                FLUID OUTLET PASS
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-black uppercase shadow-md">
              80% OFF LIQUID
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Dynamic Fluid Liquidation Pass
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Valid across all flagship collections & overstocked items with live code copy.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/40 text-center space-y-1 shadow-inner font-mono">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
              FLUID CLEARANCE CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-white tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'LIQUID CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Organic Fluid Gradient Mesh Clearance Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance13;
