import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  step: string;
  title: string;
  sub: string;
  badge: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      categories?: CategoryItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
  { id: '1', step: '01', title: 'FIRST ORDER PERK', sub: 'Instant 20% discount auto-applied on your inaugural checkout.', badge: 'Welcome Offer' },
  { id: '2', step: '02', title: 'CART THRESHOLD REWARD', sub: 'Unlock extra 10% off when basket reaches $75 minimum spend.', badge: 'Cart Perk' },
  { id: '3', step: '03', title: 'FREE EXPRESS SHIPPING', sub: '$0 door-to-door express air shipping on orders over $49.', badge: 'Free Delivery' },
  { id: '4', step: '04', title: 'BUNDLE COMBO SAVINGS', sub: 'Save up to 35% when grouping complementary items.', badge: 'Bundle Offer' },
  { id: '5', step: '05', title: 'PARTNER BANK CASHBACK', sub: 'Instant credit card rebates applied at final payment step.', badge: 'Bank Offer' }
];

export function OffersCategories5({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer Category Roadmap Timeline';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            VERTICAL ROADMAP TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-6 sm:pl-10 space-y-8 border-l-2 border-slate-800">
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                className="relative cursor-pointer group"
              >
                {/* Node Bullet Circle */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/20 scale-110'
                    : 'bg-slate-900 text-slate-400 border-slate-700 group-hover:border-slate-500'
                }`}>
                  {cat.step}
                </div>

                {/* Content Box */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-slate-900 border-emerald-500/50 shadow-xl'
                    : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                }`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono text-[10px] uppercase font-bold border border-emerald-500/20">
                          {cat.badge}
                        </span>
                        <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      </div>
                      <p className="text-xs text-slate-400 max-w-lg">{cat.sub}</p>
                    </div>

                    <ArrowRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories5;
