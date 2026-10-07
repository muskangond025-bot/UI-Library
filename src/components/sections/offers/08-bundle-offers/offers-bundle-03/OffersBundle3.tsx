import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Copy, Check, ShieldCheck, TrendingUp, ShoppingBag } from 'lucide-react';

export function OffersBundle3() {
  const [selectedTier, setSelectedTier] = useState<0 | 1 | 2>(1);
  const [added, setAdded] = useState(false);

  const tiers = [
    { qty: 'BUY 2 ITEMS', discount: '15% OFF', price: '$85.00', origPrice: '$100.00', desc: 'Starter Volume Bundle: Save 15% when ordering 2 items.' },
    { qty: 'BUY 3 ITEMS', discount: '25% OFF', price: '$112.50', origPrice: '$150.00', desc: 'Pro Volume Bundle: Save 25% when ordering 3 items.' },
    { qty: 'BUY 4+ ITEMS', discount: '40% OFF', price: '$120.00', origPrice: '$200.00', desc: 'VIP Volume Bundle: Save 40% when ordering 4+ items.' },
  ];

  const current = tiers[selectedTier];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090e17] text-white rounded-3xl border border-indigo-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
          <span>TIERED VOLUME DISCOUNT BUNDLE STEPPER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 tracking-tight">
          Tiered Volume Quantity Bundles
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          The more quantity you buy, the more you save! Select your preferred volume tier below.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-2xl relative z-10">
        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {tiers.map((t, idx) => {
            const isSelected = selectedTier === idx;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedTier(idx as 0 | 1 | 2)}
                className={`p-6 rounded-3xl border-2 transition-all cursor-pointer text-left space-y-4 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-indigo-400 shadow-xl shadow-indigo-600/30'
                    : 'bg-slate-950/80 border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-indigo-300 uppercase block">
                    {t.qty}
                  </span>
                  <div className="text-2xl font-black text-white font-mono">{t.discount}</div>
                </div>

                <div className="font-mono">
                  <span className="text-xs text-slate-400 line-through block">{t.origPrice}</span>
                  <span className="text-xl font-black text-indigo-300">{t.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Tier Summary & CTA Bar */}
        <motion.div
          key={selectedTier}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
        >
          <div>
            <span className="text-xs font-mono font-bold text-indigo-300 uppercase block">
              SELECTED {current.qty} ({current.discount})
            </span>
            <h4 className="text-xl font-black text-white mt-0.5">{current.price} Total</h4>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 active:scale-95 transition-all whitespace-nowrap"
          >
            {added ? <Check className="w-5 h-5 text-emerald-300" /> : <ShoppingBag className="w-5 h-5" />}
            <span>{added ? 'VOLUME BUNDLE ADDED!' : `ADD ${current.qty} TO CART`}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle3;
