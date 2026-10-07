import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Copy, Check, Heart, X, ShieldCheck } from 'lucide-react';

export function OffersClearance11() {
  const [cardIndex, setCardIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const deckCards = [
    { id: 1, title: 'Designer Leather Jacket', origPrice: '$599', dropPrice: '$120', discount: '80% OFF', code: 'SWIPEJACKET80', color: 'from-pink-600 to-rose-950' },
    { id: 2, title: 'Ultra 4K OLED Monitor', origPrice: '$899', dropPrice: '$199', discount: '78% OFF', code: 'SWIPEMONT78', color: 'from-blue-600 to-indigo-950' },
    { id: 3, title: 'Wireless ANC Headphones', origPrice: '$349', dropPrice: '$69', discount: '80% OFF', code: 'SWIPEAUDIO80', color: 'from-teal-600 to-emerald-950' },
  ];

  const currentCard = deckCards[cardIndex % deckCards.length];

  const handleNext = () => {
    setCardIndex((prev) => prev + 1);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(currentCard.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0c0816] text-white rounded-3xl border border-pink-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-400/40 text-pink-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Layers className="w-3.5 h-3.5 text-pink-400" />
          <span>SWIPEABLE CLEARANCE CARD DECK THEME</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-purple-300 tracking-tight">
          Swipeable Outlet Card Deck
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Swipe or click buttons below to cycle through exclusive liquidation warehouse card deals!
        </p>
      </div>

      {/* Main Swipeable Card Deck Stack */}
      <div className="w-full max-w-md relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`relative bg-gradient-to-br ${currentCard.color} rounded-3xl p-7 sm:p-8 border-2 border-white/20 shadow-2xl space-y-5 text-left overflow-hidden`}
          >
            {/* Header Meta */}
            <div className="flex items-center justify-between border-b border-white/20 pb-3 font-mono">
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                CARD DECK ITEM #{currentCard.id}
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-slate-950 font-black text-xs uppercase shadow-md">
                {currentCard.discount}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">{currentCard.title}</h3>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-sm font-mono text-slate-300 line-through">{currentCard.origPrice}</span>
                <span className="text-3xl font-mono font-black text-white">{currentCard.dropPrice}</span>
              </div>
            </div>

            {/* Code Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/20 text-center space-y-1 font-mono">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">
                SWIPE CARD DECK CODE
              </span>
              <div className="text-2xl font-black text-white tracking-widest">
                {currentCard.code}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center border border-white/30 shrink-0"
                title="Next Card"
              >
                <X className="w-5 h-5 text-rose-400" />
              </button>

              <button
                onClick={copyCode}
                className="w-full py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'DECK CODE COPIED!' : `COPY CODE: ${currentCard.code}`}</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OffersClearance11;
