import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Tag } from 'lucide-react';

interface FaqItem {
  id: string;
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
      faqs?: FaqItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqItem[] = [
  { id: '1', question: 'How do I unlock free shipping discounts?', answer: 'Free shipping automatically unlocks when your order subtotal crosses $49.00.', category: 'Free Shipping' },
  { id: '2', question: 'Can I stack bank offers with coupon codes?', answer: 'Bank cashbacks apply at payment gateway step and can be stacked with discount coupons.', category: 'Bank Offers' },
  { id: '3', question: 'What is the minimum order for first-time customer offers?', answer: 'First order 20% discounts require a minimum order subtotal of $30.00.', category: 'First Order' },
  { id: '4', question: 'Are promo codes valid during flash sale events?', answer: 'Promo codes are disabled during storewide flash sales unless specifically marked as flash-compatible.', category: 'Flash Sale' }
];

export function OffersFaq4({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer FAQ Search Portal';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [query, setQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(f =>
    f.question.toLowerCase().includes(query.toLowerCase()) ||
    f.answer.toLowerCase().includes(query.toLowerCase()) ||
    f.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: FAQ Search Experience • Animation: Input Expand & Filter Result Transition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Search Bar Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search offer questions (e.g. 'minimum order', 'bank offer', 'shipping')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white placeholder:text-slate-500 font-medium text-sm focus:outline-none focus:border-cyan-500 transition-all shadow-xl"
          />
        </div>

        {/* Results Count & Accordion List */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 px-1">
            <span>SHOWING {filteredFaqs.length} OFFER FAQ RESULTS</span>
            {query && <button onClick={() => setQuery('')} className="text-cyan-400 hover:underline">Clear Search</button>}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={faq.id} className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-[10px] font-bold uppercase border border-cyan-500/30">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-slate-800 px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/60"
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

      </div>
    </section>
  );
}

export default OffersFaq4;
