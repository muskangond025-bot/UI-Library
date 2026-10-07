import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
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
      faqs?: FaqItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqItem[] = [
  { id: '1', question: 'How do I apply a promotional offer to my shopping cart?', answer: 'Eligible offer discounts are automatically calculated and deducted at the final payment step during checkout.' },
  { id: '2', question: 'Can I combine multiple offer codes in a single order?', answer: 'Only one promotional code can be applied per order unless a stackable bank cashback offer is explicitly enabled.' },
  { id: '3', question: 'Does free shipping apply to items bought on clearance sale?', answer: 'Yes, clearance items count toward the minimum subtotal required to unlock zero-cost express ground shipping.' },
  { id: '4', question: 'What happens if an offer expires before my transaction completes?', answer: 'Offers must be submitted and authorized prior to campaign expiration timer cutoff to secure discount pricing.' }
];

export function OffersFaq2({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Minimal Hairline Accordion FAQ';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-3xl mx-auto space-y-10">
        
        <div className="space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Minimal Hairline Accordion • Animation: Height Expansion & Plus/Minus Morph
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Minimal Hairline Accordion Lines (NO CARDS, NO SHADOWS, NO GRADIENTS) */}
        <div className="space-y-0 divide-y divide-slate-800 border-y border-slate-800">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left font-semibold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-slate-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal"
                    >
                      {faq.answer}
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

export default OffersFaq2;
