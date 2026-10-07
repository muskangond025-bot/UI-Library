import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface CategoryItem {
  id: string;
  badge: string;
  title: string;
  sub: string;
  perks: string[];
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
  { id: '1', badge: 'BOGO DEALS', title: 'Buy 1 Get 1 Free', sub: 'Double basket value across footwear & lifestyle', perks: ['Auto-applied at checkout', 'Mix & match eligible items', 'Free size exchanges'] },
  { id: '2', badge: 'FREE SHIPPING', title: 'Zero Freight Threshold', sub: '$0 Express courier shipping over $49', perks: ['Guaranteed 2-day air delivery', 'Real-time GPS tracking', 'No duty surcharges'] },
  { id: '3', badge: 'BANK REBATES', title: 'Partner Card Cashbacks', sub: 'Instant 15% credit card statement rebates', perks: ['Partner credit card issuers', 'Instant verification', 'Stackable offer'] },
  { id: '4', badge: 'COMBO SAVINGS', title: 'Bundle Combo Packs', sub: 'Group accessories for up to 35% savings', perks: ['Maximized basket value', '1-Year warranty included', 'Free gift pouch'] }
];

export function OffersCategories17({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Subtle Frosted Glass Offer Directory (1 of Max 2 Glass Variants)';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeId, setActiveId] = useState<string>(categories[0].id);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800 relative overflow-hidden">
      
      {/* Soft Ambient Light Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
            SUBTLE FROSTED GLASSMORTIC MODULES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Translucent Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-7 shadow-2xl space-y-6 flex flex-col justify-between cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? 'border-indigo-400 ring-2 ring-indigo-400/30 bg-slate-900/80 -translate-y-1'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold uppercase border border-indigo-400/30">
                      {cat.badge}
                    </span>
                    <Zap className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-600'}`} />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{cat.sub}</p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {cat.perks.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold uppercase flex items-center justify-center gap-1.5 transition-colors ${
                    isActive ? 'bg-indigo-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{isActive ? 'SELECTED' : 'SELECT OFFER'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories17;
