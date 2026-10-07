import React, { useState } from 'react';
import { Search, Terminal, ChevronRight } from 'lucide-react';

interface UtilityFaq {
  id: string;
  category: string;
  q: string;
  a: string;
  status: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      faqs?: UtilityFaq[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_FAQS: UtilityFaq[] = [
  { id: '1', category: 'Eligibility', q: 'Is there a minimum cart spend?', a: 'Free shipping unlocks at $49 subtotal; promo vouchers unlock at $30 subtotal.', status: 'VERIFIED RULE' },
  { id: '2', category: 'Discount', q: 'Can I combine multiple promo codes?', a: 'Only one promo code per order is allowed. Bank rebates stack automatically.', status: 'ACTIVE POLICY' },
  { id: '3', category: 'Payment', q: 'How do bank cashbacks calculate?', a: 'Instant 15% cashback auto-applies upon entering participating bank card numbers.', status: 'GATEWAY AUTOMATED' }
];

export function OffersFaq16({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer FAQ Command Center Utility';
  const faqs = settings.faqs || DEFAULT_FAQS;

  const [activeCategory, setActiveCategory] = useState<string>('Eligibility');
  const [query, setQuery] = useState('');

  const filtered = faqs.filter(f =>
    f.category.toLowerCase().includes(query.toLowerCase()) ||
    f.q.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-mono text-cyan-400 border-y border-cyan-900/40">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest inline-block">
            Design: Command-Center Utility • Animation: Search Result Filtering & Panel Status Update (NO GLASS)
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight uppercase font-sans">{heading}</h2>
        </div>

        {/* Command Center Console (NO GLASS) */}
        <div className="bg-slate-900 rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search utility terms (e.g. 'Eligibility', 'Discount')..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-950 border border-cyan-900/60 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Utility Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Category Sidebar */}
            <div className="lg:col-span-4 space-y-2">
              {['Eligibility', 'Discount', 'Payment'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full p-3 rounded-xl border text-xs font-bold uppercase flex items-center justify-between transition-colors ${
                    activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                      : 'bg-slate-950 text-cyan-400 border-cyan-900/40 hover:border-cyan-500/40'
                  }`}
                >
                  <span>{cat}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Answer Display Grid */}
            <div className="lg:col-span-8 space-y-4">
              {filtered.filter(f => f.category === activeCategory).map((item) => (
                <div key={item.id} className="p-6 rounded-2xl bg-slate-950 border border-cyan-900/40 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-cyan-400 font-bold uppercase">STATUS: {item.status}</span>
                    <span className="text-slate-500">ID #{item.id}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-sans">{item.q}</h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFaq16;
