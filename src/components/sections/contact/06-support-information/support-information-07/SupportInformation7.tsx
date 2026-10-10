import React, { useState } from 'react';
import { Search, ChevronRight, FileText, HelpCircle, ShieldCheck, Zap } from 'lucide-react';

export const SupportInformation7: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('orders');

  const topics = [
    { cat: 'orders', title: 'How do I track my shipment?', time: '2 min read' },
    { cat: 'orders', title: 'Can I modify or cancel my order after placement?', time: '3 min read' },
    { cat: 'billing', title: 'What payment methods do you accept?', time: '1 min read' },
    { cat: 'billing', title: 'How do I request an official tax invoice?', time: '2 min read' },
    { cat: 'returns', title: 'What is your 30-day return policy?', time: '4 min read' },
    { cat: 'returns', title: 'How long does a refund processing take?', time: '2 min read' }
  ];

  const filtered = topics.filter(t => t.cat === activeCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-white text-slate-900 border-t border-b border-slate-200 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-slate-100 text-slate-700 border border-slate-300">
            TABBED KNOWLEDGEBASE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Tabbed Knowledgebase & Support Directory
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Categorized self-help guides with instant live chat overlay modal
          </p>
        </div>

        {/* CATEGORY TAB SELECTOR */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('orders')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'orders'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Orders & Shipping
          </button>
          <button
            onClick={() => setActiveCategory('billing')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'billing'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Billing & Invoices
          </button>
          <button
            onClick={() => setActiveCategory('returns')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'returns'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Returns & Refunds
          </button>
        </div>

        {/* KNOWLEDGEBASE ARTICLE LIST */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
          {filtered.map((item, idx) => (
            <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
