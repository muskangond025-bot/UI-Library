import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles, Check, Flame, RefreshCw, ShoppingBag } from 'lucide-react';

export function OffersBundle18() {
  const [deckIndex, setDeckIndex] = useState(0);
  const [matched, setMatched] = useState(false);

  const cardDecks = [
    {
      title: 'Acoustic Traveler Combo',
      matchScore: '99% MATCH',
      items: ['Wireless ANC Headphones ($299)', 'Hard Shell Travel Case ($49)', 'Audio Flight Adapter ($25)'],
      regularPrice: '$373.00',
      bundlePrice: '$242.45',
      discount: '35% OFF',
      tag: '🔥 PERFECT AUDIO MATCH',
      emoji: '🎧',
    },
    {
      title: 'Barista Morning Suite',
      matchScore: '96% MATCH',
      items: ['Compact Espresso Machine ($199)', 'Electric Milk Frother ($45)', 'Stainless Pitcher & Tamper ($35)'],
      regularPrice: '$279.00',
      bundlePrice: '$181.35',
      discount: '35% OFF',
      tag: '☕ COFFEE LOVER MATCH',
      emoji: '☕',
    },
    {
      title: 'Esports Precision Pack',
      matchScore: '97% MATCH',
      items: ['Ultra Light Wireless Mouse ($129)', 'XXL Extended Desk Mat ($39)', 'Flex Cable Bungee ($20)'],
      regularPrice: '$188.00',
      bundlePrice: '$122.20',
      discount: '35% OFF',
      tag: '⚡ GAMING MATCH',
      emoji: '🎮',
    },
  ];

  const currentCard = cardDecks[deckIndex];

  const handleNext = () => {
    setDeckIndex((prev) => (prev + 1) % cardDecks.length);
  };

  const handleClaimMatch = () => {
    setMatched(true);
    setTimeout(() => setMatched(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-gradient-to-br from-rose-950 via-slate-950 to-purple-950 text-white rounded-3xl border border-rose-500/30 shadow-[0_0_50px_rgba(244,63,94,0.15)] relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Floating Hearts Ambient Sparkles */}
      <div className="absolute top-12 left-12 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold border border-rose-500/30 shadow-inner">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>SWIPEABLE TINDER-STYLE CARD DECK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Find Your Bundle Match
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
          Swipe through curated combo cards & find your perfect 35% discount bundle match!
        </p>
      </div>

      {/* Main Card Swiper Box */}
      <div className="w-full max-w-md relative z-10 min-h-[460px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={deckIndex}
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/90 rounded-3xl p-7 border border-rose-500/40 shadow-2xl space-y-6 text-left relative overflow-hidden"
          >
            {/* Top Match Pill */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold border border-rose-500/40 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>{currentCard.matchScore}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-extrabold border border-purple-500/30">
                {currentCard.discount}
              </span>
            </div>

            {/* Emoji & Title */}
            <div className="space-y-2 text-center pt-2">
              <div className="text-5xl mx-auto">{currentCard.emoji}</div>
              <h3 className="text-2xl font-black text-white tracking-tight">{currentCard.title}</h3>
              <p className="text-xs text-rose-400 font-bold uppercase tracking-widest">{currentCard.tag}</p>
            </div>

            {/* Items Breakdown */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-rose-500/20 space-y-2 text-xs">
              <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold border-b border-slate-800 pb-1">
                CURATED MATCH CONTENTS
              </div>
              {currentCard.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-200">
                  <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                  SEPARATE LIST PRICE
                </span>
                <span className="text-xs text-slate-400 line-through">{currentCard.regularPrice}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-rose-400 uppercase tracking-widest block font-bold">
                  MATCH BUNDLE PRICE
                </span>
                <span className="text-2xl font-black text-white">{currentCard.bundlePrice}</span>
              </div>
            </div>

            {/* Action Buttons: Pass vs Match */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleNext}
                className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <RefreshCw className="w-4 h-4 text-slate-400" />
                <span>SWIPE NEXT</span>
              </button>

              <button
                onClick={handleClaimMatch}
                className="py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-1.5"
              >
                {matched ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>MATCHED!</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-white" />
                    <span>CLAIM MATCH</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OffersBundle18;
