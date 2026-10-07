import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  label: string;
  title: string;
  discount: string;
  description: string;
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
  { id: 'all', label: 'ALL OFFERS', title: 'Complete Storewide Offer Index', discount: 'UP TO 50% SAVINGS', description: 'Browse all available coupons, threshold shipping unlocks, and bank credit rewards.' },
  { id: 'bogo', label: 'BUY 1 GET 1', title: 'Buy 1 Get 1 Free Selection', discount: 'BOGO UNLOCKED', description: 'Double items in cart across qualified apparel and lifestyle categories.' },
  { id: 'shipping', label: 'FREE SHIPPING', title: 'Zero Freight Threshold', discount: '$0 DELIVERY', description: 'Free express courier shipping auto-applied on orders over $49 subtotal.' },
  { id: 'bank', label: 'BANK OFFERS', title: 'Partner Bank Rebates', discount: '15% CASHBACK', description: 'Instant rebates applied when paying with partner credit and debit cards.' },
  { id: 'bundles', label: 'BUNDLES', title: 'Combo Value Packs', discount: 'SAVE UP TO 35%', description: 'Group complementary items together to unlock bundled discount pricing.' }
];

export function OffersCategories9({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer Category Filter Rail Interface';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const activeCategory = categories.find(c => c.id === activeId) || categories[0];

  return (
    <section className="w-full py-16 px-4 bg-slate-900 font-sans text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            SEGMENTED FILTER RAIL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Top Segmented Rail */}
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-slate-950 rounded-2xl border border-slate-800 max-w-2xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Selected Category Content Box */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-4 max-w-2xl mx-auto text-left"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 font-mono">
            <span className="text-xs text-cyan-400 font-bold uppercase">{activeCategory.label} CATEGORY</span>
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
              {activeCategory.discount}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">{activeCategory.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{activeCategory.description}</p>
          </div>

          <div className="pt-2">
            <button className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg">
              <span>VIEW {activeCategory.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default OffersCategories9;
