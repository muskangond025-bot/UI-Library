import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Ticket, ShoppingBag, Percent, ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  label: string;
  title: string;
  sub: string;
  iconName: string;
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
  { id: '1', label: 'COUPON TICKETS', title: 'Percentage Promo Codes', sub: 'Instant promo code drops', iconName: 'Ticket' },
  { id: '2', label: 'SHIPPING BOX', title: 'Free Freight Packages', sub: 'Zero delivery fee', iconName: 'Box' },
  { id: '3', label: 'SHOPPING BAG', title: 'BOGO Basket Perks', sub: 'Double basket value', iconName: 'ShoppingBag' },
  { id: '4', label: 'DISCOUNT TAG', title: 'Partner Cashbacks', sub: 'Bank credit rebates', iconName: 'Percent' },
];

export function OffersCategories11({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || '3D Offer Objects Canvas';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = categories[activeIdx] || categories[0];

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
            3D OBJECT CANVAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* 3D Perspective Card Stage */}
        <div className="py-6 flex justify-center perspective-1000">
          <motion.div
            key={active.id}
            initial={{ rotateY: -15, scale: 0.95 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-full max-w-md bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-4 border-indigo-500/40 p-8 rounded-3xl shadow-[0_20px_50px_rgba(99,102,241,0.3)] text-left space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center shadow-inner">
              <Ticket className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase">{active.label}</span>
              <h3 className="text-2xl font-black text-white">{active.title}</h3>
              <p className="text-xs text-slate-400">{active.sub}</p>
            </div>

            <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg">
              <span>EXPLORE OBJECT PERKS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase transition-all ${
                activeIdx === idx
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories11;
