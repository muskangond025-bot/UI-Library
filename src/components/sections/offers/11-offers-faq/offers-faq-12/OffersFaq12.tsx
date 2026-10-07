import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, RefreshCw } from 'lucide-react';

interface CardItem {
  id: string;
  tag: string;
  question: string;
  answer: string;
  color: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      faqs?: CardItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: CardItem[] = [
  { id: '1', tag: 'COMBINATIONS', question: 'Can I combine multiple offer codes on one checkout?', answer: 'Checkout applies the single highest discount calculation to your cart. Multiple codes cannot stack.', color: 'from-purple-950 to-slate-900 border-purple-500/40' },
  { id: '2', tag: 'MINIMUM SPEND', question: 'What is the minimum spend for zero-cost shipping?', answer: 'Free ground shipping activates automatically on cart subtotals reaching $49.00 or more.', color: 'from-blue-950 to-slate-900 border-blue-500/40' },
  { id: '3', tag: 'BANK REBATES', question: 'How do partner card cashbacks work at payment?', answer: 'Instant 15% rebates apply automatically upon entering participating card details.', color: 'from-emerald-950 to-slate-900 border-emerald-500/40' }
];

export function OffersFaq12({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Layered Interactive Question Card Stack';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [stack, setStack] = useState<CardItem[]>(faqs);

  const cycleStack = () => {
    setStack((prev) => {
      const next = [...prev];
      const top = next.shift();
      if (top) next.push(top);
      return next;
    });
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Layered Question Stack • Animation: Spring Card Deck Swipe & Depth Reorder
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
          <p className="text-slate-400 text-sm">Click card deck to swipe to next question.</p>
        </div>

        {/* Stack Stage */}
        <div className="relative w-full max-w-md mx-auto h-72 flex items-center justify-center cursor-pointer" onClick={cycleStack}>
          {stack.map((item, idx) => {
            const isTop = idx === 0;
            const offset = idx * 12;
            const scale = 1 - idx * 0.05;

            return (
              <motion.div
                key={item.id}
                animate={{ y: offset, scale }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ zIndex: stack.length - idx }}
                className={`absolute w-full p-8 rounded-3xl bg-gradient-to-br ${item.color} border-2 shadow-2xl text-left space-y-4`}
              >
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-0.5 rounded bg-black/40 text-amber-300 font-mono text-[10px] font-bold uppercase border border-white/20">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">CARD 0{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white leading-snug">{item.question}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{item.answer}</p>
                </div>

                {isTop && (
                  <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-amber-400 font-bold">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>TAP DECK TO SWIPE NEXT QUESTION</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFaq12;
