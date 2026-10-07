import React, { useState } from 'react';

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
  { id: '1', question: 'CAN I COMBINE TWO PROMOTIONAL CODES ON A SINGLE ORDER?', answer: 'Multiple promotional codes cannot be stacked. Checkout automatically applies the single highest discount calculation for your cart items.' },
  { id: '2', question: 'HOW LONG IS MY STOREWIDE PROMO VOUCHER CODE VALID?', answer: 'Vouchers expire according to active campaign timers. Codes must be authorized at checkout prior to timer expiry.' },
  { id: '3', question: 'IS THERE A MINIMUM CART SPEND FOR FREE EXPRESS SHIPPING?', answer: 'Free express ground courier shipping activates automatically once cart subtotal reaches $49.00 or more.' }
];

export function OffersFaq18({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Kinetic Typography Question Wall';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [activeId, setActiveId] = useState<string | null>(faqs[0].id);

  return (
    <section className="w-full py-16 px-4 bg-black font-mono text-white border-y border-white/20 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="space-y-2 border-b border-white/20 pb-4">
          <span className="text-xs font-bold uppercase text-slate-400 tracking-widest block">
            Design: Kinetic Typography Wall • Animation: Continuous Kinetic Scroll & Selection Lock
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight">{heading}</h2>
        </div>

        {/* Kinetic Typography Wall */}
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => setActiveId(isActive ? null : faq.id)}
                className={`p-6 border-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black border-white shadow-2xl scale-[1.01]'
                    : 'bg-slate-950 text-white border-white/20 hover:border-white/60'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
                    {faq.question}
                  </h3>
                  <span className="text-xs font-bold">{isActive ? '[CLOSE]' : '[EXPAND]'}</span>
                </div>

                {isActive && (
                  <p className="mt-4 pt-4 border-t border-black/20 text-xs sm:text-sm font-sans font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFaq18;
