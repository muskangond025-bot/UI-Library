import React, { useState } from 'react';
import { Star } from 'lucide-react';

export function AccountReviewsRatings10() {
  const [rating, setRating] = useState(5);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <form className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h2 className="text-2xl font-bold text-white">Write a Review</h2>
          <div className="flex gap-2 text-amber-400 cursor-pointer">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} onClick={() => setRating(s)} className={'w-8 h-8 ' + (s <= rating ? 'fill-amber-400' : 'text-slate-700')} />
            ))}
          </div>
          <textarea placeholder="Share your experience with this product..." className="w-full h-32 p-4 rounded-2xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none" />
          <button type="button" className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase">
            Submit Product Review
          </button>
        </form>
      </div>
    </section>
  );
}

export default AccountReviewsRatings10;
