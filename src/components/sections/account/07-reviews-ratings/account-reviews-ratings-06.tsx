import React from 'react';
import { Star } from 'lucide-react';

export function AccountReviewsRatings6() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Glassmorphic Reviews</h2>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-slate-300 text-sm">"Extremely comfortable for all day wear."</p>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings6;
