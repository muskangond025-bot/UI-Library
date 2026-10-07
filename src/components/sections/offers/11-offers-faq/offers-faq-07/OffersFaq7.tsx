import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';

interface FaqNode {
  id: string;
  step: string;
  title: string;
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
      nodes?: FaqNode[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_NODES: FaqNode[] = [
  { id: '1', step: '01', title: 'Offer Eligibility', question: 'How do I know if my cart qualifies for offer discounts?', answer: 'Offer eligibility is automatically evaluated against minimum order subtotal and product category tags.' },
  { id: '2', step: '02', title: 'Minimum Order', question: 'What is the required subtotal threshold for free shipping?', answer: 'Free express shipping activates automatically once cart subtotal reaches $49.00.' },
  { id: '3', step: '03', title: 'Offer Usage', question: 'Can I apply a coupon code alongside promotional deals?', answer: 'One coupon code per order is allowed. Bank cashbacks stack automatically at checkout step.' },
  { id: '4', step: '04', title: 'Expiry Rules', question: 'What happens if a timer expires while I am checking out?', answer: 'Promotional discounts must be authorized before timer expiration to guarantee price adjustments.' },
  { id: '5', step: '05', title: 'Returns & Refunds', question: 'How are refunds calculated for items purchased with offer discounts?', answer: 'Refund amounts equal the exact net price paid per item after promotional discount allocation.' }
];

export function OffersFaq7({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer FAQ Timeline Process';
  const nodes = settings.nodes || DEFAULT_NODES;

  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Timeline FAQ • Animation: SVG Path Drawing & Node Activation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Vertical Timeline Process (NO CARD LIST) */}
        <div className="relative pl-8 sm:pl-12 space-y-8 border-l-2 border-slate-800">
          {nodes.map((node, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={node.id}
                onClick={() => setActiveIdx(idx)}
                className="relative cursor-pointer group space-y-3"
              >
                {/* Node Milestone Circle */}
                <div className={`absolute -left-[41px] sm:-left-[57px] top-0.5 w-9 h-9 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-all ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/20 scale-110'
                    : 'bg-slate-900 text-slate-400 border-slate-700 group-hover:border-slate-500'
                }`}>
                  {node.step}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                    STAGE {node.step} — {node.title}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {node.question}
                  </h3>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal"
                    >
                      {node.answer}
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

export default OffersFaq7;
