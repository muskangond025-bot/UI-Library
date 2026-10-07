import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CategoryItem {
  id: string;
  tag: string;
  title: string;
  sub: string;
  perks: string[];
  image: string;
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
  {
    id: 'bogo',
    tag: 'BOGO UNLOCKED',
    title: 'Buy 1 Get 1 Free Collection',
    sub: 'Double basket value across footwear and activewear collections.',
    perks: ['Auto-applied at checkout stage', 'Mix & match eligible apparel items', 'Free 30-day size exchange warranty'],
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shipping',
    tag: '$0 FREIGHT',
    title: 'Free Express Courier Shipping',
    sub: 'Complimentary door-to-door air freight on orders over $49.',
    perks: ['Guaranteed 2-day air dispatch', 'Live GPS package tracking alerts', 'Pre-paid customs & duties pre-cleared'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bank',
    tag: '15% CASHBACK',
    title: 'Partner Bank Card Rebates',
    sub: 'Instant statement credits on participating credit card issuers.',
    perks: ['No promo coupon code required', 'Combines with existing store discounts', 'Instant checkout verification'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundles',
    tag: 'SAVE UP TO 35%',
    title: 'Curated Combo Accessories Pack',
    sub: 'Group tech gadgets and lifestyle products for bundled savings.',
    perks: ['Maximized bundle basket value', 'Included premium protective pouch', '1-Year comprehensive product warranty'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'
  }
];

export function OffersCategories20({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Award-Level Offer Category Experience';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = categories[activeIdx] || categories[0];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AWARD-LEVEL MULTI-COLUMN DASHBOARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Left Navigation Index */}
          <div className="lg:col-span-4 space-y-3">
            {categories.map((cat, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isActive
                      ? 'bg-slate-900 border-amber-400/60 shadow-xl ring-1 ring-amber-400/30'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-xs font-bold text-amber-400 uppercase">{cat.tag}</span>
                    <span className="text-xs text-slate-500 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white">{cat.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Column 2: Center Interactive Hero Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-800 relative shadow-2xl flex flex-col justify-end p-8"
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase">
                    {active.tag}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">{active.title}</h3>
                  <p className="text-xs text-slate-300">{active.sub}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: Right Perks & Metadata */}
          <div className="lg:col-span-3 bg-slate-900 p-7 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase block">PERKS & ELIGIBILITY</span>
              <div className="space-y-3">
                {active.perks.map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg transition-all">
              <span>ACTIVATE OFFER PERK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersCategories20;
