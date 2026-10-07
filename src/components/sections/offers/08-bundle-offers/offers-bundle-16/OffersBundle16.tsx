import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, ShieldCheck, Sparkles, Gem, Award } from 'lucide-react';

export function OffersBundle16() {
  const [acquired, setAcquired] = useState(false);

  const handleAcquire = () => {
    setAcquired(true);
    setTimeout(() => setAcquired(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090d16] text-amber-100 rounded-3xl border border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.15)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Gold Leaf Filigree Dust Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 text-xs font-sans font-bold border border-amber-500/30 shadow-inner">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>ROYAL VELVET GOLD LEAF PACK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 tracking-tight uppercase">
          Maison Royal Fragrance Suite
        </h2>
        <p className="text-amber-200/70 text-sm sm:text-base max-w-xl mx-auto font-sans font-medium">
          Privileged luxury offer! Acquire 35% package privileges on Luxury Eau de Parfum (100ml) + Velvet Body Elixir + Gold Travel Vaporizer.
        </p>
      </div>

      {/* Main Luxury Velvet Card Container */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-b from-[#131c2e] to-[#0b121e] rounded-3xl p-7 sm:p-10 border-2 border-amber-500/50 shadow-2xl space-y-6 text-left overflow-hidden"
        >
          {/* Gold Embossed Wax Seal Badge */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 font-sans">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
              <Award className="w-5 h-5 text-amber-400" />
              <span>ROYAL APPOINTMENT NO. 809</span>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-widest shadow-md">
              35% ROYAL PRIVILEGE
            </span>
          </div>

          {/* Items Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-black text-lg">
                ✨
              </div>
              <div className="text-xs font-bold text-amber-100">Eau de Parfum (100ml)</div>
              <div className="text-[11px] text-amber-400/70 line-through">$220.00</div>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-black text-lg">
                🧴
              </div>
              <div className="text-xs font-bold text-amber-100">Velvet Body Elixir</div>
              <div className="text-[11px] text-amber-400/70 line-through">$85.00</div>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-black text-lg">
                ⚜️
              </div>
              <div className="text-xs font-bold text-amber-100">Gold Travel Atomizer</div>
              <div className="text-[11px] text-amber-400/70 line-through">$60.00</div>
            </div>
          </div>

          {/* Price Box */}
          <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-center justify-between font-sans">
            <div>
              <span className="text-[10px] text-amber-300/70 uppercase tracking-widest block font-bold">
                INDIVIDUAL VALUE
              </span>
              <span className="text-sm text-slate-400 line-through">$365.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-amber-400 uppercase tracking-widest block font-bold">
                ROYAL BUNDLE PRIVILEGE
              </span>
              <span className="text-3xl font-black text-amber-300">$237.25</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-1 font-sans">
            <button
              onClick={handleAcquire}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              {acquired ? <Check className="w-5 h-5 text-slate-950 stroke-[3]" /> : <Gem className="w-5 h-5" />}
              <span>{acquired ? 'ROYAL BUNDLE RESERVED!' : 'ACQUIRE ROYAL SUITE BUNDLE ($237.25)'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle16;
