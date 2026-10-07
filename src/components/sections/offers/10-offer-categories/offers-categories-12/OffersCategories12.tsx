import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Tag } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  badge: string;
  sub: string;
  details: string;
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
  { id: '1', title: 'Buy 1 Get 1 Free', badge: 'BOGO UNLOCKED', sub: 'Double basket selection on footwear', details: 'Qualifying items automatically match quantity at zero additional charge.' },
  { id: '2', title: 'Free Express Shipping', badge: 'ZERO FREIGHT', sub: 'Free air courier on $49+ subtotals', details: 'Dispatched via 2-day express air with real-time GPS tracking.' },
  { id: '3', title: 'Partner Bank Cashback', badge: '15% CASHBACK', sub: 'Instant credit card rebates', details: 'Auto-applied at final payment processing step for partner cards.' },
  { id: '4', title: 'Bundle Combo Savings', badge: 'SAVE UP TO 35%', sub: 'Curated tech and lifestyle packs', details: 'Combine complementary accessories for maximum combined savings.' }
];

export function OffersCategories12({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Interactive Expandable Offer Drawer';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            ARCHITECTURAL DRAWER PANELS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Drawers Stack */}
        <div className="space-y-4">
          {categories.map((cat, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={cat.id}
                className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-lg text-white flex items-center justify-between gap-4 hover:bg-slate-800/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-xs uppercase font-bold border border-blue-500/30">
                      {cat.badge}
                    </span>
                    <span>{cat.title}</span>
                  </div>

                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-slate-800/80 px-6 pb-6 pt-4 space-y-4 bg-slate-950/60"
                    >
                      <p className="text-sm text-slate-300 font-medium">{cat.sub}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{cat.details}</p>
                      
                      <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase flex items-center gap-2">
                        <span>EXPLORE DRAWER PERKS</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories12;
