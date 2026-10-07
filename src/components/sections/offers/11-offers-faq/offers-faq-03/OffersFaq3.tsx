import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, HelpCircle } from 'lucide-react';

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
      description?: string;
      faqs?: FaqItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqItem[] = [
  { id: '1', question: 'How do I redeem my promotional voucher code?', answer: 'Enter your valid promo code in the coupon field at checkout. Discount benefits reflect live before payment confirmation.', category: 'REDEEMING' },
  { id: '2', question: 'Can bank offer cashbacks be combined with store sales?', answer: 'Yes! Instant bank rebates apply directly at payment gateway processing and can stack with existing product markdowns.', category: 'BANK PERKS' },
  { id: '3', question: 'Are first-order discounts valid for existing accounts?', answer: 'Welcome discounts apply exclusively to new account creations on their inaugural completed transaction.', category: 'ELIGIBILITY' },
  { id: '4', question: 'What is the shipping threshold for zero-cost express delivery?', answer: 'Orders crossing $49.00 subtotal qualify for 100% free nationwide express air courier delivery.', category: 'SHIPPING' }
];

export function OffersFaq3({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Split-Screen Offer FAQ Showcase';
  const description = settings.description || 'Select questions on the left panel to display corresponding offer rules on the right display screen.';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [activeFaq, setActiveFaq] = useState<FaqItem>(faqs[0]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Split-Screen FAQ • Animation: Horizontal Question Slide & Answer Directional Crossfade
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Question List */}
          <div className="lg:col-span-6 space-y-3">
            {faqs.map((faq) => {
              const isActive = activeFaq.id === faq.id;
              return (
                <div
                  key={faq.id}
                  onClick={() => setActiveFaq(faq)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-slate-900 border-blue-500/60 shadow-xl translate-x-2'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">{faq.category}</span>
                      <h3 className="text-base font-bold text-white">{faq.question}</h3>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Display Screen */}
          <div className="lg:col-span-6 bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaq.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">{activeFaq.category} RULE</span>
                    <h4 className="text-lg font-bold text-white leading-tight">{activeFaq.question}</h4>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-300 leading-relaxed font-medium">
                  {activeFaq.answer}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFaq3;
