import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Terminal, Copy, Check, ShieldAlert, Zap, Radio } from 'lucide-react';

export function OffersCoupon5() {
  const [decrypted, setDecrypted] = useState(false);
  const [decrypting, setDecrypting] = useState(false);
  const [displayText, setDisplayText] = useState('CYBER-LOCKED');
  const [copied, setCopied] = useState(false);

  const targetCode = 'CYBER2077';
  const cardRef = useRef<HTMLDivElement>(null);

  // ReactBits Glow Trail Mouse Position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const startDecrypt = () => {
    if (decrypted || decrypting) return;
    setDecrypting(true);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-+=';
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText(
        targetCode
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return targetCode[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterations >= targetCode.length) {
        clearInterval(interval);
        setDecrypting(false);
        setDecrypted(true);
      }

      iterations += 1 / 3;
    }, 45);
  };

  const copyCode = () => {
    if (!decrypted) return;
    navigator.clipboard.writeText(targetCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090b10] text-cyan-400 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>REACTBITS GLOW TRAIL & GLITCH DECRYPTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 tracking-tight uppercase">
          Cyberpunk HUD Arcade Voucher
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Access cybernetic store discount node. Initiate quantum matrix decryption to reveal your promo cipher.
        </p>
      </div>

      {/* Main Cyber HUD Voucher Card */}
      <div className="w-full max-w-xl relative z-10">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative bg-slate-950/90 rounded-3xl p-6 sm:p-8 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.25)] space-y-6 text-left overflow-hidden group"
        >
          {/* ReactBits Glow Trail Overlay */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.25), transparent 80%)`
              ),
            }}
          />

          {/* Cyberpunk Corner HUD Bracket Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

          {/* Meta Bar */}
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-4 text-xs font-bold">
            <div className="flex items-center gap-2 text-cyan-300">
              <Cpu className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>NODE // ARCADE-2077</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-fuchsia-500/20 border border-fuchsia-500/40 text-fuchsia-300 text-[11px] font-black uppercase">
              STATUS: {decrypted ? 'DECRYPTED' : 'ENCRYPTED'}
            </span>
          </div>

          {/* Title Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-fuchsia-400 uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>40% DISCOUNT VOUCHER ACCESS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              NEON MATRIX GAMING PASS
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Instant 40% OFF across all next-gen gaming gear, cyberpunk peripherals, and VR headsets.
            </p>
          </div>

          {/* Matrix Glitch Decryption Box */}
          <div className="relative p-5 rounded-2xl bg-cyan-950/40 border-2 border-cyan-500/60 shadow-inner flex flex-col items-center justify-center space-y-2">
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-extrabold flex items-center gap-1">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>QUANTUM CIPHER DATA</span>
            </span>
            <div className="text-3xl sm:text-4xl font-black tracking-[0.25em] text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] min-h-[48px] flex items-center">
              {displayText}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            {!decrypted ? (
              <button
                onClick={startDecrypt}
                disabled={decrypting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-fuchsia-600 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>{decrypting ? 'DECRYPTING CIPHER...' : 'INITIATE MATRIX DECRYPTION'}</span>
              </button>
            ) : (
              <button
                onClick={copyCode}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:brightness-110 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,70,239,0.4)] active:scale-95 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'CIPHER COPIED TO CLIPBOARD!' : `COPY CODE: ${targetCode}`}</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span>Cybernetic Security Protocol Verified • Single Use Promo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersCoupon5;
