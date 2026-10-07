import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  aspect: string;
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
  { id: '1', title: 'FIRST ORDER PERKS', tag: '20% OFF FIRST PURCHASE', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', aspect: 'h-80' },
  { id: '2', title: 'BUNDLE & COMBOS', tag: 'SAVE UP TO 35%', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80', aspect: 'h-64' },
  { id: '3', title: 'FREE SHIPPING', tag: '$0 FREIGHT THRESHOLD', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', aspect: 'h-64' },
  { id: '4', title: 'BANK CASHBACKS', tag: '15% CARD DISCOUNT', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80', aspect: 'h-80' }
];

export function OffersCategories8({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Image-Led Visual Category Gallery';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="space-y-3 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            IMAGE-FIRST EDITORIAL GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`relative rounded-3xl overflow-hidden border border-slate-800 group cursor-pointer ${cat.aspect}`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-end">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/20 text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-300 font-bold uppercase block">{cat.tag}</span>
                  <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">{cat.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories8;
