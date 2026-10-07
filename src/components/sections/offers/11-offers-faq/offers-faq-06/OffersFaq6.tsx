import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FaqSection {
  category: string;
  items: { id: string; question: string; answer: string }[];
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      sections?: FaqSection[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_SECTIONS: FaqSection[] = [
  {
    category: 'OFFER BASICS',
    items: [
      { id: '1', question: 'How do I redeem my offer?', answer: 'Offers apply automatically at checkout when minimum subtotal targets are reached.' },
      { id: '2', question: 'Where do I enter promo codes?', answer: 'Enter your coupon code in the designated box during payment step.' }
    ]
  },
  {
    category: 'ELIGIBILITY & MINIMUMS',
    items: [
      { id: '3', question: 'Is there a minimum order subtotal?', answer: 'Free shipping unlocks at $49 subtotal; percentage promo codes unlock at $30 subtotal.' },
      { id: '4', question: 'Are sale items eligible for promo codes?', answer: 'Sale items are eligible unless marked as Final Clearance.' }
    ]
  },
  {
    category: 'BANK CASHBACKS',
    items: [
      { id: '5', question: 'Which bank cards qualify for 15% cashback?', answer: 'Participating Visa and Mastercard credit cards qualify automatically at payment checkout.' }
    ]
  }
];

export function OffersFaq6({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Sticky Navigation Offer FAQ';
  const sections = settings.sections || DEFAULT_SECTIONS;

  const [activeCategory, setActiveCategory] = useState(sections[0].category);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="space-y-2 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Sticky FAQ Navigation • Animation: Scroll-Linked Category Highlight
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Sticky Split Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky Navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-2 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block px-3 pt-2">
              FAQ CATEGORIES
            </span>
            {sections.map((sec) => {
              const isActive = activeCategory === sec.category;
              return (
                <button
                  key={sec.category}
                  onClick={() => setActiveCategory(sec.category)}
                  className={`w-full p-3 rounded-xl font-mono text-xs font-bold uppercase text-left flex items-center justify-between transition-colors ${
                    isActive ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{sec.category}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          {/* Right Content Stream */}
          <div className="lg:col-span-8 space-y-8">
            {sections.filter(s => s.category === activeCategory).map((sec) => (
              <div key={sec.category} className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400 font-mono border-b border-slate-800 pb-2">
                  {sec.category}
                </h3>
                <div className="space-y-4">
                  {sec.items.map((item) => (
                    <div key={item.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                      <h4 className="font-bold text-base text-white">{item.question}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFaq6;
