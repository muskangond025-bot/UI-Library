import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface JourneyStep {
  step: string;
  stage: string;
  q: string;
  a: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      steps?: JourneyStep[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_STEPS: JourneyStep[] = [
  { step: '01', stage: 'DISCOVER OFFER', q: 'Where do I find active promotional offers?', a: 'Active offers are listed on the main deal banner and category promo tickers.' },
  { step: '02', stage: 'CHECK ELIGIBILITY', q: 'How do I know if my cart subtotal qualifies?', a: 'Live eligibility updates directly inside your shopping cart progress bar.' },
  { step: '03', stage: 'APPLY OFFER', q: 'Where do I enter my promotional voucher code?', a: 'Enter your coupon code in the voucher field during checkout authorization step.' },
  { step: '04', stage: 'COMPLETE ORDER', q: 'Can bank cashbacks stack with sales prices?', a: 'Yes! Instant bank cashbacks apply automatically at final payment step.' },
  { step: '05', stage: 'UNDERSTAND RETURNS', q: 'What happens to offer savings if I return an item?', a: 'Refunds equal the net price paid per item after proportional discount allocation.' }
];

export function OffersFaq19({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Progressive Offer FAQ Journey';
  const steps = settings.steps || DEFAULT_STEPS;

  const [activeStep, setActiveStep] = useState<number>(0);
  const current = steps[activeStep] || steps[0];

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900">
      <div className="max-w-5xl mx-auto space-y-10">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: FAQ Journey • Animation: Progressive Line Growth & Disclosure Step Activation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Step Journey Bar */}
        <div className="flex flex-wrap justify-between items-center gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${
                  isActive ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{s.step} {s.stage}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Q&A Display */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-2xl max-w-2xl mx-auto text-left">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase block">
            STAGE {current.step} — {current.stage}
          </span>
          <h3 className="text-2xl font-bold text-white leading-snug">{current.q}</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-medium pt-2 border-t border-slate-800">{current.a}</p>
        </div>

      </div>
    </section>
  );
}

export default OffersFaq19;
