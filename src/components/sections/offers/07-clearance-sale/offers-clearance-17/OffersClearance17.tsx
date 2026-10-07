import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Copy, Check, ShieldCheck, Tag } from 'lucide-react';

export function OffersClearance17() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'PAPERORIGAMI80';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0c1815] text-white rounded-3xl border border-teal-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-400/40 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Scissors className="w-3.5 h-3.5 text-teal-400" />
          <span>LAYERED PAPER CUTOUT ORIGAMI ART THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-emerald-300 tracking-tight">
          Paper Cutout Origami Clearance
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Tactile 3D layered paper shadow cutouts with folded tape discount tag & instant code copy.
        </p>
      </div>

      {/* Main Paper Cutout Card Container */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-teal-950 rounded-3xl p-7 sm:p-9 border-4 border-teal-800/60 shadow-[0_20px_50px_rgba(20,184,166,0.3)] space-y-6 text-left overflow-hidden group"
        >
          {/* Folded Paper Tape Accent */}
          <div className="absolute top-4 right-4 px-3.5 py-1 rounded bg-teal-400 text-slate-950 font-mono font-black text-xs uppercase shadow-[4px_4px_10px_rgba(0,0,0,0.4)] rotate-3">
            80% OFF PAPER CUT
          </div>

          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-teal-800/40 pb-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-teal-300" />
              <span className="text-xs font-mono font-bold text-teal-200 uppercase tracking-widest">
                ORIGAMI ART OUTLET
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Layered Paper Clearance Pass
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              80% discount valid on paper craft supplies, stationery & office organizers.
            </p>
          </div>

          {/* Code Display Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-teal-500/40 text-center space-y-1 font-mono shadow-inner">
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">
              ORIGAMI CLEARANCE CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-white tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 hover:brightness-110 text-slate-950 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-teal-500/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'ORIGAMI CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Encrypted Paper Cutout Origami Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance17;
