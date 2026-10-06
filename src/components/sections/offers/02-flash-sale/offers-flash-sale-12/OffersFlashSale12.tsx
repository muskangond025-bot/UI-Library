import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Zap } from 'lucide-react';

export function OffersFlashSale12() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cards = [
    { title: 'Cybernetic VR Headset', price: '$299', orig: '$599', bg: 'bg-indigo-900', border: 'border-indigo-500' },
    { title: 'Holographic Smart Glasses', price: '$199', orig: '$399', bg: 'bg-purple-900', border: 'border-purple-500' },
    { title: 'Biometric Health Ring', price: '$149', orig: '$299', bg: 'bg-slate-900', border: 'border-slate-700' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-14 font-sans rounded-3xl border border-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <span className="px-4 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-purple-400" /> STACKED DEAL FAN-OUT
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight">Interactive Deal Deck Showcase</h2>
        </div>

        <div className="h-96 flex items-center justify-center relative cursor-pointer pt-12">
          {cards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;
            const offset = (idx - 1) * 60;
            const rotate = (idx - 1) * 8;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{
                  x: isHovered ? offset * 1.5 : offset,
                  rotate: isHovered ? rotate * 1.5 : rotate,
                  scale: isHovered ? 1.08 : 1 - idx * 0.05,
                  zIndex: isHovered ? 30 : 10 - idx
                }}
                className={`absolute w-72 h-80 ${card.bg} p-6 rounded-3xl border-2 ${card.border} shadow-2xl flex flex-col justify-between text-left transition-all`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-1 bg-white/10 text-white text-[10px] font-bold uppercase rounded-md">
                      DECK ITEM #0{idx + 1}
                    </span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="font-extrabold text-xl text-white mb-2">{card.title}</h3>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-black text-amber-400">{card.price}</div>
                    <div className="text-xs text-slate-400 line-through">{card.orig}</div>
                  </div>
                  <button className="p-3 bg-white text-slate-950 rounded-2xl font-bold hover:bg-amber-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale12;
