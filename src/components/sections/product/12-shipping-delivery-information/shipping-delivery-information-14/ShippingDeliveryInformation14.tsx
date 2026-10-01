import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronRight, MessageSquareCheck } from 'lucide-react';

export default function ShippingDeliveryInformation14({ data }: { data: any }) {
  const settings = data?.section?.settings || {};
  const faqItems = settings.faqItems || [
    { question: "How long does standard delivery take?", answer: "Standard delivery typically takes 3 to 5 business days depending on your pincode." },
    { question: "Is tracking available for all shipments?", answer: "Yes, every order includes a SMS and Email tracking link active from dispatch." },
    { question: "What happens if I am not available during delivery?", answer: "Our courier partner will attempt delivery up to 3 times or contact you via call." }
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'CUSTOMER HELPDESK'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Shipping & Delivery FAQ'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Direct answers regarding customs clearance, address modifications, and lost parcel protection.'}
          </p>
        </div>

        {/* Structured Q&A Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Question List Column */}
          <div className="lg:col-span-5 space-y-3">
            {faqItems.map((item: any, idx: number) => {
              const isSelected = activeFaq === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFaq(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-500/15 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`} />
                    <span className="font-semibold text-sm leading-snug">{item.question}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-indigo-400' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Answer Display Panel with Entrance Reveal */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaq}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <MessageSquareCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{faqItems[activeFaq]?.question}</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {faqItems[activeFaq]?.answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
