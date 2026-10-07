import React, { useState } from 'react';
import { Tag } from 'lucide-react';

interface CategoryItem {
  id: string;
  tag: string;
  sub: string;
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
  { id: '1', tag: 'FREE SHIPPING OVER $49', sub: 'Zero Freight' },
  { id: '2', tag: 'BUY 1 GET 1 FREE DEALS', sub: 'Double Value' },
  { id: '3', tag: 'PARTNER BANK 15% REBATE', sub: 'Card Perks' },
  { id: '4', tag: 'BUNDLE COMBO SAVINGS 35%', sub: 'Pack Savings' }
];

export function OffersCategories13({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Dual Promotional Ticker Track';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeTag, setActiveTag] = useState<string>(categories[0].tag);

  return (
    <section className="w-full py-14 bg-slate-950 font-mono text-white border-y border-slate-800 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 mb-6 text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-widest">
          HIGH-VELOCITY DUAL TRACK TICKER
        </span>
        <h2 className="text-3xl font-black text-white tracking-tight uppercase">{heading}</h2>
      </div>

      {/* Top Ticker Track */}
      <div className="w-full bg-slate-900 py-3 border-y border-slate-800 flex overflow-hidden">
        <div className="flex shrink-0 items-center justify-around gap-6 min-w-full animate-[marquee_20s_linear_infinite] font-black text-sm tracking-wider uppercase text-amber-400">
          {categories.concat(categories).map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTag(item.tag)}
              className="hover:underline flex items-center gap-2"
            >
              <Tag className="w-4 h-4" />
              <span>{item.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Popup Tag Display */}
      <div className="max-w-xl mx-auto px-4 mt-8 text-center">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-[10px] text-slate-400 font-bold uppercase block">ACTIVE TICKER SELECTION</span>
          <h3 className="text-xl font-bold text-white font-sans">{activeTag}</h3>
        </div>
      </div>
    </section>
  );
}

export default OffersCategories13;
