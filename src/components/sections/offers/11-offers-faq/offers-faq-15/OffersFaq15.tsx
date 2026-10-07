import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SpreadPage {
  id: string;
  issue: string;
  question: string;
  answer: string;
  category: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      pages?: SpreadPage[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_PAGES: SpreadPage[] = [
  { id: '1', issue: '01 / 04', category: 'PROMOTIONAL COMBINATIONS', question: 'CAN I USE A BANK OFFER WITH A PROMOTIONAL CODE?', answer: 'Yes! Instant bank cashbacks apply directly at payment gateway authorization step and stack with promo codes.' },
  { id: '2', issue: '02 / 04', category: 'MINIMUM SPEND RULES', question: 'WHAT IS THE MINIMUM SPEND REQUIRED FOR FREE SHIPPING?', answer: 'Orders crossing $49.00 subtotal qualify automatically for 100% zero-cost express ground shipping.' },
  { id: '3', issue: '03 / 04', category: 'FIRST ORDER PERKS', question: 'ARE WELCOME OFFERS VALID FOR EXISTING USERS?', answer: 'First-order 20% discounts apply exclusively to new account registrations on their inaugural checkout.' },
  { id: '4', issue: '04 / 04', category: 'RETURNS & DISCOUNTS', question: 'WHAT HAPPENS TO MY OFFER SAVINGS IF I RETURN ITEMS?', answer: 'Refund amounts are calculated based on net price paid per item after proportional discount allocation.' }
];

export function OffersFaq15({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Editorial Magazine Spread FAQ';
  const pages = settings.pages || DEFAULT_PAGES;

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const currentPage = pages[activeIdx] || pages[0];

  const nextPage = () => setActiveIdx((prev) => (prev + 1) % pages.length);
  const prevPage = () => setActiveIdx((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-serif text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-sans">
          <div className="space-y-2 max-w-xl">
            <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider inline-block">
              Design: Magazine FAQ • Animation: Editorial Horizontal Page Transition & Text Masking
            </span>
            <h2 className="text-3xl font-serif font-extrabold text-white tracking-tight">{heading}</h2>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono">
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-amber-400">{currentPage.issue}</span>
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Magazine Spread Display */}
        <div className="bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-8 font-sans min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                {currentPage.category}
              </span>

              <h3 className="text-2xl sm:text-4xl font-serif font-black text-white leading-tight">
                "{currentPage.question}"
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl pt-4 border-t border-slate-800/80">
                {currentPage.answer}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default OffersFaq15;
