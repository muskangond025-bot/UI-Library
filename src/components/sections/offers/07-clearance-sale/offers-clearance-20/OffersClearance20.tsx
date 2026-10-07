import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Crown, Copy, Check, ShieldCheck, CreditCard } from 'lucide-react';

export function OffersClearance20() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const couponCode = 'CHRONOFOIL90';

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['18deg', '-18deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg']);

  const specularX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const specularY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0c0a1d] text-white rounded-3xl border border-purple-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Holographic Ambient */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-fuchsia-400/40 text-fuchsia-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(217,70,239,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
          <span>REACTBITS 3D HOLOGRAPHIC CHRONO FOIL THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-white to-indigo-300 tracking-tight">
          Holographic Chrono Foil Pass
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Hover over the metallic chrono foil card below to experience dynamic rainbow spectrum reflections & claim 90% savings.
        </p>
      </div>

      {/* Main 3D Chrono Foil Card */}
      <div className="w-full max-w-xl relative z-10" style={{ perspective: 1200 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 rounded-3xl p-7 sm:p-9 border-2 border-fuchsia-400/40 shadow-[0_30px_70px_rgba(168,85,247,0.35)] space-y-6 text-left overflow-hidden group cursor-pointer"
        >
          {/* ReactBits Dynamic Rainbow Specular Holographic Sheen Layer */}
          <motion.div
            className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none z-20 mix-blend-color-dodge"
            style={{
              background: `linear-gradient(135deg, rgba(255,0,128,0.5), rgba(0,255,255,0.5), rgba(255,255,0,0.5), rgba(128,0,255,0.5))`,
              backgroundSize: '200% 200%',
              backgroundPosition: `${specularX} ${specularY}`,
            }}
          />

          {/* Micro Metallic Chip & Brand */}
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-4 relative z-10 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-10 h-7 rounded-md bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-500 border border-yellow-100/60 shadow-md flex items-center justify-center">
                <div className="w-6 h-4 border border-amber-800/40 rounded-sm" />
              </div>
              <span className="text-xs font-black text-fuchsia-300 uppercase tracking-widest">
                CHRONO FOIL VIP OUTLET
              </span>
            </div>
            <Crown className="w-6 h-6 text-amber-300 drop-shadow-md" />
          </div>

          {/* Details */}
          <div className="space-y-2 relative z-10">
            <span className="px-2.5 py-1 rounded bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-200 font-mono text-xs font-bold uppercase">
              90% OFF CHRONO LIQUIDATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
              Holographic Chrono Pass
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Enjoy 90% instant savings on luxury timepieces, metallic accessories & jewelry.
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-fuchsia-500/40 flex flex-col items-center justify-center space-y-1 relative z-10 shadow-inner font-mono">
            <span className="text-[10px] font-bold text-fuchsia-300 uppercase tracking-widest">
              CHRONO FOIL CODE
            </span>
            <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 tracking-widest drop-shadow-md">
              {couponCode}
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 relative z-10">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:brightness-110 text-white font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-fuchsia-600/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'CHRONO CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 relative z-10">
            <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
            <span>Encrypted Chrono Foil Clearance Verification</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersClearance20;
