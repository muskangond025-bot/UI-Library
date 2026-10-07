import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, Copy, Check, ShieldCheck, ToggleLeft, ToggleRight } from 'lucide-react';

export function OffersClearance2() {
  const [copied, setCopied] = useState(false);
  const [isVIP, setIsVIP] = useState(true);
  const couponCode = isVIP ? 'NEUMORPH85' : 'NEUMORPH70';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#e0e5ec] text-slate-800 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-indigo-600 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>NEUMORPHIC SOFT DUAL SHADOW UI</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight font-serif">
          Neumorphic Soft Outlet Pass
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
          Tactile 3D extruded neumorphic clearance voucher featuring soft dual-shadow press response.
        </p>
      </div>

      {/* Main Neumorphic Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#e0e5ec] rounded-3xl p-7 sm:p-9 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] space-y-6 text-left overflow-hidden group"
        >
          {/* Header Meta & Interactive Neumorphic Toggle Switch */}
          <div className="flex items-center justify-between border-b border-slate-300/60 pb-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">
                TACTILE NEUMORPHIC VOUCHER
              </span>
            </div>

            {/* Interactive Toggle */}
            <button
              onClick={() => setIsVIP(!isVIP)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] text-xs font-mono font-bold text-indigo-600"
            >
              <span>{isVIP ? 'VIP: 85% OFF' : 'STD: 70% OFF'}</span>
              {isVIP ? <ToggleRight className="w-5 h-5 text-indigo-600" /> : <ToggleLeft className="w-5 h-5 text-slate-400" />}
            </button>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Tactile Extruded Clearance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Enjoy soft extruded tactile discount savings on luxury home & lifestyle items.
            </p>
          </div>

          {/* Inset Neumorphic Code Display Box */}
          <div className="p-5 rounded-2xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] text-center space-y-1 font-mono">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
              NEUMORPHIC PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-slate-800 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Extruded Neumorphic Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'NEUMORPHIC CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Guaranteed Neumorphic Tactile Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance2;
