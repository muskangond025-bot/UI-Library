import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Sparkles, Copy, Check, ShieldCheck, Sun } from 'lucide-react';

export function OffersClearance15() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'SYNTHWAVE85';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0f051d] text-fuchsia-400 rounded-3xl border border-fuchsia-900/60 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Synthwave Wireframe Horizon Grid & Glowing Sun */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d946ef_1px,transparent_1px),linear-gradient(to_bottom,#d946ef_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [transform:perspective(500px)_rotateX(60deg)] pointer-events-none" />

      {/* Synthwave Sun */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-t from-fuchsia-500 to-amber-400 opacity-30 blur-2xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/80 border border-fuchsia-400/40 text-fuchsia-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(217,70,239,0.3)]">
          <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
          <span>80s RETRO SYNTHWAVE / VAPORWAVE GRID THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 tracking-tight font-mono uppercase">
          Cyber Synthwave 80s Outlet
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Neon magenta synthwave horizon clearance card with CRT scanline aesthetics & 85% markdown code.
        </p>
      </div>

      {/* Main Synthwave Card */}
      <div className="w-full max-w-xl relative z-10">
        <div className="relative bg-slate-950/90 rounded-3xl p-7 sm:p-9 border-2 border-fuchsia-500/50 shadow-[0_0_50px_rgba(217,70,239,0.3)] space-y-6 text-left overflow-hidden group">
          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-fuchsia-500/30 pb-4 font-mono">
            <div className="flex items-center gap-2 text-fuchsia-300 text-xs font-bold">
              <Radio className="w-4 h-4 text-fuchsia-400 animate-pulse" />
              <span>SYNTHWAVE // VAPORWAVE PASS</span>
            </div>
            <span className="px-3 py-1 rounded bg-fuchsia-600 text-white text-xs font-black uppercase shadow-md">
              85% OFF SYNTH
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Neon Retrowave Clearance Pass
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              85% discount valid on retro arcade gear, synthwave audio gear, and neon apparel.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-fuchsia-950/40 border border-fuchsia-500/40 text-center space-y-1 font-mono shadow-inner">
            <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest">
              SYNTHWAVE PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 tracking-widest drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-fuchsia-600/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-cyan-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'SYNTH CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
            <span>80s Retro Synthwave CRT Verification Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance15;
