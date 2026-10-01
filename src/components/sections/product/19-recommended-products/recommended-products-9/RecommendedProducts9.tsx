import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Check, Sparkles, RefreshCw } from 'lucide-react';

export default function RecommendedProducts9({ data }: { data?: any }) {
  const [cards, setCards] = useState([
    { id: 1, name: "EcoFlow Solar Generator 2000W", price: "$1,299", badge: "TOP DECK PICK", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "VoltMax Portable Powerbox", price: "$1,150", badge: "SUGGESTED PAIR", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80" },
    { id: 3, name: "Titan Power Hub Pro Dual AC", price: "$1,450", badge: "STYLE MATCH", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" }
  ]);

  const cycleCard = () => {
    setCards((prev) => {
      const copy = [...prev];
      const front = copy.shift()!;
      copy.push(front);
      return copy;
    });
  };

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 z-10">
        <div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> RECOMMENDED DECK
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Stacked Card Deck Recommendations</h2>
        </div>
        <button
          onClick={cycleCard}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 rounded-xl text-xs font-mono border border-slate-700 flex items-center gap-2 active:scale-95 transition-all"
        >
          <RefreshCw size={14} />
          <span>Flip Deck Card</span>
        </button>
      </div>

      {/* Stacked 3D Card Deck Centerpiece */}
      <div className="relative w-full max-w-md mx-auto h-[380px] my-6 z-10 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {cards.map((item, idx) => {
            const isTop = idx === 0;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ scale: 0.9, y: 30 }}
                animate={{
                  scale: isTop ? 1 : 1 - idx * 0.05,
                  y: idx * 16,
                  zIndex: cards.length - idx
                }}
                exit={{ scale: 0.8, y: -100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                onClick={isTop ? cycleCard : undefined}
                className={`absolute w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between ${
                  isTop ? 'cursor-pointer hover:border-emerald-500/50' : 'pointer-events-none'
                }`}
              >
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-white">{item.name}</h3>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
                    <span className="text-2xl font-black text-emerald-400">{item.price}</span>
                    <span className="text-xs font-mono text-slate-400">
                      {isTop ? "Tap to Flip →" : `Deck Layer #${idx + 1}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center z-10">
        3D spring card deck stacking transition with tap-to-flip functionality
      </div>
    </section>
  );
}
