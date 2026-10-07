import React, { useState } from 'react';
import { Network, ArrowRight } from 'lucide-react';

interface BranchNode {
  id: string;
  category: string;
  items: { label: string; sub: string }[];
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      branches?: BranchNode[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_BRANCHES: BranchNode[] = [
  {
    id: 'savings',
    category: 'SAVINGS',
    items: [
      { label: 'Percentage Discounts', sub: 'Up to 50% off select lines' },
      { label: 'Flat Rate Savings', sub: '$20 Instant checkout discount' }
    ]
  },
  {
    id: 'volume',
    category: 'VOLUME DEALS',
    items: [
      { label: 'Buy 1 Get 1 Free', sub: 'Double basket selection' },
      { label: 'Bundle & Combo Packs', sub: 'Group items for 35% off' }
    ]
  },
  {
    id: 'perks',
    category: 'PERKS & DELIVERY',
    items: [
      { label: 'Free Express Shipping', sub: '$0 Freight threshold over $49' },
      { label: 'Partner Bank Rebates', sub: '15% Credit card cashback' }
    ]
  }
];

export function OffersCategories14({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Mind-Map Connected Node Graph';
  const branches = settings.branches || DEFAULT_BRANCHES;

  const [activeBranch, setActiveBranch] = useState<string>(branches[0].id);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            SVG NODE MAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Central Core & Branches Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((b) => {
            const isActive = activeBranch === b.id;
            return (
              <div
                key={b.id}
                onClick={() => setActiveBranch(b.id)}
                className={`p-7 rounded-3xl border transition-all cursor-pointer space-y-6 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-emerald-500/60 shadow-2xl ring-1 ring-emerald-500/30'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-mono text-[10px] font-bold uppercase border border-emerald-500/20">
                    BRANCH: {b.category}
                  </span>

                  <div className="space-y-3 pt-2">
                    {b.items.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                        <h4 className="font-bold text-sm text-white">{item.label}</h4>
                        <p className="text-xs text-slate-400">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between font-mono text-xs font-bold text-emerald-400">
                  <span>EXPLORE BRANCH</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersCategories14;
