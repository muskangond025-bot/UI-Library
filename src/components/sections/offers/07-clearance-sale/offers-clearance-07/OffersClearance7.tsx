import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Sparkles, Copy, Check, ShieldCheck, Radio, Zap } from 'lucide-react';

export function OffersClearance7() {
  const [scanned, setScanned] = useState(false);
  const [copied, setCopied] = useState(false);
  const couponCode = 'SCANPRICE90';

  const handleScan = () => {
    setScanned(true);
  };

  const copyCode = () => {
    if (!scanned) return;
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#080b12] text-red-400 rounded-3xl border border-red-950/80 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Red Ambient Scanner Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10 font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          <Scan className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          <span>TACTILE HANDHELD BARCODE PRICE SCANNER HUD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-amber-300 tracking-tight font-mono">
          Laser Price Scanner Pass
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Click the barcode scanner beam below to scan retail product barcode and unlock 90% markdown code.
        </p>
      </div>

      {/* Main Scanner HUD Card */}
      <div className="w-full max-w-xl relative z-10">
        <div className="relative bg-slate-950 rounded-3xl p-7 sm:p-9 border-2 border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.25)] space-y-6 text-left overflow-hidden group">
          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-red-500/30 pb-4">
            <div className="flex items-center gap-2 text-red-300 text-xs font-bold">
              <Radio className="w-4 h-4 text-red-400 animate-pulse" />
              <span>HANDHELD SCANNER // READY</span>
            </div>
            <span className="px-3 py-1 rounded bg-red-600 text-white font-mono text-xs font-black uppercase">
              90% OFF SCAN
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Laser Scanner Clearance Pass
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Scan barcode below to verify 90% liquidation discount at retail register.
            </p>
          </div>

          {/* Interactive Barcode Laser Beam Box */}
          <div className="relative p-6 rounded-2xl bg-black border-2 border-red-500/40 flex flex-col items-center justify-center space-y-3 overflow-hidden">
            {/* Animated Laser Beam */}
            <motion.div
              animate={{ y: ['-100%', '300%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_rgba(239,68,68,1)] z-20 pointer-events-none"
            />

            {/* Realistic SVG Barcode */}
            <div className="h-16 w-full max-w-xs flex items-center justify-between gap-1 px-4 py-1 relative z-10">
              {[4, 2, 6, 1, 3, 7, 2, 5, 2, 4, 8, 1, 3, 5, 2, 7, 3, 1, 4, 6, 2, 4, 8, 3, 1, 5, 2, 6].map((w, idx) => (
                <div key={idx} className="h-full bg-white rounded-sm" style={{ width: `${w * 1.5}px` }} />
              ))}
            </div>

            <div className="text-xl sm:text-3xl font-mono font-black text-red-400 tracking-widest relative z-10">
              {scanned ? couponCode : '* SCAN BARCODE ABOVE *'}
            </div>

            {!scanned && (
              <button
                onClick={handleScan}
                className="relative z-20 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-red-600/30 active:scale-95 transition-all"
              >
                <Scan className="w-4 h-4" />
                <span>SCAN RETAIL BARCODE</span>
              </button>
            )}
          </div>

          {/* Action Copy Button */}
          <div className="pt-1 font-sans">
            <button
              onClick={copyCode}
              disabled={!scanned}
              className={`w-full py-4 rounded-xl font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                scanned
                  ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:brightness-110 text-slate-950 shadow-red-600/30 active:scale-95'
                  : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
              <span>
                {scanned
                  ? copied
                    ? 'SCAN CODE COPIED!'
                    : `COPY CODE: ${couponCode}`
                  : 'SCAN BARCODE FIRST TO UNLOCK'}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 font-sans">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>Laser Price Scanner Verification Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance7;
