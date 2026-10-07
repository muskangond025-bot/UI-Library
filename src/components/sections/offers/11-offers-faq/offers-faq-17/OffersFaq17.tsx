import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

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
  { id: '1', question: 'How do I redeem my offer discount at checkout?', answer: 'Offers apply automatically at checkout when order subtotal meets promotional campaign rules.' },
  { id: '2', question: 'Can I combine multiple promotional vouchers?', answer: 'One coupon code per checkout session is permitted. Bank rebates stack automatically.' },
  { id: '3', question: 'What is the shipping threshold for zero-cost delivery?', answer: 'Free express shipping unlocks automatically on order subtotals over $49.00.' }
];

export function OffersFaq17({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Subtle Frosted Glass Offer FAQ (ONLY Glass Variant Allowed)';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800 relative overflow-hidden">
      
      {/* Ambient Glass Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Glassmorphism ONLY (Variant 17 of 20) • Animation: Floating Depth & Glass Expansion
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Translucent Frosted Glass Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-300 transition-transform ${isOpen ? 'rotate-180 text-white' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/10 px-6 pb-6 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/40"
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

export default OffersFaq17;
