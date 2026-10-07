import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';

interface CategoryNode {
  id: string;
  label: string;
  title: string;
  sub: string;
  angle: number;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      categories?: CategoryNode[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: CategoryNode[] = [
  { id: '1', label: 'BOGO', title: 'Buy 1 Get 1 Deals', sub: 'Double basket value', angle: 0 },
  { id: '2', label: 'SHIPPING', title: 'Free Express Delivery', sub: '$0 Freight threshold', angle: 45 },
  { id: '3', label: 'BANK', title: 'Partner Cashbacks', sub: 'Instant card credit', angle: 90 },
  { id: '4', label: 'BUNDLES', title: 'Combo Packs', sub: 'Save up to 35%', angle: 135 },
  { id: '5', label: 'FIRST ORDER', title: 'Welcome Discount', sub: '20% Off first order', angle: 180 },
  { id: '6', label: 'FLASH', title: 'Flash Hour Sale', sub: 'Limited time drop', angle: 225 },
  { id: '7', label: 'MEMBERS', title: 'VIP Exclusive Perks', sub: '2x Reward points', angle: 270 },
  { id: '8', label: 'SEASONAL', title: 'Season Clearance', sub: 'Up to 60% off', angle: 315 },
];

export function OffersCategories6({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Circular Offer Orbit Navigation';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeNode = categories[activeIdx] || categories[0];

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
            RADIAL ORBIT NAVIGATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Orbit Canvas Container */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto flex items-center justify-center">
          
          {/* Orbital Ring Line */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-800 animate-[spin_60s_linear_infinite]" />

          {/* Central Target Display */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 border-2 border-purple-500/50 p-4 flex flex-col items-center justify-center text-center shadow-2xl relative z-10 space-y-1">
            <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">
              ACTIVE NODE
            </span>
            <h3 className="text-sm font-bold text-white leading-tight">{activeNode.label}</h3>
            <p className="text-[10px] text-slate-400 line-clamp-1">{activeNode.sub}</p>
          </div>

          {/* Orbiting Category Satellite Buttons */}
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;
            const radius = 140; // distance from center in px
            const rad = (cat.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-[10px] uppercase transition-all duration-300 z-20 ${
                  isActive
                    ? 'bg-purple-500 text-slate-950 border-white shadow-[0_0_20px_rgba(168,85,247,0.8)] scale-125'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                }`}
              >
                {cat.label.slice(0, 4)}
              </button>
            );
          })}
        </div>

        {/* Selected Category Details Card */}
        <div className="max-w-md mx-auto bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-3 shadow-xl">
          <span className="text-xs font-mono text-purple-400 font-bold uppercase block">{activeNode.label} CATEGORY</span>
          <h4 className="text-xl font-bold text-white">{activeNode.title}</h4>
          <p className="text-xs text-slate-400">{activeNode.sub}</p>
        </div>

      </div>
    </section>
  );
}

export default OffersCategories6;
