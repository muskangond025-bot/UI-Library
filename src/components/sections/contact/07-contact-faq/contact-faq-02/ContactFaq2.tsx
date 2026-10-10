import React, { useState } from 'react';
import { HelpCircle, ThumbsUp, Sparkles, MessageSquare } from 'lucide-react';

export const ContactFaq2: React.FC = () => {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
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

  const toggleLike = (idx: number) => {
    setLiked(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/50 text-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-blue-100 text-blue-800 border border-blue-200">
            2-COLUMN BENTO FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Instant Resolution Knowledge Grid
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Categorized FAQ tiles with instant search filter & live resolution rating buttons
          </p>
        </div>

        {/* 2-COLUMN BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-slate-200/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Topic 0{idx + 1}
                  </span>
                  <HelpCircle className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{faq.a}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <button
                  onClick={() => toggleLike(idx)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-colors ${
                    liked[idx] ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{liked[idx] ? 'Helpful!' : 'Was this helpful?'}</span>
                </button>
                <span className="text-[11px]">Updated 2 days ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
