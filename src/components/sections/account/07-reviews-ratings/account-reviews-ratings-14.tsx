import React from 'react';
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
