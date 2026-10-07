import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface FlipCard {
  id: string;
  frontTitle: string;
  frontBadge: string;
  backBenefit: string;
  backDetails: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      categories?: FlipCard[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: FlipCard[] = [
  { id: '1', frontTitle: 'BUY 1 GET 1 FREE', frontBadge: 'BOGO', backBenefit: 'Double Your Selection', backDetails: 'Qualifying items match quantity in your basket at zero charge.' },
  { id: '2', frontTitle: 'FREE SHIPPING OVER $49', frontBadge: 'ZERO FREIGHT', backBenefit: '$0 Courier Fee', backDetails: 'Pre-paid express air shipping auto-unlocked at checkout.' },
  { id: '3', frontTitle: 'PARTNER BANK REBATES', frontBadge: '15% CASHBACK', backBenefit: 'Instant Card Credit', backDetails: 'Rebate auto-calculated when using partner credit cards.' },
  { id: '4', frontTitle: 'BUNDLE COMBO SAVINGS', frontBadge: 'SAVE UP TO 35%', backBenefit: 'Group Pack Discount', backDetails: 'Bundle complementary tech & accessories for maximum value.' }
];

export function OffersCategories18({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || '3D Card Flip Book Directory';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            3D PAGE FLIP INTERACTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const isFlipped = !!flipped[cat.id];
            return (
              <div
                key={cat.id}
                onClick={() => toggleFlip(cat.id)}
                className="h-64 cursor-pointer perspective-1000"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full h-full relative"
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between backface-hidden">
                    <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold uppercase border border-blue-500/30 self-start">
                      {cat.frontBadge}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-white">{cat.frontTitle}</h3>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                      <RefreshCw className="w-3 h-3" />
                      <span>TAP TO FLIP PERK DETAILS</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-500/40 rounded-3xl p-6 shadow-2xl flex flex-col justify-between backface-hidden [transform:rotateY(180deg)]">
                    <span className="text-xs font-mono text-amber-300 font-bold uppercase">{cat.backBenefit}</span>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{cat.backDetails}</p>
                    <span className="text-[10px] font-mono text-slate-400">TAP TO FLIP BACK</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories18;
