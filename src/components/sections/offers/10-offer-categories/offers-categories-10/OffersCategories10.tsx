import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  num: string;
  title: string;
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
  { id: '1', num: '01', title: 'PERCENTAGE OFFERS', sub: 'Tiered savings up to 50% site-wide' },
  { id: '2', num: '02', title: 'BUY 1 GET 1 DEALS', sub: 'Double basket value on select lines' },
  { id: '3', num: '03', title: 'FREE SHIPPING', sub: '$0 Freight threshold over $49' },
  { id: '4', num: '04', title: 'BANK CASHBACKS', sub: '15% Rebate on partner cards' }
];

export function OffersCategories10({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'MINIMAL MONOCHROME DIRECTORY';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  return (
    <section className="w-full py-20 px-4 bg-black font-mono text-white border-y border-white/20 select-none">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="space-y-2 border-b border-white/20 pb-6">
          <span className="text-xs uppercase text-slate-400 font-bold tracking-widest block">SWISS ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">{heading}</h2>
        </div>

        <div className="space-y-0 divide-y divide-white/20">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer hover:px-4 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="text-xl font-bold text-slate-500 group-hover:text-white transition-colors">{cat.num}</span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight group-hover:tracking-wider transition-all">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">{cat.sub}</p>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories10;
