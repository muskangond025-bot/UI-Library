import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Check, ShoppingBag, Truck, ShieldAlert, Gift, Tag } from 'lucide-react';

export function OffersBundle19() {
  const [unboxed, setUnboxed] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const handleUnboxToggle = () => {
    setUnboxed(!unboxed);
  };

  const handleClaim = () => {
    setClaimed(true);
    setTimeout(() => setClaimed(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#1a1410] text-[#f4eae1] rounded-3xl border border-[#8c6b4f]/40 shadow-[0_0_50px_rgba(140,107,79,0.15)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Kraft Cardboard Grain Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#8c6b4f_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Shipping Barcode Top Label */}
      <div className="w-full max-w-2xl bg-[#d4a373] text-[#2b1e16] p-3 mb-8 rounded-none border-2 border-[#2b1e16] shadow-[4px_4px_0px_#000] flex flex-wrap items-center justify-between gap-2 relative z-10 text-xs font-mono font-bold">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#2b1e16]" />
          <span>EXPRESS PRIORITY SHIPPING • TRACK #8809-BNDL</span>
        </div>
        <span className="bg-[#2b1e16] text-[#d4a373] px-2 py-0.5 text-[10px] uppercase font-black">
          FRAGILE BUNDLE PARCEL
        </span>
      </div>

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4a373]/20 text-[#d4a373] text-xs font-semibold border border-[#d4a373]/40 shadow-inner">
          <Package className="w-4 h-4 text-[#d4a373]" />
          <span>3D CARDBOARD GIFT BOX UNBOXING</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Artisan Coffee Unboxing Box
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Click the parcel top to open flaps and inspect your 40% discount coffee house unboxing kit!
        </p>
      </div>

      {/* Main Kraft Parcel Box Container */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#2b2019] rounded-2xl p-7 sm:p-9 border-2 border-[#8c6b4f]/60 shadow-2xl space-y-6 text-left relative overflow-hidden"
        >
          {/* Parcel Flap Top Controller */}
          <div className="bg-[#382b22] p-4 rounded-xl border border-[#8c6b4f]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d4a373] text-[#2b1e16] flex items-center justify-center font-black text-xl">
                📦
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">PARCEL FLAP STATUS</div>
                <div className="text-[11px] text-[#d4a373]">
                  {unboxed ? 'Flaps Unfolded (Contents Visible)' : 'Sealed with Shipping Tape (Click to Unbox)'}
                </div>
              </div>
            </div>

            <button
              onClick={handleUnboxToggle}
              className="px-3.5 py-2 rounded-lg bg-[#d4a373] hover:bg-[#c29263] text-[#2b1e16] font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              {unboxed ? 'SEAL BOX' : 'OPEN FLAPS'}
            </button>
          </div>

          {/* Unboxed Item List */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-[#d4a373] uppercase tracking-wider flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#d4a373]" />
              <span>UNBOXED PARCEL CONTENTS (SAVE 40%)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium">
              <div className="bg-[#1e1712] p-3.5 rounded-xl border border-[#8c6b4f]/30 space-y-1">
                <div className="text-white font-bold">1x French Press 1L</div>
                <div className="text-slate-400 line-through">$65.00</div>
              </div>

              <div className="bg-[#1e1712] p-3.5 rounded-xl border border-[#8c6b4f]/30 space-y-1">
                <div className="text-white font-bold">1x Organic Espresso (1kg)</div>
                <div className="text-slate-400 line-through">$35.00</div>
              </div>

              <div className="bg-[#1e1712] p-3.5 rounded-xl border border-[#8c6b4f]/30 space-y-1">
                <div className="text-white font-bold">1x Thermal Travel Tumbler</div>
                <div className="text-slate-400 line-through">$45.00</div>
              </div>
            </div>
          </div>

          {/* Price Box */}
          <div className="p-4 rounded-xl bg-[#1e1712] border border-[#8c6b4f]/50 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                SEPARATE RETAIL PRICE
              </span>
              <span className="text-xs text-slate-400 line-through">$145.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#d4a373] uppercase tracking-widest block font-bold">
                UNBOXED PARCEL PRICE
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">$87.00</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div>
            <button
              onClick={handleClaim}
              className="w-full py-4 px-6 rounded-xl bg-[#d4a373] hover:bg-[#c29263] text-[#2b1e16] font-black text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {claimed ? <Check className="w-5 h-5 stroke-[3]" /> : <ShoppingBag className="w-5 h-5" />}
              <span>{claimed ? 'PARCEL BUNDLE CLAIMED!' : 'CLAIM UNBOXED PARCEL BUNDLE ($87.00)'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle19;
