import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function AccountReviewsRatings1() {
  const stats = [
    { label: 'Reviews Given', value: '14' },
    { label: 'Average Rating', value: '4.8' },
    { label: 'Published', value: '12' },
    { label: 'Pending', value: '2' }
  ];

  const reviews = [
    { id: '1', product: 'Nike Air Max Pulse', rating: 5, date: 'Sept 20, 2026', text: 'Exceptionally comfortable for daily runs. The cushioning is top notch.', status: 'Published', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', product: 'Oversized Denim Jacket', rating: 4, date: 'Sept 14, 2026', text: 'Great fit and heavy denim feel. Slightly longer sleeves than expected.', status: 'Published', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Submitted Reviews</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Review & Rating Dashboard</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 font-medium block">{s.label}</span>
              <span className="text-3xl font-extrabold text-white mt-2 block">{s.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Your Submitted Reviews</h3>
          {reviews.map((r) => (
            <div key={r.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex items-start gap-4">
                <img src={r.image} alt={r.product} className="w-16 h-16 rounded-2xl object-cover bg-slate-800 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={'w-4 h-4 ' + (i < r.rating ? 'fill-amber-400' : 'text-slate-700')} />
                      ))}
                    </div>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">{r.status}</span>
                  </div>
                  <h4 className="font-bold text-white text-base mt-1">{r.product}</h4>
                  <p className="text-sm text-slate-300 mt-2">{r.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings1;
