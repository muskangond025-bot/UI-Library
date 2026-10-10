"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export function GlobalFaq16() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState('ALL');

  const faqs = [
    { cat: 'SHIPPING', q: 'What are your international shipping delivery windows?', a: 'Standard global express shipping takes 3-5 business days. Real-time satellite tracking links are provided via email upon dispatch.' },
    { cat: 'RETURNS', q: 'How does the 30-day hassle-free return policy work?', a: 'You can initiate returns within 30 days of receipt. We issue prepaid return courier shipping labels with immediate refund initiation upon drop-off.' },
    { cat: 'ACCOUNT', q: 'Can I manage multi-user team subscriptions?', a: 'Yes, workspace enterprise accounts allow adding up to 50 team members with customized permission roles and centralized invoicing.' },
    { cat: 'PAYMENT', q: 'Which global payment methods & currencies are supported?', a: 'We accept Visa, Mastercard, Apple Pay, Google Pay, Crypto (USDC/BTC), and wire transfers across 140+ currencies.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> GLOBAL KNOWLEDGE BASE #16
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mt-3">Find instant answers to billing, shipping, and account management queries.</p>
          
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search questions..." className="w-full bg-slate-900 border border-slate-800 rounded-full pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div key={idx} initial={false} className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full p-6 text-left flex justify-between items-center gap-4 hover:text-cyan-400 transition-colors">
                  <span className="text-lg font-bold text-white">{f.q}</span>
                  <div className={"w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300 " + (isOpen ? 'rotate-180 bg-cyan-500 text-slate-950' : '')}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}