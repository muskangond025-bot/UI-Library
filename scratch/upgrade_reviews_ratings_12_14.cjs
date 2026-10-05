const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/sections/account/07-reviews-ratings');

// 12 - Review Status
const code12 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Edit2, Filter } from 'lucide-react';

export function AccountReviewsRatings12() {
  const [activeStatus, setActiveStatus] = useState('Published');

  const reviews = [
    { id: '1', product: 'Nike Air Max Pulse', rating: 5, date: 'Sept 20, 2026', text: 'Exceptionally comfortable for daily runs. The cushioning is top notch.', status: 'Published', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', product: 'Oversized Denim Jacket', rating: 4, date: 'Sept 14, 2026', text: 'Great fit and heavy denim feel. Slightly longer sleeves than expected.', status: 'Published', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', product: 'Studio Noise Pods', rating: 5, date: 'Submitted Today', text: 'Awaiting moderation check for high-res unboxing photos.', status: 'Pending', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' },
    { id: '4', product: 'Minimal Chronograph', rating: 0, date: 'Saved Yesterday', text: 'Draft review in progress...', status: 'Drafts', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  const filtered = activeStatus === 'All'
    ? reviews
    : reviews.filter(r => r.status === activeStatus);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Filter className="w-4 h-4 text-amber-400" /> STATUS CENTER
            </div>
            <h2 className="text-3xl font-extrabold text-white">Review Status Manager</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            {reviews.length} Total Submissions
          </span>
        </div>

        <div className="flex gap-2 border-b border-slate-800 pb-4 overflow-x-auto">
          {['Published', 'Pending', 'Drafts'].map((tab) => {
            const isActive = activeStatus === tab;
            const count = reviews.filter(r => r.status === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveStatus(tab)}
                className={'relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ' + (isActive ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200')}
              >
                {isActive && (
                  <motion.div
                    layoutId="reviewStatusPill"
                    className="absolute inset-0 bg-amber-400 rounded-xl shadow-lg shadow-amber-400/20 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tab} ({count})
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((r) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
              >
                <div className="flex items-start gap-4">
                  <img src={r.image} alt={r.product} className="w-16 h-16 rounded-2xl object-cover bg-slate-800 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      {r.rating > 0 ? (
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={'w-3.5 h-3.5 ' + (i < r.rating ? 'fill-amber-400' : 'text-slate-700')} />
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">Unrated Draft</span>
                      )}
                      <span className={'text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ' + (r.status === 'Published' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : r.status === 'Pending' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-400')}>
                        {r.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-base mt-1">{r.product}</h3>
                    <p className="text-xs text-slate-400 mt-1">{r.text}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 border-slate-800 pt-4 sm:pt-0">
                  <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5">
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings12;
`;

// 14 - Minimal Monochrome
const code14 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountReviewsRatings14() {
  const reviews = [
    { id: '1', product: 'NIKE AIR MAX PULSE', score: '5/5 ★', date: '20 SEPT 2026', text: 'Exceptionally comfortable for daily runs. Premium cushioning.' },
    { id: '2', product: 'OVERSIZED DENIM JACKET', score: '4/5 ★', date: '14 SEPT 2026', text: 'Great fit and heavy denim feel. Classic silhouette.' },
    { id: '3', product: 'LEATHER CHRONOGRAPH', score: '5/5 ★', date: '02 AUG 2026', text: 'Minimalist dial design with high quality leather strap.' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">ARCHIVE RECORD</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">SUBMITTED REVIEWS</h2>
          </div>
          <span className="text-xs font-mono uppercase text-gray-400">{reviews.length} ENTRIES</span>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="py-8 space-y-3 group"
            >
              <div className="flex justify-between items-center font-mono text-xs text-gray-400">
                <span>0{idx + 1} // {r.date}</span>
                <span className="font-bold text-gray-900">{r.score}</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 uppercase tracking-tight group-hover:underline">{r.product}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings14;
`;

const updates = {
  '12': { code: code12, heading: "Review Status — Filterable Publication States", description: "Account review management center organizing submitted reviews by status with animated tab filtering and quick editing controls." },
  '14': { code: code14, heading: "Minimal Monochrome — Precision Typography Review", description: "High-contrast monochrome review history with thin rule separators, numeric index markers, and clean typography." }
};

Object.entries(updates).forEach(([num, data]) => {
  const tsxPath = path.join(dir, `account-reviews-ratings-${num}.tsx`);
  const jsonPath = path.join(dir, `account-reviews-ratings-${num}.json`);

  fs.writeFileSync(tsxPath, data.code);
  fs.writeFileSync(jsonPath, JSON.stringify({
    heading: data.heading,
    description: data.description
  }, null, 2));

  console.log(`Upgraded account-reviews-ratings-${num}`);
});
