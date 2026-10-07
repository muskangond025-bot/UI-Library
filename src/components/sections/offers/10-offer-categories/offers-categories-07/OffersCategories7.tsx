import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, RefreshCw } from 'lucide-react';

interface CategoryCard {
  id: string;
  title: string;
  badge: string;
  discount: string;
  description: string;
  color: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      categories?: CategoryCard[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: CategoryCard[] = [
  { id: '1', title: 'Buy 1 Get 1 Free', badge: 'BOGO UNLOCKED', discount: '50% SAVINGS', description: 'Double items on qualified apparel & shoe selections.', color: 'from-purple-900 to-indigo-950 border-purple-500/40' },
  { id: '2', title: 'Free Express Shipping', badge: 'ZERO FREIGHT', discount: '$0 DELIVERY', description: 'Free ground express air shipping on cart totals over $49.', color: 'from-blue-900 to-slate-950 border-blue-500/40' },
  { id: '3', title: 'Partner Bank Cashback', badge: 'BANK REWARDS', discount: '15% CASHBACK', description: 'Instant rebates applied when using participating bank cards.', color: 'from-emerald-900 to-slate-950 border-emerald-500/40' },
  { id: '4', title: 'Bundle & Combo Packs', badge: 'COMBO PACKS', discount: 'SAVE UP TO 35%', description: 'Group complementary accessory packs for maximum value.', color: 'from-amber-900 to-slate-950 border-amber-500/40' },
];

export function OffersCategories7({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Physical Card Deck Stack Navigation';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [stack, setStack] = useState<CategoryCard[]>(categories);

  const cycleStack = () => {
    setStack((prev) => {
      const next = [...prev];
      const top = next.shift();
      if (top) next.push(top);
      return next;
    });
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            PHYSICAL DECK LAYER STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-400 text-sm">
            Click or tap the card deck to cycle through offer categories.
          </p>
        </div>

        {/* Stack Deck Area */}
        <div className="relative w-full max-w-md mx-auto h-72 flex items-center justify-center cursor-pointer" onClick={cycleStack}>
          {stack.map((cat, idx) => {
            const isTop = idx === 0;
            const offset = idx * 12;
            const scale = 1 - idx * 0.05;

            return (
              <motion.div
                key={cat.id}
                animate={{ y: offset, scale }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ zIndex: stack.length - idx }}
                className={`absolute w-full p-8 rounded-3xl bg-gradient-to-br ${cat.color} border-2 shadow-2xl text-left space-y-4`}
              >
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white font-mono text-[10px] font-bold uppercase">
                    {cat.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-300">{cat.discount}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{cat.description}</p>
                </div>

                {isTop && (
                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>CLICK DECK TO CYCLE NEXT CATEGORY</span>
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

export default OffersCategories7;
