import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Truck, PackageCheck, RotateCcw } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping15({ section }: SectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I qualify for 100% Free Shipping?',
      a: 'Free ground delivery is automatically unlocked at cart checkout whenever your subtotal reaches $49.00 or more (after discounts, before taxes).'
    },
    {
      q: 'What shipping carriers are used for free delivery orders?',
      a: 'Depending on your delivery address, free shipments are dispatched via FedEx Express, UPS Ground, or DHL SmartMail with full live GPS tracking.'
    },
    {
      q: 'Are returns also zero-cost if I used free shipping?',
      a: 'Yes! Every parcel includes a pre-printed prepaid return shipping label. Simply drop off the package at any participating parcel spot within 30 days.'
    },
    {
      q: 'Does free shipping apply to international locations?',
      a: 'We offer free international express shipping on all overseas orders crossing the $99.00 threshold with all duty and import taxes pre-calculated.'
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-slate-50 font-sans text-slate-900 border-y border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            SHIPPING POLICY ACCORDION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Free Shipping Terms & Policy FAQ
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about threshold rules, carrier delivery speeds, and hassle-free returns.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-900' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping15;
