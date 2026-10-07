import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface FaqCard {
  id: string;
  frontQuestion: string;
  frontTag: string;
  backAnswer: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      faqs?: FaqCard[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: FaqCard[] = [
  { id: '1', frontTag: 'COMBINATIONS', frontQuestion: 'CAN I COMBINE TWO OFFERS?', backAnswer: 'Multiple promo codes cannot stack. Checkout selects the highest single discount for your cart.' },
  { id: '2', frontTag: 'MINIMUM SPEND', frontQuestion: 'IS THERE A MINIMUM ORDER?', backAnswer: 'Free shipping activates automatically on order subtotals crossing $49.00.' },
  { id: '3', frontTag: 'EXPIRY RULES', frontQuestion: 'HOW LONG IS OFFER VALID?', backAnswer: 'Promo vouchers expire according to campaign timers and must be authorized before cutoff.' },
  { id: '4', frontTag: 'BANK CASHBACK', frontQuestion: 'DO BANK OFFERS STACK?', backAnswer: 'Yes! Instant bank cashbacks apply at payment step and stack with store sales.' }
];

export function OffersFaq14({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || '3D Flip Card Offer FAQ Grid';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: 3D Flip FAQ • Animation: 180° Y-Axis Card Rotation & Perspective Depth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* 3D Flip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqs.map((faq) => {
            const isFlipped = !!flipped[faq.id];
            return (
              <div
                key={faq.id}
                onClick={() => toggleFlip(faq.id)}
                className="h-64 cursor-pointer perspective-1000"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full h-full relative"
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between backface-hidden">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold uppercase border border-indigo-500/30 self-start">
                      {faq.frontTag}
                    </span>
                    <h3 className="text-base font-bold font-serif text-white">{faq.frontQuestion}</h3>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                      <RefreshCw className="w-3 h-3" />
                      <span>TAP TO FLIP ANSWER</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 shadow-2xl flex flex-col justify-between backface-hidden [transform:rotateY(180deg)]">
                    <span className="text-xs font-mono text-amber-300 font-bold uppercase">ANSWER DETAILS</span>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{faq.backAnswer}</p>
                    <span className="text-[10px] font-mono text-slate-400">TAP TO FLIP BACK</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFaq14;
