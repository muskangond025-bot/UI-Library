import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ShoppingBag, Heart, Star, ShieldCheck } from 'lucide-react';

export function OffersBundle12() {
  const [selected, setSelected] = useState(true);
  const [added, setAdded] = useState(false);

  const handleClaim = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#f0e7ff] text-slate-800 rounded-3xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Soft Ambient Pastel Background Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-purple-700 text-xs font-bold shadow-[6px_6px_12px_#d8b4fe,-6px_-6px_12px_#ffffff]">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>CLAYMORPHIC 3D PASTEL PACK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-purple-950 tracking-tight">
          3D Pastel Care Bundle
        </h2>
        <p className="text-purple-900/70 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Inflated clay aesthetic! Save 30% on our ultimate wireless headphones, soft cushion headband & desktop dock.
        </p>
      </div>

      {/* Main Clay Card */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#f5eefd] rounded-[36px] p-7 sm:p-10 shadow-[18px_18px_36px_#d1c4e9,-18px_-18px_36px_#ffffff] border border-white/60 space-y-6 text-left"
        >
          {/* Top Pill Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-purple-200/60">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold shadow-inner">
                ★ 4.9 Clay Rated
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                Limited Pastel Edition
              </span>
            </div>
            <span className="text-xs font-extrabold text-purple-900 bg-white/90 px-3 py-1 rounded-full shadow-[4px_4px_8px_#d1c4e9,-4px_-4px_8px_#ffffff]">
              SAVE 30% OFF
            </span>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/80 p-4 rounded-2xl shadow-[8px_8px_16px_#e2d9f3,-8px_-8px_16px_#ffffff] border border-white text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-purple-700 font-black shadow-sm text-lg">
                🎧
              </div>
              <div className="text-xs font-bold text-purple-950">Clay Headset</div>
              <div className="text-[11px] text-purple-700 font-semibold">$149.00</div>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl shadow-[8px_8px_16px_#e2d9f3,-8px_-8px_16px_#ffffff] border border-white text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-pink-700 font-black shadow-sm text-lg">
                ☁️
              </div>
              <div className="text-xs font-bold text-purple-950">Velvet Cushions</div>
              <div className="text-[11px] text-purple-700 font-semibold">$39.00</div>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl shadow-[8px_8px_16px_#e2d9f3,-8px_-8px_16px_#ffffff] border border-white text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center text-purple-700 font-black shadow-sm text-lg">
                ⚡
              </div>
              <div className="text-xs font-bold text-purple-950">Magnetic Dock</div>
              <div className="text-[11px] text-purple-700 font-semibold">$59.00</div>
            </div>
          </div>

          {/* Price Summary Panel */}
          <div className="p-5 rounded-2xl bg-white/90 shadow-[10px_10px_20px_#e2d9f3,-10px_-10px_20px_#ffffff] flex items-center justify-between">
            <div>
              <span className="text-xs text-purple-800/70 font-bold block">Individual Total</span>
              <span className="text-sm font-bold text-purple-900 line-through">$247.00</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-pink-600 font-extrabold block">Bundle Deal Price</span>
              <span className="text-3xl font-black text-purple-950">$172.90</span>
            </div>
          </div>

          {/* Claim Button */}
          <div>
            <button
              onClick={handleClaim}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-extrabold text-base tracking-wide shadow-[8px_8px_20px_#d8b4fe,-8px_-8px_20px_#ffffff] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {added ? <Check className="w-5 h-5 stroke-[3]" /> : <ShoppingBag className="w-5 h-5" />}
              <span>{added ? 'PASTEL BUNDLE ADDED!' : 'CLAIM 3D PASTEL BUNDLE ($172.90)'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle12;
