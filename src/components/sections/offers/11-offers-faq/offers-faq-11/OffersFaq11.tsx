import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface FaqPanel {
  id: string;
  tag: string;
  question: string;
  answer: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      faqs?: FaqPanel[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqPanel[] = [
  { id: '1', tag: 'USAGE', question: 'How to use an offer?', answer: 'Offers apply automatically at checkout once qualifying subtotal targets are reached.' },
  { id: '2', tag: 'ELIGIBILITY', question: 'Minimum order amount?', answer: 'Free express air shipping activates automatically on order subtotals over $49.' },
  { id: '3', tag: 'EXPIRY', question: 'Offer validity duration?', answer: 'Campaign timers run continuously; vouchers must be authorized before timer expiry.' },
  { id: '4', tag: 'COMBINATIONS', question: 'Can I combine codes?', answer: 'Checkout selects the highest discount calculation. Multiple codes cannot stack.' }
];

export function OffersFaq11({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Horizontal FAQ Panel Exploration Rail';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="space-y-2 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Horizontal FAQ Rail • Animation: Active Panel Width Expansion & Compression
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Horizontal Rail Panels */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[360px]">
          {faqs.map((faq, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={faq.id}
                onClick={() => setActiveIdx(idx)}
                className={`p-7 rounded-3xl border cursor-pointer transition-all duration-500 flex flex-col justify-between space-y-6 ${
                  isActive
                    ? 'md:flex-[3] bg-gradient-to-b from-blue-950 to-slate-900 border-blue-500/60 shadow-2xl scale-[1.02]'
                    : 'md:flex-1 bg-slate-900/60 border-slate-800/80 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-xs font-bold text-blue-400 uppercase">{faq.tag}</span>
                    <span className="text-xs text-slate-500">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                </div>

                {isActive ? (
                  <p className="text-xs text-slate-300 leading-relaxed font-medium pt-2 border-t border-blue-500/30">
                    {faq.answer}
                  </p>
                ) : (
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase">
                    <span>SELECT PANEL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFaq11;
