import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, ShieldCheck, Heart, Star } from 'lucide-react';

export function OffersClearance5() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'CLAYPASTEL75';

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#f3e8ff] text-slate-800 rounded-3xl border-4 border-[#e9d5ff] shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Soft Pastel Ambient */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fae8ff] border-2 border-[#f5d0fe] text-purple-700 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_8px_16px_rgba(217,70,239,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-purple-500" />
          <span>CLAYMORPHISM 3D INFLATED PASTEL SHAPES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight font-serif">
          Claymorphic Pastel Outlet Pass
        </h2>
        <p className="text-purple-900/70 text-sm sm:text-base max-w-lg mx-auto font-medium">
          Soft inflated 3D clay-like pillowy design card featuring pastel colors & smooth inner lighting.
        </p>
      </div>

      {/* Main Claymorphic Card Container */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4 }}
          className="relative bg-[#faf5ff] rounded-[36px] p-7 sm:p-9 border-4 border-white shadow-[0_20px_50px_rgba(168,85,247,0.25),inset_0_4px_8px_rgba(255,255,255,0.9),inset_0_-4px_8px_rgba(192,132,252,0.4)] space-y-6 text-left overflow-hidden group"
        >
          {/* Top 3D Clay Floating Badge */}
          <div className="flex items-center justify-between border-b-2 border-purple-200/60 pb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-mono font-bold text-purple-900 uppercase tracking-widest">
                CLAYMORPHIC REWARD
              </span>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#f472b6] text-white font-mono text-xs font-black uppercase shadow-[0_6px_12px_rgba(244,114,182,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)]">
              75% OFF CLAY
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-purple-950 font-serif tracking-tight">
              Pillowy Pastel Clearance
            </h3>
            <p className="text-xs sm:text-sm text-purple-900/80 font-sans leading-relaxed">
              75% discount valid on all home decor, soft plush toys, and creative art supplies.
            </p>
          </div>

          {/* Code Display Box */}
          <div className="p-5 rounded-[24px] bg-[#f0abfc]/20 border-2 border-white shadow-[inset_0_4px_8px_rgba(192,132,252,0.3),0_8px_16px_rgba(192,132,252,0.15)] text-center space-y-1 font-mono">
            <span className="text-[10px] font-bold text-purple-700 uppercase tracking-widest">
              PASTEL PROMO CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-purple-950 tracking-widest">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-[22px] bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:brightness-105 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_12px_24px_rgba(168,85,247,0.35),inset_0_2px_4px_rgba(255,255,255,0.5)] active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'PASTEL CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-purple-900/70 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Claymorphic Soft 3D Pastel Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance5;
