import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function AccountReviewsRatings2() {
  const reviews = [
    { id: '1', product: 'Nike Air Max Pulse', rating: 5, date: 'Sept 20, 2026', text: 'Comfortable cushioning and sleek silhouette.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', product: 'Oversized Denim Jacket', rating: 4, date: 'Sept 14, 2026', text: 'Premium denim weight and classic fit.', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Review Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <motion.div key={r.id} whileHover={{ y: -4 }} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <img src={r.image} alt={r.product} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h3 className="font-bold text-white text-base">{r.product}</h3>
                  <div className="flex text-amber-400 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={'w-3.5 h-3.5 ' + (i < r.rating ? 'fill-amber-400' : 'text-slate-700')} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings2;
