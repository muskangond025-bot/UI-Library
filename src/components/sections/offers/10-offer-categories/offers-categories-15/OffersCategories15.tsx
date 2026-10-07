import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  num: string;
  title: string;
  tag: string;
  sub: string;
  rot: string;
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
  { id: '1', num: '01', title: 'PERCENTAGE SAVINGS', tag: 'UP TO 50% OFF', sub: 'Site-wide discounts across apparel & tech', rot: '-rotate-1' },
  { id: '2', num: '02', title: 'BUY 1 GET 1 FREE', tag: 'BOGO UNLOCKED', sub: 'Double item quantities at zero added cost', rot: 'rotate-2' },
  { id: '3', num: '03', title: 'FREE EXPRESS SHIPPING', tag: '$0 FREIGHT', sub: 'Complimentary shipping over $49 threshold', rot: '-rotate-2' },
  { id: '4', num: '04', title: 'BANK CARD CASHBACK', tag: '15% CASHBACK', sub: 'Instant partner card statement credit', rot: 'rotate-1' }
];

export function OffersCategories15({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Editorial Sticker & Collage Directory';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  return (
    <section className="w-full py-16 px-4 bg-slate-900 font-sans text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="space-y-3 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            EDITORIAL COLLAGE MIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Collage Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden space-y-4 transition-transform duration-300 hover:scale-[1.02] ${cat.rot}`}
            >
              <div className="flex justify-between items-start">
                <span className="text-2xl font-mono font-black text-amber-400">{cat.num}</span>
                <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold uppercase">
                  {cat.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold font-serif text-white">{cat.title}</h3>
                <p className="text-xs text-slate-400">{cat.sub}</p>
              </div>

              <div className="pt-2 flex justify-end">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories15;
