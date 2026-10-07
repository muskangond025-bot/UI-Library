import React, { useState } from 'react';
import { ArrowRight, Sparkles, Tag, Gift, Truck, CreditCard } from 'lucide-react';

interface PanelItem {
  id: string;
  title: string;
  discount: string;
  sub: string;
  image: string;
  perks: string[];
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      categories?: PanelItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: PanelItem[] = [
  { id: '1', title: 'Percentage Off', discount: 'UP TO 50% OFF', sub: 'Site-wide savings on apparel & electronics', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', perks: ['Instant cart deduction', 'No code needed', 'Applies to sales'] },
  { id: '2', title: 'Buy 1 Get 1 Free', discount: 'BOGO DEALS', sub: 'Mix & match footwear and accessories', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80', perks: ['Free item of equal value', 'Unlimited usage', 'Member priority'] },
  { id: '3', title: 'Free Shipping', discount: '$0 FREIGHT', sub: 'Zero courier charge over $49 subtotal', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', perks: ['2-Day express air', 'Live GPS tracking', 'Pre-paid returns'] },
  { id: '4', title: 'Bank Cashbacks', discount: '15% REBATE', sub: 'Instant credit card statement discounts', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80', perks: ['Major card issuers', 'Instant verification', 'Stackable offer'] }
];

export function OffersCategories16({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Interactive Editorial Sliding Accordion Panels';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full py-16 px-4 bg-stone-900 font-sans text-stone-100 border-y border-stone-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            EDITORIAL EXPANDING SLIDE PANELS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Sliding Panel Split Gallery */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[460px]">
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-3xl overflow-hidden border-2 cursor-pointer transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 ${
                  isActive
                    ? 'md:flex-[3.5] bg-stone-950 border-amber-400 shadow-2xl ring-2 ring-amber-400/20'
                    : 'md:flex-1 bg-stone-950/80 border-stone-800 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isActive ? 'scale-105 opacity-40' : 'scale-100 opacity-20 filter grayscale'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold uppercase border ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-md'
                      : 'bg-stone-900/90 text-stone-300 border-stone-700'
                  }`}>
                    {cat.discount}
                  </span>
                  <span className="font-mono text-xs font-bold text-stone-400">0{idx + 1}</span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-stone-100">{cat.title}</h3>
                    <p className="text-xs text-stone-300 font-medium">{cat.sub}</p>
                  </div>

                  {isActive && (
                    <div className="pt-2 border-t border-stone-800/80 space-y-3">
                      <div className="flex flex-wrap gap-2 text-[11px] font-mono text-amber-300 font-bold">
                        {cat.perks.map((p, i) => (
                          <span key={i} className="bg-stone-900/90 px-2.5 py-1 rounded-md border border-stone-800">
                            ✓ {p}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg transition-all">
                        <span>EXPLORE {cat.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories16;
