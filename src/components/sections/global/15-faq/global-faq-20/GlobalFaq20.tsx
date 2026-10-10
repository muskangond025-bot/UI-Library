"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function GlobalFaq20() {
  const [activeTab, setActiveTab] = useState('GENERAL');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const data: Record<string, Array<{ q: string; a: string }>> = {
    GENERAL: [
      { q: 'How quickly can I onboard my team?', a: 'Setup takes under 2 minutes with automated SSO integration for Google Workspace & Okta.' },
      { q: 'Is there a free trial option available?', a: 'Yes, test all Pro features for 14 days with zero credit card commitment required.' },
    ],
    BILLING: [
      { q: 'Can I pay via purchase order or wire transfer?', a: 'Enterprise plans support annual invoicing via PO and international wire transfer.' },
      { q: 'What happens when I exceed API limits?', a: 'Usage auto-scales without service interruption with clear overage pricing alerts.' },
    ]
  };

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">TABBED FAQ SYSTEM #20</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Categorized Knowledge Base</h2>
          
          <div className="flex justify-center gap-2 mt-8">
            {['GENERAL', 'BILLING'].map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab); setOpenIdx(0); }} className={"px-5 py-2 rounded-full text-xs font-mono font-bold transition-all " + (activeTab === tab ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100')}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {(data[activeTab] || data.GENERAL).map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center text-left font-bold text-lg text-slate-950">
                  <span>{f.q}</span>
                  <ChevronDown className={"w-5 h-5 text-indigo-600 transition-transform " + (isOpen ? 'rotate-180' : '')} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-slate-600 text-sm leading-relaxed pt-4 mt-4 border-t border-slate-100">
                        {f.a}
                      </p>
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