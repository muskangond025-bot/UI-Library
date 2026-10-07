import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Sparkles, Copy, Check, ShieldCheck, Flame, TrendingDown, Clock, Package, ShoppingBag } from 'lucide-react';

export function OffersBundle9() {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090d16] text-white rounded-3xl border border-indigo-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
          <span>BENTO BOX MODULAR BUNDLE DASHBOARD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 tracking-tight">
          Bento Modular Bundle Dashboard
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Asymmetric Bento Box layout displaying bundled hero items, accessory add-ons, savings metrics & single-click checkout.
        </p>
      </div>

      {/* Bento Box Asymmetric Grid Container */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10 text-left">
        {/* Bento Tile 1: Main Bundle Showcase (Spans 2 Columns) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-2 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl space-y-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-indigo-500/30 pb-3 font-mono">
            <span className="px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-black uppercase">
              30% BENTO SAVINGS
            </span>
            <span className="text-xs text-slate-400">COMPLETE CREATOR SET</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Modular Creator Bundle Pack
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Includes 4K Cinema Camera + 50mm Lens + Heavy-Duty Tripod + Shotgun Mic.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-indigo-500/30 flex items-center justify-between font-mono">
            <div>
              <span className="text-xs text-slate-400 line-through block">$1,499.00</span>
              <span className="text-2xl sm:text-3xl font-black text-white">$1,049.00</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:brightness-110 text-white font-mono font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-indigo-600/30 active:scale-95 transition-all"
            >
              {added ? <Check className="w-4 h-4 text-emerald-300" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{added ? 'ADDED!' : 'ADD BUNDLE'}</span>
            </button>
          </div>
        </motion.div>

        {/* Bento Tile 2: Bundle Savings Metric */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-slate-900/90 rounded-3xl p-6 border border-indigo-500/30 shadow-lg flex flex-col justify-between space-y-4 font-mono"
        >
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <TrendingDown className="w-4 h-4" />
            <span>BUNDLE SAVINGS</span>
          </div>
          <div>
            <div className="text-4xl font-black text-emerald-400">-$450.00</div>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              Instant savings vs buying items separately.
            </p>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div className="h-full bg-emerald-500 w-[100%]" />
          </div>
        </motion.div>

        {/* Bento Tile 3: Included Accessories List */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-slate-900/90 rounded-3xl p-6 border border-indigo-500/30 shadow-lg space-y-3 font-sans"
        >
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold">
            <Package className="w-4 h-4" />
            <span>ITEMS INCLUDED (4)</span>
          </div>
          <div className="space-y-1 text-xs text-slate-300">
            <div>• 4K Cinema Camera Body</div>
            <div>• 50mm f/1.8 Prime Lens</div>
            <div>• Heavy-Duty Aluminum Tripod</div>
            <div>• Directional Shotgun Mic</div>
          </div>
        </motion.div>

        {/* Bento Tile 4: Urgency Banner (Spans 2 Columns) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-2 bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 rounded-3xl p-6 border border-indigo-500/30 shadow-lg flex items-center justify-between gap-4 font-sans"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Limited Bundle Stock</h4>
              <p className="text-xs text-slate-400">Only 14 Bento Creator Kits remaining in stock!</p>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-indigo-400/30 font-mono font-bold text-xs text-indigo-300">
            LIMITED EDITION
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle9;
