import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category?: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      description?: string;
      faqs?: FaqItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'CAN I COMBINE TWO PROMOTIONAL OFFERS ON A SINGLE ORDER?',
    answer: 'Promotional offers generally cannot be stacked unless explicitly stated in the offer terms. Checkout will automatically select and apply the single highest discount calculation for your cart items.',
    category: 'COMBINATIONS'
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'IS THERE A MINIMUM CART ORDER VALUE FOR FREE SHIPPING OFFERS?',
    answer: 'Yes, standard zero-cost shipping offers require a $49.00 subtotal threshold after discounts and before taxes. Qualifying thresholds are displayed live in your cart progress meter.',
    category: 'MINIMUM SPEND'
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'HOW LONG IS MY STOREWIDE PROMO VOUCHER CODE VALID?',
    answer: 'Promotional validity periods vary by campaign. Expiry dates are listed on the promo banner. Countdown timers run continuously in real time until campaign termination.',
    category: 'VALIDITY'
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'WHAT HAPPENS TO MY OFFER SAVINGS IF I RETURN AN ITEM?',
    answer: 'Refunds are calculated based on the actual net price paid per item after offer allocation. Pro-rated discount amounts applied across bundled items are retained on non-returned items.',
    category: 'RETURNS'
  }
];

export function OffersFaq1({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Editorial Offer Questions';
  const description = settings.description || 'Clear answers to common questions regarding promotional discount codes, shipping thresholds, and bank cashback perks.';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 font-serif text-white border-y border-slate-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Editorial Header */}
        <div className="space-y-4 font-sans max-w-2xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest inline-block">
            Design: Editorial Numbered FAQ • Animation: Line Draw & Text Reveal
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Editorial Directory FAQ List (NO CARDS) */}
        <div className="space-y-0 divide-y divide-slate-800 font-sans">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.id} className="py-8 space-y-4 group">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-amber-400 shrink-0">
                      {faq.number || `0${idx + 1}`}
                    </span>
                    <div className="space-y-1">
                      {faq.category && (
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest block">
                          {faq.category}
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-full border border-slate-700 text-slate-400 group-hover:border-amber-400 group-hover:text-amber-400 transition-colors shrink-0 mt-1">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-12 sm:pl-16 pr-8 text-slate-400 text-sm sm:text-base leading-relaxed font-sans"
                    >
                      <p className="pt-2 pb-4 text-slate-300 border-l-2 border-amber-400/60 pl-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFaq1;
