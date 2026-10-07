import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BentoFaq {
  id: string;
  title: string;
  badge: string;
  q: string;
  a: string;
  size: 'large' | 'medium' | 'small';
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      faqs?: BentoFaq[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: BentoFaq[] = [
  { id: 'b1', title: 'Most Asked Question', badge: 'POPULAR FAQ', q: 'Can I combine multiple offer codes on one order?', a: 'Checkout automatically selects the single best discount calculation for your cart items. Multiple codes cannot be stacked unless specified.', size: 'large' },
  { id: 'b2', title: 'Offer Eligibility', badge: 'ELIGIBILITY', q: 'Is there a minimum order spend?', a: 'Free express delivery activates at $49 subtotal; percentage promo codes unlock at $30.', size: 'medium' },
  { id: 'b3', title: 'Bank Rebates', badge: 'CASHBACK', q: 'How do bank cashbacks work?', a: 'Partner card discounts apply automatically during credit card payment authorization.', size: 'small' }
];

export function OffersFaq10({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Asymmetric Bento Offer FAQ Grid';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [expandedId, setExpandedId] = useState<string>(faqs[0].id);

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="space-y-2 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Asymmetric Bento FAQ • Animation: Module Layout Expansion & Content Entrance
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Module */}
          {faqs[0] && (
            <div
              onClick={() => setExpandedId(faqs[0].id)}
              className="md:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl space-y-4 cursor-pointer hover:border-indigo-500/50 transition-colors"
            >
              <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono text-[10px] font-bold uppercase">
                {faqs[0].badge}
              </span>
              <h3 className="text-2xl font-bold text-white">{faqs[0].q}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{faqs[0].a}</p>
            </div>
          )}

          {/* Medium Module */}
          {faqs[1] && (
            <div
              onClick={() => setExpandedId(faqs[1].id)}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-7 shadow-2xl space-y-4 cursor-pointer hover:border-purple-500/50 transition-colors"
            >
              <span className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/40 font-mono text-[10px] font-bold uppercase">
                {faqs[1].badge}
              </span>
              <h3 className="text-xl font-bold text-white">{faqs[1].q}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{faqs[1].a}</p>
            </div>
          )}

          {/* Small Utility Modules */}
          {faqs.slice(2).map((faq) => (
            <div
              key={faq.id}
              onClick={() => setExpandedId(faq.id)}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl space-y-3 cursor-pointer hover:border-slate-700 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase block">{faq.badge}</span>
              <h4 className="text-base font-bold text-white">{faq.q}</h4>
              <p className="text-xs text-slate-400">{faq.a}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OffersFaq10;
