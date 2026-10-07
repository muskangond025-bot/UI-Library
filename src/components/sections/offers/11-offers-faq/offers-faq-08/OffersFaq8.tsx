import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  image: string;
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
  { id: '1', question: 'How do I unlock promotional discount offers at checkout?', answer: 'Select qualifying items meeting campaign subtotal rules. Offer discounts calculate live before payment authorization.', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80' },
  { id: '2', question: 'Can I combine multiple promo codes on one purchase?', answer: 'Orders accept one primary promo coupon code per checkout session. Bank rebates apply automatically on top.', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80' },
  { id: '3', question: 'How long are promotional discounts active for?', answer: 'Campaign timers run continuously. Coupon codes must be authorized prior to timer expiry cutoff.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
  { id: '4', question: 'What happens to offer savings on returned orders?', answer: 'Refunds reflect the exact net amount paid after proportional discount distribution across items.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80' }
];

export function OffersFaq8({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Visual Image-Driven Offer FAQ';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [activeFaq, setActiveFaq] = useState<FaqItem>(faqs[0]);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="space-y-2 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Image-Driven FAQ • Animation: Visual Crossfade & Crop Movement
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Dynamic Image Display */}
          <div className="lg:col-span-6 h-[380px] rounded-3xl overflow-hidden border border-slate-800 relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeFaq.id}
                src={activeFaq.image}
                alt={activeFaq.question}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs space-y-1">
              <span className="font-mono text-amber-400 font-bold block">SELECTED VISUAL PERK</span>
              <span className="font-bold text-white block">{activeFaq.question}</span>
            </div>
          </div>

          {/* Right Question Selector List */}
          <div className="lg:col-span-6 space-y-4">
            {faqs.map((faq) => {
              const isActive = activeFaq.id === faq.id;
              return (
                <div
                  key={faq.id}
                  onClick={() => setActiveFaq(faq)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                    isActive
                      ? 'bg-slate-900 border-amber-400/60 shadow-xl'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <h3 className="text-base font-bold text-white">{faq.question}</h3>
                  {isActive && <p className="text-xs text-slate-300 leading-relaxed font-normal">{faq.answer}</p>}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFaq8;
