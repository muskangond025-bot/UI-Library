import React from 'react';
import { Star } from 'lucide-react';

export function AccountReviewsRatings13() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white">Review with Customer Media</h2>
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-slate-300 text-sm">"Attached live photos showing fit and color rendering."</p>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings13;
