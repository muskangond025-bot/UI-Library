import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scan, Barcode, Check, ShieldCheck, Zap, Radio, Target } from 'lucide-react';

export function OffersBundle14() {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleTriggerScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 1600);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-950 text-cyan-400 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Target Reticle Crosshair Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Header HUD */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/30 shadow-inner">
          <Scan className="w-4 h-4 text-cyan-400" />
          <span>CYBERNETIC LASER BARCODE HUD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          BARCODE SCANNER BUNDLE
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
          Aim laser scanner at the barcode to decode 40% bundle package savings on Smartwatch + Magnetic Strap + Screen Armor!
        </p>
      </div>

      {/* Main Scanner Container */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-slate-900/90 rounded-2xl border border-cyan-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden space-y-6 text-left"
        >
          {/* Top HUD Status Bar */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 text-xs">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Radio className="w-4 h-4 text-red-500 animate-pulse" />
              <span>SCANNER HUD STATUS: READY</span>
            </div>
            <span className="px-2.5 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded text-[10px] font-bold uppercase">
              BARCODE #889-40-OFF
            </span>
          </div>

          {/* Barcode Laser Target Box */}
          <div className="relative bg-slate-950 p-6 rounded-xl border border-cyan-500/30 overflow-hidden flex flex-col items-center justify-center space-y-3">
            {/* Animated Laser Beam */}
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 h-1 bg-red-500 shadow-[0_0_15px_#ef4444] z-20"
            />

            {/* Simulated Barcode Graphic */}
            <div className="flex items-center justify-center gap-1.5 h-20 w-full opacity-90 px-4">
              {[4, 2, 8, 1, 6, 3, 7, 2, 5, 8, 2, 4, 6, 1, 8, 3, 5, 2, 7, 4, 2, 6, 1, 8, 3].map((width, idx) => (
                <div
                  key={idx}
                  className="bg-cyan-400 h-full"
                  style={{ width: `${width * 3}px` }}
                />
              ))}
            </div>

            <div className="text-[11px] text-cyan-500/80 tracking-[0.3em] uppercase font-bold">
              * UPC-889-BUNDLE-40-OFF *
            </div>
          </div>

          {/* Itemized Scanned Breakdown */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-cyan-500/20 space-y-2 text-xs">
            <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold border-b border-slate-800 pb-1 flex justify-between">
              <span>DECODED PACK ITEMS</span>
              <span>LIST PRICE</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>1x Ultra Titanium Smartwatch</span>
              <span className="text-slate-400 line-through">$299.00</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>1x Alpine Loop Magnetic Strap</span>
              <span className="text-slate-400 line-through">$59.00</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>1x 9H Sapphire Glass Screen Shield</span>
              <span className="text-slate-400 line-through">$41.00</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 bg-cyan-950/40 border border-cyan-500/40 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">BEFORE SCAN</span>
              <span className="text-sm font-bold text-slate-400 line-through">$399.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold block">
                SCANNED BUNDLE PRICE
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">$239.40</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div>
            <button
              onClick={handleTriggerScan}
              disabled={scanning}
              className="w-full py-4 px-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-80"
            >
              {scanning ? (
                <>
                  <Target className="w-4 h-4 animate-spin text-slate-950" />
                  <span>DECODING BARCODE PACK...</span>
                </>
              ) : scanned ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>SCANNED BUNDLE ADDED TO CART ($239.40)</span>
                </>
              ) : (
                <>
                  <Scan className="w-4 h-4" />
                  <span>SCAN BARCODE & CLAIM BUNDLE ($239.40)</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle14;
