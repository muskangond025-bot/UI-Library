import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, ToggleLeft, ToggleRight, Copy, Check, ShoppingBag, Zap } from 'lucide-react';

export function OffersBundle6() {
  const [carePlan, setCarePlan] = useState(true);
  const [fastCharger, setFastCharger] = useState(true);
  const [screenGuard, setScreenGuard] = useState(false);
  const [added, setAdded] = useState(false);

  const basePrice = 999;
  const carePrice = carePlan ? 49 : 0;
  const chargerPrice = fastCharger ? 29 : 0;
  const guardPrice = screenGuard ? 19 : 0;

  const totalBundle = basePrice + carePrice + chargerPrice + guardPrice;
  const bundleDiscount = totalBundle * 0.85; // 15% bundle discount
  const savings = totalBundle - bundleDiscount;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#080d19] text-white rounded-3xl border border-sky-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Shield className="w-3.5 h-3.5 text-sky-400" />
          <span>HARDWARE PROTECTION & CARE PACK BUNDLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-300 tracking-tight">
          Flagship Phone + Protection Pack
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Protect your investment! Toggle hardware care protection add-ons & unlock 15% total bundle discount.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-xl relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-7 sm:p-9 border-2 border-sky-500/40 shadow-2xl space-y-6 text-left overflow-hidden">
          {/* Main Device Header */}
          <div className="flex items-center justify-between border-b border-sky-500/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white">Ultra Smartphone 256GB</h4>
                <span className="text-xs font-mono text-sky-300">$999.00 Base Device</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-500 text-slate-950 font-mono text-xs font-black uppercase">
              15% BUNDLE
            </span>
          </div>

          {/* Add-On Protection Toggles */}
          <div className="space-y-3 font-sans">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">
              OPTIONAL CARE BUNDLE ADD-ONS
            </span>

            {/* Toggle 1 */}
            <div
              onClick={() => setCarePlan(!carePlan)}
              className="p-4 rounded-2xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between cursor-pointer"
            >
              <div>
                <h5 className="text-sm font-bold text-white">2-Year Damage Care Protection</h5>
                <span className="text-xs text-slate-400">+$49.00 (Save 50% on Care)</span>
              </div>
              {carePlan ? <ToggleRight className="w-6 h-6 text-sky-400" /> : <ToggleLeft className="w-6 h-6 text-slate-600" />}
            </div>

            {/* Toggle 2 */}
            <div
              onClick={() => setFastCharger(!fastCharger)}
              className="p-4 rounded-2xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between cursor-pointer"
            >
              <div>
                <h5 className="text-sm font-bold text-white">65W GaN Fast Charger Adapter</h5>
                <span className="text-xs text-slate-400">+$29.00</span>
              </div>
              {fastCharger ? <ToggleRight className="w-6 h-6 text-sky-400" /> : <ToggleLeft className="w-6 h-6 text-slate-600" />}
            </div>

            {/* Toggle 3 */}
            <div
              onClick={() => setScreenGuard(!screenGuard)}
              className="p-4 rounded-2xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between cursor-pointer"
            >
              <div>
                <h5 className="text-sm font-bold text-white">Tempered Glass Screen Guard</h5>
                <span className="text-xs text-slate-400">+$19.00</span>
              </div>
              {screenGuard ? <ToggleRight className="w-6 h-6 text-sky-400" /> : <ToggleLeft className="w-6 h-6 text-slate-600" />}
            </div>
          </div>

          {/* Pricing & CTA Bar */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-sky-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div>
              <span className="text-xs text-slate-400 line-through block">${totalBundle.toFixed(2)}</span>
              <span className="text-3xl font-black text-white">${bundleDiscount.toFixed(2)}</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-600/30 active:scale-95 transition-all whitespace-nowrap"
            >
              {added ? <Check className="w-5 h-5 text-emerald-300" /> : <ShoppingBag className="w-5 h-5" />}
              <span>{added ? 'CARE BUNDLE ADDED!' : 'ADD PROTECTION BUNDLE'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersBundle6;
