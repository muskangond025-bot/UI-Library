import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, AlertOctagon, Copy, Check, ShieldAlert, ShoppingBag, Zap } from 'lucide-react';

export function OffersBundle10() {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#fbbf24] text-slate-950 rounded-3xl border-4 border-slate-950 shadow-[10px_10px_0px_#000] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-mono">
      {/* Background Neo-Brutalism Hazard Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_12.5%,transparent_12.5%,transparent_50%,#000_50%,#000_62.5%,transparent_62.5%,transparent_100%)] bg-[size:30px_30px] opacity-[0.06] pointer-events-none" />

      {/* Top Hazard Tape Banner */}
      <div className="w-full bg-slate-950 text-amber-400 py-2.5 px-4 font-black text-xs uppercase tracking-widest border-b-4 border-slate-950 flex items-center justify-between absolute top-0 inset-x-0 z-20 overflow-hidden">
        <div className="flex items-center gap-2 animate-pulse">
          <AlertOctagon className="w-4 h-4 text-amber-400" />
          <span>NEO-BRUTALISM BUNDLE BLOWOUT • FLAT 40% OFF PACKAGE</span>
        </div>
        <span className="hidden sm:inline-block px-2 py-0.5 bg-amber-400 text-slate-950 font-extrabold text-[10px]">
          RAW COMBO EDITION
        </span>
      </div>

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mt-10 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-slate-950 text-amber-400 text-xs font-black tracking-widest uppercase border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>RAW HAZARD BUNDLE COMBO</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tighter uppercase font-sans drop-shadow-sm">
          RAW HAZARD BUNDLE
        </h2>
        <p className="text-slate-900 text-sm sm:text-base max-w-xl mx-auto font-bold font-sans">
          Bold outlines & raw pricing! Claim 40% package discount on gaming desktop + mechanical keyboard + 4K monitor.
        </p>
      </div>

      {/* Main Neo-Brutalism Card Container */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-none p-7 sm:p-9 border-4 border-slate-950 shadow-[12px_12px_0px_#000] space-y-6 text-left overflow-hidden"
        >
          {/* Top Hazard Badge */}
          <div className="flex items-center justify-between border-b-4 border-slate-950 pb-4">
            <div className="flex items-center gap-2 font-black text-xs uppercase text-slate-950">
              <Flame className="w-5 h-5 text-red-600 fill-red-600" />
              <span>PACKAGE STATUS: VERIFIED</span>
            </div>
            <span className="px-3 py-1 bg-red-600 text-white font-black text-xs uppercase border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
              40% OFF BUNDLE
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1 font-sans">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase">
              Pro Gaming Setup Package
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
              Includes RTX Gaming PC ($1,200) + RGB Mechanical Keyboard ($150) + 165Hz Monitor ($250).
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-5 bg-amber-300 border-4 border-slate-950 shadow-[6px_6px_0px_#000] flex items-center justify-between font-mono">
            <div>
              <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest block">
                TOTAL SEPARATE PRICE
              </span>
              <span className="text-sm font-bold text-slate-700 line-through">$1,600.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest block">
                RAW BUNDLE PRICE
              </span>
              <span className="text-2xl sm:text-4xl font-black text-slate-950">$960.00</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-1">
            <button
              onClick={handleAddToCart}
              className="w-full py-4.5 bg-red-600 hover:bg-red-500 text-white font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 border-4 border-slate-950 shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              {added ? <Check className="w-5 h-5 text-white stroke-[3]" /> : <ShoppingBag className="w-5 h-5 stroke-[3]" />}
              <span>{added ? 'RAW BUNDLE ADDED!' : 'ADD RAW HAZARD BUNDLE TO CART'}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-black text-slate-950 pt-1 font-sans">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span>100% Neo-Brutalism Package Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle10;
