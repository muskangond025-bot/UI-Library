import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

export const ContactFaq3: React.FC = () => {
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
    <section className="py-20 px-4 md:px-8 bg-yellow-50 text-slate-900 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-black text-yellow-300 font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            NEO-BRUTALIST FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            NO-BS CONTACT FAQ
          </h2>
          <p className="text-lg font-bold max-w-xl mx-auto">
            Direct answers to urgent queries with bold black outlines and hard offset shadows
          </p>
        </div>

        {/* BRUTALIST ACCORDION CONTAINER */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-black text-xl flex items-center justify-between gap-4 hover:bg-yellow-100 transition-colors"
                >
                  <span className="uppercase">{faq.q}</span>
                  <div className="w-8 h-8 bg-black text-yellow-300 border-2 border-black flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t-4 border-black text-sm font-bold text-slate-800 animate-fadeIn">
                    <p className="mb-4 leading-relaxed">{faq.a}</p>
                    <div className="flex items-center gap-3 pt-3 border-t-2 border-black/20 text-xs font-black">
                      <span>WAS THIS HELPFUL?</span>
                      <button className="px-3 py-1 bg-yellow-300 border border-black flex items-center gap-1 hover:bg-yellow-400">
                        <ThumbsUp className="w-3.5 h-3.5" /> YES
                      </button>
                      <button className="px-3 py-1 bg-slate-200 border border-black flex items-center gap-1 hover:bg-slate-300">
                        <ThumbsDown className="w-3.5 h-3.5" /> NO
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
