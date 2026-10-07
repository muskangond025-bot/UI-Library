import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, ShieldCheck, ToggleLeft, ToggleRight, ShoppingBag } from 'lucide-react';

export function OffersBundle8() {
  const [includeMouse, setIncludeMouse] = useState(true);
  const [includePad, setIncludePad] = useState(true);
  const [added, setAdded] = useState(false);

  const baseKeyboard = 120;
  const mousePrice = includeMouse ? 60 : 0;
  const padPrice = includePad ? 30 : 0;

  const totalRaw = baseKeyboard + mousePrice + padPrice;
  const totalBundle = totalRaw * 0.75; // 25% bundle savings

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#e0e5ec] text-slate-800 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-indigo-600 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>NEUMORPHIC SOFT DUAL-SHADOW BUNDLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight font-serif">
          Tactile Neumorphic Peripheral Bundle
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
          Tactile 3D extruded neumorphic surface featuring soft dual-shadow toggle switches & 25% bundle savings.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#e0e5ec] rounded-3xl p-7 sm:p-9 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] space-y-6 text-left overflow-hidden group"
        >
          {/* Header Meta */}
          <div className="flex items-center justify-between border-b border-slate-300/60 pb-4">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">
              MECHANICAL KEYBOARD COMBO
            </span>
            <span className="px-3 py-1 rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] text-indigo-600 font-mono text-xs font-bold uppercase">
              25% OFF BUNDLE
            </span>
          </div>

          {/* Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Pro Wireless Mechanical Bundle
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Includes RGB Mechanical Keyboard ($120) + optional matching accessories below.
            </p>
          </div>

          {/* Neumorphic Add-On Toggles */}
          <div className="space-y-3 font-sans">
            <div
              onClick={() => setIncludeMouse(!includeMouse)}
              className="p-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-between cursor-pointer"
            >
              <div>
                <h5 className="text-sm font-bold text-slate-800">Ergonomic Wireless Mouse</h5>
                <span className="text-xs text-slate-500 font-mono">+$60.00</span>
              </div>
              {includeMouse ? <ToggleRight className="w-6 h-6 text-indigo-600" /> : <ToggleLeft className="w-6 h-6 text-slate-400" />}
            </div>

            <div
              onClick={() => setIncludePad(!includePad)}
              className="p-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-between cursor-pointer"
            >
              <div>
                <h5 className="text-sm font-bold text-slate-800">XL Desk Mat / Wrist Rest</h5>
                <span className="text-xs text-slate-500 font-mono">+$30.00</span>
              </div>
              {includePad ? <ToggleRight className="w-6 h-6 text-indigo-600" /> : <ToggleLeft className="w-6 h-6 text-slate-400" />}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <div className="font-mono">
              <span className="text-xs text-slate-500 line-through block">${totalRaw.toFixed(2)}</span>
              <span className="text-3xl font-black text-slate-800">${totalBundle.toFixed(2)}</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              {added ? <Check className="w-4 h-4 text-emerald-600" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{added ? 'ADDED TO CART!' : 'CLAIM BUNDLE DEAL'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle8;
