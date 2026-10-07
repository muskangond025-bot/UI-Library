import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  tag: string;
  title: string;
  sub: string;
  href?: string;
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
  { id: '1', tag: 'BOGO', title: 'Buy 1 Get 1 Free', sub: 'Double up items' },
  { id: '2', tag: 'FREE SHIPPING', title: 'Zero Freight Threshold', sub: 'Free ground delivery' },
  { id: '3', tag: 'BANK OFFER', title: 'Partner Card Cashback', sub: 'Instant 15% credit' },
  { id: '4', tag: 'BUNDLES', title: 'Curated Combo Packs', sub: 'Save up to 35%' }
];

export function OffersCategories4({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Kinetic Offer Marquee Directory';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const activeCategory = categories.find(c => c.id === activeId) || categories[0];

  const marqueeText = 'SAVE MORE • BOGO OFFERS • ZERO SHIPPING • BANK CASHBACKS • BUNDLE DEALS • VIP SAVINGS • ';

  return (
    <section className="w-full py-16 bg-slate-950 text-white font-mono border-y border-slate-800 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 mb-8 space-y-2 text-center">
        <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-widest">
          KINETIC TYPOGRAPHY STRIP
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
          {heading}
        </h2>
      </div>

      {/* Infinite Top Marquee Track */}
      <div className="w-full bg-amber-400 text-slate-950 py-3.5 border-y-2 border-slate-950 flex overflow-hidden">
        <div className="flex shrink-0 items-center justify-around gap-6 min-w-full animate-[marquee_25s_linear_infinite] font-black text-base tracking-widest uppercase">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{marqueeText}</span>
          ))}
        </div>
      </div>

      {/* Interactive Category Badge Strip */}
      <div className="max-w-5xl mx-auto py-10 px-4 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-5 py-3 rounded-2xl border text-xs font-bold font-sans tracking-wide uppercase transition-all ${
                isActive
                  ? 'bg-white text-slate-950 border-white shadow-xl scale-105'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.tag}
            </button>
          );
        })}
      </div>

      {/* Active Selection Display */}
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-slate-900 p-7 rounded-3xl border border-slate-800 space-y-4 shadow-2xl">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
            SELECTED CATEGORY
          </span>
          <h3 className="text-2xl font-black text-white font-sans">{activeCategory.title}</h3>
          <p className="text-xs text-slate-400 font-sans">{activeCategory.sub}</p>
        </div>
      </div>
    </section>
  );
}

export default OffersCategories4;
