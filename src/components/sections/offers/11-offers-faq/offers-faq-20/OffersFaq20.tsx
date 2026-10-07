import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  id: string;
  tag: string;
  question: string;
  answer: string;
  perks: string[];
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      faqs?: FaqItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    id: '1',
    tag: 'COMBINATIONS',
    question: 'Can I combine multiple promotional offers on one checkout?',
    answer: 'Promotional offers cannot be stacked. Checkout automatically selects and applies the single highest discount calculation for your cart items.',
    perks: ['Auto-selected highest discount', 'Instant checkout calculation', 'No manual code sorting']
  },
  {
    id: '2',
    tag: 'MINIMUM SPEND',
    question: 'Is there a minimum order subtotal required for free express shipping?',
    answer: 'Yes, zero-cost express air shipping activates automatically once cart subtotal reaches $49.00 or more.',
    perks: ['2-Day express air courier', 'Live GPS package tracking', 'Zero duty surcharges']
  },
  {
    id: '3',
    tag: 'BANK CASHBACK',
    question: 'Do partner bank cashbacks stack with ongoing store sales?',
    answer: 'Yes! Instant bank cashbacks apply directly at payment gateway processing and stack with existing store markdowns.',
    perks: ['Participating credit cards', 'Instant verification', 'Stackable offer']
  }
];

export function OffersFaq20({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Award-Level Hybrid Offer FAQ Experience';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = faqs[activeIdx] || faqs[0];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design: Award-Level Hybrid FAQ • Animation: Masked Text Reveal & Multicolumn Crossfade (NO GLASS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        {/* 3-Column Layout (NO GLASS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Question Index */}
          <div className="lg:col-span-5 space-y-3">
            {faqs.map((faq, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={faq.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isActive
                      ? 'bg-slate-900 border-amber-400/60 shadow-xl ring-1 ring-amber-400/30'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center font-mono">
                    <span className="text-xs font-bold text-amber-400 uppercase">{faq.tag}</span>
                    <span className="text-xs text-slate-500 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white">{faq.question}</h3>
                </div>
              );
            })}
          </div>

          {/* Column 2: Answer Display Panel */}
          <div className="lg:col-span-4 bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <span className="text-xs font-mono text-amber-400 font-bold uppercase block">{active.tag} ANSWER</span>
                <h4 className="text-xl font-bold font-serif text-white leading-snug">{active.question}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{active.answer}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: Policy Perks & Rules */}
          <div className="lg:col-span-3 bg-slate-900 p-7 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase block">KEY POLICY PERKS</span>
              <div className="space-y-3">
                {active.perks.map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg transition-all">
              <span>GOT IT, CONTINUE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFaq20;
