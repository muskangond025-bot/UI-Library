import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface IndexGroup {
  number: string;
  category: string;
  questions: { id: string; q: string; a: string }[];
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
    number: '01',
    category: 'OFFER BASICS',
    questions: [
      { id: '1', q: 'How do I apply offer discounts?', a: 'Offers apply automatically at checkout when minimum subtotal targets are reached.' },
      { id: '2', q: 'Where do I enter promo codes?', a: 'Enter your coupon code in the designated box during payment step.' }
    ]
  },
  {
    number: '02',
    category: 'ELIGIBILITY & SPEND',
    questions: [
      { id: '3', q: 'What is the minimum spend for free shipping?', a: 'Free shipping unlocks at $49 subtotal after discounts.' }
    ]
  }
];

export function OffersFaq9({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Editorial FAQ Side Index';
  const groups = settings.groups || DEFAULT_GROUPS;

  const [activeGroupIdx, setActiveGroupIdx] = useState(0);
  const currentGroup = groups[activeGroupIdx] || groups[0];

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-serif text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="space-y-2 font-sans max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: FAQ Side Index • Animation: Active Index Movement & Line Scale
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Side Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          
          {/* Left Side Index List */}
          <div className="lg:col-span-4 space-y-2">
            {groups.map((grp, idx) => {
              const isActive = activeGroupIdx === idx;
              return (
                <button
                  key={grp.number}
                  onClick={() => setActiveGroupIdx(idx)}
                  className={`w-full p-4 rounded-xl text-left flex items-center justify-between font-mono text-xs font-bold uppercase transition-all ${
                    isActive ? 'bg-amber-400 text-slate-950 shadow-lg' : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{grp.number} {grp.category}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          {/* Right Question Stream */}
          <div className="lg:col-span-8 space-y-6">
            <div className="border-b border-slate-800 pb-3 font-mono text-xs text-amber-400 font-bold uppercase">
              INDEX GROUP {currentGroup.number} — {currentGroup.category}
            </div>

            <div className="space-y-4">
              {currentGroup.questions.map((q) => (
                <div key={q.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h3 className="text-xl font-bold font-serif text-white">{q.q}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{q.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFaq9;
