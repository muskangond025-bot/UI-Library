import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface IndexGroup {
  letter: string;
  items: { title: string; sub: string }[];
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      groups?: IndexGroup[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_GROUPS: IndexGroup[] = [
  {
    letter: 'A',
    items: [{ title: 'ALL STOREWIDE OFFERS', sub: 'Complete active catalog' }]
  },
  {
    letter: 'B',
    items: [
      { title: 'BUY 1 GET 1 FREE', sub: 'Double basket value' },
      { title: 'BANK CARD REBATES', sub: 'Instant 15% cashback' },
      { title: 'BUNDLE COMBO PACKS', sub: 'Save up to 35%' }
    ]
  },
  {
    letter: 'F',
    items: [
      { title: 'FREE EXPRESS SHIPPING', sub: '$0 Freight threshold over $49' },
      { title: 'FIRST ORDER DISCOUNT', sub: 'Welcome 20% off perk' }
    ]
  }
];

export function OffersCategories19({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Fashion Alphabetical Index Directory';
  const groups = settings.groups || DEFAULT_GROUPS;

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-serif text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="space-y-3 max-w-xl font-sans">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            ALPHABETICAL INDEX DIRECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Grouped Alphabet Directory */}
        <div className="space-y-10 font-sans">
          {groups.map((grp) => (
            <div key={grp.letter} className="border-t border-slate-800 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-5xl font-serif font-black text-amber-400 block">{grp.letter}</span>
              </div>

              <div className="md:col-span-10 space-y-4">
                {grp.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between gap-4 cursor-pointer group transition-all"
                  >
                    <div className="space-y-0.5">
                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400">{item.sub}</p>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories19;
