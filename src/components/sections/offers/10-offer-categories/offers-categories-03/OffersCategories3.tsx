import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface CategoryItem {
  id: string;
  step: string;
  title: string;
  discount: string;
  description: string;
  badge: string;
  href?: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      description?: string;
      categories?: CategoryItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
  { id: '1', step: '01', title: 'FIRST ORDER DISCOUNT', discount: '20% OFF FIRST PURCHASE', description: 'Exclusive welcoming offer auto-applied on your first order checkout.', badge: 'New Customer' },
  { id: '2', step: '02', title: 'BUNDLE & COMBO DEALS', discount: 'SAVE UP TO 35%', description: 'Combine complementary items into curated packs for massive basket savings.', badge: 'Combo Savings' },
  { id: '3', step: '03', title: 'FREE EXPRESS SHIPPING', discount: '$0 DELIVERY FEE', description: 'Zero courier fees unlocked automatically on cart subtotals crossing $49.', badge: 'Free Delivery' },
  { id: '4', step: '04', title: 'PARTNER BANK REWARDS', discount: '15% CASHBACK PERK', description: 'Instant cashbacks applied when using qualified credit or debit cards.', badge: 'Bank Offer' },
  { id: '5', step: '05', title: 'VIP MEMBER PERKS', discount: 'DOUBLE POINTS + VIP ACCESS', description: 'Earn 2x rewards points on all exclusive weekend drop purchases.', badge: 'Member Exclusive' }
];

export function OffersCategories3({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Horizontal Offer Category Journey';
  const description = settings.description || 'Slide horizontally through offer chapters designed like a customer savings roadmap.';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeIdx, setActiveIdx] = useState(0);

  const nextStep = () => setActiveIdx((prev) => (prev + 1) % categories.length);
  const prevStep = () => setActiveIdx((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 font-sans text-white border-y border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="px-3.5 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
              HORIZONTAL CHAPTER RAIL
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {heading}
            </h2>
            <p className="text-slate-400 text-sm">
              {description}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevStep}
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextStep}
              className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            animate={{ width: `${((activeIdx + 1) / categories.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Chapter Rail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                className={`p-7 rounded-3xl border transition-all cursor-pointer space-y-6 flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-blue-950/80 to-slate-900 border-blue-500/60 shadow-2xl ring-1 ring-blue-500/30 scale-105 z-10'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start font-mono">
                    <span className="text-2xl font-black text-blue-400">{cat.step}</span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 uppercase">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-300 block">{cat.discount}</span>
                    <h3 className="text-xl font-bold text-white leading-snug">{cat.title}</h3>
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold">
                  <span className={isActive ? 'text-blue-300' : 'text-slate-500'}>
                    {isActive ? 'ACTIVE CHAPTER' : 'SELECT CHAPTER'}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories3;
