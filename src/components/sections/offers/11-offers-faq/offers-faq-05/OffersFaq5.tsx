import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tabCategory: string;
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
  { id: '1', question: 'How do I redeem a store promotion code?', answer: 'Copy your discount code and paste it into the coupon field during checkout stage.', tabCategory: 'GENERAL' },
  { id: '2', question: 'Can I stack a 20% discount with a BOGO offer?', answer: 'Percentage discounts apply to cart items not included in active BOGO quantity pairs.', tabCategory: 'DISCOUNT' },
  { id: '3', question: 'Are partner bank cashbacks credited instantly?', answer: 'Bank rebates are processed instantly at checkout gateway and reflected on your order statement.', tabCategory: 'PAYMENT' },
  { id: '4', question: 'Does free shipping apply to express overnight orders?', answer: 'Standard zero-cost shipping applies to ground delivery. Express overnight upgrades carry a small fee.', tabCategory: 'SHIPPING' },
  { id: '5', question: 'What happens to offer discounts if I request a return?', answer: 'Returned items are refunded at the net price paid after proportional offer allocation.', tabCategory: 'RETURNS' }
];

export function OffersFaq5({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer Category Tabs FAQ';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const tabs = ['GENERAL', 'DISCOUNT', 'PAYMENT', 'SHIPPING', 'RETURNS'];
  const [activeTab, setActiveTab] = useState('GENERAL');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(f => f.tabCategory === activeTab);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Category Tabs + Accordion • Animation: Sliding Active Pill Indicator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Tab Controls (NO GLASS) */}
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-slate-900 rounded-2xl border border-slate-800">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenIdx(0); }}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* FAQ List for Active Tab */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.id} className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:bg-slate-800/60 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-indigo-400' : ''}`} />
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
    </section>
  );
}

export default OffersFaq5;
