import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, ShoppingBag, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function OffersBundle7() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [added, setAdded] = useState(false);

  const bundles = [
    { id: 1, title: 'Gaming Streamer Combo', main: '4K Webcam', acc: 'Studio Condenser Mic', price: '$249', origPrice: '$380', discount: '35% OFF' },
    { id: 2, title: 'Podcast Host Duo', main: 'XLR Microphone', acc: 'Boom Arm & Cable', price: '$199', origPrice: '$310', discount: '35% OFF' },
    { id: 3, title: 'Home Office Ergonomic Pack', main: 'Monitor Arm Stand', acc: 'Ergonomic Mouse', price: '$149', origPrice: '$230', discount: '35% OFF' },
  ];

  const current = bundles[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % bundles.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + bundles.length) % bundles.length);
  };

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0c0a1d] text-white rounded-3xl border border-purple-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>3D CURVED CAROUSEL COMBO SLIDER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300 tracking-tight">
          Curved Carousel Combo Bundles
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Slide through 3D curved product bundle cards with combined savings up to 35% OFF!
        </p>
      </div>

      {/* Main 3D Carousel Slider */}
      <div className="w-full max-w-xl relative z-10 flex items-center justify-between gap-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-slate-900/80 border border-purple-500/40 text-purple-300 hover:bg-purple-950 flex items-center justify-center shrink-0 shadow-lg active:scale-95 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Active Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="w-full bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 rounded-3xl p-7 sm:p-9 border-2 border-purple-400/40 shadow-2xl space-y-6 text-left overflow-hidden relative"
        >
          {/* Badge */}
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-4 font-mono">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                COMBO #{current.id}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-500 text-slate-950 font-black text-xs uppercase shadow-md">
              {current.discount}
            </span>
          </div>

          {/* Title & Items */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white">{current.title}</h3>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-1 text-xs text-slate-300">
              <div className="font-bold text-white">📦 Includes:</div>
              <div>• {current.main}</div>
              <div>• {current.acc}</div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="flex items-center justify-between pt-1 font-mono">
            <div>
              <span className="text-xs text-slate-400 line-through block">{current.origPrice}</span>
              <span className="text-3xl font-black text-white">{current.price}</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:brightness-110 text-white font-mono font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-purple-600/30 active:scale-95 transition-all"
            >
              {added ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{added ? 'ADDED!' : 'ADD BUNDLE'}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-slate-900/80 border border-purple-500/40 text-purple-300 hover:bg-purple-950 flex items-center justify-center shrink-0 shadow-lg active:scale-95 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default OffersBundle7;
