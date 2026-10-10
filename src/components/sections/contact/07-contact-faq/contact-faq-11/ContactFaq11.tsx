import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

export const ContactFaq11: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
  {
    "q": "How do I place an international order?",
    "a": "You can select your country at checkout. We support over 120 global currencies and offer international express courier delivery within 3-5 business days."
  },
  {
    "q": "What is your return & refund policy?",
    "a": "We offer a hassle-free 30-day return policy for all unused items in original packaging. Refunds are processed back to your original payment method within 48 hours of inspection."
  },
  {
    "q": "Can I track my shipment in real-time?",
    "a": "Yes! Once your order dispatches, you will receive an SMS and email containing a direct live GPS tracking link to follow your courier step-by-step."
  },
  {
    "q": "How do I contact a live customer representative?",
    "a": "Our live chat support is available 24/7/365. You can click the chat launcher at the bottom right or call our toll-free hotline at +1 (800) 555-0199."
  }
];

  return (
    <section className="py-20 px-4 md:px-8 bg-rose-50/50 text-slate-800 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-rose-100 text-rose-700 border border-rose-200">
            3D CLAYMORPHISM
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            3D Soft Clay FAQ Pods
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Tactile 3D volume elements with soft expanding question containers
          </p>
        </div>

        {/* ACCORDION STACK */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-lg text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
                    <p className="leading-relaxed mb-4">{faq.a}</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
                      <span>Did this solve your issue?</span>
                      <button className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg transition-colors flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3 text-emerald-500" /> Yes
                      </button>
                      <button className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg transition-colors flex items-center gap-1">
                        <ThumbsDown className="w-3 h-3 text-rose-500" /> No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
